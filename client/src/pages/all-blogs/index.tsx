/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CardBlog from "../../components/Elements/BlogCard";
import BreadCrumbs from "../../components/Elements/BreadCrumb";
import LineTitle from "../../components/Elements/LineUnderTitle";
import Carousel from "../../components/Layout/Carousel";
import { useAppDispatch } from "../../redux/store";
import { BREAD_CRUMBS_ALL_BLOGS, CATEGORIES_FILTER } from "./mock-data";
import { IBlog } from "../../interface/blog";
import { getBlogs } from "../../redux/reducers/blog/api";
import Spinner from "../../components/Elements/Spinner";
import ButtonLoadMore from "../../components/Elements/ButtonLoadMore";

function AllBlogsPage() {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const action = await dispatch(getBlogs());
      return action.payload || [];
    },
  });
  const [filteredData, setFilteredData] = useState<IBlog[]>([]);
  const handleCategoryChange = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    filterBlogByCategory();
  };
  const filterBlogByCategory = () => {
    const filteredBlogs = data.filter((blog) =>
      blog.tags.map((item) => item).includes(selectedCategory)
    );
    setFilteredData(filteredBlogs);
  };

  useEffect(() => {
    filterBlogByCategory();
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data && data.length > 0) {
      setFilteredData(data);
    }
  }, [data]);
  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="min-h-screen max-h-fit mt-[80px] p-10">
          <BreadCrumbs items={BREAD_CRUMBS_ALL_BLOGS} />
          <h1 className="text-black font-bold text-[25px] mt-5 uppercase">
            Our best <span className="text-orange-600">article</span>
          </h1>
          <Carousel />
          <div className="my-20">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-bold flex-grow text-[25px] mt-5 uppercase">
                All blog posts<span className="text-orange-600"> recently</span>
              </h1>
              <div className="flex gap-5 justify-end flex-grow">
                <select
                  className="select focus:outline-none select-bordered w-full font-medium max-w-xs"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    Other Categories
                  </option>
                  {CATEGORIES_FILTER.map((item) => {
                    return (
                      <option key={item.name} value={item.label}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn normal-case bg-white font-medium"
                  onClick={() => setFilteredData(data)}
                >
                  Clear filter
                </button>
              </div>
            </div>

            <LineTitle />
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
              {filteredData?.map((blog) => (
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
