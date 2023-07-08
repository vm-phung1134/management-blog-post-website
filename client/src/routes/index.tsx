import InfoBlog from "../components/post";
import HomePage from "../components/home";
import Login from "../components/login";
import Dashboard from "../components/manager/dashboard";
import UserBlogs from "../components/manager/workplace/userBlogs";
import CreateBlog from "../components/manager/workplace/createBlog";

const publicRoutes = [
  {
    path: `/login`,
    component: Login,
  },
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
