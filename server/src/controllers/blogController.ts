import { Request, Response } from "express";
import { BlogModel } from "../models/blogModel";

export const BlogController = {
  async createBlog(req: Request, res: Response) {
    const blog = req.body;
    try {
      await BlogModel.createBlog(blog);
      res.status(200).json({ blog, message: "Blog has been created" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getBlog(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const blog = await BlogModel.getBlog(id);
      if (!blog) {
        res.sendStatus(404);
        return;
      }
      res.status(200).json(blog);
    } catch (error) {}
  },
  async getAllBlog(req: Request, res: Response) {
    try {
      const blogs = await BlogModel.getAllBlog();
      if (!blogs) {
        res.sendStatus(404).json("Blog is empty");
        return;
      }
      res.status(200).json(blogs);
    } catch (error) {}
  },

  async getAllBlogsByAuthor(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const limit = Number(req.query.limit);
      const page = Number(req.query.page);
      const startAfter = req.query.startAfter;
      const blogs = await BlogModel.getAllBlogsByAuthor(
        id,
        limit,
        startAfter,
        page
      );
      if (!blogs) {
        res.sendStatus(404).json("Blog is empty");
        return;
      }
      res.status(200).json(blogs);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  async updateBlog(req: Request, res: Response) {
    const blog = req.body;
    const id = req.params.id;
    try {
      await BlogModel.updateBlog({ id, ...blog });
      res.status(200).json({ id, ...blog });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  async deleteBlog(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await BlogModel.deleteBlog(id);
      res.status(200).json({
        message: "Blog has been deleted successfully",
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
