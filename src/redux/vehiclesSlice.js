import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "../GlobalImports";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getVehiclesAsync.pending,
                (state) => {
                    // state.status = "pending"
                })
            .addCase(getVehiclesAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                })
            .addCase(addVehicleAsync.fulfilled,
                (state, action) => {
                    state.data.push(action.payload)
            })
    },
});


export const getVehiclesAsync = createAsyncThunk(
    "counter/getVehicles",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/vehicle"
        })
        return res.data.data;
    }
);

export const addVehicleAsync = createAsyncThunk(
    "counter/addvehicle",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: "https://tourist-wheel-server.vercel.app/api/vehicle",
                data: data
            })
            message[res.data.success ? 'success' : 'error']("Vehicle Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Vehicle")
        }
    }
);


export default vehiclesSlice.reducer;