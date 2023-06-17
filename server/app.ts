import express from "express";
import cors from "cors"
import http from "http";
import CheckAuthorization from "./src/middlewares/checkAuth"
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(CheckAuthorization.decodeToken)

// Import route
import blogRoute from "./src/routes/blogRoute";

// Mouting the route
app.use("/blogs", blogRoute);

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
