import { IAreaProps } from "./type";

function AreaForm({
  handleChange,
  handleBlur,
  values,
  label,
  name,
  rows,
}: IAreaProps) {
  return (
    <label htmlFor={label} className="font-bold">
      {name}
      <textarea
        name={label}
        id={label}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        className="block font-thin w-full px-4 py-2 mt-3 text-black bg-white border rounded-md  focus:outline-none "
        rows={parseInt(rows)}
      ></textarea>
    </label>
  );
}

export default AreaForm;
