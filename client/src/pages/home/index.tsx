import React, { useEffect, useState } from "react";
import { MOCK_BLOG } from "../../data/mockData";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getBlogs } from "../../redux/reducers/blog/api";
import LineTitle from "../../components/Elements/LineUnderTitle";
import ButtonViewMore from "../../components/Elements/ButtonViewMore";
import CardBlog from "../../components/Elements/BlogCard";
import Spinner from "../../components/Elements/Spinner";
import Carousel from "../../components/Layout/Carousel";

function HomePage() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { blogs } = useAppSelector((state) => state.blogReducer);
  useEffect(() => {
    dispatch(getBlogs());
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 1300);
    return () => {
      clearTimeout(timeoutLoading);
    };
  }, [dispatch]);
  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <div>
          <div className="lg:mt-[100px] my-3 md:my-8 px-5 lg:mx-20">
            <div className="text-center pt-10 flex flex-col justify-center">
              <h1 className="text-black font-bold text-[30px] lg:text-[40px]">
                Top Blog Trending
              </h1>
              <LineTitle />
              <p className="text-base font-thin">
                Updated - Today June 5, 2023
              </p>
            </div>
            <Carousel />
            {/* RECENT BLOG */}
            <div className="mt-20">
              <h3 className="font-bold py-3 text-lg">Recent blog posts</h3>
              <LineTitle />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                <div className="flex flex-col gap-5">
                  <div>
                    <img
                      className="rounded-lg"
                      src="https://preview.colorlib.com/theme/magdesign/images/img_7.jpg.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">
                      Bussiness, Travel -{" "}
                      <span className="font-thin">July 2, 2020</span>
                    </h3>
                    <h2 className="text-[18px] py-1 font-bold cursor-pointer">
                      Your most unhappy customers are your greatest source of
                      learning
                    </h2>
                    <p className="text-gray-600 py-1 text-sm  line-clamp-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="flex items-center text-sm">
                      <div className="pr-3">
                        <img
                          className="rounded-[50%] w-[20px] lg:w-[40px]"
                          src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[13px]">Sergy Campell</p>
                        <small className="text-gray-600 text-[10px]">
                          CEO and Founder
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {MOCK_BLOG.map(
                    (post, index) =>
                      index < 2 && (
                        <div key={post.id} className="flex flex-col gap-5">
                          <div>
                            <img
                              className="rounded-lg"
                              src={post.srcImg}
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <h3 className="font-medium text-[15px]">
                              {post.typeBlog} -{" "}
                              <span className="font-thin">July 2, 2020</span>
                            </h3>
                            <h2 className="text-[18px] cursor-pointer py-1 font-bold">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 py-1 text-[13px] lg:text-sm text-justify line-clamp-2">
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.
                            </p>
                            <div className="flex items-center text-sm">
                              <div className="pr-3">
                                <img
                                  className="rounded-[50%] w-[20px] lg:w-[40px]"
                                  src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p className="font-bold text-[13px]">
                                  Sergy Campell
                                </p>
                                <small className="text-gray-600 text-[10px]">
                                  CEO and Founder
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
              <ButtonViewMore />
            </div>
            {/* ALL BLOG */}
            <div className="lg:py-[30px] py-[25px]">
              <h3 className="font-bold py-3 text-lg">All blog posts</h3>
              <LineTitle />
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
                {blogs.map((blog) => (
                  <CardBlog key={blog.id} blog={blog} />
                ))}
              </div>
              <ButtonViewMore />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
