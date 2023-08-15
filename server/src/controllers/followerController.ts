import { Request, Response } from "express";
import { FollowerModel } from "../models/followerModel";

export const followerController = {
  async addFollower(req: Request, res: Response) {
    const follower = req.body;
    try {
      await FollowerModel.addFollower(follower);
      res.status(200).json({ follower, message: "follower has been added" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getAllFollower(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const followers = await FollowerModel.getAllFollowers(id);
      if (!followers) {
        res.sendStatus(404).json("follower is empty");
        return;
      }
      res.status(200).json(followers);
    } catch (error) {}
  },
};
