import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { IBlog } from "../../../../interface/blog";
import { createBlog } from "../../../../redux/reducers/blog/api";
import ModalAction from "../../../../components/Elements/ModalAction";
import { useUserFromCookies } from "../../../../hooks/useUserFromCookies";
import BreadCrumbs from "../../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_CREATE_BLOG } from "./mock-data";
import MenuListNavigate from "../../../../components/Elements/MenuListNavigate";
import BlogForm from "../../../../components/Form/BlogForm";
import BlogReview from "../../../../components/Elements/BlogReview";
import { ICategoriesItem } from "../../../../components/Elements/CategoriesBLog/type";

function CreateBlog() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const [userCookies] = useUserFromCookies();
  const [selectedValues, setSelectedValues] = useState<ICategoriesItem[]>([]);
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
    likes: 0,
    views: 0,
    comments: [],
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
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                  />
                  <ModalAction
                    open={open}
                    className="bg-green-700 text-white hover:bg-green-700"
                    action={createBlog({ tags: selectedValues, ...values })}
                    setOpen={setOpen}
                    title="Message"
                    message="Are you sure you want to create this new blog post ?"
                    successMessage="New blog has been created"
                    errorMessage="Blog has been cancel"
                  />
                </div>
                <div className="col-span-1 pt-10 h-[151vh] bg-white rounded-lg shadow-lg overflow-y-scroll hide-scrollbar my-[150px] lg:my-[40px]">
                  <div className="flex flex-col justify-between py-3 px-10 w-full text-sm">
                    <p className="pb-5 font-bold text-xl text-orange-600">
                      Review
                    </p>
                  </div>
                  <BlogReview values={{ tags: selectedValues, ...values }} />
                </div>
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
