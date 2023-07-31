import { IBlog } from "../../../interface/blog";

export interface IBlogFormProps {
  values: IBlog;
  titleForm: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
