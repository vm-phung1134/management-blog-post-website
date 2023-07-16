import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../../redux/store";
import { IModalConfirmProps } from "./type";
import cn from "classnames";

function ModalConfirmAction(props: IModalConfirmProps) {
  const dispatch = useAppDispatch();
  const {
    title,
    message,
    open,
    setOpen,
    action,
    successMessage,
    errorMessage,
  } = props;
  const handleDispatch = async () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1300)
    );
    if (action) {
      try {
        await dispatch(action);
        setOpen((prev) => !prev);
        toast.promise(
          resolveAfter3Sec,
          {
            pending: "Wait a second",
            success: successMessage,
          },
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      } catch (error) {
        toast.promise(
          resolveAfter3Sec,
          {
            pending: "Wait a second",
            error: errorMessage,
          },
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      }
    }
  };
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
            onClick={handleDispatch}
            className="btn capitalize bg-green-600 text-white hover:bg-green-700 font-thin"
          >
            Accept
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalConfirmAction;
