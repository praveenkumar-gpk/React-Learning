import React, {useContext } from "react";
import Modal from "../UI/Modal";
import'./Cart.css'
import CartContext from "../store/Cartcontext";
import CartItem from "./CartItem";

const Cart = (props)=>{
    const onRemove = (id)=>{

    }
    const onAdd = (item)=>{

    }
    const ctx = useContext(CartContext);
    const isItemValid = ctx.items.length>0
    return <Modal>
        <div className="cart-items">
            <ul>
                {ctx.items.map((item)=>{
                    return<CartItem
                    id={item.id}
                    name = {item.name}
                    price = {item.price}
                    amount = {item.amount}
                    count = {item.count}
                    onRemove={onRemove.bind(null,item.id)}
                    onAdd={onAdd.bind(null,item)}
                     />
                })}
            </ul>            
        <div className="total">
            <span>Total Amount</span>
            <span>{ctx.totalAmount}</span>
        </div>
        <div className="actions">
            <button className="button_alt" onClick={props.onCloseHandler}>Close</button>
            {isItemValid && <button className="button">Order</button>}
        </div>
        </div>
    </Modal>

}

export default Cart;