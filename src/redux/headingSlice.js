import { createSlice } from '@reduxjs/toolkit';

const headingSlice = createSlice({
  name: 'heading',
  initialState: {
    selectedTitle: '',
  },
  reducers: {
    setSelectedTitle: (state, action) => {
      state.selectedTitle = action.payload;
    },
  },
});

export const { setSelectedTitle } = headingSlice.actions;
export default headingSlice.reducer;
