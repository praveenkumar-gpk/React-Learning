import React, { Fragment } from "react";
import CartIcon from '../cart/CartIcon'
import './buttonForCart.css'

const CartButton = () => {
    return    <Fragment>
        <button className="button">
            <span className="icon">
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className="badge">3</span>
        </button>
    </Fragment>
}

export default CartButton;