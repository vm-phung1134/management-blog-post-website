import { Link } from "react-router-dom";
import { useUserFromCookies } from "../../hooks/useUserFromCookies";
import SearchFormBox from "../Form/SearchForm";
import { useCheckUserCookies } from "../../hooks/useCheckUserCookies";
import SideBar from "./SideBar";
import { useAuth } from "../../contexts/authLoginState";
import { useSocket } from "../../contexts/useSocket";
import { INotification } from "../../interface/notification";
import { TYPE_ACTION_NOTIFICATION } from "../../data/mockData";

const NotificationItem = ({ notify }: { notify: INotification }) => {
  let action: string;
  switch (notify.type) {
    case TYPE_ACTION_NOTIFICATION.SHARE_POST:
      action = "Has been share your post";
      break;
    case TYPE_ACTION_NOTIFICATION.COMMENT_POST:
      action = "Has been comment your post recently";
      break;
    case TYPE_ACTION_NOTIFICATION.LIKE_POST:
      action = "Has been just like your post";
      break;
    case TYPE_ACTION_NOTIFICATION.WELLCOME:
      action = "Wellcome you to my website";
      break;
    case TYPE_ACTION_NOTIFICATION.FOLLOWING:
      action = "Has been following you";
      break;
    case TYPE_ACTION_NOTIFICATION.ADD_POST:
      action = "Has been added new post";
      break;
    default:
      action = "Say hi to your";
      break;
  }
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <div className="avatar h-10">
          <div className="w-10 rounded-full">
            <img src={notify?.senderUser.avt} alt="Avatar" />
          </div>
        </div>
        <div className="flex flex-col">
          <small>22, August 2023</small>
          <p className="text-[13px]">
            <span className="font-medium">{notify.senderUser.name}</span>{" "}
            {action}
          </p>
          <small>Just now</small>
        </div>
      </div>
      <div>
        <button className="btn bg-transparent border-none">...</button>
      </div>
    </div>
  );
};

function Navbar() {
  const { logout } = useAuth();
  const { allNotifications } = useSocket();
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
        <div className="grid grid-cols-5">
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
          <div className="col-span-4 flex justify-end items-center text-[1.4rem]">
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
              <div className="flex">
                <div className="dropdown dropdown-end lg:block hidden">
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
                {/* NOTIFICATIONS */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>

                      <span className="badge badge-sm w-5 h-5 indicator-item text-white bg-red-500 border-none">
                        {allNotifications && allNotifications.length > 0
                          ? allNotifications.length
                          : "0"}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow-lg"
                  >
                    <div className="card-body">
                      <h3 className="font-bold text-md">Notifications</h3>
                      {allNotifications.length > 0 ? (
                        <div>
                          {allNotifications.map((notify, index) => {
                            return (
                              index < 5 && (
                                <NotificationItem
                                  key={notify.receiverAuthor.uid}
                                  notify={notify}
                                />
                              )
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-gray-300 py-5">Sorry, You don't have any message</p>
                      )}
                      <div className="flex justify-end">
                        <button className="btn border-none normal-case bg-transparent btn-xs hover:bg-transparent">
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
