import express from 'express';
import { BlogController } from '../controllers/blogController';

const Router = express.Router();

Router.route('/').get(BlogController.getAllBlog).post(BlogController.createBlog)
Router.route('/:id').get(BlogController.getBlog).put(BlogController.updateBlog).delete(BlogController.deleteBlog)

export default Router;