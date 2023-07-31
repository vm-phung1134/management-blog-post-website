import { Link } from "react-router-dom";
import { memo } from "react";
import { IBlogFormProps } from "./type";
import InputForm from "../../Elements/InputForm";
import CkEditorField from "../../Elements/CKEditorArea";

function BlogForm(props: IBlogFormProps) {
  const { handleBlur, handleSubmit, handleChange, values, titleForm } = props;
  return (
    <>
      <form
        className="mt-10 p-10 text-sm flex flex-col gap-5 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-xl pt-5 text-orange-600">{titleForm}</h3>
        <p className="font-light text-[12px] text-orange-600">
          * Here your description about your blog
        </p>
        <InputForm
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values?.title ?? ""}
          name="Blog title"
          label="title"
        />
        <InputForm
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values?.img ?? ""}
          name="Image topic"
          label="img"
        />
        <div>
          <CkEditorField label="description" name="Blog description" />
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
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[0]?.topic ?? ""}
                  name="Epic content"
                  label="contents[0].topic"
                />
                <CkEditorField label="contents[0].plot" name="Paraphrase" />
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[0]?.srcImg ?? ""}
                  name="Link Image"
                  label="contents[0].srcImg"
                />
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
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[1]?.topic ?? ""}
                  name="Epic content"
                  label="contents[1].topic"
                />
                <CkEditorField label="contents[1].plot" name="Paraphrase" />
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[1]?.srcImg ?? ""}
                  name="Link Image"
                  label="contents[1].srcImg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="checkbox" name="my-accordion-4" />
            <div className="collapse-title text-sm font-medium">
              <p>Epic 3</p>
            </div>
            <div className="collapse-content">
              <div className="flex flex-col gap-3">
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[2]?.topic ?? ""}
                  name="Epic content"
                  label="contents[2].topic"
                />
                <CkEditorField label="contents[2].plot" name="Paraphrase" />
                <InputForm
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values?.contents[2]?.srcImg ?? ""}
                  name="Link Image"
                  label="contents[2].srcImg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-grow">
            <InputForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values?.author?.name ?? ""}
              name="Author"
              label="author"
              disabled={true}
            />
          </div>
          <div className="flex-grow">
            <InputForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values?.author?.email ?? ""}
              name="Email"
              label="email"
              disabled={true}
            />
          </div>
        </div>
        <div className="mt-6 flex gap-5 items-center justify-end">
          <Link to="/manager-your-blogs/">
            <p className="cursor-pointer">Cancel</p>
          </Link>

          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 rounded-lg text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}
export default memo(BlogForm);