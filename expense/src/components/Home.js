import React, { useContext, useEffect, useRef, useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ContextForExpense from "../store/ContexForExpense";
import './Sign-in.css'

const Home = ()=>{
    const ctx = useContext(ContextForExpense)
    const [update,setUpdate] = useState(false)
    const nameRef = useRef()
    const photoRef = useRef()
    const [name,setName] = useState("")
    const [photo,setPhote] = useState("")

    const handleVerifyEmail = async()=>{
        try{
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58",{
                method:"POST",
                body:JSON.stringify({
                    requestType:"VERIFY_EMAIL",
                    idToken:ctx.token,
                }),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            if (response.ok)
                {
                    const data = await response.json()
                    alert('Verification code has been sent to your registered Mail id')
                }
            else throw(await response.json())
        }
        catch(err) {alert(err.error.message)}
    }
    
    const handleUpdate = async()=>{
        try{
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58",{
            method:"POST",
            body:JSON.stringify({
                idToken:ctx.token,
                displayName:nameRef.current.value,
                photoUrl:photoRef.current.value,
                returnSecureToken:false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok)
            {
                const data = await response.json()
                alert('details has been udpated successfully')
            }
        else throw(response)
        }
        catch(err)
        {
            const error = await err.json()
            alert(error.error.message)
        }
    }
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const response =  fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCPLH-yMNDsbh52yjzRajM9tYXa1_FgG58",{
            method:"POST",
            body:JSON.stringify({idToken:token}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>{
            if (data.ok)
            {
                const value = data.json().then(val=>{setName(val.users[0].displayName); setPhote(val.users[0].photoUrl) })
            }
            else throw(data)
        }).catch(err=>err.json()).then()
        
    },[])
    return <div className="img">
        <div className="user">
            <p>It's never too Late to start<br></br> tracking your expenses</p>
            <div className="user_details">
            <p >your profile is incomplete, Please complete it </p>
            <Link onClick={()=>setUpdate(prev=>!prev)}>Update the profile</Link>
            <Button variant="secondary" onClick={()=>handleVerifyEmail()}>Verify your mail</Button>
            </div>
            <Button className="btn" variant="outline-dark" size="lg" onClick={()=>ctx.handleLogout()}>Logout</Button>
        </div>
        {update && <div className="form_update">
            <h2>Contact Details</h2>
            <label htmlFor="fullname">Full Name:</label>
            <input id="fullname" required ref={nameRef} value={name}></input>
            <label htmlFor="photo">Profile Photo URL</label>
            <input id="photo" required ref={photoRef} value={photo}></input>
            <div>
            <Button onClick={()=>handleUpdate()}>Update</Button>
            <Button variant="outline-dark" onClick={()=>setUpdate(prev=>!prev)}>Cancel</Button>
            </div>
            
        </div>}
    </div>
}

export default Home;