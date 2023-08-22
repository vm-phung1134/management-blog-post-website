export interface IUser {
  uid: string;
  email: string;
  name: string;
  token: string;
  avt: string;
  socketId?: string;
}

export interface IAuth {
  email: string;
  password: string;
}
