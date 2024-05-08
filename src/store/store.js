import { configureStore } from "@reduxjs/toolkit";
import getSlice from "./Reducers/getSlice";

export const store = configureStore({
    reducer:{
        getSlice
    }
})