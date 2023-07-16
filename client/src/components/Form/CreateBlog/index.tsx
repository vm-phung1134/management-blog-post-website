import { Link } from "react-router-dom";
import { AreaForm, InputForm } from "../../../pages/manager/workplace/create-blog";
import {memo} from "react"
import { ICreateBlogFormProps } from "./type";

function CreateBlogForm(props: ICreateBlogFormProps) {
  const {handleBlur, handleSubmit, handleChange, values} = props;
  return (
    <>
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
                    values={values.contents[0].topic}
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
                    values={values.contents[0].srcImg}
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
                    values={values.contents[1].topic}
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
                    values={values.contents[1].srcImg}
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
              disabled={true}
            />
          </div>
          <div className="flex-grow">
            <InputForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values.author.email as string}
              name="Email"
              label="email"
              disabled={true}
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
    </>
  );
}
export default memo(CreateBlogForm);
