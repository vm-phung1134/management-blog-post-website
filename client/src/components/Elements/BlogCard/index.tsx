import { IBlogCardProps } from "./type";

function CardBlog({ card }: IBlogCardProps) {
  return (
    <>
      <div key={card.id} className="flex flex-col gap-y-[10px] items-center ">
        <div className="w-full relative">
          <img
            className="object-cover w-full rounded-lg shadow-xl h-[280px]"
            src={card.srcImg}
            alt=""
          />
          <div className="p-2 text-white absolute bottom-0 left-0 bg-black/50">
            <h1 className="font-medium text-[12px]">{card.typeBlog}</h1>
            <h2 className="lg:text-[16px] text-sm font-bold cursor-pointer">
              {card.title}
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <p className="text-gray-600 py-1 text-[13px] lg:text-sm text-justify line-clamp-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex items-center text-sm">
            <div className="pr-3">
              <img
                className="rounded-[50%] w-[20px] lg:w-[40px]"
                src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp"
                alt=""
              />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="hidden lg:block">
                <p className="font-bold text-[13px]">Sergy Campell</p>
                <small className="text-gray-600 text-[10px]">
                  CEO and Founder
                </small>
              </div>
              <div className="text-end">
                <p className="font-medium text-[10px] lg:text-[12px]">
                  Updated: May 30, 2023
                </p>
                <p className="font-thin text-[8px] lg:text-[10px]">
                  Published: May 29, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBlog;
