import React, { Fragment,useContext } from "react";
import CartIcon from '../cart/CartIcon'
import './buttonForCart.css'
import CartContext from "../store/Cartcontext";

const CartButton = (props) => {
    const ctx = useContext(CartContext);
    return    <Fragment>
        <button className="buttonForCart" onClick={props.onCartClick}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="badge">{ctx.count}</span>
        </button>
    </Fragment>
}

export default CartButton;