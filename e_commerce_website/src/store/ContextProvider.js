import React, { useState } from "react";
import ContextForCart from "./ContextForCart";





const ContextProvider = (props) => {
    const [cartShow, setCartshow] = useState(false);
    const handleCartClick = () => {
        setCartshow(prev => !prev)
    }
    const constvalue = {
        cartShow:cartShow,
        handleCartClick: handleCartClick
    }

    return <ContextForCart.Provider value={constvalue}>{props.children}</ContextForCart.Provider>
}


export default ContextProvider