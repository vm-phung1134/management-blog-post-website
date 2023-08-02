import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

export interface IModalConfirmProps {
  title: string;
  message: string;
  successMessage: string;
  errorMessage: string;
  className: string;
  open: boolean;
  action: ThunkAction<void, RootState, undefined, AnyAction>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
