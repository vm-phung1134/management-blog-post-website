import express from "express";
import { notificationController } from "../controllers/notificationController";
import checkAuth from "../middlewares/checkAuth";

const Router = express.Router();
Router.route("/").post(checkAuth, notificationController.createNotification);
Router.route("/:id").get(notificationController.getAllNotification);

export default Router;
