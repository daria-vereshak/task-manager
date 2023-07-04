import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Authorization from "./pages/authorization";
import MainPage from "./pages/main-page/main-page";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Dispatch } from "./store/store";
import {
  changeCreateDateAccessToken,
  changeTimeAccessToken,
  toggleAuth,
} from "./store/slices/authorization/authorization-slice";
import { updateAccessToken } from "./utils/updateAccessToken";

function App() {
  const dispatch = Dispatch();
  const auth = useSelector(state => state.authorization.auth);
  const { createDateAccessToken, timeAccessToken } = useSelector(
    state => state.authorization
  );

  useEffect(() => {
    setInterval(() => {
      if (!localStorage.getItem("access_token")) {
        dispatch(toggleAuth(false));
      } else {
        dispatch(toggleAuth(true));
      }

      const createDateAccessToken = localStorage.getItem(
        "create_date_access_token"
      );
      const timeAccessToken = localStorage.getItem("time_access_token");
      if (createDateAccessToken && timeAccessToken) {
        dispatch(changeTimeAccessToken(+timeAccessToken));
        dispatch(changeCreateDateAccessToken(+createDateAccessToken));
      } else {
        dispatch(changeTimeAccessToken(0));
        dispatch(changeCreateDateAccessToken(0));
      }
    }, 500);
  });
  useEffect(() => {
    updateAccessToken(timeAccessToken, createDateAccessToken, dispatch);    
  }, [createDateAccessToken]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={auth ? <Navigate to="/main" /> : <Authorization />}
        />
        <Route
          path="/main"
          element={auth ? <MainPage /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/main"
          element= {<MainPage />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
