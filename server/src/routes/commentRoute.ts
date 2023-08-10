import express from "express";

import checkAuth from "../middlewares/checkAuth";
import { CommentController } from "../controllers/commentController";

const Router = express.Router();
Router.route("/").post(checkAuth, CommentController.createBlog);
Router.route("/:id").get(CommentController.getAllComment);

export default Router;
