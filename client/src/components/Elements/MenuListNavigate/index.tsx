import { Link } from "react-router-dom";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";

function MenuListNavigate() {
  const [userCookies] = useUserFromCookies();
  return (
    <div className="flex justify-center w-full">
      <ul className="flex gap-10 text-sm font-medium">
        <li>
          <Link
            className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500
                    cursor-pointer py-1"
            to="/personal-dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500
                    cursor-pointer py-1"
            to={`/manager-your-blogs/${userCookies.uid}`}
          >
            Your blogs
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500
                    cursor-pointer py-1"
            to="#"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500
                    cursor-pointer py-1"
            to="#"
          >
            Plugins
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-orange-600 hover:bg-transparent relative after:absolute after:bg-orange-600 
                    after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500
                    cursor-pointer py-1"
            to="#"
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuListNavigate;
