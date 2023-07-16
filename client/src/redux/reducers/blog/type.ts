import Cookies from "js-cookie";
import { IUser } from "../../../Interface/auth";
import { IBlog } from "../../../Interface/blog";

export interface BlogState {
  blogs: IBlog[];
  blog: IBlog;
  isLoading: boolean;
  error: string | null;
}
export const user: IUser = {
  email: Cookies.get("email"),
  name: Cookies.get("userName"),
  token: Cookies.get("token"),
  avt: Cookies.get("profilePic"),
};
