import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    open: false,
  },
  reducers: {
    openDrawer: state => {
      state.open = true;
    },
    closeDrawer: state => {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export const selectDrawerOpen = state => state.drawer.open;

export default drawerSlice.reducer;
