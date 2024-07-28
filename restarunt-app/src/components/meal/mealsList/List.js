import React, { useContext, useState } from "react";
import './List.css';
import CartContext from "../../store/Cartcontext";




 const List =  (props) => {
    const [cart, setCartValue] = useState(0)
    const cartValue = props.cartValue;
    const ctx = useContext(CartContext);
    const name = props.meal.name;
    const price = props.meal.price;
    const addCart = () => {
        setCartValue(cart + 1)
        ctx.addCartItem({
            id: props.id,
            name: name,
            amount: cart,
            count: cartValue,
            price: price
        })
    }
    
    return <form onSubmit={props.addCount}>
        <li className="meal">
            <div>
                <h3>{props.meal.name}</h3>
                <p className="description">{props.meal.description}</p>
                <p className="price">₹{props.meal.price}</p>
            </div>

            <div className="count">
                <label className="label">Amount</label>
                <input type={number} value={cart} min={0} max={8} readOnly></input>

                <div>
                    <button onClick={addCart}>+Add</button>
                </div>
            </div>
        </li>
    </form>
}

export default List;