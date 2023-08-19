import Slider from "react-slick";
import { CATEGORIES_DATA } from "./mock-data";

function CategoriesBlog() {
  const settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
        <Slider {...settings}>
          {CATEGORIES_DATA.map((cate) => {
            return (
              <div key={cate.id} className="cursor-pointer py-5">
                <div className="card mx-2 w-auto bg-base-100 shadow-xl">
                  <figure>
                    <img src={cate.img} alt="Shoes" />
                  </figure>
                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title text-base">{cate.title}</h2>
                      <p className="text-sm">{cate.blogQuantity} Article</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
    </>
  );
}

export default CategoriesBlog;
