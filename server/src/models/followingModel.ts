import * as admin from "firebase-admin";
import { IFollowing } from "../interface";

export class FollowingModel {
  private static db = admin.firestore();
  private static followingDoc = this.db.collection("followings");
  // CREATE BLOG
  static async addFollowing(
    following: Omit<IFollowing, "id">
  ): Promise<IFollowing | {}> {
    const querySnapshot = await this.followingDoc
      .where("uid", "==", following.uid)
      .get();
    if (querySnapshot.empty) {
      const docRef = await this.followingDoc.add({
        ...following,
        createdAt: admin.firestore.Timestamp.now(),
      });
      return docRef;
    } else {
      return {};
    }
  }

  static async getAllFollowings(id: string): Promise<IFollowing[]> {
    const docRef = await this.followingDoc.where("authorID", "==", id).get();
    return docRef.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as IFollowing)
    );
  }

  static async checkFollowingExists(uid: string): Promise<boolean> {
    const querySnapshot = await this.followingDoc.where("uid", "==", uid).get();
    return !querySnapshot.empty;
  }

  static async unFollowing(id: string): Promise<IFollowing[]> {
    const querySnapshot = await this.followingDoc.where("uid", "==", id).get();

    const deletePromises: Promise<FirebaseFirestore.WriteResult>[] = [];
    querySnapshot.forEach((doc) => {
      deletePromises.push(doc.ref.delete());
    });

    await Promise.all(deletePromises);

    const snapshot = await this.followingDoc.get();
    const followings: IFollowing[] = [];
    snapshot.forEach((doc) => {
      followings.push({ id: doc.id, ...doc.data() } as IFollowing);
    });
    return followings;
  }
}
