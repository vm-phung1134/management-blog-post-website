export interface IUser {
  email: string | undefined;
  name: string | undefined;
  token: string | undefined;
  avt: string | undefined;
}

export interface IAuth {
  email: string,
  password: string
}
