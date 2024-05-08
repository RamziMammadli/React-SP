import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliceThunk = createAsyncThunk('api/get', async () => {
    const res = await axios.get('https://northwind.vercel.app/api/categories')
    return res.data
})

export const postSliceThunk = createAsyncThunk('api/post', async (data) => {
    const res = await axios.post('https://northwind.vercel.app/api/categories',data)
    console.log(res.data);
    return res.data
})

const getSlice = createSlice({
    name:'getSlice',
    initialState:{},
    reducers:{
        addPost: (state, action) => {
            state.products.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getSliceThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.products = action.payload
        })
        .addCase(getSliceThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getSliceThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(postSliceThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(postSliceThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(postSliceThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})
export const {addPost} = getSlice.actions
export default getSlice.reducer