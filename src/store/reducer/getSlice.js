import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliceThunk = createAsyncThunk('api/data', async () => {
   const res = await axios.get('https://dummyjson.com/products')
   console.log('tank',res.data.products);
   return res.data.products
})

export const getSlice = createSlice({
    name: 'getSlice',
    initialState:{},
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(getSliceThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getSliceThunk.fulfilled, (state,action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getSliceThunk.rejected, (state,action) => {
            state.loading = false
            state.error = action.error
        })
    }
})

export default getSlice.reducer