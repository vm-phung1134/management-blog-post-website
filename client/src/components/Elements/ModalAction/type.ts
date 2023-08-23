import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { IFollower } from "../../../interface/follower";

export interface IModalActionProps {
  title: string;
  listFollower?: IFollower[];
  message: string;
  successMessage?: string;
  errorMessage?: string;
  className: string;
  open: boolean;
  action: ThunkAction<void, RootState, undefined, AnyAction>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
