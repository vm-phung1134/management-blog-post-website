import { IUser } from "./auth";
import { ICommentItem } from "./comment";

export interface IBlog {
  id?: string;
  title: string;
  img: string;
  releaseDate: string;
  author: IUser;
  description: string;
  contents: IBlogContent[];
  tags: string[];
  likes: number;
  views: number;
  comments?: ICommentItem[];
}

export interface IBlogContent {
  id?: string;
  topic: string;
  plot: string;
  srcImg: string;
}
