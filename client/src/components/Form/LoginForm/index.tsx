import { Link } from "react-router-dom";
import { ILoginFormProps } from "./type";
import LineTitle from "../../Elements/LineUnderTitle";

function LoginForm(props: ILoginFormProps) {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isActive,
    toggleActive,
  } = props;
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
            className="input border-gray-300 text-sm font-thin focus:outline-none w-full"
          />
        </label>
        {errors.email && touched.email && (
          <span className="text-red-500 text-[13px]">{errors.email}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="input border-gray-300 text-sm font-thin focus:outline-none w-full"
          />
        </label>
        {errors.password && touched.password && (
          <span className="text-red-500 text-[13px]">{errors.password}</span>
        )}
      </div>
      <div className="flex justify-between">
        <div>
          <label className="cursor-pointer gap-2 label">
            <input
              type="checkbox"
              className="checkbox-sm rounded-md checkbox"
            />
            <span className="label-text">Show password</span>
          </label>
        </div>
        <Link to="" className="text-[13px] text-green-500 hover:underline">
          Forget password?
        </Link>
      </div>
      <div className="mt-6 flex flex-col">
        <button
          type="submit"
          className="btn w-full bg-orange-500 hover:bg-orange-700 text-white normal-case"
        >
          <p className="text-white font-medium">Login with email</p>
        </button>
        <LineTitle />
        <button
          onClick={() => toggleActive(!isActive)}
          type="submit"
          className="btn w-full bg-gray-100 normal-case"
        >
          <img
            className="w-3"
            src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
            alt=""
          />
          <p className="text-black font-medium">Continue with social media</p>
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
