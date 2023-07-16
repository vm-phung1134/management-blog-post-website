import { IUser } from "./auth";

export interface IBlog {
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
  topic: string;
  plot: string;
  srcImg: string;
}