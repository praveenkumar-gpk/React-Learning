import React,{useState,useRef} from 'react';
import * as Icons from 'react-bootstrap-icons'
import {Button} from 'react-bootstrap'
import JorditEditor from 'jodit-react'
import'./Compose.css'
import { handleCompose, handleCount } from '../slices/SliceForMail';
import { useDispatch } from 'react-redux';
const Compose = () => {
    const dispatch = useDispatch()
    const editor = useRef(null)
    const [content,setContent] = useState("")
    const [to,setTo] = useState("")
    const [sub,setSub] = useState("")
    const handleMailSend = async()=>
        {
            if (to==="") return alert('To is required')
            if (sub==="") return alert('Subject is required')
            if (content==="") return alert('Content is required')
            let time = new Date
            time =time.toLocaleTimeString()+' '+time.toLocaleDateString()
            let email = to
            email = email.replace(".com", "");
            let url = `https://react-projects-160fb-default-rtdb.firebaseio.com/mailbox/${email}/.json`
            try{
            const details = {
                senderMail:localStorage.getItem('email'),
                to,
                subject:sub,
                body:content,
                read:false,
                time
            }
            const response = await fetch(url,{
                method:"POST",
                body:JSON.stringify(details),
            })
            const data = await response.json()
            if (response.ok){
                console.log(data)
                setTo("")
                setSub("")
                setContent("")
                dispatch(handleCompose())
                dispatch(handleCount())
            }
            else throw(data)
        }
        catch(err){
            console.log(err.error)
        }
        }
    return (
        <div className='compose'>
            <div className='compose_title'>
                <div className='compose_title_left'>
                    <p>New Message</p>
                </div>
                <div className='compose_title_right'>
                    <button onClick={()=>dispatch(handleCompose())}><Icons.Dash/></button>
                    <button><Icons.ArrowsAngleExpand/></button>
                    <button onClick={()=>dispatch(handleCompose())}><Icons.X/></button>                    
                </div>
            
            </div>
            <div className='compose_to'>
                <input placeholder='Receipdent Email' type='email' value={to} onChange={(e)=>setTo(e.target.value)}/>
            </div>
            <div className='compose_subject'>
            <input placeholder='Subject line' type='text' required value={sub} onChange={(e)=>setSub(e.target.value)}/>
            </div>
            <div className='compose_body'>
                <JorditEditor 
                ref={editor} 
                value={content} 
                onChange={e=>setContent(e)}
                />
            </div>
            <div className='compose_footer'>
                <Button size="lg"variant='primary' onClick={()=>handleMailSend()}><Icons.Send/> Send</Button>
            </div>
        </div>
    );
};

export default Compose;