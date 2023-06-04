import Slider from "react-slick";
import { NavLink } from "react-router-dom";

function Carousel() {
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
      <Slider className="mx-[5px] lg:mx-0" {...settings}>
        {contentCarousel.map((slide) => (
          <div key={slide.id}>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-8 mt-20 rounded-md">
              <div className="lg:col-span-4">
                <img
                  className="bg-cover w-full object-cover shadow-xl h-[200px] lg:h-[390px]"
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
                  <p className="text-gray-600 text-[13px] lg:line-clamp-4 lg:text-base text-justify w-[95%] py-2 lg:py-3 ">
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
                      <p className="font-bold text-[15px]">Sergy Campell</p>
                      <small className="text-gray-600 text-[13px]">
                        CEO and Founder
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Carousel;
