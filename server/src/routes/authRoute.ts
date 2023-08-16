import express from "express";
import checkAuth from "../middlewares/checkAuth";
import { authController } from "../controllers/authController";

const Router = express.Router();

Router.route("/listAuth").get(authController.getAllAuth);

export default Router;
