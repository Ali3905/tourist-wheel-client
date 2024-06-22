// statusSlice.js

import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {},
  reducers: {
    acceptStatus: (state, action) => {
      state[action.payload.id] = 'accepted';
    },
    rejectStatus: (state, action) => {
      state[action.payload.id] = 'rejected';
    },
    acceptEmployeeStatus: (state, action) => {
      state[action.payload.id] = 'EmpAccepted';
    },
    rejectEmployeeStatus: (state, action) => {
      state[action.payload.id] = 'EmpRejected';
    },
    invoiceSend: (state, action) => {
        state[action.payload.id] = 'invoicesent';
      },
      makeActive: (state, action) => {
        state[action.payload.id] = 'active';
      },
      makeInactive: (state, action) => {
        state[action.payload.id] = 'inactive';
      },
      deleteRecord: (state, action) => {
        state[action.payload.id] = 'delete';
      },
      transferStatus: (state, action) => {
        state[action.payload.id] = 'transfered';
      },
  },
});

export const { acceptStatus, rejectStatus , invoiceSend , makeActive , makeInactive ,  deleteRecord , acceptEmployeeStatus , rejectEmployeeStatus , transferStatus} = statusSlice.actions;
export default statusSlice.reducer;
