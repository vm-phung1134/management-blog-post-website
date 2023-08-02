import { Link } from "react-router-dom";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";

function MenuListNavigate() {
  const [userCookies] = useUserFromCookies();
  return (
    <div className="flex justify-center w-full">
      <ul className="flex gap-10 text-sm font-medium">
        <li>
          <Link to="/personal-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to={`/manager-your-blogs/${userCookies.uid}`}>Your blogs</Link>
        </li>
        <li>
          <Link to="#">Account</Link>
        </li>
        <li>
          <Link to="#">Plugins</Link>
        </li>
        <li>
          <Link to="#">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuListNavigate;
