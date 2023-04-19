function FooterPublic() {
  return (
    <>
      <div className="lg:h-[70vh] h-[50vh] w-full my-5 lg:mb-10">
        <div className="py-10 px-5 lg:px-20 bg-gray-300">
          <h3 className="font-bold text-base lg:text-[20px] py-3">Subcribe to newsletter</h3>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-10">
            <div className="lg:col-span-7">
              <input
                className="p-3 w-full outline-none rounded-md text-[13px] lg:text-[15px]"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="lg:col-span-3 text-center">
              <button className="py-4 bg-yellow-500 text-white px-10 lg:px-20 font-medium uppercase rounded-full text-[12px] lg:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 lg:mt-20 text-gray-500">
          <ul className="flex text-black cursor-pointer text-2xl lg:text-3xl justify-evenly w-[10%]">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
          <p className="lg:py-5 px-5 lg:px-10 py-3 text-[13px] text-center lg:text-base">
            Copyright ©2023 All rights reserved | This template is made with by
            <span className="text-orange-600"> vm-phung</span>
          </p>
          <p className="lg:py-5 py-3 text-[13px] lg:text-base">Terms & Conditions - Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default FooterPublic;
