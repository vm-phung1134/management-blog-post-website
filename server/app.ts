import express from "express";
import cors from "cors";
import http from "http";
require("../server/src/config/firebase-config");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import route
import blogRoute from "./src/routes/blogRoute";
import commentRoute from "./src/routes/commentRoute";
import followerRoute from "./src/routes/followerRoute";
import followingRoute from "./src/routes/followingRoute";

// Mouting the route
app.use("/blogs", blogRoute);
app.use("/blog/comments", commentRoute);
app.use("/follower", followerRoute);
app.use("/following", followingRoute);

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
