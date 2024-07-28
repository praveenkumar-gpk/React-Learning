import React,{useContext,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container } from 'react-bootstrap'
import ContextForCart from "../store/ContextForCart";
import './BugReporting.css'

const BugReportingForm = ()=>
    {
        const [email,setEmail] = useState("");
        const [phone,setPhone] = useState("");
        const handleEmailChange= (eve)=>
            {
                setEmail(eve.target.value)
            }
        const handlePhoneChange= (eve)=>
            {
                setPhone(eve.target.value)
            }
        const ctx = useContext(ContextForCart);
        return <Container>
            <br/>
            <form onSubmit={ctx.handleBugReport} className="bug_form">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleEmailChange} value={email} />
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="number" onChange={handlePhoneChange} value={phone} />
                </div>
                <br></br>
                <Button type="submit" variant="warning" size="sm">Report</Button>
            </form>
            <br/>
            <br/>
            
            
        </Container>
    }

export default BugReportingForm;