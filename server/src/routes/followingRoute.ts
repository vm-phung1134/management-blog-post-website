import express from "express";

import checkAuth from "../middlewares/checkAuth";
import { followingController } from "../controllers/followingController";

const Router = express.Router();
Router.route("/list/").post(checkAuth, followingController.addFollowing);
Router.route("/list/:id")
  .get(followingController.getAllFollowing)
  .delete(followingController.unFollowing);
Router.route("/checkList/:id").get(followingController.checkFollowStatus);

export default Router;
