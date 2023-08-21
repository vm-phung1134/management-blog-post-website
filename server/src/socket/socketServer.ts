import { Server, Socket } from "socket.io";
import http from "http";

export function configureSocket(server: http.Server): Server {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  // EVENT SOCKET.IO

  io.on("connection", (socket: Socket) => {
    console.log("New client connected");
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
}
