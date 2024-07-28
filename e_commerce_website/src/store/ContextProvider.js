import React, { useState } from "react";
import ContextForCart from "./ContextForCart";





const ContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [token,setToken] = useState(null)
    const [cartShow, setCartshow] = useState(false);
    const [count, setCount] = useState(0);
    const handleCartClick = () => {
        setCartshow(prev => !prev)
    }
    const handleBuyClick = () => {
        setCount(prev => prev+1)
    }
    const productsArr = [
        {
            title: 'Colors',
            price: 1000,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 5000,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 7000,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 10000,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]
    const handleLogin = ()=>{
        setIsLoggedIn(true);
    }
    const handleLogout = ()=>{
        setIsLoggedIn(false)
    }
    const handleBugReport = async (eve)=>
        {
            eve.preventDefault();
            const data = {
                email:eve.target.email.value,
                phone:eve.target.phone.value
            }
            if (data.email.length>5 && data.phone.length>8){
            const response = await fetch("https://react-projects-160fb-default-rtdb.firebaseio.com/e_commerce.json",{
                method:"POST",
                body:JSON.stringify(data)
            })
            if (response.ok) alert('Bug has been reported')
        }
            else alert('something went wrong')
            
            
        }
    const constvalue = {
        isLoggedIn:isLoggedIn,
        cartShow:cartShow,
        productsArr:productsArr,
        handleLogin:handleLogin,
        handleLogout:handleLogout,
        handleCartClick: handleCartClick,
        handleBuyClick: handleBuyClick,
        handleBugReport:handleBugReport,
        cartCount:count
    }

    return <ContextForCart.Provider value={constvalue}>{props.children}</ContextForCart.Provider>
}


export default ContextProvider