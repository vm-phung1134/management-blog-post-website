/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { deleteBlog } from "../../../redux/reducers/blog/api";
import BreadCrumbs from "../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_CREATE_BLOG } from "./mock-data";
import MenuListNavigate from "../../../components/Elements/MenuListNavigate";
import { IBlog } from "../../../interface/blog";
import Spinner from "../../../components/Elements/Spinner";
import { useEffect, useState } from "react";
import { DEFAULT_VALUES } from "./create-blog/mock-data";
import { usePagination } from "../../../hooks/usePagination";
// import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ModalConfirm from "../../../components/Elements/ModalConfirm";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";
import PaginationNav from "../../../components/Elements/Pagination";
import BlogUpdateCard from "../../../components/Elements/BlogUpdateCard";

function UserBlogs() {
  const dispatch = useAppDispatch();
  const [userCookies] = useUserFromCookies();
  const [open, setOpen] = useState<boolean>(false);
  const [blogPost = DEFAULT_VALUES, setBlogPost] = useState<IBlog>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(10);

  const { data = [], isLoading } = usePagination({
    authorId: userCookies.uid,
    page: currentPage,
    limit: 6,
  });
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const [arrNewBlogs, setArrNewBlog] = useState<IBlog[]>([]);
  const handleOpenModal = (blog: IBlog) => {
    setOpen(!open);
    setBlogPost(blog);
  };
  const handleDeleteBlog = async (blog: IBlog) => {
    await dispatch(deleteBlog(blog));
    setOpen(!open);
    setArrNewBlog(arrNewBlogs.filter((item) => item.id !== blog.id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data && data.length > 0) {
      setArrNewBlog(data);
    }
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-[80px] flex flex-col justify-evenly p-10 bg-slate-100 min-h-[150vh] max-h-full">
          <div>
            <MenuListNavigate />
            <BreadCrumbs items={BREAD_CRUMBS_CREATE_BLOG} />
            <hr />
            <div className="flex justify-between w-full items-center">
              <button className="py-2 px-5 text-sm text-gray-600 font-thin border shadow-md rounded-lg my-5 bg-white">
                Filter category
              </button>
              <Link to="/manager-your-blogs/create-new-blog">
                <button className="font-medium text-sm px-5 flex gap-3 items-center py-2 bg-orange-600 rounded-lg text-white">
                  <i className="fas fa-check"></i>
                  <p>Create New Blog</p>
                </button>
              </Link>
            </div>
            <ul className="flex gap-3">
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Business
              </li>
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Travel
              </li>
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Fashion
              </li>
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Style
              </li>
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Magazine
              </li>
              <li className="py-1 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Pet
              </li>
            </ul>
          </div>
          <div className="w-full grid grid-cols-3 gap-5 mt-5">
            {arrNewBlogs?.map((blog) => {
              return (
                <BlogUpdateCard key={blog.id} blog={blog} handleOpenModal={handleOpenModal} />
              );
            })}
          </div>
          <ModalConfirm
            open={open}
            action={() => handleDeleteBlog(blogPost)}
            setOpen={setOpen}
            title="Message"
            className="bg-red-600 text-white hover:bg-red-600"
            message="Are you sure you want to delete this blog post ?"
          />
          <PaginationNav
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          {/* <ToastContainer
            className="font-sans"
            toastStyle={{ color: "black" }}
          /> */}
        </div>
      )}
    </>
  );
}

export default UserBlogs;
