import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOrder } from './orderApi';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:null
};

export const addOrderAsync = createAsyncThunk(
  'order/addOrder',
  async (order) => {
    const response = await addOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addOrderSlice = createSlice({
  name: 'order',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload
      });
  },
});

export const {resetOrder} = addOrderSlice.actions
export const selectOrder = state=>state.order.orders
export const selectCurrentOrder= state=>state.order.currentOrder

export default addOrderSlice.reducer;
