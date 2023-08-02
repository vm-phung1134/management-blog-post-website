import { useState, useMemo } from "react";
import Cookies from "js-cookie";
import { IUser } from "../interface/auth";

export const useUserFromCookies = (): [IUser, (user: IUser) => void] => {
  const [user, setUser] = useState<IUser>({
    uid: "",
    email: "",
    name: "",
    token: "",
    avt: "",
  });

  useMemo(() => {
    const cookiesUserData = Cookies.get("user");

    if (cookiesUserData) {
      setUser(JSON.parse(cookiesUserData));
    }
  }, []);

  const updateUser = (newUser: IUser) => {
    Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
    setUser(newUser);
  };

  return [user, updateUser];
};
