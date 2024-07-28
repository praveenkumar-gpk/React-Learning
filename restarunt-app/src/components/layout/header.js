import React from "react";
import './Header.css'
import meals from '../images/meals.jpg'
import ButtonForCart from './ButtonForCart'


const Header = (props)=>{
    
    return <React.Fragment>
        <header className="header">
            <h2>ReactMeals</h2>
            <ButtonForCart onCartClick={props.onCartClick}/>
        </header>
        <div className="main-image">
            <img src={meals} alt="Table full of food"/>
        </div>
        
    </React.Fragment>
}

export default Header;