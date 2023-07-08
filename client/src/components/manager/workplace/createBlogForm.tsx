// IMPORT HOOKS
import { memo } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { IBlog } from "../../../data/Interface/interface_blog";
import { IUser } from "../../../data/Interface/interface_user";
import Cookies from "js-cookie";

interface IInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  values: string;
  label: string;
  name: string;
}

interface IAreaProps {
  handleChange: any;
  handleBlur: any;
  values: string;
  label: string;
  name: string;
  rows: string;
}

const InputForm = ({
  handleChange,
  handleBlur,
  values,
  label,
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
        className="block font-thin w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
      />
    </label>
  );
};

const AreaForm = ({
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

function CreateBlogForm() {
  const user: IUser = {
    email: Cookies.get("email"),
    name: Cookies.get("userName"),
    token: Cookies.get("token"),
    avt: Cookies.get("profilePic"),
  };
  const initialValues: IBlog = {
    title: "",
    releaseDate: "",
    author: user,
    description: "",
    contents: [
      {
        topic: "",
        plot: "",
        srcImg: [{ url: "" }],
      },
      {
        topic: "",
        plot: "",
        srcImg: [{ url: "" }],
      },
    ],
    tags: [],
    likes: 0,
    views: 0,
    comments: 0,
  };
  const submitForm = (values: IBlog) => {
    console.log(values);
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
          <form
            className="mt-20 p-10 text-sm flex flex-col gap-5 bg-white rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="font-bold text-xl pt-5 text-orange-600">
              Create Your New Blog
            </h3>
            <p className="font-light text-[12px] text-orange-600">
              * Here your description about your blog
            </p>
            <InputForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values.title}
              name="Blog Title"
              label="title"
            />
            <div>
              <AreaForm
                rows="5"
                values={values.description}
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="description"
                name="Top Description"
              />
            </div>
            <p className="text-[12px] font-thin text-orange-600">
              * Here your content{" "}
            </p>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" name="my-accordion-4" />
                <div className="collapse-title text-sm font-medium">
                  <p>Epic 1</p>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col gap-3">
                    <div>
                      <InputForm
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={formik.values.contents[0].topic}
                        name="Epic content"
                        label="contents[0].topic"
                      />
                    </div>
                    <div>
                      <AreaForm
                        rows="5"
                        values={values.contents[0].plot}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        label="contents[0].plot"
                        name="Paraphrase"
                      />
                    </div>
                    <div>
                      <InputForm
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={values.contents[0].srcImg[0].url}
                        name="Link Image"
                        label="contents[0].srcImg[0].url"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" name="my-accordion-4" />
                <div className="collapse-title text-sm font-medium">
                  <p>Epic 2</p>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col gap-3">
                    <div>
                      <InputForm
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={formik.values.contents[1].topic}
                        name="Epic content"
                        label="contents[1].topic"
                      />
                    </div>
                    <div>
                      <AreaForm
                        rows="5"
                        values={values.contents[1].plot}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        label="contents[1].plot"
                        name="Paraphrase"
                      />
                    </div>
                    <div>
                      <InputForm
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={values.contents[1].srcImg[0].url}
                        name="Link Image"
                        label="contents[1].srcImg[0].url"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-grow">
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values.author.name as string}
                  name="Author"
                  label="author"
                />
              </div>
              <div className="flex-grow">
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values.author.email as string}
                  name="Email"
                  label="email"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-5 items-center justify-end">
              <Link to="/work-place/task-manager">
                <p
                  data-testid="btn-cancel-create-task-form"
                  className="cursor-pointer"
                >
                  Cancel
                </p>
              </Link>

              <button
                type="submit"
                data-testid="btn-create-task-form"
                className="px-6 py-3 bg-orange-600 rounded-lg text-white"
              >
                Confirm
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(CreateBlogForm);
