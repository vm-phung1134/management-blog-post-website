import { IUser } from "./auth";

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
  comments: number;
}

export interface IBlogContent {
  id: string;
  topic: string;
  plot: string;
  srcImg: string;
}
