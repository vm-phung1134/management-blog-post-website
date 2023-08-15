import * as admin from "firebase-admin";
import { IFollower } from "../interface";

export class FollowerModel {
  private static db = admin.firestore();
  private static followerDoc = this.db.collection("followers");
  // CREATE BLOG
  static async addFollower(
    follower: Omit<IFollower, "id">
  ): Promise<IFollower | {}> {
    const querySnapshot = await this.followerDoc
      .where("uid", "==", follower.uid)
      .get();
    if (querySnapshot.empty) {
      const docRef = await this.followerDoc.add({
        ...follower,
        createdAt: admin.firestore.Timestamp.now(),
      });
      return docRef;
    } else {
      return {};
    }
  }

  static async getAllFollowers(id: string): Promise<IFollower[]> {
    const docRef = await this.followerDoc.where("authorID", "==", id).get();
    return docRef.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as IFollower)
    );
  }
}
