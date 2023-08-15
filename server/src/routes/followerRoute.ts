import express from "express";

import checkAuth from "../middlewares/checkAuth";
import { followerController } from "../controllers/followerController";

const Router = express.Router();
Router.route("/list/").post(checkAuth, followerController.addFollower);
Router.route("/list/:id").get(followerController.getAllFollower);

export default Router;
