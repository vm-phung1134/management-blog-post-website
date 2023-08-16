import { Link } from "react-router-dom";
import { IBlogCardProps } from "./type";

function CardBlog(props: IBlogCardProps) {
  const { blog } = props;
  return (
    <>
      <div className="flex flex-col gap-y-[10px] items-center ">
        <div className="w-full group relative overflow-hidden cursor-pointer">
          <img
            className="object-cover w-full rounded-lg shadow-xl h-[280px]"
            src={blog?.img}
            alt=""
          />
          <div className="p-2 text-white absolute group-hover:pt-1/2 bottom-0 right-0 rounded-lg left-0 bg-black/70">
            <p className="text-sm font-thin">Now 15, 2023</p>
            <Link to={`/blogs/${blog?.id}`}>
              <h2 className="lg:text-[17px] group-hover:text-orange-200 truncate text-sm font-medium uppercase cursor-pointer py-3">
                {blog?.title}
              </h2>
            </Link>
            <p
              className="text-gray-100 opacity-0 -mb-14 group-hover:mb-0 group-hover:opacity-100 ease-in-out duration-500 py-1 text-[12px] lg:text-[13px] font-thin text-justify line-clamp-2"
              dangerouslySetInnerHTML={{ __html: blog?.description }}
            />
          </div>
          <div className="top-3 left-5 right-5 absolute text-gray-500 text-2xl">
            <div className="flex items-center justify-between">
              <div>
                {blog?.tags.map(
                  (item, index) =>
                    index < 2 && (
                      <button key={item} className="btn btn-xs mr-2 rounded-none text-[10px] bg-orange-500 border-none text-white">
                        {item}
                      </button>
                    )
                )}
              </div>
              <i className="fas fa-share-nodes"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[5px] w-full">
          <div className="flex items-center text-sm mt-auto">
            <div className="pr-3">
              <img
                className="rounded-[50%] w-[20px] lg:w-[40px]"
                src={blog?.author.avt}
                alt=""
              />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="hidden lg:block">
                <p className="font-bold text-[13px]">{blog?.author.name}</p>
                <small className="text-gray-600 text-[10px]">
                  {blog?.author.email}
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
