import { Link} from "react-router-dom";
import HeaderPublic from "../../layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserBlogs() {
  return (
    <>
      <HeaderPublic />
      <div className="mt-[80px] p-10 bg-slate-100 min-h-screen max-h-full">
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

        <div className="my-5">
          <hr />
          <h3 className="py-3 text-sm">
            Filter your type blogs{" "}
            <FontAwesomeIcon icon={["fas", "arrow-down-short-wide"]} />
          </h3>
          <div className="flex justify-between">
            <ul className="flex gap-3">
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Business
              </li>
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Travel
              </li>
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Fashion
              </li>
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Style
              </li>
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Magazine
              </li>
              <li className="py-2 px-5 font-thin text-[13px] border rounded-lg hover:text-orange-600 cursor-pointer hover:border-orange-500 ease-in-out duration-300 bg-white w-[100px] text-center">
                Pet
              </li>
            </ul>
            <Link to="create-new-blog">
            <button className="font-medium text-sm px-5 flex gap-3 items-center py-2 bg-orange-600 rounded-lg text-white">
              <FontAwesomeIcon icon={["fas", "check"]} />
              <p>Create New Blog</p>
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="col-span-1 flex flex-col gap-5">
            <div className="relative cursor-pointer">
              <img
                src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 overflow-hidden bg-fixed bg-black/80">
                <div className="text-white text-sm">
                  <div className="flex justify-between p-3">
                    <p className="text-xl absolute top-2 right-3">
                      <FontAwesomeIcon icon={["fas", "heart"]} />
                    </p>
                  </div>
                  <div>
                    <button className="border hover:bg-orange-600 hover:border-none ease-in duration-200 py-2 px-5 rounded-md absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      Update Blog
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <p className="text-[13px]">Travel | Business</p>
                    <h3 className="uppercase text-orange-500 mt-2 mb-5 text-[17px]">
                      Manage campaigns and nurture leads with marketing
                    </h3>
                    <div className="flex justify-between flex-grow">
                      <div className="hidden lg:block">
                        <p className="font-bold text-sm">Sergy Campell</p>
                        <small className="text-gray-100 text-[12px]">
                          CEO and Founder
                        </small>
                      </div>
                      <div className="text-end">
                        <p className="font-medium text-[10px] lg:text-[13px]">
                          Updated: May 30, 2023
                        </p>
                        <p className="font-thin text-[8px] lg:text-[12px]">
                          Published: May 29, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative cursor-pointer">
              <img
                src="https://images.pexels.com/photos/17152635/pexels-photo-17152635/free-photo-of-the-arc-de-triomphe-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 overflow-hidden bg-fixed bg-black/80">
                <div className="text-white text-sm">
                  <div className="flex justify-between p-3">
                    <p className="text-xl absolute top-2 right-3">
                      <FontAwesomeIcon icon={["fas", "heart"]} />
                    </p>
                  </div>
                  <div>
                    <button className="border hover:bg-orange-600 hover:border-none ease-in duration-200 py-2 px-5 rounded-md absolute top-3 left-3">
                      Update Blog
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-3 right-3">
                    <p className="text-[13px]">Travel | Business</p>
                    <h3 className="uppercase text-orange-500 mt-2 mb-5 text-[17px]">
                      Manage campaigns and nurture leads with marketing
                    </h3>
                    <div className="flex justify-between flex-grow">
                      <div className="hidden lg:block">
                        <p className="font-bold text-sm">Sergy Campell</p>
                        <small className="text-gray-100 text-[12px]">
                          CEO and Founder
                        </small>
                      </div>
                      <div className="text-end">
                        <p className="font-medium text-[10px] lg:text-[13px]">
                          Updated: May 30, 2023
                        </p>
                        <p className="font-thin text-[8px] lg:text-[12px]">
                          Published: May 29, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="">
              <img
                src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/1068640/pexels-photo-1068640.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="">
              <img
                src="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/17224379/pexels-photo-17224379/free-photo-of-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="">
              <img
                src="https://images.pexels.com/photos/4240493/pexels-photo-4240493.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBlogs;
