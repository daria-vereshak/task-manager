import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./slices/authorization/authorization-slice";
import mainPageReducer from "./slices/main-page/main-page-slice"
import { useDispatch } from "react-redux";

//export type RootState = Return<typeof store.getState>;
//type AppDispatch = typeof store.dispatch;
//export const Selector = useSelector;
export const Dispatch = () => useDispatch();
//export default store;

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  mainPage: mainPageReducer,
});

export default configureStore(rootReducer);
// export default configureStore({
//   reducer: {
//     authorization: authorizationReducer,
//   }
// });