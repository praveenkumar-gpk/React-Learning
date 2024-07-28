import React, { useState,useEffect } from 'react';
import './MailList.css'
import * as Icons from 'react-bootstrap-icons'
import bodyparser from 'html-react-parser'
import {convert} from 'html-to-text'
import { useDispatch, useSelector } from 'react-redux';
import { mailShow } from '../slices/SliceForMail';
import { useNavigate } from 'react-router';

const Mails = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let email = props.email.sendermail.replace('@gmail.com','')
    let red = props.email.read
    const handleMailShow = async()=>{
        dispatch(mailShow({
            key:props.email.key,
            email:props.email.sendermail,
            subject:props.email.subject,
            body:props.email.body,
            time:props.email.time,
            to:props.email.to
        }))
        navigate('/mail')
    }
    return (

        <div className={`mailList ${red && 'read'}`} onClick={()=>handleMailShow()}>
            <div className='mailList_left'>
                <button><Icons.App/></button>   
                <button><Icons.Star/></button>                
                <h4>{email}</h4>
            </div>
            <div className='mailList_middle'>
                <h4>{props.email.subject}</h4>
                <p>{convert(props.email.body)}</p>
            </div>
            <div className='mailList_right'>
                <p>{props.email.time}</p>
            </div>
        </div>
    );
};

export default Mails;