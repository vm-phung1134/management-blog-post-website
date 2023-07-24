import { Link } from "react-router-dom";
import { IBlogCardProps } from "./type";

function CardBlog(props: IBlogCardProps) {
  const { blog } = props;
  return (
    <>
      <div key={blog.id} className="flex flex-col gap-y-[10px] items-center ">
        <div className="w-full relative">
          <img
            className="object-cover w-full rounded-lg shadow-xl h-[280px]"
            src={blog.img}
            alt=""
          />
          <div className="p-2 text-white absolute bottom-0 min-h-32 max-h-fit right-0 rounded-lg left-0 bg-black/60">
            <h1 className="font-medium text-[12px]">Business</h1>
            <Link to={`/blogs/${blog.id}`}>
              <h2 className="lg:text-[18px] text-sm font-bold cursor-pointer py-1">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-200 py-1 text-[12px] lg:text-[13px] font-thin text-justify line-clamp-2">
              {blog.description}
            </p>
            <div className="flex justify-end px-4">
              <button className="text-orange-500 font-thin text-sm">
                Read Blog
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[5px] w-full">
          <div className="flex items-center text-sm mt-auto">
            <div className="pr-3">
              <img
                className="rounded-[50%] w-[20px] lg:w-[40px]"
                src={blog.author.avt}
                alt=""
              />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="hidden lg:block">
                <p className="font-bold text-[13px]">{blog.author.name}</p>
                <small className="text-gray-600 text-[10px]">
                  {blog.author.email}
                </small>
              </div>
              <div className="text-end">
                <p className="font-medium text-[10px] lg:text-[12px]">
                  Updated: May 30, 2023
                </p>
                <p className="font-thin text-[8px] lg:text-[10px]">
                  Published: May 29, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBlog;
