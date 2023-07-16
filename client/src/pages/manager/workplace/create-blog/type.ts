export interface IInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  values: string;
  label: string;
  name: string;
  disabled?: boolean | undefined;
}

export interface IAreaProps {
  handleChange: any;
  handleBlur: any;
  values: string;
  label: string;
  name: string;
  rows: string;
}
