//slice means collection of logic
//createslice helps to collect all logic
import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:"counter", //name of the slice
    initialState:{
        count:0,
        msf:""
    },

    reducers:{
        increment:(state)=>{
            state.count = state.count+1
            state.msg = "Increment done"
        },
        decrement:(state)=>{
            state.count = state.count-1
            state.msg = "Decrement done"
        },
        reset:(state)=>{
            state.count = 0
            state.msg = "Reset done"
        },
    }
})
export default counterSlice.reducer
export const {increment, decrement, reset} = counterSlice.actions