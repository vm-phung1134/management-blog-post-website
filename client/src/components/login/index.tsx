// IMPORT HOOKS
import { memo } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

interface ILogin{
  email: string,
  password: string
}

function Login() {
  // DEFINE
  const initialValues: ILogin = {
    email: "",
    password: "",
  };
  const submitForm = () => {};
  const validate = (values: ILogin) => {
    let errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // email
    if (!values.email) {
      errors.email = "! Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "! Email invalid";
    } else if (values.email.length > 30) {
      errors.email = "! Email less than 30 characters";
    }
    // password
    if (!values.password) {
      errors.password = "! Password is required";
    } else if (values.password.length > 30) {
      errors.password = "! Password have to than 8 characters";
    }
    return errors;
  };

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
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <div className="flex justify-center items-center h-screen bg-[url('https://www.honorofkings.com/img/bg1.jpg')] bg-cover bg-bottom">
            <div className="w-[30%] flex flex-col gap-y-5">
              <div className="flex justify-center">
                <img
                  src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg"
                  alt="LOGO"
                  width="40%"
                />
              </div>
              <p className="text-sm font-light text-center text-black">
                {" "}
                Don't have an account?
                <a
                  href="#register"
                  className="font-medium text-[#247f71] hover:underline"
                >
                  {" "}
                  Sign up
                </a>
              </p>
              <form className="mt-6 text-sm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email">
                    Email address
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
                    /> 
                  </label>
                  {errors.email && touched.email && (
                    <span className="text-red-500 text-[13px]">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="password">
                    Password
                    <input
                      name="password"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none"
                    />
                  </label>
                  {errors.password && touched.password && (
                    <span className="text-red-500 text-[13px]">
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <div>
                    <label
                      className="text-gray-700 cursor-pointer text-[13px]"
                      htmlFor="showPassword"
                    >
                      <input
                        id="showPassword"
                        type="checkbox"
                        className="w-[12px] cursor-pointer h-[12px] accent-transparent mr-3"
                      />
                      Show password
                    </label>
                  </div>
                  <Link to="/" className="text-[13px] text-green-500 hover:underline">
                    Forget password?
                  </Link>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm tracking-wide text-black transition-colors duration-200
                      transform bg-[#ee541c] rounded-md hover:bg-[#ee541c] focus:outline-none focus:bg-[#ee541c]"
                  >
                    <svg
                      className="animate-spin h-0 w-5 mr-3 text-black"
                      viewBox="0 0 24 24"
                    ></svg>
                    <p className="text-white font-medium">Login</p>
                  </button>
                </div>
              </form>
              <div className="flex mt-4 gap-x-2 text-sm">
                <button
                  type="button"
                  className="flex gap-x-3 items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
                <button className="flex gap-x-3 items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                  <p>Login with Github</p>
                </button>
              </div>
              <div className="flex items-center flex-col text-black text-[10px]">
                <p className="">©2023 HubSpot, Inc. All Rights Reserved.</p>
                <p>Privacy policy</p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(Login);
