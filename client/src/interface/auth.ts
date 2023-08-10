export interface IUser {
  uid: string | undefined;
  email: string | undefined;
  name: string | undefined;
  token: string | undefined;
  avt: string | undefined;
}

export interface IAuth {
  email: string;
  password: string;
}
