export interface IUser {
  uid: string;
  email: string;
  name: string;
  token: string;
  avt: string;
  socketId?: string;
}

export interface ICategoriesItem {
  id?: string;
  img?: string;
  label: string;
  value: string;
  blogQuantity?: number;
}

export interface IBlog {
  id: string;
  title: string;
  img: string;
  releaseDate: string;
  author: IUser;
  description: string;
  contents: IBlogContent[];
  tags: ICategoriesItem[];
  likes: number;
  views: number;
  comments: number;
}

export interface IBlogContent {
  topic: string;
  plot: string;
  srcImg: string;
}

export interface ICommentItem {
  id: string;
  author: IUser;
  content: string;
  postID: string;
}

export interface IFollower {
  id: string;
  uid: string;
  email: string;
  name: string;
  token: string;
  avt: string;
  authorID: string;
}

export interface IFollowing {
  id: string;
  uid: string;
  email: string;
  name: string;
  token: string;
  avt: string;
  authorID: string;
}
