import Cookies from "js-cookie";
import { IUser } from "../../../interface/auth";

export interface AuthState {
  auths: IUser[];
  isLoading: boolean;
  error: string | null;
}

const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
