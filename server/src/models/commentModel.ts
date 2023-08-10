import * as admin from "firebase-admin";
import { ICommentItem } from "../interface";

export class CommentModel {
  private static db = admin.firestore();
  private static commentDoc = this.db.collection("comments");
  // CREATE BLOG
  static async createComment(
    comment: Omit<ICommentItem, "id">
  ): Promise<string> {
    const docRef = await this.commentDoc.add({
      ...comment,
      createdAt: admin.firestore.Timestamp.now(),
    });
    return docRef.id;
  }

  static async getAllComments(id: string): Promise<ICommentItem[]> {
    const docRef = await this.commentDoc
      // .orderBy("createdAt", "desc")
      .where("postID", "==", id)
      .get();
    return docRef.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as ICommentItem)
    );
  }
}
