import React from "react";
import { Button,Image } from "react-bootstrap";
import * as Icons from 'react-bootstrap-icons'
import Image__ from '../images/Image.png'
import './Header.css'
import { useDispatch } from "react-redux";
import { handleLogin } from "../slices/SliceForMail";
const Header = ()=>{
    const dispatch = useDispatch()
    const handleClick = ()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        dispatch(handleLogin())
    }
return <div className="header">
    <div className="header_right">
        <button><Icons.List height={40} width={25}/></button>        
        <img className="mx-2" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="gmail" height={40} width={105} />
    </div>
    <div className="header_middle">
        <Icons.Search/>
        <input placeholder="search mail"/>
    </div>
    <div className="header_left">
        <button><Icons.Info /></button>
        <button><Icons.Gear/></button>
        <button><Image src="https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0" rounded height={30} width={30} /></button>   
        <Button variant="outline-warning" onClick={()=>handleClick()}>Logout</Button>
        
    </div>
    
</div>
}

export default Header;