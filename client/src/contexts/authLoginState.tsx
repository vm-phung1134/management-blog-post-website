import React, { createContext, useContext, useMemo, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../config/firebase-config";
import { IUser } from "../interface/auth";
import { useUserFromCookies } from "../hooks/useUserFromCookies";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useCheckUserCookies } from "../hooks/useCheckUserCookies";

interface AuthContextType {
  isAuthenticated: boolean;
  signInWithGoogle: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigator = useNavigate();
  const [userCookies, setUserCookies] = useUserFromCookies();
  const isEmptyUserCookies = useCheckUserCookies(userCookies);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated, isEmptyUserCookies);
  useMemo(() => {
    setIsAuthenticated(isEmptyUserCookies ? false : true);
  }, [isEmptyUserCookies]);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();
        const userInfo: IUser = {
          uid: result.user.uid ?? "",
          email: result.user.email ?? "",
          name: result.user.displayName ?? "",
          token: token,
          avt: result.user.photoURL ?? "",
        };
        setUserCookies(userInfo);
        setIsAuthenticated(true);
      })
      .then(() => navigator("/"))
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove("user");
        navigator("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsAuthenticated(false);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    signInWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
