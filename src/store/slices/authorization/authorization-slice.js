import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncSignIn = createAsyncThunk(
  'authorization/asyncSignIn',
  async(_, thunkApi) => {
    return {
      id: '12',
      accessToken: 'ok',
      refreshToken: 'upload',
    }
  }
);

export const asyncSignUp = createAsyncThunk(
  'authorization/asyncSignUp',
  async(_, thunkApi) => {
    return {
      id: '12',
      accessToken: 'ok',
      refreshToken: 'upload',
    }
  }
);

const initialState = {
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
    // exit:state => {
    //   localStorage.clear();
    // }
  },
  extraReducers:{
    [asyncSignUp.fulfilled.type]:(state, action)=>{
      localStorage.setItem('id',JSON.stringify(action.payload.id));      
      localStorage.setItem('accessToken',JSON.stringify(action.payload.accessToken));
      localStorage.setItem('refreshToken',JSON.stringify(action.payload.refreshToken));
      state.login = '';
      state.error = '';
      state.password = '';
    },
    [asyncSignIn.fulfilled.type]:(state, action)=>{
      localStorage.setItem('id',JSON.stringify(action.payload.id));      
      localStorage.setItem('accessToken',JSON.stringify(action.payload.accessToken));
      localStorage.setItem('refreshToken',JSON.stringify(action.payload.refreshToken));
      state.login = '';
      state.error = '';
      state.password = '';
    },
  }
});

export const { changeLogin, changePassword, exit, formToggle } = authorizationSlice.actions;
//export default authorizationSlice;
export default authorizationSlice.reducer;