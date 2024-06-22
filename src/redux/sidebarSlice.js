import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedParentIndex: null,
  },
  reducers: {
    setSelectedParentIndex: (state, action) => {
      state.selectedParentIndex = action.payload;
    },
  },
});

export const { setSelectedParentIndex } = sidebarSlice.actions;
export default sidebarSlice.reducer;
