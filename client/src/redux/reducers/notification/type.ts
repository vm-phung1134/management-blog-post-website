import Cookies from "js-cookie";
import { IUser } from "../../../interface/auth";
import { INotification } from "../../../interface/notification";

export interface NotificationState {
  notifications: INotification[];
  isLoading: boolean;
  error: string | null;
}

const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
