import { MOCK_BLOG } from "../../data/mockData";
import { useAppDispatch } from "../../redux/store";
import { getBlogs } from "../../redux/reducers/blog/api";
import LineTitle from "../../components/Elements/LineUnderTitle";
import ButtonViewMore from "../../components/Elements/ButtonViewMore";
import CardBlog from "../../components/Elements/BlogCard";
import Spinner from "../../components/Elements/Spinner";
import Carousel from "../../components/Layout/Carousel";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../../interface/blog";
import CategoriesBlog from "../../components/Elements/CategoriesBLog";

function HomePage() {
  const dispatch = useAppDispatch();
  const { data = [], isLoading } = useQuery<IBlog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const action = await dispatch(getBlogs());
      return action.payload || [];
    },
  });
  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div>
          <div className="h-screen mt-[50px] px-24 flex items-center">
            <div className="grid grid-cols-2 ">
              <div className="col-span-1">
                <div className="flex flex-col gap-10 w-[80%]">
                  <h1 className="text-[3.2rem] font-bold uppercase">
                    travel with us from the comport of your{" "}
                    <span className="text-orange-500">home</span>
                  </h1>
                  <p className="font-thin text-sm pr-10">
                    DaisyUI components come with many variants necessary for
                    design systems and you won't usually need to customize
                    anything.
                  </p>
                  <div className="flex gap-5">
                    <button className="btn outline-none px-10 text-white bg-gradient-to-r from-orange-700 to-orange-400">
                      Get started
                    </button>
                    <button className="btn outline-none px-10 border-orange-500 bg-transparent text-orange-600">
                      About us
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex justify-end">
                  <div className="card w-96 rounded-lg shadow-xl">
                    <figure>
                      <img
                        src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Shoes"
                        className="rounded-2xl h-[25rem]  object-cover w-full"
                      />
                    </figure>
                  </div>
                </div>
                <div className="card w-80 -mt-[30%] ml-[10%] rounded-lg bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Shoes"
                      className="rounded-xl h-[21rem] object-cover w-full"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 lg:mx-20">
            <div className="text-center pt-10 flex flex-col justify-center">
              <h1 className="text-black font-bold text-[30px] lg:text-[40px] uppercase">
                Top Blog <span className="text-orange-600">trending</span>
              </h1>
              <LineTitle />
              <p className="text-base font-thin">
                Updated - Today June 5, 2023
              </p>
            </div>
            <Carousel />
            {/* RECENT BLOG */}
            <div className="mt-20">
              <h3 className="font-bold py-3 text-2xl uppercase">
                Recent blog <span className="text-orange-600">posts</span>
              </h3>
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
              <ButtonViewMore linkSrc="" />
            </div>
            <div className="my-24">
              <h3 className="font-bold py-3 text-2xl uppercase">
                Popular <span className="text-orange-600">topics</span>
              </h3>
              <LineTitle />
              <CategoriesBlog />
            </div>
            {/* ALL BLOG */}
            <div className="lg:py-[30px] mb-[10%] py-[25px]">
              <h3 className="font-bold py-3 text-2xl uppercase">
                All blog <span className="text-orange-600">posts</span>
              </h3>
              <LineTitle />
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-5 gap-y-16">
                {data.map(
                  (blog, index) =>
                    index < 6 && <CardBlog key={blog.id} blog={blog} />
                )}
              </div>
              <ButtonViewMore linkSrc="/all-blogs-page" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
