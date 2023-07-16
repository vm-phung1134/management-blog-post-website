import { IBlog } from "../../../Interface/blog";

export interface ICreateBlogFormProps {
  values: IBlog;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}
