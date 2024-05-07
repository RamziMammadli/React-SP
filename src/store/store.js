import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getSlice from "./reducer/getSlice";

export const store = configureStore({
    reducer: {
        getSlice:getSlice
    }
})