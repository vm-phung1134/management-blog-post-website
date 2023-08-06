import { IBreadCrumbItem } from "../../components/Elements/BreadCrumb/type";
import { ICategoriesFilter } from "./type";

export const BREAD_CRUMBS_ALL_BLOGS: IBreadCrumbItem[] = [
  {
    name: "Homepage",
    link: "",
  },
  {
    name: "All article",
    link: "",
  },
  {
    name: "Our best article",
    link: "",
    active: true,
  },
];

export const CATEGORIES_FILTER: ICategoriesFilter[] = [
  {
    label: "business",
    name: "Business",
  },
  {
    label: "travel",
    name: "Travel",
  },
  {
    label: "food",
    name: "Food",
  },
  {
    label: "technology",
    name: "Technology",
  },
];
