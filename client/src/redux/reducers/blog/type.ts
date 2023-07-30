import Cookies from "js-cookie";
import { IBlog } from "../../../interface/blog";
import { IUser } from "../../../interface/auth";

export interface BlogState {
  blogs: IBlog[];
  blogAuthors: IBlog[];
  blog: IBlog;
  isLoading: boolean;
  error: string | null;
}
const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
