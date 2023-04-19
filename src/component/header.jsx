import { useState } from "react";

function HeaderPublic() {
  const [activeSideBar, setActiveSideBar] = useState("-300px")
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 px-5 lg:px-20 py-4 border-b border-gray-300">
        <div className="flex block lg:hidden justify-center items-center">
          <p className="font-bold text-lg">BUSINESS BLOG</p>
        </div>
        <div className="flex justify-center mt-3 lg:justify-start">
            {/* <i className="fas fa-magnifying-glass"></i> */}
            <input className="px-4 w-[70%] py-[6px] focus:outline-none text-sm border border-gray-300 rounded-2xl placeholder:text-sm" type="text" placeholder="Search..." />
        </div>
        <div className="flex justify-center items-center">
          <p className="font-bold text-lg hidden lg:block">BUSINESS BLOG</p>
        </div>
        <div className="grid grid-cols-4 text-end">
          <ul className="flex justify-evenly items-center">
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
          <div className="col-span-3 flex justify-end text-[2rem]">
            <button onClick={() => setActiveSideBar("0px")}>
              <i className="fas fa-light fa-bars"></i>
            </button>
            <div style={{right: activeSideBar !== "-300px" ? "0px" : activeSideBar }} className="h-full ease-in-out duration-500 w-[270px] z-10 py-20 px-10 top-0 fixed shadow-2xl bg-white">
              <ul className="text-[15px] cursor-pointer flex flex-col items-start">
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">Home page</li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">Categories</li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">Travel</li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">Business</li>
              </ul>
              <div onClick={() => setActiveSideBar("-300px")} className="absolute cursor-pointer top-0 right-0 p-5">
                <i className="fas fa-light fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPublic;
