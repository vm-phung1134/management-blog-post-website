import { IUser } from "./auth";

export interface INotification {
  id?: string;
  senderUser: IUser;
  receiverAuthor: IUser;
  type: string;
}
