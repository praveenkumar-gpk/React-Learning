import React, { useContext } from 'react'
import ContextforVote from '../store/Context';
import './List.css'

const List = ()=>{
    
    const ctx = useContext(ContextforVote);
    return ctx.lists.map((item)=>{
        let list;
        if (item.name ==="Karthi") list = ctx.currentList.list1;
        else if (item.name==="Dilli") list = ctx.currentList.list2;
        else list = ctx.currentList.list3
            return <form className='list' >
                <h2 id='leadername'>{item.name}</h2>
                <ul>
                    {list.map((voter)=><li className='votername'>{voter}<button type='button' onClick={()=>ctx.voterRemove(voter,item.name)}>Delete</button></li>)}
                    <br></br>
                    <li>{item.votes}</li>
                </ul>
            </form>
        })
    
}
export default List;