import React, { useContext } from 'react'
import './Header.css'
import ContextforVote from '../store/Context'

const Header = ()=>{
    const ctx = useContext(ContextforVote)
    return <div className='header'>
        <h1>Voting campaign for the Class</h1>
        <p>Total votes {ctx.count}</p>
        <button onClick={()=>ctx.modal()} >Add new Vote</button>

    </div>
}
export default Header;