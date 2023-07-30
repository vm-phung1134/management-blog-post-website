import { IBlog } from "../../../interface/blog";

export interface ICreateBlogFormProps {
  values: IBlog;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
