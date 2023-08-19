import { Link } from "react-router-dom";

interface INavbarMenuItem {
  linkSrc: string;
  title: string;
}

const NAVBAR_MENU_LINK: INavbarMenuItem[] = [
  {
    linkSrc: "/all-blogs-page",
    title: "All Articles",
  },
  {
    linkSrc: "/personal-dashboard",
    title: "Your dashboard",
  },
  {
    linkSrc: "",
    title: "About Us",
  },
  {
    linkSrc: "",
    title: "Account",
  },
  {
    linkSrc: "",
    title: "Support",
  },
  {
    linkSrc: "",
    title: "Settings",
  },
];

function SideBar() {
  return (
    <div className="drawer w-fit drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn drawer-button border-none hover:bg-transparent hover:border-none bg-transparent"
        >
          <svg
            className="swap-off fill-current w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="flex justify-between">
            <div>
              <Link to="/" className="flex justify-center w-full">
                <img
                  src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg"
                  className="p-4"
                  alt="LOGO"
                />
              </Link>
            </div>
            <div>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <label
                htmlFor="my-drawer"
                className="btn border-none drawer-button hover:bg-transparent hover:border-none bg-transparent"
              >
                <svg
                  className="swap-on fill-current w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
          <ul className="">
            <div className="collapse collapse-arrow">
              <input type="checkbox" name="my-accordion-1" />
              <div className="collapse-title">
                <li>
                  <Link to="">Categories</Link>
                </li>
              </div>
              <div className="collapse-content indent-7">
                <ul className="flex flex-col gap-3">
                  <li>Technology</li>
                  <li>Travel</li>
                  <li>Habits</li>
                  <li>Style</li>
                  <li>Food</li>
                </ul>
              </div>
            </div>
            {NAVBAR_MENU_LINK.map((item) => {
              return (
                <li key={item.title} className="px-4 mb-3">
                  <Link
                    to={item.linkSrc}
                    className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-4 hover:after:w-1/2 after:transition-all after:duration-500
                    cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
