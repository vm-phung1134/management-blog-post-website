import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import CardBlog from "../../components/Elements/BlogCard";
import BreadCrumbs from "../../components/Elements/BreadCrumb";
import LineTitle from "../../components/Elements/LineUnderTitle";
import Carousel from "../../components/Layout/Carousel";
import { useAppDispatch } from "../../redux/store";
import { BREAD_CRUMBS_ALL_BLOGS } from "./mock-data";
import { IBlog } from "../../interface/blog";
import { getBlogs } from "../../redux/reducers/blog/api";
import Spinner from "../../components/Elements/Spinner";
import ButtonLoadMore from "../../components/Elements/ButtonLoadMore";

function AllBlogsPage() {
  const dispatch = useAppDispatch();
  const { data = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const action = await dispatch(getBlogs());
      return action.payload || [];
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
        <div className="min-h-screen max-h-fit mt-[80px] p-10">
          <BreadCrumbs items={BREAD_CRUMBS_ALL_BLOGS} />
          <h1 className="text-black font-bold text-[25px] mt-5 uppercase">
            Our best article
          </h1>
          <Carousel />
          <div className="my-20">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-bold flex-grow text-[25px] mt-5 uppercase">
                All article
              </h1>
              <div className="flex gap-5 justify-end flex-grow">
                <select className="select focus:outline-none select-bordered w-full font-medium max-w-xs">
                  <option className="" disabled selected>
                    Other Categories
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <select className="select focus:outline-none select-bordered font-medium w-full max-w-xs">
                  <option disabled selected>
                    Orther Tags
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>

            <LineTitle />
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
              {data.map((blog) => (
                <CardBlog key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="flex justify-center w-full my-5">
              <ButtonLoadMore />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllBlogsPage;
