export interface IUser {
    id: string,
    email: string,
    name: string,
    position?: string,
    profilePic: string
}

export interface IBlog {
    id: string,
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