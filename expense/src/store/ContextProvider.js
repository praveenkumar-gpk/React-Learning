
import React, { useState } from 'react';
import ContextForExpense from './ContexForExpense';

const ContexProvider = (props)=>{
    
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [isLogin,setLogin] = useState(token!==null)
    const handleLogout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setToken(null)
        setLogin(false)
    }
    const handleLogin=()=>{
        setToken(localStorage.getItem('token'))
        setLogin(true)
    }
    const value = {
        token:token,
        isLogin:isLogin,
        handleLogout:handleLogout,
        handleLogin:handleLogin
    }
    return <ContextForExpense.Provider value={value}>{props.children}</ContextForExpense.Provider>
}

export default ContexProvider;