import { useParams } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import React,{useContext,Fragment} from 'react'
import ContextForCart from "../store/ContextForCart";
import './Products.css'

const Products = ()=>
    {
        const ctx = useContext(ContextForCart);
        const clickedTitle = useParams().products
        const newArr = ctx.productsArr.filter((pro)=>{
            if (pro.title===clickedTitle) return pro
            return null
        })
        return <Fragment>
            <div className="img">
                <Image className = "image" src={newArr[0].imageUrl}/>
                <Button variant="info">Buy</Button>
            </div>
            
        </Fragment>
    }


export default Products;