import { Link } from "react-router-dom";

interface IButtonViewProps {
  linkSrc: string;
}

function ButtonViewMore(props: IButtonViewProps) {
  return (
    <>
      <div className=" flex justify-end mt-10">
        <Link to={props.linkSrc}>
          <button className="py-3 border flex gap-x-3 items-center bg-transparent text-sm border-gray-400 px-10">
            <p>VIEW MORE</p>
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default ButtonViewMore;
