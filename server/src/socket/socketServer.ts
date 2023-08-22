import { Server, Socket } from "socket.io";
import http from "http";
import { IUser } from "../interface";

export function configureSocket(server: http.Server): Server {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  // EVENT SOCKET.IO
  interface ISendNotificationProps {
    senderUser: IUser;
    receiverAuthor: IUser;
    type: number;
  }
  let onlineUsers: IUser[] = [];

  const addNewUser = (user: IUser) => {
    if (onlineUsers.length > 0) {
      !onlineUsers.some((prevUser: IUser) => prevUser.uid === user.uid) &&
        onlineUsers.push(user);
    }
    onlineUsers.push(user);
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
    });

    socket.on(
      "sendNotification",
      ({ senderUser, receiverAuthor, type }: ISendNotificationProps) => {
        const receiver = getUser(receiverAuthor.uid);
        if (receiver && receiver.socketId) {
          io.to(receiver.socketId).emit("getNotification", {
            senderUser,
            receiverAuthor,
            type,
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
