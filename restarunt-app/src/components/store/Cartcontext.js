import React from "react";


const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    count:0,
    amount:0,
    addCartItem: (item)=>{},
    removeCartItem: (id)=>{},
})

export default CartContext;