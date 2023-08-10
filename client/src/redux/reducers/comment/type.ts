import Cookies from "js-cookie";
import { ICommentItem } from "../../../interface/comment";
import { IUser } from "../../../interface/auth";

export interface CommentState {
  comments: ICommentItem[];
  comment: ICommentItem;
  isLoading: boolean;
  error: string | null;
}

const userJson = Cookies.get("user");
export const user: IUser = userJson ? JSON.parse(userJson) : null;
