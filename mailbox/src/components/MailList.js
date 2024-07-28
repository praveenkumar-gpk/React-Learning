import React, { useState,useEffect } from 'react';
import './MailList.css'
import Mails from './Mails';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCount, handleCount, handleSendCount } from '../slices/SliceForMail';

const MailList = () => {
    const [time,setTime] = useState(new Date)
    const [data,setData] = useState([])
    const [sendData,setSendData] = useState([])
    const dispatch = useDispatch()
    const inboxActive = useSelector(state=>state.inboxactive)
    let email = localStorage.getItem('email')
    email = email.replace(".com", "");
    let url = `https://react-projects-160fb-default-rtdb.firebaseio.com/mailbox/${email}/.json`
        useEffect(()=>{
            const timer = setTimeout(()=>{
                {fetch(url).then(res=>res.json()).then(value=>{
                    let arrval = []
                    let count = 0
                    for (let key in value)
                        {
                            console.log(value[key])
                            arrval[count] = {
                                key,
                                sendermail:value[key].senderMail,
                                subject:value[key].subject,
                                body:value[key].body,
                                time:value[key].time,
                                to:value[key].to

                            }
                            count++
                        }
                       setData(arrval)
                        const new_send = arrval.filter((email)=>{
                            if (email.to===localStorage.getItem('email')) return email;
                            return null;
                        })
                        
                        setSendData(new_send)
                        dispatch(handleAddCount(count))
                        dispatch(handleSendCount(new_send.length))
                })}
                setTime(new Date)
            },500)
            return ()=>clearTimeout(timer)

        },[time])
        console.log(data)
return inboxActive ? data.map((email)=>{
        return <Mails email={email}/>
    }):sendData.map((email)=>{
        return <Mails email={email}/>
    })
    
};

export default MailList;