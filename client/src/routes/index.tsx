import InfoBlog from "../pages/blog-detail";
import HomePage from "../pages/home";
import Dashboard from "../pages/manager/dashboard";
import UserBlogs from "../pages/manager/workplace";
import CreateBlog from "../pages/manager/workplace/create-blog";
import UpdateBlogPost from "../pages/manager/workplace/update-blog";

const publicRoutes = [
  {
    path: `/`,
    component: HomePage,
  },
  {
    path: `/blogs/:id`,
    component: InfoBlog,
  },
  {
    path: `/personal-dashboard`,
    component: Dashboard,
  },
  {
    path: `/manager-your-blogs`,
    component: UserBlogs,
  },
  {
    path: `/manager-your-blogs/create-new-blog`,
    component: CreateBlog,
  },
  {
    path: `/manager-your-blogs/update-blog/:id`,
    component: UpdateBlogPost,
  },
];

export default publicRoutes;
