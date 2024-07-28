import React, {  useContext } from "react";
import ContextForCart from "../store/ContextForCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap'
import './Cart.css'

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

const Cart = () => {
    const ctx = useContext(ContextForCart);
    return<div>
        <Offcanvas show={ctx.cartShow} onHide={ctx.handleCartClick} placement="top" className="cart">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="cart_div" >Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                {cartElements.map((el)=>{
                    return <li key={Math.random()}>{el.title} {el.price} {el.quantity}</li>
                })}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
}

export default Cart;