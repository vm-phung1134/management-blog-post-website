import { useParams } from "react-router-dom";
import LineTitle from "../../components/Elements/LineUnderTitle";
import { getBlog } from "../../redux/reducers/blog/api";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import React, { useEffect } from "react";
import ButtonViewMore from "../../components/Elements/ButtonViewMore";

export const SideBarBlogCardHorizon = () => {
  return (
    <div className="grid grid-cols-4 gap-3 my-5">
      <figure className="col-span-1">
        <img
          className="w-full h-full object-contain"
          src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </figure>
      <div className="col-span-3 flex flex-col gap-1">
        <h4 className="text-sm font-bold">
          Vietnam's IT Workforce: A Growing Industry with Endless Potential
        </h4>
        <div className="text-xs flex gap-2">
          <p>23 July, 2023</p>
          <p>-</p>
          <p>Example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export const SideBarBlogCardVertical = () => {
  return (
    <div className="relative my-5">
      <figure>
        <img
          src="https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/100">
        <div className="text-xs flex flex-col gap-1 text-white absolute left-5 right-5 bottom-5">
          <p>23 July, 2023</p>
          <p>Example@gmail.com</p>
          <h4 className="text-xl  font-bold">
            Vietnam's IT Workforce: A Growing Industry with Endless Potential
          </h4>
        </div>
        <button className="top-5 right-5 absolute text-white text-2xl">
          <i className="fas fa-share-nodes"></i>
        </button>
      </div>
    </div>
  );
};

function InfoBlog() {
  const blog_id = useParams();
  const id = blog_id.id;
  const dispatch = useAppDispatch();
  const { blog } = useAppSelector((state) => state.blogReducer);
  useEffect(() => {
    dispatch(getBlog(id as string));
  }, [dispatch, id]);
  const handleBreakDownString = (str: string) => {
    return str.split("./");
  };
  return (
    <div className="bg-[url('https://support.honorofkings.com/assets/home_intro_bg.4b1332d7.png')] lg:bg-cover bg-contain bg-no-repeat">
      <div className="mx-20 py-[150px] lg:py-[100px]">
        <div className="text-[13px] breadcrumbs px-10 my-5">
          <ul>
            <li>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Homepage
              </a>
            </li>
            <li>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                All Blogs
              </a>
            </li>
            <li className="text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Vietnam's IT Workforce: A Growing Industry with Endless Potential
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="flex max-h-full text-justify flex-col justify-start items-center text-sm">
              <div className="relative w-[90%]">
                <figure>
                  <img
                    src={blog.img}
                    alt=""
                    className="w-full object-cover overflow-hidden"
                  />
                </figure>
                <div className="absolute top-0 left-0 right-1/4 bottom-0 text-white bg-black/60">
                  <div className="flex flex-col items-start gap-3 relative top-1/2 -translate-y-1/2 px-5">
                    <div className="flex gap-3 text-[12px]">
                      <p>
                        <i className="fas fa-calendar-days"></i> July 18, 2023
                      </p>
                      -<p>3 Hours before</p>
                    </div>
                    <p className="text-4xl font-bold w-full text-orange-400">
                      {blog.title}
                    </p>
                    <ButtonViewMore />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                  <p className="w-full h-10 bg-orange-600"></p>
                </div>
              </div>
              <div className="flex justify-between py-3 px-10 w-full">
                <div className="flex gap-3">
                  <figure>
                    <img
                      className="rounded-[50%] w-[30px] lg:w-[45px]"
                      src={`${blog.author.avt}`}
                      alt=""
                    />
                  </figure>
                  <div className="text-start">
                    <h4 className="font-bold lg:text-base text-[13px]">
                      {blog.author.name}
                    </h4>
                    <p className="text-gray-600 text-[13px]">
                      {blog.author.email}
                    </p>
                  </div>
                </div>
                <ul className="flex text-gray-500 gap-4 justify-between my-3">
                  <li>
                    <i className="fas fa-calendar-days"></i> July 18, 2023
                  </li>
                  <li>
                    <i className="fas fa-comment"></i> 0 Comments
                  </li>
                  <li>
                    <i className="fas fa-share"></i> Share
                  </li>
                </ul>
              </div>
              <h2 className="font-bold px-5 leading-[3rem] text-[30px] text-center">
                {blog.title}
              </h2>
              <LineTitle />
              {handleBreakDownString(blog.description).map((str) => (
                <p key={str} className="mt-2 px-5 lg:px-10 leading-6 indent-7">
                  {str}
                </p>
              ))}
              <div className="flex justify-start w-full">
                <div className="mt-3 mx-5 lg:mx-10 w-full">
                  <ul className="border p-5 border-orange-600 w-fit">
                    <p className="font-bold">Table of contents</p>
                    {blog.contents.map((epic, index) => (
                      <li key={epic.id}>{`${(index += 1)}. ${epic.topic}`}</li>
                    ))}
                  </ul>
                  <div className="w-full">
                    {blog.contents.map((epic, index) => (
                      <section key={epic.id} className="w-full">
                        <h3 className="font-bold my-3 text-[18px]">
                          {(index += 1)}. {epic.topic}
                        </h3>
                        {handleBreakDownString(epic.plot).map((str, index) => (
                          <p key={index} className="leading-6 pb-3 indent-7">
                            {str}
                          </p>
                        ))}
                        <figure className="w-full h-80">
                          <img
                            src={epic.srcImg}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </figure>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-10">
                <div className="h-1 w-full border-b py-5 border-orange-400"></div>
                <div className="flex flex-col items-start w-full">
                  <div className="text-black text-sm py-5">
                    <div className=" flex gap-2 items-center">
                      <span className="font-medium">Topics:</span>
                      {blog.tags.map((tag, index) => (
                        <button
                          className="btn-sx text-[12px] py-1 px-2 bg-orange-600 text-white flex items-center shadow-md rounded-md"
                          key={index}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-20 border border-orange-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-lg font-bold pb-5">Latest Blogs</h3>
            <SideBarBlogCardHorizon />
            <SideBarBlogCardHorizon />
            <SideBarBlogCardHorizon />
            <SideBarBlogCardHorizon />
            <h3 className="text-lg font-bold pb-5">Related Blogs</h3>
            <SideBarBlogCardVertical />
            <SideBarBlogCardVertical />
            <h3 className="text-lg font-bold pb-5">Popular Tags</h3>
            <ul className="flex flex-wrap text-sm gap-5">
              <li className="rounded-md px-3 py-1 bg-gray-200">
                Headless Loyalty
              </li>
              <li className="rounded-md px-3 py-1 bg-gray-200">Low-Code</li>
              <li className="rounded-md px-3 py-1 bg-gray-200">
                Loyalty Program
              </li>
              <li className="rounded-md px-3 py-1 bg-gray-200">Retail</li>
              <li className="rounded-md px-3 py-1 bg-gray-200">Technology</li>
              <li className="rounded-md px-3 py-1 bg-gray-200">Travel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBlog;
