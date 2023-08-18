import { Formik } from "formik";
import { ISearchValue } from "./type";
import { useSearchContext } from "../../../contexts/searchValue";
import { useNavigate } from "react-router-dom";

function SearchFormBox() {
    const navigator = useNavigate()
  const { setSearchValue } = useSearchContext();
  const initialValues: ISearchValue = {
    valueSearch: "",
  };
  const submitForm = (values: ISearchValue) => {
    navigator("/all-blogs-page/search-result")
    setSearchValue(values.valueSearch);
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
            className="flex items-center relative justify-center lg:justify-start"
            onSubmit={handleSubmit}
          >
            <input
              className="px-4 w-[80%] py-[6px]  focus:outline-none text-sm border border-gray-300 rounded-2xl placeholder:text-sm"
              type="text"
              name="valueSearch"
              id="valueSearch"
              placeholder="Search..."
              value={values.valueSearch}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              className="absolute right-[15%] lg:right-[25%]"
            >
              <i className="fas fa-magnifying-glass"></i>
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default SearchFormBox;
