import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProducts: [],
};

const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setSelectedProducts(state, action) {
      state.selectedProducts.push(action.payload); 
    },
  },
});

export const { setSelectedProducts } = productSlice.actions;
export default productSlice.reducer;
