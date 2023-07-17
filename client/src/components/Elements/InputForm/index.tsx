import { IInputProps } from "./type";

function InputForm({
  handleChange,
  handleBlur,
  values,
  label,
  disabled,
  name,
}: IInputProps) {
  return (
    <label htmlFor={label} className="font-bold">
      {name}
      <input
        type="text"
        name={label}
        id={label}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        className="block font-thin w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
      />
    </label>
  );
}

export default InputForm;
