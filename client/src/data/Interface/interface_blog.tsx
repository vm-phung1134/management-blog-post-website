import { IUser } from "./interface_user";

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

interface IBlogContent {
  topic: string;
  plot: string;
  srcImg: string;
}