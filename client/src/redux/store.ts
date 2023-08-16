import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import logger from "redux-logger";
import { useSelector } from "react-redux";
import blogSlice from "./reducers/blog";
import commentSlice from "./reducers/comment";
import followerSlice from "./reducers/follower";
import followingSlice from "./reducers/following";
import authSlice from "./reducers/auth";

// Import reducers
const rootReducer = combineReducers({
  authReducer: authSlice,
  blogReducer: blogSlice,
  commentReducer: commentSlice,
  followerReducer: followerSlice,
  followingReducer: followingSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
