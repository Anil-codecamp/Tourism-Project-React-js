import { createSlice } from '@reduxjs/toolkit'
// import { ShopProduct } from '../ShopProduct'
import { ShopProduct } from '../component/shop/ShopProduct'


const initialState = {
  cart:[],
  items:ShopProduct,
  totalQuantity:0,
  totalPrice:0,
}

export const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      let find= state.cart.findIndex((item)=>item.id===action.payload.id)
      if(find>=0){
        state.cart[find].quantity +=1;
      }
      else{
        state.cart.push(action.payload)
        
      }
        
    },

    getCartTotal: (state) => {
      const {  totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;         
          cartTotal.totalPrice += itemTotal ;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
       
      
      state.totalQuantity = totalQuantity;
    },

    removeItem:(state,action)=>{
      state.cart=state.cart.filter((item)=>item.id!==action.payload)


    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },




  }
})

export const { addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = cartslice.actions



export default cartslice.reducer