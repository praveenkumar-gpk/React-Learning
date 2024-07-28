import React from 'react';
import './Sidebar.css'
import { useDispatch } from 'react-redux';
import { handleActive } from '../slices/SliceForMail';
import { useNavigate } from 'react-router';
const SidebarItem = (props) => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const handleActiveselect =()=>{
        dispatch(handleActive(props.text))
        if (props.text==='Send Items') navigate('/send')
        
    }
    return <div className={`sidebar_itemlist ${props.isActive && 'sidebar_itemlist--active'}`} onClick={()=>handleActiveselect()}>
            <div>{props.icon}</div>
            <h4>{props.text}</h4>
            {props.isActive && <p>{props.count}</p>}
        </div>
};

export default SidebarItem;