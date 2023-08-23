import { Server, Socket } from "socket.io";
import http from "http";
import { ISendNotificationProps, IUser } from "../interface";
import axios from "axios";

export function configureSocket(server: http.Server): Server {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  // EVENT SOCKET.IO

  let onlineUsers: IUser[] = [];

  const addNewUser = (user: IUser) => {
    const foundIndex = onlineUsers.findIndex(
      (prevUser: IUser) => prevUser.uid === user.uid
    );

    if (foundIndex !== -1) {
      onlineUsers.splice(foundIndex, 1);
    }

    if (
      !onlineUsers.some(
        (prevUser: IUser) => prevUser.socketId === user.socketId
      )
    ) {
      onlineUsers.push(user);
    }
  };
  const removeUser = (socketId: string) => {
    return onlineUsers.filter((nextUser) => nextUser.socketId !== socketId);
  };

  const getUser = (uid: string) => {
    return onlineUsers.find((foundUser) => foundUser.uid === uid);
  };
  io.on("connect", (socket: Socket) => {
    socket.on("newUser", (user: IUser) => {
      addNewUser(user);
      if (onlineUsers.some((prevUser: IUser) => prevUser.uid === user.uid)) {
        axios
          .get(`http://localhost:5000/notifications/${user.uid}`)
          .then((response) => {
            io.to(user.socketId || "").emit(
              "getAllNotifications",
              response.data
            );
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }
    });

    socket.on(
      "sendNotification",
      ({ senderUser, receiverAuthor, type }: ISendNotificationProps) => {
        const receiver = getUser(receiverAuthor.uid || "");
        if (receiver && receiver?.socketId) {
          io.to(receiver?.socketId).emit("updateNotifications", {
            senderUser,
            receiverAuthor,
            type,
          });
          axios
            .post(
              "http://localhost:5000/notifications",
              {
                senderUser,
                receiverAuthor,
                type,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${senderUser.token}`,
                },
              }
            )
            .then((response) => {
              io.to(receiver.socketId || "").emit(
                "updateNotification",
                response.data.notifications
              );
            })
            .catch((error) => {
              console.error("Error", error);
            });
        }
      }
    );

    socket.on("disconnect", () => {
      removeUser(socket.id);
    });
  });

  return io;
}
