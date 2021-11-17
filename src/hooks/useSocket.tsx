import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const context = createContext<Socket | undefined>(undefined);
const HOST = 'http://localhost:8080';

export const SocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState<Socket | undefined>();

  useEffect(() => {
    setSocket(io(HOST));
  }, []);

  return <context.Provider value={socket}>{children}</context.Provider>;
};

export const useSocket = () => useContext(context);
