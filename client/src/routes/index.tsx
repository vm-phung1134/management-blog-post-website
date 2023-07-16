import InfoBlog from "../pages/blog-detail";
import HomePage from "../pages/home";
import Dashboard from "../pages/manager/dashboard";
import UserBlogs from "../pages/manager/workplace";
import CreateBlog from "../pages/manager/workplace/create-blog";

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
    component: UserBlogs
  },
  {
    path: `/manager-your-blogs/create-new-blog`,
    component: CreateBlog
  }
];

export default publicRoutes;
