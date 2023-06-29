import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthRequests from "../../../api/requests/auth/auth";

export const asyncSignIn = createAsyncThunk(
  'authorization/asyncSignIn',
  async(_, thunkApi) => {
    const state = thunkApi.getState().authorization;
    if (!state.login || !state.password) {
      return thunkApi.rejectWithValue('Не все поля заполнены');
    }
    else {
      try {
        const {data} = await AuthRequests.authorization(state.login, state.password);
        return data;
      } catch (e) {
        return thunkApi.rejectWithValue(e?.body?.data?.message);
      }
    }
  }
);

export const asyncSignUp = createAsyncThunk(
  'authorization/asyncSignUp',
  async(_, thunkApi) => {
    const state = thunkApi.getState().authorization;
    if (!state.login || !state.password) {
      return thunkApi.rejectWithValue('Не все поля заполнены');
    }
    else {
      try {
        const {data} = await AuthRequests.registration(state.login, state.password);
        return data;
      } catch (e) {
        return thunkApi.rejectWithValue(e?.body?.data?.message);
      }
    }
  }
);

const initialState = {
  auth: false,
  typeForm: 'auth', //auth, reg
  login: '',
  password: '',
  error: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    changeLogin:(state, action) => {
      state.login = action.payload;
    },
    changePassword:(state, action) => {
      state.password = action.payload;
    },
    formToggle:(state, action) => {
      state.typeForm = action.payload.typeForm;
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.error = action.payload.error;
    },
    toggleAuth:(state, action) => {
      state.auth = action.payload;
    },
    exit:state => {
      localStorage.clear();
      state.auth = false;
    }
  },
  extraReducers:{
    [asyncSignUp.fulfilled.type]:(state, action)=>{
      localStorage.setItem('time_access_token',JSON.stringify(action.payload.expiresIn));      
      localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken));
      localStorage.setItem('refresh_token',JSON.stringify(action.payload.refreshToken));
      console.log(action.payload);
      state.login = '';
      state.error = '';
      state.password = '';
      state.auth = true;
    },
    [asyncSignUp.rejected.type]:(state, action)=>{
      state.login = '';
      state.error = action.payload;
      state.password = '';
    },
    [asyncSignIn.fulfilled.type]:(state, action)=>{
      localStorage.setItem('time_access_token',JSON.stringify(action.payload.expiresIn));      
      localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken));
      localStorage.setItem('refresh_token',JSON.stringify(action.payload.refreshToken));
      console.log(action.payload);
      state.login = '';
      state.error = '';
      state.password = '';
      state.auth = true;
    },
    [asyncSignIn.rejected.type]:(state, action)=>{
      state.login = '';
      state.error = action.payload;
      state.password = '';
    },
  }
});

export const { changeLogin, changePassword, exit, toggleAuth, formToggle } = authorizationSlice.actions;
//export default authorizationSlice;
export default authorizationSlice.reducer;