import { IBlog } from "../../../interface/blog";
import LineTitle from "../LineUnderTitle";

function BlogReview({ values }: { values: IBlog }) {
  return (
    <div className="col-span-1 h-[135vh] bg-white rounded-lg shadow-lg overflow-y-scroll hide-scrollbar my-[150px] lg:my-[40px]">
      <div className="flex max-h-full text-justify  flex-col justify-start items-center text-sm">
        <div className="relative mb-5">
          <figure>
            <img
              src={values.img}
              alt=""
              className="w-full object-cover overflow-hidden"
            />
          </figure>
          <div className="absolute top-0 left-0 right-1/4 bottom-0 text-white bg-black/60">
            <div className="flex flex-col items-start gap-3 relative top-1/2 -translate-y-1/2 px-5">
              <div className="flex gap-3 text-[12px]">
                <p>
                  <i className="fas fa-calendar-days"></i> July 18, 2023
                </p>
                -<p>3 Hours before</p>
              </div>

              <p className="text-3xl font-bold w-full">{values.title}</p>
              <button className="px-5 py-2 border border-white">See Now</button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <p className="w-full h-10 bg-orange-600"></p>
          </div>
        </div>
        <div className="mt-0">
          <img
            className="rounded-[50%] w-[30px] lg:w-[45px]"
            src={`${values.author.avt}`}
            alt=""
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold lg:text-base text-[13px]">
            {values.author.name}
          </h4>
          <p className="text-gray-600 text-[13px]">{values.author.email}</p>
        </div>
        <div className="flex text-gray-500 justify-between my-3">
          <p className="pr-3">
            <i className="fas fa-calendar-days"></i> July 18, 2023
          </p>
          <p className="pl-3">
            <i className="fas fa-comment"></i> 0 Comments
          </p>
        </div>
        <h2 className="font-bold px-5 leading-[3rem] text-[30px] text-center">
          {values.title}
        </h2>
        <LineTitle />
        <p className="mt-2 px-5 lg:px-10 leading-6">
          <span dangerouslySetInnerHTML={{ __html: values.description }} />
        </p>
        <div className="flex justify-start w-full">
          <div className="mt-3 mx-5 lg:mx-10 w-full">
            <ul className="border p-5 border-orange-600 w-fit">
              <p className="font-bold">Table of contents</p>
              {values.contents.map((epic, index) => (
                <li key={epic.id}>{`${(index += 1)}. ${epic.topic}`}</li>
              ))}
            </ul>
            <div className="w-full">
              {values.contents.map((epic, index) => (
                <section key={epic.id} className="w-full">
                  <h3 className="font-bold my-3 text-[18px]">
                    {(index += 1)}. {epic.topic}
                  </h3>
                  <p className="leading-6 pb-3 indent-7">{epic.plot}</p>
                  <figure className="w-full h-64">
                    <img
                      src={epic.srcImg}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </figure>
                </section>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full p-10">
          <div className="h-1 w-full border-b py-5 border-orange-400"></div>
          <div className="flex flex-col items-start w-full">
            <div className="text-black text-sm py-5">
              <div className=" flex gap-2 items-center">
                <span className="font-medium">Topics:</span>
                {values.tags.map((tag, index) => (
                  <button
                    className="btn-sx border text-[12px] py-1 px-2 bg-orange-600 text-white flex items-center shadow-md rounded-md"
                    key={index}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-20 border border-orange-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogReview;
