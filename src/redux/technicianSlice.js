import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const technicianSlice = createSlice({
    name: "technicians",
    initialState,
    reducers: {
        addTechnician: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        // builder
        //   .addCase(incrementAsync.pending, () => {
        //     console.log("incrementAsync.pending");
        //   })
        //   .addCase(
        //     incrementAsync.fulfilled,
        //     (state, action: PayloadAction<number>) => {
        //       state.value += action.payload;
        //     }
        //   );

        builder
            .addCase(getTechniciansAsync.pending,
                (state) => {
                    // state.status = "pending"
                })
            .addCase(getTechniciansAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                    console.log(state.data);
                })
    },
});

// export const incrementAsync = createAsyncThunk(
//   "counter/incrementAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );

export const getTechniciansAsync = createAsyncThunk(
    "counter/getTechnicians",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/technician"
        })
        return res.data.data;
    }
);

export const { addTechnician } = technicianSlice.actions;

export default technicianSlice.reducer;