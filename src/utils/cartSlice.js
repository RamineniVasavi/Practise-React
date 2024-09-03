import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
    items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // mutating state means directly modifying state
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state)=>{
            // we cant do state=[];
             //console.log(current(state));
            state.items.length=0;
            // we can use return {items: []};
        },
    },
});

export const { addItem,removeItem,clearItem } =cartSlice.actions;
export default cartSlice.reducer;