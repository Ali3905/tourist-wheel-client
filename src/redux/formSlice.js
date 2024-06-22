import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  FormDetails: [],
};

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormDetails(state, action) {
      state.FormDetails.push(action.payload); 
    },
  },
});

export const { setFormDetails } = FormSlice.actions;
export default FormSlice.reducer;
