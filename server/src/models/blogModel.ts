import * as admin from "firebase-admin";
import { IBlog } from "../interface";

export class BlogModel {
  private static db = admin.firestore();
  private static blogDoc = this.db.collection("blogs");
  // CREATE BLOG
  static async createBlog(blog: Omit<IBlog, "id">): Promise<string> {
    const docRef = await this.blogDoc.add({
      ...blog,
      createdAt: admin.firestore.Timestamp.now(),
    });
    return docRef.id;
  }
  // GET ONE BLOG
  static async getBlog(id: string): Promise<IBlog | null> {
    const docRef = await this.blogDoc.doc(id).get();
    if (!docRef.exists) {
      return null;
    }
    const data = docRef.data() as IBlog;
    return { ...data };
  }
  // GET ALL BLOGS
  static async getAllBlog(): Promise<IBlog[]> {
    const docRef = await this.blogDoc.orderBy("createdAt", "desc").get();
    return docRef.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IBlog));
  }

  // GET ALL BLOGS AUTHOR WITH LIMIT BLOGS
  static async getAllBlogsByAuthor(
    id: string,
    limit: number,
    page: number
  ): Promise<IBlog[]> {
    let query = this.blogDoc
      .where("author.uid", "==", id)
      .limit(limit);

    if (page > 1) {
      const skip = (page - 1) * limit;
      query = query.offset(skip);
    }
    const docRef = await query.get();
    const blogs: IBlog[] = [];

    docRef.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() } as IBlog);
    });

    return blogs;
  }

  // UPDATE BLOG
  static async updateBlog(blog: IBlog): Promise<void> {
    const { id, ...docRef } = blog;
    await this.blogDoc.doc(id).update(docRef);
  }
  // DELETE BLOG
  static async deleteBlog(id: string): Promise<IBlog[]> {
    await this.blogDoc.doc(id).delete();
    const snapshot = await this.blogDoc.where("id", "==", id).get();
    const blogs: IBlog[] = [];
    snapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() } as IBlog);
    });
    return blogs;
  }
}
