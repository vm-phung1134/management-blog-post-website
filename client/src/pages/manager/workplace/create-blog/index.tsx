import { Link } from "react-router-dom";
import CreateBlogForm from "../../../../components/Form/CreateBlog";
import { Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { IBlog } from "../../../../Interface/blog";
import { IUser } from "../../../../Interface/auth";
import Cookies from "js-cookie";
import { useAppDispatch } from "../../../../redux/stores";
import LineTitle from "../../../../components/Elements/LineUnderTitle";
import { createBlog } from "../../../../redux/reducers/blog/api";
import { IAreaProps, IInputProps } from "./type";

export const InputForm = ({
  handleChange,
  handleBlur,
  values,
  label,
  disabled,
  name,
}: IInputProps) => {
  return (
    <label htmlFor={label} className="font-bold">
      {name}
      <input
        type="text"
        name={label}
        id={label}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        className="block font-thin w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
      />
    </label>
  );
};

export const AreaForm = ({
  handleChange,
  handleBlur,
  values,
  label,
  name,
  rows,
}: IAreaProps) => {
  return (
    <label htmlFor={label} className="font-bold">
      {name}
      <textarea
        name={label}
        id={label}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        className="block font-thin w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
        rows={parseInt(rows)}
      ></textarea>
    </label>
  );
};

function CreateBlog() {
  const dispatch = useAppDispatch();
  const user: IUser = {
    email: Cookies.get("email"),
    name: Cookies.get("userName"),
    token: Cookies.get("token"),
    avt: Cookies.get("profilePic"),
  };
  const initialValues: IBlog = {
    title: "Top 25 Free & Premium Headless",
    releaseDate: "",
    author: user,
    img: "https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Here is your description about your topic which are you want to share!",
    contents: [
      {
        topic: "Epic title one",
        plot: "Epic description about your epic one",
        srcImg:
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        topic: "Epic title two",
        plot: "Epic description about your epic one",
        srcImg:
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    tags: ["Business", "travel", "technology"],
    likes: 0,
    views: 0,
    comments: 0,
  };
  const submitForm = (values: IBlog) => {
    dispatch(createBlog(values));
    console.log("submit thành công")
  };
  const validate = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          //errors,
          //touched,
          handleBlur,
        } = formik;
        return (
          <>
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
                  <CreateBlogForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                </div>
                <div className="col-span-1 h-screen px-3 bg-white rounded-lg shadow-lg overflow-y-scroll my-[150px] lg:my-[80px]">
                  <div className="flex max-h-full text-justify  flex-col justify-start items-center text-sm">
                    <div className="relative mb-5">
                      <figure>
                        <img
                          src={values.img}
                          alt=""
                          className="w-full object-cover overflow-hidden"
                        />
                      </figure>
                      <div className="absolute top-0 left-0 right-1/4 bottom-0 text-white bg-black/60">
                        <div className="flex flex-col items-start gap-3 relative top-1/3 px-5">
                          <div className="flex gap-3 text-[12px]">
                            <p>
                              <i className="fas fa-calendar-days"></i> July 18,
                              2023
                            </p>
                            -<p>3 Hours before</p>
                          </div>

                          <p className="text-3xl font-bold w-full">
                            {values.title}
                          </p>
                          <button className="px-5 py-2 border border-white">
                            See Now
                          </button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0">
                        <p className="w-full h-10 bg-orange-600"></p>
                      </div>
                    </div>
                    <div className="mt-0">
                      <img
                        className="rounded-[50%] w-[30px] lg:w-[45px]"
                        src={`${user.avt}`}
                        alt=""
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold lg:text-base text-[13px]">
                        {user.name}
                      </h4>
                      <p className="text-gray-600 text-[13px]">{user.email}</p>
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
                      {values.title}
                    </h2>
                    <LineTitle />
                    <p className="mt-2 px-5 lg:px-10 leading-6 indent-7">
                      {values.description}
                    </p>
                    <div className="flex justify-start w-full">
                      <div className="mt-3 mx-5 lg:mx-10 w-full">
                        <ul className="border p-5 border-orange-600 w-fit">
                          <p className="font-bold">Table of contents</p>
                          {values.contents.map((epic, index) => (
                            <li key={epic.topic}>{`${(index += 1)}. ${
                              epic.topic
                            }`}</li>
                          ))}
                        </ul>
                        <div className="w-full">
                          {values.contents.map((epic, index) => (
                            <section key={epic.topic} className="w-full">
                              <h3 className="font-bold my-3 text-[18px]">
                                {(index += 1)}. {epic.topic}
                              </h3>
                              <p className="leading-6 pb-3 indent-7">
                                {epic.plot}
                              </p>
                              <figure className="w-full h-64">
                                <img
                                  src={epic.srcImg}
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </figure>
                            </section>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-full border-b py-5 border-orange-400"></div>
                    <div className="flex flex-col items-start w-full">
                      <div className="text-black text-sm py-5">
                        <div className=" flex gap-2">
                          <span className="font-medium">Topics:</span>
                          {values.tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                          ))}
                        </div>
                      </div>
                      <div className="w-20 border border-orange-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default CreateBlog;
