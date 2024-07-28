import React, { forwardRef, useContext, useRef, useState } from 'react'
import './Sign-in.css'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import ContextForExpense from '../store/ContexForExpense';

const Signin = () => {
    const ctx = useContext(ContextForExpense)
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
    const [forgot,setForgot] = useState(false)
    const emailRef = useRef()
    const passRef = useRef()
    const confirmPass = useRef()
    const verifyref = useRef()
    const handleSwitch = () => {
        setLogin(prev => !prev)
        setForgot(false)
    }
    const handleResetPass = async()=>{
       try {const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58",{
            method:"POST",
            body:JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:verifyref.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok)
            {
                const data = await response.json()
                console.log(data)
            }
        else throw (await response.json())}
        catch(err){console.log(err)}
    }
    
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58"
    const handlFormSubmit = async (eve) => {
        eve.preventDefault();
        if (!login) {
            if (passRef.current.value!==confirmPass.current.value){ 
                alert('confirm password not same as password') }
            else {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailRef.current.value,
                        password: passRef.current.value,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                if (response.ok) {
                    alert('account has been created')
                    const data = await response.json()
                    localStorage.setItem('token',data.idToken);
                    localStorage.setItem('email',data.email)
                    ctx.handleLogin()
                    navigate('/home')
                }
                else {
                    const err = await response.json()
                    throw (err)
                }
            }

            catch (err) {
                console.log(err)
            }
        }
        }
        else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: emailRef.current.value,
                        password: passRef.current.value,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                if (response.ok) {
                    const data = await response.json()
                    localStorage.setItem('token',data.idToken);
                    localStorage.setItem('email',data.email);
                    ctx.handleLogin()
                    navigate('/home')
                }
                else {
                    const err = await response.json()
                    throw (err)
                }
            }

            catch (err) {
                alert(err.error.message)
            }
        }

    }
    return <form className='sign_in' onSubmit={handlFormSubmit}>
        <div className='form_details'>
            {!forgot &&<div>
            <h2>{login ? "Sign In" : "Sign UP"}</h2>
            <label htmlFor='email'>Email :-</label>
            <input id='email' ref={emailRef} required type='email'></input>
            <label htmlFor='pass'>Password :-</label>
            <input id='pass' ref={passRef} required type='password'></input>
            {!login && <label htmlFor='confirm'>Confirm Password :-</label>}
            {!login && <input id='confirm' ref={confirmPass} required type='password'></input>}
            {login && <Link onClick={()=>{setForgot(prev=>!prev);setLogin(false)}}>Forgot password?</Link>}
            <Button className='btn' variant='success' size='lg' type="submit">{!login ? "Sign Up" : "Sign In"}</Button>
            </div>}
            {forgot && <div className='forgot'>
            <h2>Forgot Password</h2>
            <label htmlFor='verify'>Registered Mail ID</label>
            <input id='verify' ref={verifyref} />
            <Button variant='warning' onClick={()=>handleResetPass()}>Send the Link</Button>
            </div>}

        </div>
        <div className='switch'>
            <Button variant={!login?'outline-success':'outline-warning'}onClick={()=>handleSwitch()}>{!login ? "Already has an account Sign in here" : "New User sign up here"}</Button>
        </div>
    </form>

}

export default Signin