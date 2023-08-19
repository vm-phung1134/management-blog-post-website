function FooterPublic() {
  return (
    <>
      <div className=" w-full py-5 bg-black/95 text-white">
        <div className="py-10 px-5 lg:px-20 flex flex-col gap-y-5">
          <h3 className="font-bold text-base lg:text-[20px]">
            Subscribe to newsletter
          </h3>
          <p>Pick the blog emails you want to receive</p>
          <p className="text-[13px] w-full lg:w-[50%] font-thin text-justify">
            We're committed to your privacy. HubSpot uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information, check out our privacy policy.
          </p>
          <div className="flex gap-3">
            <label className="cyberpunk-checkbox-label" htmlFor="business">
              <input
                className="cyberpunk-checkbox"
                type="checkbox"
                name="business"
              />
              Business
            </label>
            <label className="cyberpunk-checkbox-label" htmlFor="marketing">
              <input
                className="cyberpunk-checkbox"
                type="checkbox"
                name="marketing"
              />
              Marketing
            </label>
            <label className="cyberpunk-checkbox-label" htmlFor="travel">
              <input
                className="cyberpunk-checkbox"
                type="checkbox"
                name="travel"
              />
              Travel
            </label>
          </div>
          <form action="" className="grid grid-cols-1 gap-3 lg:grid-cols-10">
            <div className="lg:col-span-7">
              <input
                className="p-3 w-full outline-none rounded-md text-black text-[13px] lg:text-[15px]"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="lg:col-span-3 text-center">
              <button className="py-4 bg-gradient-to-r from-orange-800 to-orange-500 text-white px-10 lg:px-20 font-medium uppercase rounded-full text-[12px] lg:text-sm">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <ul className="flex cursor-pointer text-xl lg:text-xl justify-evenly gap-5">
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
          <p className="lg:py-3 px-5 lg:px-10 py-3 text-[12px] text-center lg:text-sm">
            Copyright ©2023 All rights reserved | This template is made with by
            <span className="text-orange-600"> vm-phung</span>
          </p>
          <p className="text-[11px] lg:text-[13px]">
            Terms & Conditions - Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterPublic;
