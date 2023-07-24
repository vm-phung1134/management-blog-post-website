import { useParams } from "react-router-dom";
import LineTitle from "../../components/Elements/LineUnderTitle";
import { getBlog } from "../../redux/reducers/blog/api";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import React, { useEffect } from "react";
import ButtonViewMore from "../../components/Elements/ButtonViewMore";

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
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="flex max-h-full text-justify mx-20 py-[150px] lg:py-[85px] flex-col justify-start items-center text-sm">
            <div className="relative my-10 w-[90%]">
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
                  <p className="text-3xl font-bold w-full text-orange-400">
                    {blog.title}
                  </p>
                  <ButtonViewMore />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <p className="w-full h-10 bg-orange-600"></p>
              </div>
            </div>
            <div className="flex justify-between px-10 w-full">
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
              <div className="flex gap-5">
                <button className="text-green-600">+ Follow</button>
                <button>
                  <i className="fas fa-id-card"></i> View profile
                </button>
                <button className="text-red-700">
                  <i className="fas fa-exclamation"></i> Report
                </button>
              </div>
            </div>

            <div className="flex text-gray-500 justify-between my-3">
              <p className="pr-3">
                <i className="fas fa-calendar-days"></i> July 18, 2023
              </p>
              <p className="pl-3">
                <i className="fas fa-comment"></i> 0 Comments
              </p>
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
        <div className="col-span-5"></div>
      </div>
    </div>
  );
}

export default InfoBlog;
