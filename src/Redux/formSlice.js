import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"form",
    initialState:{
        status:"false",
        data:[]
    },
    reducers:{
        getform:(state,action)=>{
          state.status = true
        },
        submitform:(state,action)=>{
          state.data.push(action.payload)
        },
        cancelform:(state,action)=>{
          state.status = false
        }
        
    }
})

export default formSlice.reducer;
export const {getform,submitform,cancelform} = formSlice.actions
