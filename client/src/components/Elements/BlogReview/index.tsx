import { Link, useNavigate } from "react-router-dom";
import { IBlog, IBlogContent } from "../../../interface/blog";
import LineTitle from "../LineUnderTitle";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";
import { useEffect, useState } from "react";
import ModalAction from "../ModalAction";
import { useCheckUserCookies } from "../../../hooks/useCheckUserCookies";
import { addFollower } from "../../../redux/reducers/follower/api";
import {
  addFollowing,
  checkFollowStatusUser,
  unFollowing,
} from "../../../redux/reducers/following/api";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../../redux/store";

function BlogReview({ values }: { values: IBlog }) {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { data = false } = useQuery<boolean>({
    queryKey: ["following", values],
    queryFn: async () => {
      const action = await dispatch(checkFollowStatusUser(values?.author?.uid));
      return action.payload || false;
    },
  });
  const [activeFollow, setActiveFollow] = useState<boolean>(data);
  const [userCookies] = useUserFromCookies();
  const isEmptyUserCookies = useCheckUserCookies(userCookies);
  const [stateLogin, setStateLogin] = useState(false);
  const handleCheckRoleFollow = () => {
    isEmptyUserCookies && setStateLogin(!stateLogin);
  };
  const handleFollowUser = () => {
    setActiveFollow(!activeFollow);
    dispatch(addFollower({ ...userCookies, authorID: values?.author?.uid }));
    dispatch(addFollowing({ ...values.author, authorID: userCookies.uid }));
  };
  const handleUnfollowUser = (id: string) => {
    setActiveFollow(!activeFollow);
    dispatch(unFollowing(id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full p-12">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <figure>
            <img
              className="rounded-[50%] w-[30px] lg:w-[45px]"
              src={`${values?.author?.avt}`}
              alt=""
            />
          </figure>
          <div className="text-start flex flex-col">
            <div className="flex gap-3 items-center">
              <Link to={`/account-page/profile`}>
                <h4 className="font-bold text-sm">{values?.author?.name}</h4>
              </Link>
              <div>
                <button
                  onClick={handleCheckRoleFollow}
                  className={`btn ${
                    isEmptyUserCookies ? "block" : "hidden"
                  } btn-xs normal-case bg-green-400`}
                >
                  Follow
                </button>
                <div className={`${isEmptyUserCookies ? "hidden" : "block"}`}>
                  {!isEmptyUserCookies &&
                  userCookies.uid !== values?.author?.uid ? (
                    <div>
                      {!activeFollow ? (
                        <button
                          onClick={handleFollowUser}
                          className="btn btn-xs normal-case bg-green-400"
                        >
                          Follow
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleUnfollowUser(values?.author?.uid)
                          }
                          className="btn btn-xs normal-case bg-green-400"
                        >
                          Following
                        </button>
                      )}
                    </div>
                  ) : (
                    <button className="btn btn-xs normal-case bg-green-400">
                      You
                    </button>
                  )}
                </div>
              </div>
              <ModalAction
                open={stateLogin}
                className="bg-red-700 text-white hover:bg-red-700"
                action={() => {
                  navigator("/login");
                }}
                setOpen={setStateLogin}
                title="Message"
                message="You have to login first to follow users !"
              />
            </div>

            <p className="text-gray-600 text-[13px]">{values?.author?.email}</p>
          </div>
        </div>
        <ul className="flex text-gray-500 gap-4 justify-between my-3 text-sm">
          <li>
            <i className="fas fa-calendar-days"></i> July 18, 2023
          </li>
          <li>
            <i className="fas fa-comment"></i> {values?.comments?.length}{" "}
            Comments
          </li>
          <li>
            <i className="fas fa-share"></i> Share
          </li>
        </ul>
      </div>

      <h2 className="font-bold p-5 leading-[3rem] text-[30px] text-center">
        {values?.title}
      </h2>
      <LineTitle />
      <p className="mt-2 text-sm px-5 lg:px-10 leading-6">
        {values?.description}
      </p>
      <div className="flex justify-start w-full">
        <div className="mt-3 w-full">
          <ul className="border p-5 border-orange-600 w-fit">
            <p className="font-bold text-base py-2">Table of contents</p>
            {values?.contents?.map((epic: IBlogContent, index: number) => (
              <li className="text-sm py-1" key={epic.id}>{`${(index += 1)}. ${
                epic.topic
              }`}</li>
            ))}
          </ul>
          <div className="w-full">
            {values?.contents?.map((epic: IBlogContent, index: number) => (
              <section key={epic?.id} className="w-full">
                <h3 className="font-bold my-3 text-base">
                  {(index += 1)}. {epic?.topic}
                </h3>
                <p className="leading-6 pb-3 text-sm">{epic?.plot}</p>
                <figure className="w-full h-80">
                  <img
                    src={epic?.srcImg}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </figure>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="h-1 w-full border-b py-5 border-orange-400"></div>
        <div className="flex flex-col items-start w-full">
          <div className="text-black text-sm py-5">
            <div className=" flex gap-2 items-center">
              <span className="font-bold">Tags:</span>
              {values?.tags?.map((tag: string, index: number) => (
                <button
                  className="btn-sx text-[12px] py-1 px-2 bg-orange-600 text-white flex items-center shadow-md rounded-md"
                  key={index}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogReview;
