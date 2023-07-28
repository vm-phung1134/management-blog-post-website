import { Link } from "react-router-dom";
import CreateBlogForm from "../../../../components/Form/CreateBlog";
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { IBlog } from "../../../../Interface/blog";
import { IUser } from "../../../../Interface/auth";
import Cookies from "js-cookie";
import { createBlog } from "../../../../redux/reducers/blog/api";
import ModalConfirm from "../../../../components/Elements/ModalAction";
import BlogViewEdit from "./BlogView";

export interface IContentTypeProps {
  content: string | TrustedHTML;
}

function CreateBlog() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
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
        id: "1",
        topic: "Epic title one",
        plot: "Epic description about your epic one",
        srcImg:
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        topic: "Epic title two",
        plot: "Epic description about your epic one",
        srcImg:
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        topic: "Epic title two",
        plot: "Epic description about your epic one",
        srcImg:
          "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    tags: ["Business", "Travel", "Technology"],
    likes: 0,
    views: 0,
    comments: 0,
  };
  const submitForm = () => {
    handleToggle();
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
              <div className="text-[13px] breadcrumbs">
                <ul>
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-2 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-2 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        ></path>
                      </svg>
                      Your blogs
                    </a>
                  </li>
                  <li className="text-orange-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    Create your blog
                  </li>
                </ul>
              </div>
              <hr />
              <div className="grid grid-cols-2 gap-5 mb-20">
                <div className="col-span-1">
                  <CreateBlogForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                  />
                  <ModalConfirm
                    open={open}
                    action={createBlog(values)}
                    setOpen={setOpen}
                    title="Message"
                    message="Are you sure you want to create this new blog post ?"
                    successMessage="New blog has been created"
                    errorMessage="Blog has been cancel"
                  />
                </div>
                <BlogViewEdit values={values} />
              </div>
              <ToastContainer
                className="font-sans"
                toastStyle={{ color: "black" }}
              />
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default CreateBlog;
