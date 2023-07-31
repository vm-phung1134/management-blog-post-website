import { useEffect, useState } from "react";
import { IBlog } from "../../../../interface/blog";
import { getBlog, updateBlog } from "../../../../redux/reducers/blog/api";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import MenuListNavigate from "../../../../components/Elements/MenuListNavigate";
import BreadCrumbs from "../../../../components/Elements/BreadCrumb";
import { BREAD_CRUMBS_UPDATE_BLOG } from "./mock-data";
import ModalConfirm from "../../../../components/Elements/ModalAction";
import { ToastContainer } from "react-toastify";
import BlogViewEdit from "../create-blog/BlogView";
import BlogForm from "../../../../components/Form/BlogForm";

function UpdateBlogPost() {
  const blog_id = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { blog } = useAppSelector((state) => state.blogReducer);
  const handleToggle = () => setOpen((prev) => !prev);
  const initialValues: IBlog = {
    title: blog?.title,
    releaseDate: blog?.releaseDate,
    author: blog?.author,
    img: blog?.img,
    description: blog?.description,
    contents: blog?.contents,
    tags: blog?.tags,
    likes: blog?.likes,
    views: blog?.views,
    comments: blog?.comments,
  };
  const submitForm = () => {
    handleToggle();
  };
  const validate = () => {};
  useEffect(() => {
    dispatch(getBlog(blog_id?.id || ""));
  }, [blog_id.id, dispatch]);

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
                  <ModalConfirm
                    open={open}
                    action={updateBlog({ id: blog_id.id, ...values })}
                    setOpen={setOpen}
                    title="Message"
                    message="Are you sure you want to update this blog post?"
                    successMessage="Blog has been updated"
                    errorMessage="Blog has been canceled"
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

export default UpdateBlogPost;
