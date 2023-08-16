import { Request, Response } from "express";
import { AuthModel } from "../models/authModel";

export const authController = {
  async getAllAuth(req: Request, res: Response) {
    try {
      const auths = await AuthModel.getAllAuth();
      if (!auths) {
        res.sendStatus(404).json("auths is empty");
        return;
      }
      res.status(200).json(auths);
    } catch (error) {
      console.log(error);
    }
  },
};
