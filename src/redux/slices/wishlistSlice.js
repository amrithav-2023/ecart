import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], //wishlist may have more than one item so empty array is used
    reducers:{
        //actions
        //ffunction/logic to add items into wishlist array
        addToWishlist :(state,action)=>{
            state.push(action.payload)
        },
        //function to remove item from wishlist
        removeFromWishlist : (state,action)=>{
            //filter return a new array stisfying the condition.inorder to add the new array into state we need to return it.
           return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer