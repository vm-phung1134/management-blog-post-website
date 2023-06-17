import InfoBlog from "../components/blog";
import HomePage from "../components/home";
import Login from "../components/login";

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
];

export default publicRoutes;
