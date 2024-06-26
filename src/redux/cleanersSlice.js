import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "../GlobalImports";
import axios from "axios";



const initialState = {
    status: "fulfilled",
    data: []
}

const cleanersSlice = createSlice({
    name: "cleaners",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getCleanersAsync.pending,
                (state) => {
                    // state.status = "pending"
                })
            .addCase(getCleanersAsync.fulfilled,
                (state, action) => {
                    state.status = "fulfilled"
                    state.data = action.payload
                })
            .addCase(addCleanerAsync.fulfilled,
                (state, action) => {
                    state.data.push(action.payload)
            })
    },
});


export const getCleanersAsync = createAsyncThunk(
    "counter/getCleaners",
    async () => {
        const res = await axios({
            method: "get",
            url: "https://tourist-wheel-server.vercel.app/api/cleaner"
        })
        return res.data.data;
    }
);

export const addCleanerAsync = createAsyncThunk(
    "counter/addCleaner",
    async (data) => {
        try {
            const res = await axios({
                method: "post",
                url: "https://tourist-wheel-server.vercel.app/api/cleaner",
                data: data
            })
            message[res.data.success ? 'success' : 'error']("Cleaner Created successfully");
            return res.data.data;
        } catch (error) {
            message['error']("Could not create Cleaner")
        }
    }
);


export default cleanersSlice.reducer;