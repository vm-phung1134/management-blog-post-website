import HeaderPublic from "../component/header";
import React from "react";
import Slider from "react-slick";
import FooterPublic from "../component/footer";
import { NavLink } from "react-router-dom";

function HomePage() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const contentCarousel = [
    {
      id: "1",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    {
      id: "2",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/post_lg_3.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    {
      id: "3",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    {
      id: "4",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/img_7.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    {
      id: "5",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
    {
      id: "6",
      srcImg:
        "https://preview.colorlib.com/theme/magdesign/images/img_6.jpg.webp",
      typeBlog: "Bussiness, Travel",
      title: "Your most unhappy customers are your greatest source of learning",
      plot: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean",
    },
  ];
  return (
    <>
      <HeaderPublic />
      <div className="lg:my-16 my-3 lg:my-8 px-5 lg:mx-20">
        <div className="text-center pt-10 flex justify-center">
          <h1 className="text-black font-bold text-[30px] lg:text-[40px]">
            Blog Trending
          </h1>
        </div>
        <Slider className="mx-[5px] lg:mx-0" {...settings}>
          {contentCarousel.map((slide) => (
            <div key={slide.id}>
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-10 mt-20 rounded-md">
                <div className="lg:col-span-4">
                  <img
                    className="bg-cover lg:w-[450px] shadow-xl h-[200px] lg:h-[390px]"
                    src={slide.srcImg}
                    alt=""
                  />
                </div>
                <div className="lg:col-span-6">
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="font-medium text-sm lg:text-[15px]">
                      {slide.typeBlog} -{" "}
                      <span className="font-thin">July 2, 2020</span>
                    </h3>
                    <NavLink to="/blog-info">
                      <h2 className="text-[20px] lg:text-[40px] cursor-pointer py-1 lg:py-3 leading-6 lg:leading-[43px] font-bold">
                        {slide.title}
                      </h2>
                    </NavLink>
                    <p className="text-gray-600 text-[13px] truncate lg:line-clamp-4 lg:text-base py-2 lg:py-3">
                      {slide.plot}
                    </p>
                    <div className="flex pb-5 items-center text-sm">
                      <div className="pr-3">
                        <img
                          className="rounded-[50%] w-[20px] lg:w-[40px]"
                          src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 className="font-bold lg:text-base text-[13px]">
                          Sergy Campell
                        </h4>
                        <p className="text-gray-600 lg:text-base text-[13px]">
                          CEO and Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* RECENT BLOG */}
        <div className="mt-20">
          <div>
            <h3 className="font-bold py-3 text-lg">Recent blog posts</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
            <div className="">
              <div>
                <img
                  className="rounded-lg"
                  src="https://preview.colorlib.com/theme/magdesign/images/img_7.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-medium text-sm pt-1">
                  Bussiness, Travel -{" "}
                  <span className="font-thin">July 2, 2020</span>
                </h3>
                <h2 className="text-[18px] py-1 font-bold cursor-pointer">
                  Your most unhappy customers are your greatest source of
                  learning
                </h2>
                <p className="text-gray-600 py-1 text-sm  line-clamp-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
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
                    <h4 className="font-bold lg:text-base text-[13px]">
                      Sergy Campell
                    </h4>
                    <p className="text-gray-600 lg:text-base text-[13px]">
                      CEO and Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {contentCarousel.map(
                (post, index) =>
                  index < 2 && (
                    <>
                      <div>
                        <img className="rounded-lg" src={post.srcImg} alt="" />
                      </div>
                      <div className="flex flex-col items-start">
                        <h3 className="font-medium text-[15px]">
                          {post.typeBlog} -{" "}
                          <span className="font-thin">July 2, 2020</span>
                        </h3>
                        <h2 className="text-[18px] cursor-pointer py-1 font-bold">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 py-1 text-[13px] lg:text-sm line-clamp-2">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
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
                            <h4 className="font-bold lg:text-base text-[13px]">
                              Sergy Campell
                            </h4>
                            <p className="text-gray-600 lg:text-base text-[13px]">
                              CEO and Founder
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )
              )}
            </div>
          </div>
          <div className=" flex justify-end my-7">
            <button className="py-3 border bg-transparent text-sm border-gray-400 px-10">
              VIEW MORE
            </button>
          </div>
        </div>
        {/* ALL BLOG */}
        <div className="lg:mt-20 mt-10">
          <div>
            <h3 className="font-bold py-3 text-lg">All blog posts</h3>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-5 lg:gap-y-10 gap-x-3 lg:gap-x-5">
            {contentCarousel.map((card) => (
              <div key={card.id} className="flex flex-col items-center">
                <div className="">
                  <img
                    className="w-[350px] bg-cover rounded-lg shadow-xl h-[180px]"
                    src={card.srcImg}
                    alt=""
                  />
                </div>
                <div className="lg:px-5 px-0 py-3">
                  <h3 className="font-medium text-[13px] lg:text-sm">
                    {card.typeBlog}
                  </h3>
                  <h2 className="text-[18px] py-1 font-bold cursor-pointer">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 py-1 text-[13px] lg:text-sm line-clamp-3">
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
                      <h4 className="font-bold lg:text-base text-[13px]">
                        Sergy Campell
                      </h4>
                      <p className="text-gray-600 lg:text-base text-[13px]">
                        CEO and Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-end my-7">
            <button className="py-3 border bg-transparent text-sm border-gray-400 px-10">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      <FooterPublic />
    </>
  );
}

export default HomePage;
