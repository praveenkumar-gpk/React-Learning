import React, { useReducer }  from "react";
import CartContext from "./Cartcontext";



const initialCartState = {
    items:[],
    totalAmount:0,
    count:0,
}
const cartReducer = (state,action)=>{
    if (action.type==="Add")
        {
            const updatedItem = state.items.concat(action.item);
            const udpatedAmount = +state.totalAmount+(action.item.price);
            return {
                items:updatedItem,
                totalAmount:udpatedAmount,
                count:action.item.count,
            }
        }
    
}

const CartProvider = (props)=>{

    const [cartState,dispatchCartState] = useReducer(cartReducer,initialCartState)
    const addCardHandler = (item)=>{
        dispatchCartState({type:"Add",item:item})
    }
    const removeCardHandler = (id)=>{
        dispatchCartState({type:"Remove",id:id})
    }
    console.log(cartState)
    const CartValue = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        count:cartState.count,
        amount:cartState.amount+1,
        addCartItem: addCardHandler,
        removeCartItem: removeCardHandler,
    }
    return <CartContext.Provider value={CartValue}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;