import React from "react";

const ContextForCart = React.createContext({
    cartShow:false,
    handleCartClick:()=>{}
})

export default ContextForCart;