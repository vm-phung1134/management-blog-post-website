import { IBlog } from "../../../interface/blog";
import { ICategoriesItem } from "../../Elements/CategoriesBLog/type";

export interface IBlogFormProps {
  values: IBlog;
  titleForm: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  selectedValues: ICategoriesItem[];
  setSelectedValues: React.Dispatch<React.SetStateAction<ICategoriesItem[]>>;
}
