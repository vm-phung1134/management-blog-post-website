import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../redux/store";
import { useMutation } from "@tanstack/react-query";

export const useMutationAPI = (
  action: ThunkAction<void, RootState, undefined, AnyAction>
) => {
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: async () => {
      return await dispatch(action);
    },
  });
  return mutation;
};
