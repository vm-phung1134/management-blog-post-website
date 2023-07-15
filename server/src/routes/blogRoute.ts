import express from 'express';
import { BlogController } from '../controllers/blogController';
import checkAuth from '../middlewares/checkAuth';

const Router = express.Router();

Router.route('/').get(BlogController.getAllBlog).post(checkAuth,BlogController.createBlog)
Router.route('/:id').get(BlogController.getBlog).put(checkAuth, BlogController.updateBlog).delete(checkAuth, BlogController.deleteBlog)

export default Router;