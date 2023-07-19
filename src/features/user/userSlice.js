import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchloggedInUserOrders, updateUser, fetchloggedInUser} from './userAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
  userinfo:null
};

export const fetchloggedInUserOrdersAsync = createAsyncThunk(
  'users/fetchloggedInUserOrders',
  async (userId) => {
    const response = await fetchloggedInUserOrders(userId);
    return response.data;
  }
);

export const fetchloggedInUserAsync = createAsyncThunk(
  'users/fetchloggedInUser',
  async (userId) => {
    const response = await fetchloggedInUser(userId);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);



export const userSlice = createSlice({
  name: 'fetchloggedInUser',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(fetchloggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchloggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders = action.payload;
      })
      .addCase(fetchloggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchloggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userinfo = action.payload;
      })
  },
});




export const selectUserInfo = (state)=>state.user.userinfo
export const selectUserOrder =(state)=>state.user.userOrders
export default userSlice.reducer;
