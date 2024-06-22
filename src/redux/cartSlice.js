// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        const { data, quantity } = action.payload;
        const existingProduct = state.find(item => item.data.id === data.id);
  
        if (existingProduct) {
          // If product already exists, update quantity
          existingProduct.quantity += quantity;
        } else {
          // Otherwise, add a new product to the cart
          state.push({ data, quantity });
        }
      },
      updateQuantity: (state, action) => {
        const { productId, newQuantity } = action.payload;
        const productToUpdate = state.find(item => item.data.id === productId);
        if (productToUpdate) {
          productToUpdate.quantity = newQuantity;
        }
      },
      removeFromCart: (state, action) => {
        const productId = action.payload;
        return state.filter(item => item.data.id !== productId);
      },
    },
  });
  
  
  
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
