import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const CustomerSlice = createSlice({
   name:'customer',
   initialState,
    reducers:{
        addCustomer(state,action){
         state.push(action.payload)
        },
        deleteCustomer(state,action){
           let deleteIndex =  action.payload
           let filteredIndex = state.filter((value,index) => index !== deleteIndex)
           return filteredIndex;
        }
    }
})

export const {addCustomer,deleteCustomer} = CustomerSlice.actions;
export default CustomerSlice.reducer;