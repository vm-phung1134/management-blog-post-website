import { Link } from "react-router-dom";

interface IButtonViewProps {
  linkSrc: string;
}

function ButtonViewMore(props: IButtonViewProps) {
  return (
    <>
      <div className=" flex justify-end mt-10">
        <Link to={props.linkSrc}>
          <button className="btn w-40 text-[12px] font-medium">
            <p>VIEW MORE</p>
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default ButtonViewMore;
