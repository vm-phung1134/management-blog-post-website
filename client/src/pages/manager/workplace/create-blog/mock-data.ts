import { IBreadCrumbItem } from "../../../../components/Elements/BreadCrumb/type";
import { IBlog } from "../../../../interface/blog";

export const BREAD_CRUMBS_CREATE_BLOG: IBreadCrumbItem[] = [
  {
    name: "Homepage",
    link: "",
  },
  {
    name: "DashBoard",
    link: "",
  },
  {
    name: "Your blogs",
    link: "",
  },
  {
    name: "Create your blog",
    link: "",
    active: true,
  },
];

export const DEFAULT_VALUES: IBlog = {
  title: "Top 25 Free & Premium Headless",
  releaseDate: "",
  author: {
    uid: "",
    email: "",
    name: "",
    token: "",
    avt: "",
  },
  img: "https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=600",
  description:
    "Here is your description about your topic which are you want to share!",
  contents: [
    {
      id: "1",
      topic: "Epic title one",
      plot: "Epic description about your epic one",
      srcImg:
        "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      topic: "Epic title two",
      plot: "Epic description about your epic one",
      srcImg:
        "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      topic: "Epic title two",
      plot: "Epic description about your epic one",
      srcImg:
        "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  tags: ["Business", "Travel", "Technology"],
  likes: 0,
  views: 0,
  comments: 0,
};
