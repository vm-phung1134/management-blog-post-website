import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dashboard() {
  return (
    <>
      <div className="mt-[80px] p-10 bg-slate-100 h-screen">
        <div className="flex justify-center w-full">
          <ul className="flex gap-10 text-sm font-medium">
            <li>
              <Link to="/personal-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/manager-your-blogs">Your blogs</Link>
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
        <div className="flex justify-between my-5 mx-10 bg-white px-7 py-5 rounded-full">
          <div className="flex gap-10 text-[13px] text-gray-600 font-thin">
            <p>Overview</p>
            <p>Customization</p>
          </div>
          <div></div>
        </div>
        {/* CARD */}
        <div className="px-10 w-full grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <div className="flex relative overflow-hidden gap-5 items-center shadow-lg px-5 bg-white rounded-xl py-5">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold">Total Ballance</h3>
                <p className="text-green-600">+ $38.55</p>
                <p className="text-[13px] text-black">
                  Last Transaction:{" "}
                  <span className="text-black font-thin text-[12px]">
                    last 5 minutes
                  </span>
                </p>
                <div className="flex gap-3 text-sm">
                  <button className="px-6 py-2 text-white rounded-full bg-[#f05129]">
                    Top up
                  </button>
                  <button className="px-6 py-2 bg-white rounded-full border border-[#f05129] text-[#f05129]">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className=" h-full absolute top-0 right-[-20%] w-[270px] bg-[#f05129] rounded-full flex-grow">
                <div className="flex flex-col justify-center h-full absolute left-[20%]">
                  <button className="absolute rounded-full px-2 text-white top-1 right-[-20px] border-2">
                    S
                  </button>
                  <p className="text-[28px] text-white font-bold">$ 381</p>
                  <p className="uppercase text-[11px] text-gray-200">
                    wallets amount
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 my-5 text-sm">
              <div className="p-3 rounded-md shadow-md bg-white font-bold flex-grow flex justify-between">
                <div>
                  <h3 className="my-1">Followers</h3>
                  <p className="text-[20px]">
                    1.053{" "}
                    <span className="text-green-600  text-[13px]">+55%</span>
                  </p>
                </div>
                <div>
                  <button className="p-3 rounded-2xl text-white bg-orange-500">
                    Get
                  </button>
                </div>
              </div>
              <div className="p-3 rounded-md shadow-md bg-white font-bold flex-grow flex justify-between">
                <div>
                  <h3 className="my-1">Following</h3>
                  <p className="text-[20px]">
                    128{" "}
                    <span className="text-green-600  text-[13px]">+55%</span>
                  </p>
                </div>
                <div>
                  <button className="p-3 rounded-2xl text-white bg-orange-500">
                    Get
                  </button>
                </div>
              </div>
              <div className="p-3 rounded-md shadow-md bg-white font-bold flex-grow flex justify-between">
                <div>
                  <h3 className="my-1">Blogs</h3>
                  <p className="text-[20px]">
                    40 <span className="text-green-600 text-[13px]">+55%</span>
                  </p>
                </div>
                <div>
                  <button className="p-3 rounded-2xl text-white bg-orange-500">
                    Get
                  </button>
                </div>
              </div>
              <div className="p-3 rounded-md shadow-md bg-white font-bold flex-grow flex justify-between">
                <div>
                  <h3 className="my-1">Types</h3>
                  <p className="text-[20px]">
                    6<span className="text-green-600 text-[13px]"> + 4</span>
                  </p>
                </div>
                <div>
                  <button className="p-3 rounded-2xl text-white bg-orange-500">
                    Get
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-3 rounded-xl bg-white">
              <div className="flex justify-between px-4 mt-3 text-sm font-bold">
                <h3>List New Followers</h3>
                <p>...</p>
              </div>

              <div className="flex justify-between p-3 text-sm">
                <div className="flex gap-2">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">John Thompson</h3>
                    <small>Content Creator</small>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="text-blue-600 text-[12px]">
                    + Follow
                  </button>
                  <button className="text-black text-[13px]">
                    View profile
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <div className="flex gap-2">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">John Thompson</h3>
                    <small>Creator, Tiktoker</small>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="text-blue-600 text-[12px]">
                    + Follow
                  </button>
                  <button className="text-black text-[13px]">
                    View profile
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <div className="flex gap-2">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Sophia</h3>
                    <small>Creator, Designer</small>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="text-blue-600 text-[12px]">
                    + Follow
                  </button>
                  <button className="text-black text-[13px]">
                    View profile
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <div className="flex gap-2">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Elizabeth</h3>
                    <small>Blogger, business</small>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="text-blue-600 text-[12px]">
                    + Follow
                  </button>
                  <button className="text-black text-[13px]">
                    View profile
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-3 text-sm">
                <div className="flex gap-2">
                  <div className="avatar online">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Elizabeth</h3>
                    <small>Blogger, bussiness</small>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button className="text-blue-600 text-[12px]">
                    + Follow
                  </button>
                  <button className="text-black text-[13px]">
                    View profile
                  </button>
                </div>
              </div>
              <button className="text-center font-medium py-2 text-sm">
                More ...
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-3 rounded-xl bg-white">
              <div className="flex justify-between px-4 mt-3 text-sm font-bold">
                <h3>Recent your blogs</h3>
                <p>...</p>
              </div>

              <div className="flex justify-between p-4 text-sm">
                <div className="flex flex-col">
                  <h3 className="font-medium truncate">
                    The Creative Exchange
                  </h3>
                  <small className="font-medium">Travel, Experience</small>
                  <small>Published: May 25, 2023</small>
                </div>
                <div className="flex flex-col justify-between">
                  <ul className="flex gap-2 text-[12px]">
                    <li>
                      <FontAwesomeIcon icon={["far", "heart"]} />{" "}
                      <span className="font-medium">1.034</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "comment"]} />{" "}
                      <span className="font-medium">10</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "share-square"]} />{" "}
                      <span className="font-medium">3</span>
                    </li>
                  </ul>
                  <button className="text-[#f05129] text-[13px] text-end">
                    View
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 text-sm">
                <div className="flex flex-col">
                  <h3 className="font-medium truncate">
                    The Creative Exchange
                  </h3>
                  <small className="font-medium">Travel, Experience</small>
                  <small>Published: May 25, 2023</small>
                </div>
                <div className="flex flex-col justify-between">
                  <ul className="flex gap-2 text-[12px]">
                    <li>
                      <FontAwesomeIcon icon={["far", "heart"]} />{" "}
                      <span className="font-medium">1.034</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "comment"]} />{" "}
                      <span className="font-medium">10</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "share-square"]} />{" "}
                      <span className="font-medium">3</span>
                    </li>
                  </ul>
                  <button className="text-[#f05129] text-[13px] text-end">
                    View
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 text-sm">
                <div className="flex flex-col">
                  <h3 className="font-medium truncate">
                    The Creative Exchange
                  </h3>
                  <small className="font-medium">Travel, Experience</small>
                  <small>Published: May 25, 2023</small>
                </div>
                <div className="flex flex-col justify-between">
                  <ul className="flex gap-2 text-[12px]">
                    <li>
                      <FontAwesomeIcon icon={["far", "heart"]} />{" "}
                      <span className="font-medium">1.034</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "comment"]} />{" "}
                      <span className="font-medium">10</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "share-square"]} />{" "}
                      <span className="font-medium">3</span>
                    </li>
                  </ul>
                  <button className="text-[#f05129] text-[13px] text-end">
                    View
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 text-sm">
                <div className="flex flex-col">
                  <h3 className="font-medium truncate">
                    The Creative Exchange
                  </h3>
                  <small className="font-medium">Travel, Experience</small>
                  <small>Published: May 25, 2023</small>
                </div>
                <div className="flex flex-col justify-between">
                  <ul className="flex gap-2 text-[12px]">
                    <li>
                      <FontAwesomeIcon icon={["far", "heart"]} />{" "}
                      <span className="font-medium">1.034</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "comment"]} />{" "}
                      <span className="font-medium">10</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={["far", "share-square"]} />{" "}
                      <span className="font-medium">3</span>
                    </li>
                  </ul>
                  <button className="text-[#f05129] text-[13px] text-end">
                    View
                  </button>
                </div>
              </div>
              <button className="text-center font-medium py-2 text-sm">
                More ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
