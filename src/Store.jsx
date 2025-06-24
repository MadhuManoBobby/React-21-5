import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from './Slices/Slice';

export const Store = configureStore({
    devTools:true,
    reducer:{
        customers: CustomerReducer
    }
})