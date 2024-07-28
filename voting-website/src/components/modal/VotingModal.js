import React,{useContext} from "react";
import { createPortal } from "react-dom";
import ContextforVote from "../../store/Context";
import './Modal.css'
const VotingModal = ()=>{
    const ctx = useContext(ContextforVote)
    if (ctx.modalStatus) return null;

    return createPortal(
        <div className="overlay">
        <form className="form" onSubmit={ctx.addVote}>
            <label htmlFor="name"></label>
            <input id="name"></input>
            <select id="select">
                <option>{ctx.lists[0].name}</option>
                <option>{ctx.lists[1].name}</option>
                <option>{ctx.lists[2].name}</option>
            </select>
            <button type="submit" >Vote</button>
            <button onClick={()=>ctx.modal()} >close</button>
        </form>
        </div>,document.getElementById('modal')
    )
        
        
    
}
export default VotingModal