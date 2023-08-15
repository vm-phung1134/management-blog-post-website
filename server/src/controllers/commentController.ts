import { Request, Response } from "express";
import { CommentModel } from "../models/commentModel";

export const CommentController = {
  async createComment(req: Request, res: Response) {
    const comment = req.body;
    try {
      await CommentModel.createComment(comment);
      res.status(200).json({ comment, message: "Comment has been created" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getAllComment(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const comments = await CommentModel.getAllComments(id);
      if (!comments) {
        res.sendStatus(404).json("Comment is empty");
        return;
      }
      res.status(200).json(comments);
    } catch (error) {}
  },
};
