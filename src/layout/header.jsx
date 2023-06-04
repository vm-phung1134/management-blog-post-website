import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderPublic() {
  const [activeSideBar, setActiveSideBar] = useState("-300px");
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-y-1 px-5 lg:px-20 py-5 border-b shadow-md border-gray-300 lg:fixed lg:top-0 w-full z-10 bg-white/95">
        <div className="flex lg:hidden justify-center items-center mt-2 lg:mt-0">
          <img
            src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg"
            className="py-2"
            alt="LOGO"
          />
        </div>
        <div className="flex items-center relative justify-center lg:justify-start">
          <input
            className="px-4 w-[80%] py-[6px]  focus:outline-none text-sm border border-gray-300 rounded-2xl placeholder:text-sm"
            type="text"
            placeholder="Search..."
          />
          <div className="absolute right-[15%] lg:right-[25%]">
            <i className="fas fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="lg:flex justify-center items-center hidden">
          <Link to="/" className="flex justify-center w-full">
            <img
              src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg"
              className="py-2 w-[25%]"
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="grid grid-cols-4">
          <ul className="flex justify-evenly items-center text-[20px]">
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
          <div className="col-span-3 flex justify-end items-center text-[1.4rem]">
            <div className="hidden justify-between items-center gap-5 mx-8 lg:flex">
              <Link className="text-sm font-bold" to="/login-account">
                Login
              </Link>
              <Link
                className="text-sm bg-orange-600 rounded text-white py-2 px-5"
                to="/register"
              >
                Create Your Blog
              </Link>
            </div>
            <button onClick={() => setActiveSideBar("0px")}>
              <i className="fas fa-light fa-bars"></i>
            </button>
            <div
              className={` ${activeSideBar !== '-300px' ? 'right-0' : 'right-[-300px]'}  h-full ease-in-out duration-500 w-[45%] lg:w-[18%] z-10 py-20 px-10 top-0 fixed shadow-2xl bg-white`}
            >
              <ul className="text-[15px] cursor-pointer flex flex-col items-start">
                {/* BLOG */}
                <li className="py-3 ease-out duration-400 text-orange-600 text-lg lg:text-lg uppercase">
                  Blog
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  News
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  All blog posts
                </li>
                {/* TOPICS */}
                <li className="py-3 ease-out duration-400 text-orange-600 text-lg lg:text-lg uppercase">
                  Topics
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Marketing
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Travel & culture
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Business
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Food
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Technology & Software
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Live, hobbies
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Style
                </li>
                {/* SUPPORT */}
                <li className="py-3 ease-out duration-400 text-orange-600 text-lg lg:text-lg uppercase">
                  Support
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  Fix & Documentation
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  account
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  policy
                </li>
              </ul>
              <div className="flex flex-col justify-between gap-y-3 lg:hidden">
                <Link className="text-[15px] font-bold" to="/">
                  Login
                </Link>
                <Link
                  className="text-[15px] bg-orange-600 rounded text-white py-2 px-5 text-center"
                  to="/"
                >
                  Register
                </Link>
              </div>
              <button
                onClick={() => setActiveSideBar("-300px")}
                className="absolute top-0 right-0 p-5"
              >
                <i className="fas fa-light fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPublic;
