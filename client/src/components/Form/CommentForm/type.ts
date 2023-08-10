import { FormikErrors, FormikTouched } from "formik";
import { ICommentItem } from "../../../interface/comment";

export interface ICommentFormProps {
  values: ICommentItem;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FormikErrors<ICommentItem>;
  touched: FormikTouched<ICommentItem>;
}
