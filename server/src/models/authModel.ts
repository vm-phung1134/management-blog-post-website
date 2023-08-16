import * as admin from "firebase-admin";
import { IUser } from "../interface";

export class AuthModel {
  // GET ALL AUTH
  static async getAllAuth(): Promise<IUser[]> {
    try {
      const userRecords = await admin.auth().listUsers();
      const users = userRecords.users.map((user) => ({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.customClaims?.token || "",
        avt: user.photoURL || "",
      })) as IUser[];
      return users;
    } catch (error) {
      console.log("Error fetching users:", error);
      throw new Error("Error fetching users");
    }
  }
}
