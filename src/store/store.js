import { configureStore } from "@reduxjs/toolkit";
//import authorizationSlice from "./slices/authorization/authorization-slice";
import authorizationReducer from "./slices/authorization/authorization-slice";
import { useDispatch } from "react-redux";

//export type RootState = Return<typeof store.getState>;
//type AppDispatch = typeof store.dispatch;
//export const Selector = useSelector;
export const Dispatch = () => useDispatch();
//export default store;

export default configureStore({
  reducer: {
    authorization: authorizationReducer,
  }
});