import { asyncUpdateRefreshToken } from "../store/slices/authorization/authorization-slice";

export const updateAccessToken = (timeAccessToken, createDateAccessToken, dispatch) => {
  if(!timeAccessToken || !createDateAccessToken) {
    return;
  }
  let timer = 0;
  const intervalId = setInterval(() => {
    const nowDate = new Date().getTime();
    timer = nowDate - createDateAccessToken;
    if(timer >= timeAccessToken - 1000) {
      dispatch(asyncUpdateRefreshToken());
      clearInterval(intervalId);
    }
  }, 1000)
}