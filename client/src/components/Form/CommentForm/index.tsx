/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Formik } from "formik";
import { useUserFromCookies } from "../../../hooks/useUserFromCookies";
import { ICommentItem } from "../../../interface/comment";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalAction from "../../Elements/ModalAction";
import {
  createComment,
  getAllComments,
} from "../../../redux/reducers/comment/api";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../../redux/store";
import { useCheckUserCookies } from "../../../hooks/useCheckUserCookies";
import { useSocket } from "../../../contexts/useSocket";
import { TYPE_ACTION_NOTIFICATION } from "../../../data/mockData";
import { IUser } from "../../../interface/auth";
import { ICommentFormProps } from "./type";

function CreateCommentForm({blogValue} : ICommentFormProps) {
  const navigator = useNavigate();
  const [user] = useUserFromCookies();
  const { socket } = useSocket();
  const [userCookies] = useUserFromCookies();
  const isEmptyUserCookies = useCheckUserCookies(userCookies);
  const [stateLogin, setStateLogin] = useState(false);
  const blog_id = useParams();
  const dispatch = useAppDispatch();
  const { data = [] } = useQuery<ICommentItem[]>({
    queryKey: ["comments", blog_id.id],
    queryFn: async () => {
      const action = await dispatch(getAllComments(blog_id.id || ""));
      return action.payload;
    },
  });
  const [newDataComment, setNewDataComment] = useState<ICommentItem[]>([]);
  const initialValues: ICommentItem = {
    author: userCookies,
    content: "",
    postID: blog_id?.id || "",
  };
  const submitForm = (values: ICommentItem) => {
    if (isEmptyUserCookies) {
      setStateLogin(!stateLogin);
    } else {
      setNewDataComment((prev) => [values, ...prev]);
      dispatch(createComment(values));
    }
    handleNotification(blogValue.author, TYPE_ACTION_NOTIFICATION.COMMENT_POST);
  };
  const validate = () => {};
  useEffect(() => {
    if (data && data.length > 0) {
      setNewDataComment(data);
    }
  }, [data]);

  const handleNotification = (values: IUser, type: string) => {
    if (socket) {
      socket?.emit("sendNotification", {
        senderUser: user,
        receiverAuthor: { ...values, socketId: socket.id },
        type,
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          //errors,
          //touched,
          handleBlur,
        } = formik;
        return (
          <div className="p-5 mt-3 border flex flex-col gap-3">
            <p className="uppercase text-lg font-medium">{`Comments (${data?.length})`}</p>
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Enter your comment ..."
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input text-[13px] rounded-full w-full border-gray-300  focus:outline-none"
              />
              <button
                type="submit"
                className="absolute text-orange-600 w-32 text-[13px] rounded-full font-medium normal-case btn right-0 top-0 bottom-0"
              >
                Send
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
            <ModalAction
              open={stateLogin}
              className="bg-red-700 text-white hover:bg-red-700"
              action={() => {
                navigator("/login");
              }}
              setOpen={setStateLogin}
              title="Message"
              message="You have to login first to comment this post !"
            />
            <div className="">
              {newDataComment?.map((cmt, index) => {
                return (
                  index < 3 && (
                    <div
                      key={index}
                      className="flex flex-col border-b py-5 w-1/2 gap-3"
                    >
                      <div className="flex gap-3">
                        <figure>
                          <img
                            className="rounded-[50%] w-[40px]"
                            src={`${cmt?.author.avt}`}
                            alt=""
                          />
                        </figure>
                        <div className="flex-col flex">
                          <div className="flex gap-3">
                            <h4 className="font-bold lg:text-[13px]">
                              {cmt?.author.name}
                            </h4>
                            <p className="text-gray-600 text-[13px]">
                              {`(${cmt?.author.email})`}
                            </p>
                          </div>
                          <div className="text-gray-400 text-[13px] flex gap-3">
                            <p>09:00 PM</p>
                            <p>July, 23 2023</p>
                          </div>
                        </div>
                      </div>
                      <p>{cmt?.content}</p>
                      <div className="flex gap-5">
                        <button className="flex gap-2">
                          <i className="fa-regular fa-thumbs-up"></i>
                          <p>3</p>
                        </button>
                        <button className="flex gap-2">
                          <i className="fa-regular fa-thumbs-down"></i>
                          <p>3</p>
                        </button>
                        <button className="text-xs">Reply</button>
                        <button className="text-xs">Report</button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div>
              <button className="btn normal-case font-medium w-full text-orange-600">
                {" "}
                View more comments
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default CreateCommentForm;
