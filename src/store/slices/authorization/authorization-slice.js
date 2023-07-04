import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthRequests from "../../../api/requests/auth/auth";

export const asyncSignIn = createAsyncThunk(
  "authorization/asyncSignIn",
  async (_, thunkApi) => {
    const state = thunkApi.getState().authorization;
    if (!state.login || !state.password) {
      return thunkApi.rejectWithValue("Не все поля заполнены");
    } else {
      try {
        const { data } = await AuthRequests.authorization(
          state.login,
          state.password
        );
        return data;
      } catch (e) {
        return thunkApi.rejectWithValue(e?.response?.data?.message);
      }
    }
  }
);

export const asyncSignUp = createAsyncThunk(
  "authorization/asyncSignUp",
  async (_, thunkApi) => {
    const state = thunkApi.getState().authorization;
    if (!state.login || !state.password) {
      return thunkApi.rejectWithValue("Не все поля заполнены");
    } else {
      try {
        const { data } = await AuthRequests.registration(
          state.login,
          state.password
        );
        return data;
      } catch (e) {
        return thunkApi.rejectWithValue(e?.response?.data?.message);
      }
    }
  }
);

export const asyncUpdateRefreshToken = createAsyncThunk(
  "authorization/asyncUpdateRefreshToken",
  async (_, thunkApi) => {
    try {
      const { data } = await AuthRequests.refreshToken(
        JSON.parse(
          localStorage.getItem('refresh_token')||''
          )
        );
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e?.response?.data?.message);
    }
  }
);

export const signOut = createAction("authorization/signOut");

const initialState = {
  auth: false,
  typeForm: "auth", //auth, reg
  login: "",
  password: "",
  error: "",
  createDateAccessToken: 0,
  timeAccessToken: 0
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    changeLogin: (state, action) => {
      state.login = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    formToggle: (state, action) => {
      state.typeForm = action.payload.typeForm;
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.error = action.payload.error;
    },
    toggleAuth: (state, action) => {
      state.auth = action.payload;
    },
    changeCreateDateAccessToken: (state, action) => {
      state.createDateAccessToken = action.payload;
    },
    changeTimeAccessToken: (state, action) => {
      state.timeAccessToken = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(asyncSignUp.fulfilled, (state, action) => {
      localStorage.setItem(
        "time_access_token",
        JSON.stringify(action.payload.access_expiresIn)
      );
      localStorage.setItem(
        "create_date_access_token",
        JSON.stringify(action.payload.access_createDate)
      );
      localStorage.setItem(
        "access_token",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(action.payload.refreshToken)
      );
      state.login = "";
      state.error = "";
      state.password = "";
      state.auth = true;
      })
      .addCase(asyncSignUp.rejected, (state, action) => {
        state.login = "";
        state.error = action.payload;
        state.password = "";
      })
      .addCase(asyncSignIn.fulfilled, (state, action) => {
        localStorage.setItem(
          "time_access_token",
          JSON.stringify(action.payload.access_expiresIn)
        );
        localStorage.setItem(
          "create_date_access_token",
          JSON.stringify(action.payload.access_createDate)
        );
        localStorage.setItem(
          "access_token",
          JSON.stringify(action.payload.accessToken)
        );
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(action.payload.refreshToken)
        );
        state.login = "";
        state.error = "";
        state.password = "";
        state.auth = true;
      })
      .addCase(asyncSignIn.rejected, (state, action) => {
        state.login = "";
        state.error = action.payload;
        state.password = "";
      })
      .addCase(asyncUpdateRefreshToken.fulfilled, (state, action) => {
        localStorage.setItem(
          "time_access_token",
          JSON.stringify(action.payload.access_expiresIn)
        );
        localStorage.setItem(
          "create_date_access_token",
          JSON.stringify(action.payload.access_createDate)
        );
        localStorage.setItem(
          "access_token",
          JSON.stringify(action.payload.accessToken)
        );
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(action.payload.refreshToken)
        );
        state.login = "";
        state.error = "";
        state.password = "";
        state.auth = true;
      })
      .addCase(asyncUpdateRefreshToken.rejected, (state, action) => {
        state.login = "";
        state.error = action.payload;
        state.password = "";
        state.auth = false;
        state.typeForm = "auth";
        state.createDateAccessToken = 0;
        state.timeAccessToken = 0;
      })
      .addCase(signOut, (state, action) => {
        localStorage.clear();
        state.auth = false;
        state.typeForm  = "auth";
        state.createDateAccessToken = 0;
        state.timeAccessToken = 0;
      })
  },
});

export const { changeLogin, changePassword, exit, toggleAuth, formToggle, changeCreateDateAccessToken, changeTimeAccessToken } =
  authorizationSlice.actions;
//export default authorizationSlice;
export default authorizationSlice.reducer;
