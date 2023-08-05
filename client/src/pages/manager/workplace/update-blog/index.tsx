import { useState } from "react";
import { IBlog } from "../../../../interface/blog";
import { getBlog, updateBlog } from "../../../../redux/reducers/blog/api";
import { useAppDispatch } from "../../../../redux/store";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import MenuListNavigate from "../../../../components/Elements/MenuListNavigate";
import BreadCrumbs from "../../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_UPDATE_BLOG } from "./mock-data";
import { ToastContainer } from "react-toastify";
import BlogForm from "../../../../components/Form/BlogForm";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_VALUES } from "../create-blog/mock-data";
import BlogReview from "../../../../components/Elements/BlogReview";
import Spinner from "../../../../components/Elements/Spinner";
import ModalAction from "../../../../components/Elements/ModalAction";

function UpdateBlogPost() {
  const blog_id = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery<IBlog>({
    queryKey: ["blog-detail"],
    queryFn: async () => {
      const action = await dispatch(getBlog(blog_id?.id || ""));
      return action.payload;
    },
  });
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const initialValues: IBlog = data || DEFAULT_VALUES;
  const submitForm = () => {
    handleToggle();
  };
  const validate = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      enableReinitialize
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
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="mt-[80px] p-10 bg-slate-100 min-h-screen max-h-full">
                <MenuListNavigate />
                <BreadCrumbs items={BREAD_CRUMBS_UPDATE_BLOG} />
                <hr />
                <div className="grid grid-cols-2 gap-5 mb-20">
                  <div className="col-span-1">
                    <BlogForm
                      titleForm="Update your blog post"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      values={values}
                    />
                    <ModalAction
                      open={open}
                      className="bg-green-700 text-white hover:bg-green-700"
                      action={updateBlog({ id: blog_id.id, ...values })}
                      setOpen={setOpen}
                      title="Message"
                      message="Are you sure you want to update this blog post?"
                      successMessage="Blog has been updated"
                      errorMessage="Blog has been canceled"
                    />
                  </div>
                  <BlogReview values={values} />
                </div>
                <ToastContainer
                  className="font-sans"
                  toastStyle={{ color: "black" }}
                />
              </div>
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default UpdateBlogPost;
