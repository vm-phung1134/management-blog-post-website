import { FormikErrors, FormikTouched } from "formik";
import { IAuth } from "../../../Interface/auth";

export interface ILoginFormProps {
  values: IAuth;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FormikErrors<IAuth>;
  touched: FormikTouched<IAuth>;
}
