import { useQuery } from "@tanstack/react-query";
import LineTitle from "../../components/Elements/LineUnderTitle";
import { useAppDispatch } from "../../redux/store";
import { IBlog } from "../../interface/blog";
import { getBlogs } from "../../redux/reducers/blog/api";
import { Spinner } from "@material-tailwind/react";
import CardBlog from "../../components/Elements/BlogCard";
import ButtonLoadMore from "../../components/Elements/ButtonLoadMore";
import BreadCrumbs from "../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_SEARCH_PAGE } from "./mock-data";
import { IUser } from "../../interface/auth";
import { getAllAuths } from "../../redux/reducers/auth/api";
import InfoAuthCard from "../../components/Elements/InfoAuthCard";

function MultiSearchPage() {
  const dispatch = useAppDispatch();
  const { data = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const action = await dispatch(getBlogs());
      return action.payload || [];
    },
  });
  const auths = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const action = await dispatch(getAllAuths());
      return action.payload || [];
    },
  });
  console.log(auths.data);
  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="min-h-screen max-h-fit mt-[80px] p-10">
          <BreadCrumbs items={BREAD_CRUMBS_SEARCH_PAGE} />
          <h1 className="text-black font-bold text-[25px] mt-5 uppercase">
            Authors <span className="text-orange-600">related</span>
          </h1>
          <LineTitle />
          <div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">
              {auths?.data?.map((auth) => (
                <InfoAuthCard key={auth.uid} auth={auth} />
              ))}
            </div>
          </div>
          <div className="flex justify-center w-full my-5">
              <ButtonLoadMore />
            </div>
          <div className="my-20">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-bold flex-grow text-[25px] mt-5 uppercase">
                The Articles related to
                <span className="text-orange-600"> your key word</span>
              </h1>
            </div>
            <LineTitle />
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
              {data?.map((blog) => (
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

export default MultiSearchPage;
