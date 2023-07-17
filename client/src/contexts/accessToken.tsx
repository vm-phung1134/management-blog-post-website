import React, { useContext, createContext, FC, useState } from "react";

type AccessTokenContext = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

const AccessToken = createContext<AccessTokenContext>(["", () => {}]);

interface AccessTokenProviderProps {
  children: React.ReactNode;
}

const AccessTokenProvider: FC<AccessTokenProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>("");
  return (
    <AccessToken.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AccessToken.Provider>
  );
};

const useAccessToken = (): AccessTokenContext =>
  useContext<AccessTokenContext>(AccessToken);

export { AccessTokenProvider, useAccessToken };