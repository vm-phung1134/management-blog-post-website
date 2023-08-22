import { createContext, useContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useUserFromCookies } from "../hooks/useUserFromCookies";

interface ISocketProviderProps {
  children: React.ReactNode;
}

// Create the SocketContext
const SocketContext = createContext<Socket | null>(null);

// Create the SocketProvider
export function SocketProvider({ children }: ISocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [user] = useUserFromCookies();
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        setIsSocketConnected(true);
        socket.emit("newUser", { ...user, socketId: socket.id });
      });
      socket.on("disconnect", () => {
        setIsSocketConnected(false);
      });
    }
  }, [socket, user]);

  return (
    <SocketContext.Provider value={socket}>
      {isSocketConnected ? children : null}
    </SocketContext.Provider>
  );
}

// Create the useContext hook for accessing the socket
export function useSocket() {
  return useContext(SocketContext);
}
