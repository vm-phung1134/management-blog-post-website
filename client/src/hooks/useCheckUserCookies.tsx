import { useMemo, useState } from "react";
import { IUser } from "../interface/auth";

export const useCheckUserCookies = (userCookies: IUser) => {
  const [isEmpty, setIsEmpty] = useState<boolean>();

  useMemo(() => {
    let hasEmptyFields = false;
    if (
      userCookies.avt === "" &&
      userCookies.email === "" &&
      userCookies.name === "" &&
      userCookies.token === "" &&
      userCookies.uid === ""
    ) {
      hasEmptyFields = true;
    }

    setIsEmpty(hasEmptyFields);
  }, [userCookies]);

  return isEmpty;
};
