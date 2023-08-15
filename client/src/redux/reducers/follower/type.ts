import Cookies from "js-cookie";
import { IFollower } from "../../../interface/follower";
import { IUser } from "../../../interface/auth";

export interface FollowerState {
  followers: IFollower[];
  follower: IFollower;
  isLoading: boolean;
  error: string | null;
}

const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
