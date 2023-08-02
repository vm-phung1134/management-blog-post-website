import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { IBlog } from "../../../../interface/blog";
import { createBlog } from "../../../../redux/reducers/blog/api";
import ModalConfirm from "../../../../components/Elements/ModalAction";
import { useUserFromCookies } from "../../../../hooks/useUserFromCookies";
import BreadCrumbs from "../../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_CREATE_BLOG } from "./mock-data";
import MenuListNavigate from "../../../../components/Elements/MenuListNavigate";
import BlogForm from "../../../../components/Form/BlogForm";
import BlogReview from "../../../../components/Elements/BlogReview";

function CreateBlog() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const [userCookies] = useUserFromCookies();
  const initialValues: IBlog = {
    title: "Top 25 Free & Premium Headless",
    releaseDate: "",
    author: userCookies,
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
  console.log("re-render");
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
              <MenuListNavigate />
              <BreadCrumbs items={BREAD_CRUMBS_CREATE_BLOG} />
              <hr />
              <div className="grid grid-cols-2 gap-5 mb-20">
                <div className="col-span-1">
                  <BlogForm
                    titleForm="Create your new blog"
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
                <BlogReview values={values} />
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
