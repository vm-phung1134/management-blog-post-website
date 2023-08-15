import Cookies from "js-cookie";
import { IUser } from "../../../interface/auth";
import { IFollowing } from "../../../interface/following";

export interface FollowingState {
  followings: IFollowing[];
  following: IFollowing;
  isLoading: boolean;
  checkFollowing: boolean;
  error: string | null;
}

const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
