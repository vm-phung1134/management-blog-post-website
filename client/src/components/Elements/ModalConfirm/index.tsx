import "react-toastify/dist/ReactToastify.css";
import cn from "classnames";
import { IModalConfirmProps } from "./type";

function ModalConfirm(props: IModalConfirmProps) {
  const {
    title,
    message,
    open,
    setOpen,
    action,
    className,
  } = props;
  const modalClass = cn({
    "modal modal-bottom sm:modal-middle": true,
    "modal-open": open,
  });
  return (
    <dialog id="my_modal_1" className={modalClass}>
      <form method="dialog" className="modal-box">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4 text-base">{message}</p>
        <div className="modal-action">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="btn bg-transparent hover:bg-transparent border-none font-medium capitalize"
          >
            Cancel
          </button>
          <button
            onClick={action}
            className={`btn capitalize ${className} font-thin`}
          >
            Accept
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalConfirm;
