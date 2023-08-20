import { Link } from "react-router-dom";
import { IBlogUpdateCardProps } from "./type";

function BlogUpdateCard(props: IBlogUpdateCardProps) {
  const { blog, handleOpenModal } = props;
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
            <Link to={`/manager-your-blogs/update-blog/${blog?.id}`}>
              <button className="btn flex gap-2 items-center p-3 bg-transparent border-none outline-none hover:bg-transparent">
                <img
                  className="w-20"
                  src="https://img.icons8.com/?size=1x&id=111136&format=png"
                  alt="open-blog"
                />
                <p className="text-orange-500 normal-case">Update blog</p>
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
                <p className="font-bold text-sm">{blog?.author?.name}</p>
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
}

export default BlogUpdateCard;
