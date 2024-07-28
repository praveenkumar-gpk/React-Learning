import React from 'react';
import * as Icons from 'react-bootstrap-icons'
import './Sidebar.css'
import SidebarItem from './SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import {handleCompose} from '../slices/SliceForMail'

const Sidebar = () => {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
    const sendCount = useSelector(state=>state.sendCount)
    const inboxActive = useSelector(state=>state.inboxactive)
    const sendactive = useSelector(state=>state.sendactive)
    return (
        <div className='sidebar'>
            <div className='sidebar_compose'>
                <button onClick={()=>dispatch(handleCompose())}><span className='mx-2'><Icons.EnvelopePlus/></span>Compose</button>
            </div>
            <div className='sidebar_items'>
                <SidebarItem icon={<Icons.Inbox/>} text={"Inbox"} count={count} isActive={inboxActive}/>
                <SidebarItem icon={<Icons.Star/>} text={"Starred Items"} count={24}/>
                <SidebarItem icon={<Icons.File/>} text={"Drafts"} count={24}/>
                <SidebarItem icon={<Icons.Send/>} text={"Send Items"} count={sendCount} isActive={sendactive} />
                <SidebarItem icon={<Icons.Star/>} text={"Snoozed"} count={24}/>

            </div>
            
        </div>
    );
};

export default Sidebar;