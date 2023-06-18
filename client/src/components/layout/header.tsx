import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

function HeaderPublic() {
  const [activeSideBar, setActiveSideBar] = useState("-300px");
  const navigator = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove("userName");
        Cookies.remove("email");
        Cookies.remove("profilePic");
        Cookies.remove("token");
        navigator("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkCookie = (): boolean => {
    const userName: string | undefined = Cookies.get("userName");
    return userName !== undefined;
  };
  // useEffect(() => {
  //   const token: string | undefined = Cookies.get("token");
  //   if (!token) {
  //     navigator("/login");
  //     return;
  //   }
  // }, [navigator]);
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
            name="search"
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
            {checkCookie() === false ? (
              <div className="hidden justify-between items-center gap-5 mx-8 lg:flex">
                <Link className="text-sm font-bold" to="/login">
                  Login
                </Link>
                <Link
                  className="text-sm bg-orange-600 rounded text-white py-2 px-5"
                  to="/register"
                >
                  Create Your Blog
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end mx-8 lg:block hidden">
                <label
                  tabIndex={0}
                  className="btn mx-1 border-none text-[12px] font-bold bg-white"
                >
                  {Cookies.get("userName")}
                  <div className="avatar online">
                    <div className="w-9 rounded-full">
                      <img src={`${Cookies.get("profilePic")}`} alt="Avatar" />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="#">Your Dashboard</Link>
                  </li>
                  <li>
                    <Link to="#">Manager</Link>
                  </li>
                  <li>
                    <Link to="#">Account</Link>
                  </li>
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link to="#">Sign Out</Link>
                  </li>
                </ul>
              </div>
            )}

            <button onClick={() => setActiveSideBar("0px")}>
              <i className="fas fa-light fa-bars"></i>
            </button>
            <div
              className={` ${
                activeSideBar !== "-300px" ? "right-0" : "right-[-300px]"
              }  h-full ease-in-out duration-500 w-[45%] lg:w-[18%] z-10 py-20 px-10 top-0 fixed shadow-2xl bg-white`}
            >
              <ul className="text-[15px] cursor-pointer flex flex-col items-start">
                {/* BLOG */}
                <li className="py-3 ease-out duration-400 text-orange-600 text-sm lg:text-lg uppercase">
                  Blog
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  News
                </li>
                <li className="pb-1 ease-out duration-400 hover:text-orange-600">
                  All blog posts
                </li>
                {/* TOPICS */}
                <li className="py-3 ease-out duration-400 text-orange-600 text-sm lg:text-lg uppercase">
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
                <li className="py-3 ease-out duration-400 text-orange-600 text-sm lg:text-lg uppercase">
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
              {checkCookie() === false ? (
                <div className="flex flex-col justify-between items-center mt-5 bg-orange-600 text-white py-2 rounded-md text-sm lg:hidden">
                  <Link className="text-[15px] font-bold" to="/login">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="dropdown dropdown-left lg:hidden">
                  <label
                    tabIndex={0}
                    className="btn mx-1 border-none outline-none text-[12px] font-bold bg-white"
                  >
                    <div className="avatar online">
                      <div className="w-9 rounded-full">
                        <img
                          src={`${Cookies.get("profilePic")}`}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu text-[13px] shadow bg-base-100 rounded-box w-30"
                  >
                    <li>
                      <Link to="#">Your Dashboard</Link>
                    </li>
                    <li>
                      <Link to="#">Manager</Link>
                    </li>
                    <li>
                      <Link to="#">Account</Link>
                    </li>
                    <li>
                      <Link to="#">Settings</Link>
                    </li>
                    <li onClick={handleLogout}>
                      <Link to="#">Sign Out</Link>
                    </li>
                  </ul>
                </div>
              )}

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
