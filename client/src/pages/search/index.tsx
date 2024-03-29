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
import { useSearchContext } from "../../contexts/searchValue";
import { useEffect, useState } from "react";
import EmptyMessage from "../../components/Elements/EmptyMessage";

const SubListAuthorComponent = ({
  searchAuthResult,
}: {
  searchAuthResult: IUser[];
}) => {
  return (
    <div>
      <h1 className="text-black font-bold text-[25px] mt-5 uppercase">
        Authors <span className="text-orange-600">related</span>
      </h1>
      <LineTitle />
      <div>
        {searchAuthResult.length > 0 ? (
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 gap-y-16">
            {searchAuthResult.map((auth) => (
              <InfoAuthCard key={auth.uid} auth={auth} />
            ))}
          </div>
        ) : (
          <EmptyMessage message="Sorry, No suitable author found !!!" />
        )}
      </div>
      <div className="flex justify-center w-full my-5">
        <ButtonLoadMore />
      </div>
    </div>
  );
};

const SubListBlogComponent = ({
  searchBlogResult,
}: {
  searchBlogResult: IBlog[];
}) => {
  return (
    <div className="my-20">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold flex-grow text-[25px] mt-5 uppercase">
          The Articles related to
          <span className="text-orange-600"> your key word</span>
        </h1>
      </div>
      <LineTitle />
      {searchBlogResult.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
          {searchBlogResult?.map((blog) => (
            <CardBlog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <EmptyMessage message="Sorry, No suitable article found !!!" />
      )}
      <div className="flex justify-center w-full my-5">
        <ButtonLoadMore />
      </div>
    </div>
  );
};

function MultiSearchPage() {
  const dispatch = useAppDispatch();
  const { searchValue } = useSearchContext();
  const [searchBlogResult, setSearchBlogResult] = useState<IBlog[]>([]);
  const [searchAuthResult, setSearchAuthResult] = useState<IUser[]>([]);
  const { data: blogs = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const action = await dispatch(getBlogs());
      return action.payload || [];
    },
  });
  const { data: auths = [] } = useQuery<IUser[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const action = await dispatch(getAllAuths());
      return action.payload || [];
    },
  });
  useEffect(() => {
    if (auths && auths.length > 0) {
      setSearchAuthResult(auths);
    }
    if (blogs && blogs.length > 0) {
      setSearchBlogResult(blogs);
    }
    if (searchValue !== "") {
      const filterFunction = (entry: IBlog | IUser) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(searchValue.toLowerCase())
        );

      setSearchBlogResult(blogs.filter(filterFunction));
      setSearchAuthResult(auths.filter(filterFunction));
    }
  }, [searchValue, blogs, auths]);

  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="min-h-screen max-h-fit mt-[80px] p-10">
          <BreadCrumbs items={BREAD_CRUMBS_SEARCH_PAGE} />
          <SubListAuthorComponent searchAuthResult={searchAuthResult} />
          <SubListBlogComponent searchBlogResult={searchBlogResult} />
        </div>
      )}
    </>
  );
}

export default MultiSearchPage;
