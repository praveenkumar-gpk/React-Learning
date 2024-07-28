import React, { useState } from "react";
import * as Icons from 'react-bootstrap-icons'
import './MailboxBody.css'
import MailList from "./MailList";
import { useSelector } from "react-redux";


const MailboxBody = () => {
    const count = useSelector(state=>state.count)
    const [isactive,setIsactive] = useState(true)
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
                <p>{count}</p>
                <button><Icons.ChevronLeft /></button>
                <button><Icons.ChevronRight/></button>                
                </div>
                
            </div>
            <div className="mailbody_middle">
                <div className="mailbody_middle_left">
                <button className={`${isactive &&'mailbody_btn--active'}`}><span><Icons.Mailbox/></span><p>Pimary</p></button>
                </div>
                <div className="mailbody_middle_middle">
                <button><span><Icons.Tag/></span><p>Promotions</p></button>
                </div>
                <div className="mailbody_middle_right">
                <button><span><Icons.PeopleFill/></span><p>Social</p></button>
                </div>
                
            </div>
            <div className="mailbody_content">
                <MailList/>
            </div>
            
            
        </div>
    );
};

export default MailboxBody;