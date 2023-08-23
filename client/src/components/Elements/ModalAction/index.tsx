import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IModalActionProps } from "./type";
import cn from "classnames";
import { useMutationAPI } from "../../../hooks/useMutationAPI";
import { useSocket } from "../../../contexts/useSocket";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";
import { TYPE_ACTION_NOTIFICATION } from "../../../data/mockData";

function ModalAction(props: IModalActionProps) {
  const {
    title,
    listFollower,
    message,
    open,
    setOpen,
    action,
    successMessage,
    errorMessage,
    className,
  } = props;
  const mutation = useMutationAPI(action);
  const { socket } = useSocket();
  const [user] = useUserFromCookies();
  const handleDispatch = async () => {
    const handleNotificationListFollower = (type: string) => {
      if (socket) {
        listFollower?.map((item) => {
          return socket?.emit("sendNotification", {
            senderUser: user,
            receiverAuthor: { ...item },
            type,
          });
        });
      }
    };
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1300)
    );
    try {
      mutation.mutate();
      handleNotificationListFollower(TYPE_ACTION_NOTIFICATION.ADD_POST);
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
            className={`btn capitalize ${className} font-thin`}
          >
            Accept
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalAction;
