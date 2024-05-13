import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getSliceThunk = createAsyncThunk('api/get', async () => {
    const res = await axios.get('https://northwind.vercel.app/api/categories')
    return res.data
})

export const postSliceThunk = createAsyncThunk('api/post', async (data) => {
    await axios.post('https://northwind.vercel.app/api/categories', data)
})

export const deleteSliceThunk = createAsyncThunk('api/delete', async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
})

export const updateSliceThunk = createAsyncThunk('api/update', async ({ id, data }) => {
    await axios.patch(`https://northwind.vercel.app/api/categories/${id}`, data);
});


const getSlice = createSlice({
    name:'getSlice',
    initialState:{},
    reducers:{
        addPost:(state, action) => {
            state.products.push(action.payload)
        },
        deletePostt:(state, action) => {
            const updatedData = state.products.filter(item => item.id != action.payload)
            state.products = updatedData
        }
    },
    extraReducers: (builder) => {
        builder
        //GET
        .addCase(getSliceThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.products = action.payload
        })
        .addCase(getSliceThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getSliceThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //POST
        .addCase(postSliceThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(postSliceThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postSliceThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //DELETE
        .addCase(deleteSliceThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(deleteSliceThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(deleteSliceThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //UPDATE
        .addCase(updateSliceThunk.fulfilled, (state, action) => {
            state.loading = false;
        })
        .addCase(updateSliceThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateSliceThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        
    }
})

export const {addPost, deletePostt} = getSlice.actions

export default getSlice.reducer