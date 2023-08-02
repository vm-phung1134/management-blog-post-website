/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import {
  deleteBlog,
  getAllBlogsAuthor,
} from "../../../redux/reducers/blog/api";
import BreadCrumbs from "../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_CREATE_BLOG } from "./mock-data";
import MenuListNavigate from "../../../components/Elements/MenuListNavigate";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../../../interface/blog";
import Spinner from "../../../components/Elements/Spinner";
import { useEffect, useState } from "react";
import ModalConfirmAction from "../../../components/Elements/ModalAction";
import { DEFAULT_VALUES } from "./create-blog/mock-data";

function UserBlogs() {
  const dispatch = useAppDispatch();
  const blog_id = useParams<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<IBlog>();
  const { data = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs-author"],
    queryFn: async () => {
      const action = await dispatch(getAllBlogsAuthor(blog_id.id));
      return action.payload || [];
    },
  });
  const [arrNewBlogs = data, setArrNewBlog] = useState<IBlog[]>();
  const handleOpenModal = (blog: IBlog) => {
    setOpen(!open);
    setBlogPost(blog);
  };
  const handleDeleteBlog = async (blog: IBlog) => {
    const newBlogs = data?.filter((item) => item.id !== blog.id);
    await dispatch(deleteBlog(blog));
    return setArrNewBlog(newBlogs);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-[80px] p-10 bg-slate-100 min-h-[150vh] max-h-full">
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
                <div key={blog?.id} className="relative cursor-pointer h-fit">
                  <figure className="w-auto">
                    <img src={blog?.img} alt="" />
                  </figure>
                  <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 overflow-hidden bg-fixed bg-black/80">
                    <div className="text-white text-sm">
                      <div className="top-5 flex flex-col gap-3 right-5 absolute text-white text-2xl">
                        <button>
                          <i className="fas fa-share-nodes"></i>
                        </button>
                        <button>
                          <i className="fas fa-edit"></i>
                        </button>
                        <button onClick={() => handleOpenModal(blog)}>
                          <i className="fas fa-remove"></i>
                        </button>
                      </div>
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link
                          to={`/manager-your-blogs/update-blog/${blog?.id}`}
                        >
                          <button className="btn flex gap-2 items-center p-3 bg-transparent border-none outline-none hover:bg-transparent">
                            <img
                              className="w-20"
                              src="https://img.icons8.com/?size=1x&id=111136&format=png"
                              alt="open-blog"
                            />
                            <p className="text-orange-500 normal-case">
                              Update blog
                            </p>
                          </button>
                        </Link>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3">
                        <p className="text-[13px]">Travel | Business</p>
                        <h3 className="uppercase text-orange-500 mt-2 mb-5 text-[17px]">
                          {blog?.title}
                        </h3>
                        <div className="flex justify-between flex-grow">
                          <div className="hidden lg:block">
                            <p className="font-bold text-sm">
                              {blog?.author?.name}
                            </p>
                            <small className="text-gray-100 text-[12px]">
                              {blog?.author?.email}
                            </small>
                          </div>
                          <div className="text-end">
                            <p className="font-medium text-[10px] lg:text-[13px]">
                              Updated: May 30, 2023
                            </p>
                            <p className="font-thin text-[8px] lg:text-[12px]">
                              Published: May 29, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ModalConfirmAction
            open={open}
            action={() => handleDeleteBlog(blogPost || DEFAULT_VALUES)}
            setOpen={setOpen}
            title="Message"
            className="bg-red-600 text-white hover:bg-red-600"
            message="Are you sure you want to delete this blog post ?"
            successMessage="New blog has been created"
            errorMessage="Blog has been cancel"
          />
          <div className="flex justify-center my-5">
            <div className="btn-group flex gap-2">
              <button className="btn font-thin normal-case">
                <i className="fas fa-chevron-left"></i> Prev
              </button>
              <button className="btn text-orange-700 border-2 border-orange-600">
                1
              </button>
              <button className="btn font-thin normal-case">
                Next <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserBlogs;
