import * as admin from "firebase-admin";
import { ISendNotificationProps} from "../interface";

export class NotificationModel {
  private static db = admin.firestore();
  private static notificationDoc = this.db.collection("notifications");
  // CREATE MESSAGE
  static async createNotification(
    notification: Omit<ISendNotificationProps, "id">
  ): Promise<string> {
    const docRef = await this.notificationDoc.add({
      ...notification,
      createdAt: admin.firestore.Timestamp.now(),
    });
    return docRef.id;
  }

  // GET ALL NOTIFICATION OF ONE USER
  static async getAllNotifications(
    uid: string
  ): Promise<ISendNotificationProps[]> {
    const docRef = await this.notificationDoc
      .where("receiverAuthor.uid", "==", uid)
      .get();
    return docRef.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as ISendNotificationProps)
    );
  }
}
