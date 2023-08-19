// IMPORT HOOKS
import { memo, useEffect, useState } from "react";
import { Formik } from "formik";
import Spinner from "../../components/Elements/Spinner";
import { IAuth} from "../../interface/auth";
import LoginForm from "../../components/Form/LoginForm";
import LineTitle from "../../components/Elements/LineUnderTitle";
import { useAuth } from "../../contexts/authLoginState";

function Login() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isActive, toggleActive] = useState(false);
  useEffect(() => {
    const timeoutLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutLoading);
    };
  }, []);
  const initialValues: IAuth = {
    email: "",
    password: "",
  };
  const submitForm = () => {};
  const validate = (values: IAuth) => {
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
          <>
            {loading === true ? (
              <Spinner />
            ) : (
              <section className="grid grid-cols-2">
                <div className="col-span-1 text-white relative bg-black">
                  <div className="absolute top-8 left-8 right-8">
                    <div className="flex justify-between">
                      <figure>
                        <img
                          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjcgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7OmE1hcmtldGluZy9Mb2dvcy9TcHJvY2tldDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJNSEUtUG9zdC1MYXVuY2gtVXBkYXRlcyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Is6YTWFya2V0aW5nL0xvZ29zL1Nwcm9ja2V0IiBmaWxsPSIjZjk1YzM1Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjYxNDIzMywyMC4xNzcxMTYyIEMxNy41MjI4MDQxLDIwLjE3NzExNjIgMTUuODI3NDI0MSwxOC40OTkzNDU3IDE1LjgyNzQyNDEsMTYuNDI5OTk5NSBDMTUuODI3NDI0MSwxNC4zNjAyOTM3IDE3LjUyMjgwNDEsMTIuNjgyNTIzMiAxOS42MTQyMzMsMTIuNjgyNTIzMiBDMjEuNzA1NjYxOSwxMi42ODI1MjMyIDIzLjQwMTA0MTgsMTQuMzYwMjkzNyAyMy40MDEwNDE4LDE2LjQyOTk5OTUgQzIzLjQwMTA0MTgsMTguNDk5MzQ1NyAyMS43MDU2NjE5LDIwLjE3NzExNjIgMTkuNjE0MjMzLDIwLjE3NzExNjIgTTIwLjc0Nzg3NzUsOS4yMTU1MTQyOSBMMjAuNzQ3ODc3NSw1Ljg4MTkwNzIyIEMyMS42MjcxNzg4LDUuNDcwOTE0NTcgMjIuMjQzMDUzLDQuNTkwNjc4MzMgMjIuMjQzMDUzLDMuNTY5MTI5NjcgTDIyLjI0MzA1MywzLjQ5MjE4MDkxIEMyMi4yNDMwNTMsMi4wODIyOTI3MyAyMS4wNzc0MzM4LDAuOTI4NzgwNTQ1IDE5LjY1Mjc0NzgsMC45Mjg3ODA1NDUgTDE5LjU3NTM1NDgsMC45Mjg3ODA1NDUgQzE4LjE1MDY2ODgsMC45Mjg3ODA1NDUgMTYuOTg1MDQ5NiwyLjA4MjI5MjczIDE2Ljk4NTA0OTYsMy40OTIxODA5MSBMMTYuOTg1MDQ5NiwzLjU2OTEyOTY3IEMxNi45ODUwNDk2LDQuNTkwNjc4MzMgMTcuNjAwOTIzOCw1LjQ3MTI3NDE0IDE4LjQ4MDIyNTEsNS44ODIyNjY3OSBMMTguNDgwMjI1MSw5LjIxNTUxNDI5IEMxNy4xNzEwODM2LDkuNDE1Nzk2OCAxNS45NzQ5NDMyLDkuOTUwMTIzMjEgMTQuOTg4NDU0NSwxMC43MzY1MTA3IEw1LjczOTQ0MDg2LDMuNjE2NTkzMzkgQzUuODAwNDgzMjYsMy4zODQ2Njg0IDUuODQzMzU4MjgsMy4xNDU5MTE1MSA1Ljg0MzcyMTYzLDIuODk0OTI5MTIgQzUuODQ1MTc1MDIsMS4yOTg0MjIyMyA0LjUzOTMwMzY4LDAuMDAyMTU5MzE0ODYgMi45MjUzMTM1NiwxLjg3MzExMTA3ZS0wNiBDMS4zMTIwNTAxNCwtMC4wMDE3OTU5OTUwMSAwLjAwMTgxODYzMTM4LDEuMjkwODcxMTggMS44OTMyOTY1ZS0wNiwyLjg4NzczNzY1IEMtMC4wMDE4MTQ4NDQ3OSw0LjQ4NDYwNDEyIDEuMzA0MDU2NDksNS43ODA4NjcwMyAyLjkxODA0NjYxLDUuNzgyNjY0OSBDMy40NDM4MTA2MSw1Ljc4MzM4NDA1IDMuOTMwNjk2NDIsNS42MzU1OTkyOSA0LjM1NzI2NjUyLDUuMzk1NDA0MTEgTDEzLjQ1NTEyNzUsMTIuMzk5NTM4NyBDMTIuNjgxNTYwNCwxMy41NTUyMDg0IDEyLjIyODEwMjYsMTQuOTM5NTY2OCAxMi4yMjgxMDI2LDE2LjQyOTk5OTUgQzEyLjIyODEwMjYsMTcuOTkwMTg5NCAxMi43MjYyNTIyLDE5LjQzMzUxOCAxMy41Njc3NjUzLDIwLjYyMDQ3MDUgTDEwLjgwMTIzNjUsMjMuMzU4NjIzNyBDMTAuNTgyNTAxMywyMy4yOTM1NDA4IDEwLjM1NTc3MjMsMjMuMjQ4MjM0NiAxMC4xMTUyMzYyLDIzLjI0ODIzNDYgQzguNzg5MzgwNzYsMjMuMjQ4MjM0NiA3LjcxNDIzNTE2LDI0LjMxMTg1MzMgNy43MTQyMzUxNiwyNS42MjM5Mzc1IEM3LjcxNDIzNTE2LDI2LjkzNjM4MTIgOC43ODkzODA3NiwyOCAxMC4xMTUyMzYyLDI4IEMxMS40NDE0NTUsMjggMTIuNTE2MjM3MywyNi45MzYzODEyIDEyLjUxNjIzNzMsMjUuNjIzOTM3NSBDMTIuNTE2MjM3MywyNS4zODY2MTg5IDEyLjQ3MDQ1NTUsMjUuMTYxODg1NCAxMi40MDQ2ODk2LDI0Ljk0NTQyMjEgTDE1LjE0MTQyMzgsMjIuMjM3MTEzNSBDMTYuMzgzNzA5MywyMy4xNzUyNDExIDE3LjkzMDg0MzUsMjMuNzM5MDUyNiAxOS42MTQyMzMsMjMuNzM5MDUyNiBDMjMuNjkzNTM2NywyMy43MzkwNTI2IDI3LDIwLjQ2NjU3MyAyNywxNi40Mjk5OTk1IEMyNywxMi43NzU2NTI3IDI0LjI4NzI0NjcsOS43NTY2NzI2IDIwLjc0Nzg3NzUsOS4yMTU1MTQyOSIgaWQ9Ik1hcmtldGluZy9Mb2dvcy9TcHJvY2tldCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                          alt="LOGO"
                          className="w-14"
                        />
                      </figure>
                      <p className="">EN 10+ years of empowering creatives</p>
                    </div>
                  </div>
                  <div className="absolute text-center top-1/3 left-1/3 -translate-x-1/4 -translate-y-1/3">
                    <div className="flex flex-col gap-3 items-center">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <p className="font-bold text-2xl">Made for creatives</p>
                      <p>
                        The easy, all-in-one website builder top rated by
                        creatives
                      </p>
                      <div className="flex gap-2">
                        <img
                          className="w-24"
                          src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/trustp.svg"
                          alt=""
                        />
                        <img
                          className="w-24"
                          src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/capterra_footer.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full p-3 top-[50%] overflow-hidden">
                    <div className="grid grid-cols-3 gap-3 ">
                      <div className="relative flex flex-col">
                        <div className="animate-marquee whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="absolute animate-marquee2 whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="relative flex flex-col">
                        <div className="animate-marquee4 whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="absolute animate-marquee3 whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="relative flex flex-col">
                        <div className="animate-marquee whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/03.jpg"
                            alt=""
                          />
                        </div>
                        <div className="absolute animate-marquee2 whitespace-nowrap">
                          <img
                            src="https://studioassets.pixpa.com/pixpacom/images/homepage-2/03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex col-span-1 justify-center items-center h-screen bg-[url('https://www.honorofkings.com/img/bg1.jpg')] bg-cover bg-bottom">
                  <div className="lg:w-1/2 md:w-[70%] w-full lg:p-0 p-10 flex flex-col gap-y-5">
                    <h3 className="font-bold text-xl text-center">
                      Start building your blog
                    </h3>
                    <p className="text-sm font-light text-center text-black">
                      Don't have an account?
                      <a
                        href="#register"
                        className="font-medium text-[#247f71] hover:underline"
                      >
                        {" "}
                        Sign up
                      </a>
                    </p>
                    {isActive ? (
                      <LoginForm
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        values={values}
                        errors={errors}
                        touched={touched}
                        isActive={isActive}
                        toggleActive={toggleActive}
                      />
                    ) : (
                      <div className="flex flex-col mt-4 gap-3 text-sm">
                        <button
                          type="button"
                          className="btn font-medium capitalize"
                        >
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            alt=""
                          />
                          <p onClick={signInWithGoogle}>Continue with Google</p>
                        </button>
                        <button className="btn  font-medium capitalize">
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                            alt=""
                          />
                          <p>Continue with Github</p>
                        </button>
                        <button className="btn  font-medium capitalize">
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                            alt=""
                          />
                          <p>Continue with Github</p>
                        </button>
                        <LineTitle />
                        <button
                          onClick={() => toggleActive(!isActive)}
                          className="btn font-medium capitalize bg-orange-500 text-white hover:bg-orange-700 "
                        >
                          <img
                            className="w-5"
                            src="https://cdn-icons-png.flaticon.com/128/546/546394.png"
                            alt=""
                          />
                          <p>Continue with Email</p>
                        </button>
                      </div>
                    )}

                    <div className="flex items-center flex-col text-black text-[10px]">
                      <p className="">
                        ©2023 HubSpot, Inc. All Rights Reserved.
                      </p>
                      <p>Privacy policy</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default memo(Login);
