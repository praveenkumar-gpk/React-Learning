import React, { useContext, useRef, useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import './Form.css'
import ContextForCart from "../store/ContextForCart";
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const navigate = useNavigate()
    const [userState, seUserState] = useState(false);
    const ctx = useContext(ContextForCart)
    const emailref = useRef();
    const passref = useRef()
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58"
    const formSubmitHandler = async (eve) => {
        eve.preventDefault()
        if (!userState) {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailref.current.value,
                        password: passref.current.value,
                        returnSecureToken: true
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }

                })
                if (response.ok) {
                    ctx.handleLogin();
                    navigate("/home");
                    
                }
                else
                {
                    console.log(response)
                    throw(response)
                }

            }
            catch (err) {
                let err_msg = "Something went wrong"
                const err_message = await err.json();
                if (err_message && err_message.error && err_message.error.message) err_msg = err_message.error.message
                alert(err_msg)
            }
        }
    }

    return <div className="sign_page">
        <form className="form_sign_pag" onSubmit={formSubmitHandler}>
            <h2 className="h2">{!userState ? "Login Page" : "Sign Up Page"}</h2>
            <label htmlFor="email">Email ID :-</label>
            <input id="email" type="email" ref={emailref}></input>
            <label htmlFor="pass">Password :-</label>
            <input id="pass" type="password" ref={passref}></input>
            <div className="btn-form">
                <Button type="submit">{userState ? "Sign UP" : "Sign In"}</Button>
                <br></br>
                <br></br>
                <NavLink onClick={() => seUserState((prev) => !prev)}>{userState ? "Already a user Sign here" : "New User Sign Up by clicking here"}</NavLink>
            </div>
        </form>
    </div>
}

export default UserForm;