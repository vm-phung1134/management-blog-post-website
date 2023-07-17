import { Link } from "react-router-dom";
import { ILoginFormProps } from "./type";

function LoginForm(props: ILoginFormProps) {
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    props;
  return (
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
          <span data-testid="email-error" className="text-red-500 text-[13px]">
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
            data-testid="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none"
          />
        </label>
        {errors.password && touched.password && (
          <span
            data-testid="password-error"
            className="text-red-500 text-[13px]"
          >
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
        <Link to="" className="text-[13px] text-green-500 hover:underline">
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
          <p className="text-white font-medium" data-testid="btn-login">
            Login
          </p>
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
