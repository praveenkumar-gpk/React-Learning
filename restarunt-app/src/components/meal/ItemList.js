import './ItemList.css'
import List from './mealsList/List'
import Card from '../UI/Card';
import { useState } from 'react';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Briyani',
        description: 'Finest Chicken and Masala',
        price: 180.00,
    },
    {
        id: 'm2',
        name: 'Noddles',
        description: 'A Indian specialty!',
        price: 100.00,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 120.00,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 90.00,
    },
];

const ItemList = () => {
    const [cartValue,setCartValue] = useState(1);
    const addCount = (eve) => {
        eve.preventDefault()
        setCartValue((prevState)=>{
            return prevState+1
        });

        
    } 
    const MealsList = DUMMY_MEALS.map((meal) => <List key={meal.id} meal={meal} id={meal.id} addCount={addCount} cartValue={cartValue}/>);
    return <section className="meals">
        <Card><ul>{MealsList}</ul></Card>
            
    </section>
}

export default ItemList;