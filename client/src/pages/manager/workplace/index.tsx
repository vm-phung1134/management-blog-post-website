import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getAllBlogsAuthor } from "../../../redux/reducers/blog/api";
import BreadCrumbs from "../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_CREATE_BLOG } from "./mock-data";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";
import MenuListNavigate from "../../../components/Elements/MenuListNavigate";

function UserBlogs() {
  const dispatch = useAppDispatch();
  const [userCookies] = useUserFromCookies();
  const { blogAuthors } = useAppSelector((state) => state.blogReducer);
  console.log(blogAuthors);
  useEffect(() => {
    dispatch(getAllBlogsAuthor(userCookies.uid));
  }, [dispatch, userCookies.uid]);
  return (
    <>
      <div className="mt-[80px] p-10 bg-slate-100 min-h-screen max-h-full">
        <div>
          <MenuListNavigate />
          <BreadCrumbs items={BREAD_CRUMBS_CREATE_BLOG} />
          <hr />
          <div className="flex justify-between w-full items-center">
            <button className="py-2 px-5 text-sm text-gray-600 font-thin border shadow-md rounded-lg my-5 bg-white">
              Filter category
            </button>
            <Link to="create-new-blog">
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

        <div className="w-full grid grid-cols-4 gap-5 mt-5">
          <div className="relative cursor-pointer h-fit">
            <img
              src="https://images.pexels.com/photos/17152635/pexels-photo-17152635/free-photo-of-the-arc-de-triomphe-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 overflow-hidden bg-fixed bg-black/80">
              <div className="text-white text-sm">
                <div className="flex justify-between p-3">
                  <p className="text-xl absolute top-2 right-3">
                    <i className="fas fa-heart"></i>
                  </p>
                </div>
                <div>
                  <button className="border hover:bg-orange-600 hover:border-none ease-in duration-200 py-2 px-5 rounded-md absolute top-3 left-3">
                    Update Blog
                  </button>
                </div>
                <div className="absolute bottom-2 left-3 right-3">
                  <p className="text-[13px]">Travel | Business</p>
                  <h3 className="uppercase text-orange-500 mt-2 mb-5 text-[17px]">
                    Manage campaigns and nurture leads with marketing
                  </h3>
                  <div className="flex justify-between flex-grow">
                    <div className="hidden lg:block">
                      <p className="font-bold text-sm">Sergy Campell</p>
                      <small className="text-gray-100 text-[12px]">
                        CEO and Founder
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
        </div>
      </div>
    </>
  );
}

export default UserBlogs;
