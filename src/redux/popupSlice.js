// popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  sectionIndex: null, 
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action) {
      state.isOpen = true;
      state.sectionIndex = action.payload; 
    },
    closePopup(state) {
      state.isOpen = false;
      state.sectionIndex = null; 
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
