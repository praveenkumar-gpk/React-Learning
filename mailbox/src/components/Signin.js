import React, { useState } from 'react';
import './Signin.css'
import { Form, Button } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { handleLogin } from '../slices/SliceForMail';

const Signin = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState(true)
    const dispatch = useDispatch()
    const handleLlogin = async (eve) => {
        console.log('done')
        eve.preventDefault()
        if (!status) {
            const passMatch = eve.target[1].value === eve.target[2].value
            if (!passMatch) alert("Confirm Password should be same as Password")
            else if (passMatch) {
                let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58"
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify({
                            email: eve.target[0].value,
                            password: eve.target[1].value,
                            returnSecureToken: true
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    if (response.ok) {
                        const data = await response.json()
                        dispatch(handleLogin())
                        localStorage.setItem('email',data.email)
                        localStorage.setItem('email',data.idToken)
                        navigate('/home')
                    }
                    else throw (await response.json())
                }
                catch (response) {
                    alert(response.error.message)
                }
            }
        }
        else {
            let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: eve.target[0].value,
                        password: eve.target[1].value,
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
                    dispatch(handleLogin())
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

    return (
        <div className='singin_page'>
            <div>
                <h1 className='mt-5 mb-5 heading'>Welcome to MailBox</h1>
                <Form className='form' onSubmit={(e)=>handleLlogin(e)}>
                    <h2 className='title'>{status ? "Sign in" : "Sign Up"}</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        {status && <Link to={'/home'}>Forgot Password?</Link>}{status && <br></br>}
                        {!status && <Form.Label>Confirm Password</Form.Label>}
                        {!status && <Form.Control type='password' placeholder='Confirm Password' required />}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                <Button className='switch_button' size='lg' variant={status ? "outline-warning" : "outline-success"} onClick={() => setStatus(prev => !prev)}>{status ? "New user Sign Up here" : "Alreadh has an account sign in here"}</Button>
            </div>
        </div>
    );
};

export default Signin;