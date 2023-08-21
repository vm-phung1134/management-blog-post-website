import express from "express";
import cors from "cors";
import http from "http";
import { configureSocket } from "./src/socket/socketServer";
require("../server/src/config/firebase-config");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Import route
import blogRoute from "./src/routes/blogRoute";
import commentRoute from "./src/routes/commentRoute";
import followerRoute from "./src/routes/followerRoute";
import followingRoute from "./src/routes/followingRoute";
import authRoute from "./src/routes/authRoute";

// Mouting the route
app.use("/authors", authRoute);
app.use("/blogs", blogRoute);
app.use("/blog/comments", commentRoute);
app.use("/follower", followerRoute);
app.use("/following", followingRoute);

const server = http.createServer(app);
configureSocket(server);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
