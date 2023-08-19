import { Link } from "react-router-dom";
import { useUserFromCookies } from "../../hooks/useUserFromCookies";
import SearchFormBox from "../Form/SearchForm";
import { useCheckUserCookies } from "../../hooks/useCheckUserCookies";
import SideBar from "./SideBar";
import { useAuth } from "../../contexts/authLoginState";

function Navbar() {
  const { logout } = useAuth();
  const [userCookies] = useUserFromCookies();
  const isEmptyUserCookies = useCheckUserCookies(userCookies);
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
        <SearchFormBox />
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
            {isEmptyUserCookies ? (
              <div className="hidden justify-between items-center gap-5 mx-8 lg:flex">
                <Link className="text-sm font-bold" to="/login">
                  Sign in
                </Link>
                <Link
                  className="text-sm bg-gradient-to-r from-orange-700 to-orange-400 rounded text-white py-2 px-3"
                  to="/register"
                >
                  Register account
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end mx-8 lg:block hidden">
                <label
                  tabIndex={0}
                  className="btn mx-1 border-none text-[12px] font-bold bg-white"
                >
                  {userCookies.name}
                  <div className="avatar online">
                    <div className="w-9 rounded-full">
                      <img src={userCookies.avt} alt="Avatar" />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/personal-dashboard">Dashboard</Link>
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
                  <li onClick={logout}>
                    <Link to="#">Sign Out</Link>
                  </li>
                </ul>
              </div>
            )}
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
