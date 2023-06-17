import * as admin from 'firebase-admin'
interface IBlog {
    id: string,
    title: string,
    //description: string,
    //image: string,
    //release: Date,
    //author: User,
    //tags: string[],
    //isFavorite: boolean,
}

export class BlogModel{
    private static db = admin.firestore();
    private static blogDoc = this.db.collection('blogs')
    // CREATE BLOG
    static async createBlog(blog: Omit<IBlog, 'id'>) : Promise<string>{
        const docRef = await this.blogDoc.add({
            ...blog,
            createdAt: admin.firestore.Timestamp.now()
        });
        return docRef.id;
    }
    // GET ONE BLOG
    static async getBlog(id: string) : Promise<IBlog | null>{
        const docRef = await this.blogDoc.doc(id).get();
        if(!docRef.exists){
            return null;
        }
        const data = docRef.data() as IBlog;
        return {...data};
    }
    // GET ALL BLOGS
    static async getAllBlog() : Promise<IBlog[]>{
        const docRef = await this.blogDoc.get();
        return docRef.docs.map(doc => ({id: doc.id, ...doc.data()}) as IBlog)
    }
    // UPDATE BLOG
    static async updateBlog(blog: IBlog) : Promise <void> {
        const {id, ...docRef} = blog;
        await this.blogDoc.doc(id).update(docRef);
    }
    // DELETE BLOG
    static async deleteBlog(id: string) : Promise<void>{
        await this.blogDoc.doc(id).delete();
    }
}
