import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IUser } from "../Interface/auth";

export const useUserFromCookies = (): [IUser, (user: IUser) => void] => {
  const [user, setUser] = useState<IUser>({
    uid: "",
    email: "",
    name: "",
    token: "",
    avt: "",
  });

  useEffect(() => {
    const cookiesUserData = Cookies.get("user");

    if (cookiesUserData) {
      setUser(JSON.parse(cookiesUserData));
    }
  }, []);

  const updateUser = (newUser: IUser) => {
    setUser(newUser);
    Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
  };

  return [user, updateUser];
};
