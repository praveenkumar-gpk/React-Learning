import React, { useEffect, useRef, useState } from "react";
import './ExpensesForm.css'
import { Button } from "react-bootstrap";
import { json } from "react-router-dom";


const ExpensesForm = () => {
    let email = localStorage.getItem('email')
    email = email.replace('.com','')
    const url = 'https://react-projects-160fb-default-rtdb.firebaseio.com/expense-tracker/'+email+'.json'
    const [list,setList] = useState([])
    const [amount,setAmount]= useState()
    const [data,setData] = useState()
    const[description,setDescription] = useState()
    const[option,setOption] = useState("Car")
    const handleAddExpense = async()=>{
        setList(prev=>{
            return [...prev,{
                amount:amount,
                description:description,
                option:option 
            }]
        })
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
            amount:amount,
            description:description,
            option:option 
            })

        })
        const data = await response.json()
        console.log(data)
    }
    const handleAmount= (eve)=>setAmount(eve.target.value)
    const handleDescription= (eve)=>setDescription(eve.target.value)
    const handleOption= (eve)=>setOption(eve.target.value)
    const handleDeleteClick = async (eve)=>{
        for (let key in data)
            {
                if (data[key].amount===eve.amount && data[key].description===eve.description && data[key].option===eve.option){
                    const deleteUrl = 'https://react-projects-160fb-default-rtdb.firebaseio.com/expense-tracker/'+email+'/'+key+'/.json'
                    const response = await fetch(deleteUrl,{
                        method:"DELETE"
                    })
                    const data =console.log (await response.json())
                    
                }
            }
        const newList = list.filter((item)=>{
            if (item.amount!==eve.amount && item.description!==eve.description && item.option!==eve.option) return item
            return null
        })
        setList(newList)
    }
    const handleEditClick = (eve)=>{
        setAmount(eve.amount)
        setDescription(eve.description)
        setOption(eve.option)
        handleDeleteClick(eve)
    }
    useEffect(()=>{
        const response = fetch(url)
            .then(res=>res.json()).then(data=>{
                setData(data)
                for (let key in data)
                    {
                       setList(prev=>[...prev,{
                        amount:data[key].amount,
                        description:data[key].description,
                        option:data[key].option
                       }])
                        
                    }
            }).catch(err=>console.log(err))
    },[])
    return <div className="expenses_page">
        <div className="expenses_list" >
            <h2>Add an Expense</h2>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number"onChange={handleAmount} value={amount} />
            <label htmlFor="description">Description</label>
            <input id="description" type="text"onChange={handleDescription} value={description}  />
            <select onChange={handleOption} value={option} >
                <option>Car</option>    
                <option>Gym</option>
                <option>Laundry</option>
                <option>Sports</option>
            </select>
            <Button onClick={()=>handleAddExpense()}>Add</Button>
        </div>
        <div className="list_items">
            {list.map((item)=>{
                return <ul className="item"v key={Math.random()}>
                    <li className="first"><span className="first_item">₹</span>{item.amount}</li>
                    <li>{item.description}</li>
                    <li className="last">{item.option}</li>
                    <Button variant="outline-dark" onClick={()=>handleEditClick(item)} >Edit</Button>
                    <Button variant="outline-danger" onClick={()=>handleDeleteClick(item)}>Delete</Button>

                </ul>
            })}
        </div>

    </div>
    
}

export default ExpensesForm