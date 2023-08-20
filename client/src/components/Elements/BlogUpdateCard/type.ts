import { IBlog } from "../../../interface/blog";

export interface IBlogUpdateCardProps {
    blog: IBlog;
    handleOpenModal: (blog: IBlog) => void;
}