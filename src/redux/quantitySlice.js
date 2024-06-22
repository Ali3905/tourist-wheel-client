// quantitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      state[productId] = quantity;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
