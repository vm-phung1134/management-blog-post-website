export interface IUser {
    id: string,
    email: string,
    name: string,
    profilePic: string
}

export interface IBlog {
    id: string,
    title: string,
    plot: string,
    srcImg: string,
    release: Date,
    author: IUser,
    typeBlog: string[],
    isFavorite?: boolean,
    like: number,
    comments?: object[]
}

export interface IComment{
    author: IUser,
    date: Date,
    content: string,
    like?: number,
    dislike?: number,
}
