import React,{useContext, useState} from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Header from './components/layout/header';
import Meals from './components/meal/Meals';
import CartProvider from './components/store/CartProvider';
import CartContext from './components/store/Cartcontext';

function App() {

  const [showCart,setshowCart] = useState(false);

  const clickCartHandler = ()=>{setshowCart(true)}
  const clickCloseHandler = ()=>{setshowCart(false)}
  const ctx = useContext(CartContext);

  return (
    <CartProvider>
      {showCart && <Cart onCloseHandler={clickCloseHandler}/>}
      <Header onCartClick = {clickCartHandler} count = {ctx.totalAmount}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
