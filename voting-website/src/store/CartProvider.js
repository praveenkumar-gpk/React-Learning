import React, { useState,useMemo, useEffect } from "react";
import ContextforVote from "./Context";


const CartProvider = (props)=>{
    
    const [count,setCount] = useState(0);
    const [modal,seModal] = useState(true)
    const [voterList,setVoterList] = useState(
        {
            list1:[],
            list2:[],
            list3:[]
        }
    )
    const listofLeaders = useMemo(()=>{
        
        return [
        {
            key:0,
            name:"Karthi",
            votes:voterList.list1.length
        },
        {
            key:1,
            name:"Dilli",
            votes:voterList.list2.length
        },
        {
            key:2,
            name:"Syed",
            votes:voterList.list2.length
        }
    ]},[voterList])
    const handleModalClick = ()=>{
        seModal(prev=>!prev)
    }
    const addVotehandler = async(eve)=>
        {
            let new_value;
            eve.preventDefault();
            if(eve.target.select.value===listofLeaders[0].name)
            {
                for (let key in voterList) {
                    if (key==="list1"){
                        new_value = {
                            list1:[...voterList[key],eve.target.name.value],
                            list2:voterList.list2,

                            list3:voterList.list3,
                        }
                        setVoterList(new_value)
                    
                 }
                }

            }
            else if(eve.target.select.value===listofLeaders[1].name)
            {
                for (let key in voterList) {
                    if (key==="list2"){
                        new_value = {
                            list1:voterList.list1,
                            list2:[...voterList[key],eve.target.name.value],
                            list3:voterList.list3,
                        }
                        setVoterList(new_value)
                    
                 }
                }

            }
            else 
            {
                for (let key in voterList) {
                    if (key==="list3"){
                        new_value = {
                            list1:voterList.list1,
                            list2:voterList.list2,
                            list3:[...voterList[key],eve.target.name.value],
                        }
                        setVoterList(new_value)
                    
                 }
                }

            }
            
            seModal(true)
            setCount(prev=>prev+1)
           const response = await fetch("https://react-projects-160fb-default-rtdb.firebaseio.com/voting.json",{
            method:"POST",
            body:JSON.stringify(new_value)
            })
            if (response.ok) alert('Votername has been added')
        }
    const handleVoterRemove= (eve,name)=>{
        if (name==="Karthi"){
        const index = voterList.list1.indexOf(eve)
        if (index>-1) {
            voterList.list1.splice(index,1)
            const new_value = {
                list1:voterList.list1,
                list2:voterList.list2,
                list3:voterList.list3,
            }
            setVoterList(new_value)
        }
    }
    else if (name==="Dilli"){
        const index = voterList.list2.indexOf(eve)
        if (index>-1) {
            voterList.list2.splice(index,1)
            const new_value = {
                list1:voterList.list1,
                list2:voterList.list2,
                list3:voterList.list3,
            }
            setVoterList(new_value)
        }
    }
    else{
        const index = voterList.list3.indexOf(eve)
        if (index>-1) {
            voterList.list3.splice(index,1)
            const new_value = {
                list1:voterList.list1,
                list2:voterList.list2,
                list3:voterList.list3,
            }
            setVoterList(new_value)
        }
        
    }
    setCount(prev=>prev-1)
     
    }
    useEffect(()=>{
        fetch("https://react-projects-160fb-default-rtdb.firebaseio.com/voting.json").then(res=>res.json()).then(data=>{
            const value = data
            let lastProperty;
            for (lastProperty in value) console.log(value[lastProperty])
            // const new_data = {
            //     list1:value.list1?value.list1:null,
            //     list3:value.list2?value.list12:null,
            //     list3:value.list3?value.list3:null,
            // }
            // setVoterList(new_data)
        })
    
    },[])

    const countHandler = ()=>setCount(prev=>prev+1)
    const contextValue = {
        count:count,
        addCount:countHandler,
        currentList:voterList,
        modal:handleModalClick,
        lists:listofLeaders,
        modalStatus:modal,
        addVote:addVotehandler,
        voterRemove:handleVoterRemove
    }
    if (sessionStorage.getItem('reloaded') != null) {
        console.log('page was reloaded');
    } else {
        console.log('page was not reloaded');
    }
    
    sessionStorage.setItem('reloaded', 'yes');

    return <ContextforVote.Provider value={contextValue}>{props.children}</ContextforVote.Provider>

}

export default CartProvider;