import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';
import { Navigate } from 'react-router-dom';

const initialState = {
  loggedInUser:null,
  status: 'idle',
  errors:null
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const createUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
 
  extraReducers: (builder) => {
    builder
      .addCase( createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase( createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
        
      })
      .addCase( checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase( checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase( checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.errors = action.error;
      });
  },
});


export const selectLoggedInUsers = (state)=>state.auth.loggedInUser
export const selectError = (state)=>state.auth.error
export default createUserSlice.reducer;
