import { Link } from "react-router-dom";
import HeaderPublic from "../../layout/header";
import LineTitle from "../../reusable/line_title";
import CreateBlogForm from "./createBlogForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateBlog() {
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
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <CreateBlogForm/>
          </div>
          <div className="col-span-1">
            <div className="flex max-h-full text-justify py-[150px] lg:py-[70px] flex-col justify-start items-center text-sm">
              <div className="mt-0">
                <img
                  className="rounded-[50%] w-[30px] lg:w-[45px]"
                  src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold lg:text-base text-[13px]">
                  Sergy Campell
                </h4>
                <p className="text-gray-600 text-[13px]">CEO and Founder</p>
              </div>
              <div className="flex text-gray-500 justify-between my-3">
                <p className="pr-3">
                  <i className="fas fa-calendar-days"></i> July 18, 2023
                </p>
                <p className="pl-3">
                  <i className="fas fa-comment"></i> 0 Comments
                </p>
              </div>
              <h2 className="font-bold leading-[3rem] text-[30px] text-center">
                Top 25 Free & Premium Headless
              </h2>
              <LineTitle />
              <p className="mt-2 px-5 lg:px-10 leading-6">
                The development of the World Wide Web is a huge step forward in
                making information sharing globalized, fast and cost-effective.
                Smartphones allow us to capture information on the go, and the
                Internet of Things (IoT) is connecting us even more, creating
                demand for new media management systems in the form of headless
                content management systems (headless CMS).
              </p>
              <div className="flex justify-start w-full">
                <div className="mt-3 mx-5 lg:mx-10 ">
                  <ul className="border p-5 border-orange-600 w-fit">
                    <p className="font-bold">Table of contents</p>
                    <li>1. What is the Internet of Things</li>
                    <li>2. Explaination of Headless CMS</li>
                    <li>3. Top 25 Top Headless CMS</li>
                  </ul>
                  <h3 className="font-bold my-3 text-[18px]">
                    1. What is the Internet of Things
                  </h3>
                  <p className="leading-6">
                    Internet of Things(IoT) is commonly used in
                    internet-connected smart devices. Examples of IoT include
                    smart home devices, like the Nest thermostat, virtual
                    assistants like Amazon Alexa or Google Home, and smart
                    wearable accessories, like Fitbit. Business IoT is also
                    common, with bot-based warehouse management capabilities,
                    traffic analysis sensors, smart weighing shelves and more.
                    According toStatesman, by 2021, there will be more than 11
                    billion IoT devices in use globally. By 2030, experts
                    predict this number will reach more than 29 billion. Neil
                    Patel, founder of KISSmetrics and former Forbes contributor,
                    wrote that the internet is on its way to becoming "an
                    indispensable thing". That is, for people living in
                    developed cities, the internet will always play a role in
                    society and home life through multiple devices, screens,
                    speakers and touch points. Brands that want to reach
                    consumers through these smart devices will need to find new
                    ways to deliver content. That's when the headless CMS was
                    born.
                  </p>
                  <h3 className="font-bold my-5 text-[18px]">
                    2. Explaination of Headless CMS
                  </h3>
                  <p className="leading-6">
                    Internet of Things(IoT) is commonly used in
                    internet-connected smart devices. Examples of IoT include
                    smart home devices, like the Nest thermostat, virtual
                    assistants like Amazon Alexa or Google Home, and smart
                    wearable accessories, like Fitbit. Business IoT is also
                    common, with bot-based warehouse management capabilities,
                    traffic analysis sensors, smart weighing shelves and more.
                    According toStatesman, by 2021, there will be more than 11
                    billion IoT devices in use globally. By 2030, experts
                    predict this number will reach more than 29 billion. Neil
                    Patel, founder of KISSmetrics and former Forbes contributor,
                    wrote that the internet is on its way to becoming "an
                    indispensable thing". That is, for people living in
                    developed cities, the internet will always play a role in
                    society and home life through multiple devices, screens,
                    speakers and touch points. Brands that want to reach
                    consumers through these smart devices will need to find new
                    ways to deliver content. That's when the headless CMS was
                    born.
                  </p>
                  <h3 className="font-bold my-5 text-[18px]">
                    3. Top 25 Top Headless CMS
                  </h3>
                  <p className="leading-6">
                    Internet of Things(IoT) is commonly used in
                    internet-connected smart devices. Examples of IoT include
                    smart home devices, like the Nest thermostat, virtual
                    assistants like Amazon Alexa or Google Home, and smart
                    wearable accessories, like Fitbit. Business IoT is also
                    common, with bot-based warehouse management capabilities,
                    traffic analysis sensors, smart weighing shelves and more.
                    According toStatesman, by 2021, there will be more than 11
                    billion IoT devices in use globally. By 2030, experts
                    predict this number will reach more than 29 billion. Neil
                    Patel, founder of KISSmetrics and former Forbes contributor,
                    wrote that the internet is on its way to becoming "an
                    indispensable thing". That is, for people living in
                    developed cities, the internet will always play a role in
                    society and home life through multiple devices, screens,
                    speakers and touch points. Brands that want to reach
                    consumers through these smart devices will need to find new
                    ways to deliver content. That's when the headless CMS was
                    born.
                  </p>
                </div>
              </div>
              <div className="h-1 w-full border-b py-5 border-orange-400"></div>
              <div className="flex flex-col items-start w-full">
                <p className="text-black text-sm py-5">
                  <span className="font-medium">Topics:</span> Business,
                  Marketing
                </p>
                <div className="w-20 border border-orange-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
