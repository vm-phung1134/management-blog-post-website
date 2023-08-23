import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBlog } from "../../redux/reducers/blog/api";
import { useAppDispatch } from "../../redux/store";
import ButtonViewMore from "../../components/Elements/ButtonViewMore";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Elements/Spinner";
import CreateCommentForm from "../../components/Form/CommentForm";
import BlogReview from "../../components/Elements/BlogReview";
import { IBlog } from "../../interface/blog";
import { DEFAULT_VALUES } from "../manager/workplace/create-blog/mock-data";
import BreadCrumbs from "../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_BLOG_DETAIL } from "./mock-data";

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

export const SideBarFeaturedPost = () => {
  return (
    <div>
      <h4 className="font-bold mt-2">
        The Top Types of AI-Generated Content in Marketing [New Data, Examples &
        Tips]
      </h4>
      <div className="flex text-sm justify-between font-light text-gray-400 py-5 border-b border-gray-400">
        <p>Tristen Taylor</p>
        <p>July, 09 2023</p>
      </div>
    </div>
  );
};

function InfoBlog() {
  const blog_id = useParams();
  const dispatch = useAppDispatch();
  const { data = DEFAULT_VALUES, isLoading } = useQuery<IBlog>({
    queryKey: ["blog-detail", blog_id.id],
    queryFn: async () => {
      const action = await dispatch(getBlog(blog_id?.id || ""));
      return action.payload;
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="mx-20 py-28">
          <div className="py-5">
            <BreadCrumbs items={BREAD_CRUMBS_BLOG_DETAIL} />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="flex max-h-full text-justify flex-col justify-start items-center text-sm">
                <div className="relative w-[90%]">
                  <figure>
                    <img
                      src={data?.img}
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
                        {data?.title}
                      </p>
                      <ButtonViewMore linkSrc="" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <p className="w-full h-10 bg-orange-600"></p>
                  </div>
                </div>
                <BlogReview values={data} />
                <div className="w-full px-12">
                  <CreateCommentForm blogValue={data} />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <h3 className="text-md font-bold pb-5 text-[#213b6c]">
                Latest Blogs
              </h3>
              <div className="h-[1px] w-full bg-orange-500 mb-3"></div>
              <SideBarBlogCardHorizon />
              <SideBarBlogCardHorizon />
              <SideBarBlogCardHorizon />
              <SideBarBlogCardHorizon />
              <h3 className="text-md font-bold pb-5 text-[#213b6c]">
                Related Blogs
              </h3>
              <div className="h-[1px] w-full bg-orange-500 mb-3"></div>
              <SideBarBlogCardVertical />
              <SideBarBlogCardVertical />
              <h3 className="text-md font-bold pb-5 text-[#213b6c]">
                Featured Posts
              </h3>
              <div className="h-[1px] w-full bg-orange-500 mb-3"></div>
              <SideBarFeaturedPost />
              <SideBarFeaturedPost />
              <SideBarFeaturedPost />
              <h3 className="text-md font-bold py-5 text-[#213b6c]">
                Popular Tags
              </h3>
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
              <div className="py-10 flex flex-col items-center justify-center gap-3">
                <p className="font-bold text-[#213b6c]">
                  Don't forget to share this post!
                </p>
                <div className="flex gap-3">
                  <img
                    className="w-14"
                    src="https://img.icons8.com/?size=1x&id=64151&format=png"
                    alt=""
                  />
                  <img
                    className="w-14"
                    src="https://img.icons8.com/?size=1x&id=hFoVFpm6gl9A&format=png"
                    alt=""
                  />
                  <img
                    className="w-14"
                    src="https://img.icons8.com/?size=1x&id=108650&format=png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoBlog;
