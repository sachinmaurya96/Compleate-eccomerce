import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchloggedInUserOrders } from './userAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
};

export const fetchloggedInUserOrdersAsync = createAsyncThunk(
  'users/fetchloggedInUserOrders',
  async (userId) => {
    const response = await fetchloggedInUserOrders(userId);
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
      });
  },
});





export const selectUserOrder =(state)=>state.user.userOrders
export default userSlice.reducer;
