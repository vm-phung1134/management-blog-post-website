import { IUser } from "./auth";

export interface ICommentItem {
  id?: string;
  author: IUser;
  content: string;
  postID: string;
}

