import AllBlogsPage from "../pages/all-blogs";
import InfoBlog from "../pages/blog-detail";
import HomePage from "../pages/home";
import Dashboard from "../pages/manager/dashboard";
import UserBlogs from "../pages/manager/workplace";
import CreateBlog from "../pages/manager/workplace/create-blog";
import UpdateBlogPost from "../pages/manager/workplace/update-blog";
import MultiSearchPage from "../pages/search";

const publicRoutes = [
  {
    path: `/`,
    component: HomePage,
  },
  {
    path: "/all-blogs-page",
    component: AllBlogsPage,
  },
  {
    path: `/blogs/:id`,
    component: InfoBlog,
  },
  {
    path: "/all-blogs-page/search-result",
    component: MultiSearchPage,
  },
];

const privateRoutes = [
  {
    path: `/personal-dashboard`,
    component: Dashboard,
  },
  {
    path: `/manager-your-blogs/:id`,
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

export { publicRoutes, privateRoutes };
