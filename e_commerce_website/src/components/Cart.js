import React, { Fragment, useContext } from "react";
import ContextForCart from "../store/ContextForCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap'

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
    return <Fragment><div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >   <Modal show={ctx.cartShow} >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={ctx.handleCartClick}> 
                    <Modal.Title>Cart Items</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {cartElements.map((el)=>{
                        return<li>{el.title} {el.price} {el.quantity}</li>
                    })}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={ctx.handleCartClick}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
        </div>
    </Fragment>
}

export default Cart;