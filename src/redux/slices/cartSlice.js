import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name :'cart',
    initialState:[], //holds more than one items
    reducers:{
        //function to add items into cart
        addToCart : (state,action)=>{
            state.push(action.payload)
        },
        //function to remove item from cart
        removeFromCart : (state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },
        //function to remove all items from cart
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions


export default cartSlice.reducer
