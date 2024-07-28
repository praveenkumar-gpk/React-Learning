import React, { useState } from "react";
import * as Icons from 'react-bootstrap-icons'
import './MailboxBody.css'
import MailList from "./MailList";
import { useSelector } from "react-redux";
import parser from 'html-react-parser'
import { useNavigate } from "react-router";

const MailShow = () => {
    const navigate = useNavigate()
    const data = useSelector(state=>state.mail)
    const inboxActive = useSelector(state=>state.inboxactive)
    console.log(data)
    const [isactive,setIsactive] = useState(true)
    const key = data.key
    let email = data.email
    email = email.replace('.com','')
    console.log(key)

    const url = `https://react-projects-160fb-default-rtdb.firebaseio.com/mailbox/${email}/${key}.json`
    console.log(url)
    const handleBack = ()=>{
        inboxActive ? navigate('/home'):navigate('/send')
    }
    const handleDelete = async()=>{
        navigate('/home')
        await fetch(url,{
            method:"Delete"
        })
        
        
    }
    return (
        <div className="mailbody">
        <div className="mailbody_top">
            <div className="mailbody_top_left">
            <button><Icons.App/></button>
            <button><Icons.Star/></button>
            <button><Icons.ArrowClockwise/></button>
            <button><Icons.ThreeDotsVertical/></button>
            </div>
            <div className="mailbody_top_right">
            <p>1-50 of 100</p>
            <button><Icons.ChevronLeft /></button>
            <button><Icons.ChevronRight/></button>                
            </div>
            
        </div>
        <div className="mailbody_middle">
                <div className="mailbody_middle_left">
                <button className={`${isactive&&'mailbody_btn--active'}`}><span><Icons.Mailbox/></span><p>Pimary</p></button>
                </div>
                <div className="mailbody_middle_middle">
                <button><span><Icons.Tag/></span><p>Promotions</p></button>
                </div>
                <div className="mailbody_middle_right">
                <button><span><Icons.PeopleFill/></span><p>Social</p></button>
                </div>
                
            </div>
            <div>
                <button onClick={()=>handleBack()}><Icons.Backspace/></button>
                {inboxActive && <button onClick={()=>handleDelete()} ><Icons.Trash3/></button>}
            </div>
        <div className="mailshow_from">
            <div>
            <h5>{inboxActive?"From :-":"To:-"}</h5>
            <p className="mailshow_from_email">{inboxActive?data.email:data.to}</p>
            </div>
            <p className="mailshow_from_time">{data.time}</p>
        </div>
        <div className="mailshow_subject">
            <h5>Subject line <Icons.ChevronDoubleRight/></h5>
            <h6>{data.subject}</h6>
        </div>
        <div className="mailshow_body">
            
            <p>{parser(data.body)}</p>
        </div>
        </div>          

    )
};

export default MailShow;