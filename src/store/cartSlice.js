import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,
    reducers : {

        addCartItem : (state, action)=>{

           if(state.cartItems.some((item)=> item.id == action.payload.id)){
            state.cartItems = state.cartItems.map((item)=> item.id===action.payload.id ? {...item, quantity : item.quantity + 1} : item )
           }
           else{
            const item = action.payload
            state.cartItems.push({...item, quantity : 1})
           }


        },

        removeCartItem : (state, action)=>{

            state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)

        }


    }

})


export const {addCartItem, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer
