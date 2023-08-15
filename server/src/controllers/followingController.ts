import { Request, Response } from "express";
import { FollowingModel } from "../models/followingModel";

export const followingController = {
  async addFollowing(req: Request, res: Response) {
    const following = req.body;
    try {
      await FollowingModel.addFollowing(following);
      res.status(200).json({ following, message: "following has been added" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  async getAllFollowing(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const followings = await FollowingModel.getAllFollowings(id);
      if (!followings) {
        res.sendStatus(404).json("following is empty");
        return;
      }
      res.status(200).json(followings);
    } catch (error) {
      console.log(error);
    }
  },
  async checkFollowStatus(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const following = await FollowingModel.checkFollowingExists(id);
      if (!following) {
        res.sendStatus(404);
        return false;
      }
      res.status(200).json(following);
    } catch (error) {
      console.log(error);
    }
  },

  async unFollowing(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const followings = await FollowingModel.unFollowing(id);
      if (!followings) {
        res.sendStatus(404);
        return false;
      }
      return res.status(200).json(followings);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
