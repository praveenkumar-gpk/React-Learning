import React, { Fragment, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container, Image } from 'react-bootstrap'
import './Cards.css'
import ContextForCart from "../store/ContextForCart";
import { NavLink } from "react-router-dom";


const CardData = () => {
    const ctx = useContext(ContextForCart);
    return ctx.isLoggedIn && <Fragment>
        <Container className="music_label">
            <h2>Music</h2>
            <Row md={2}>
                {ctx.productsArr.map((productsArr)=>{
                    return <Col>
                        <div className="music_content">
                        <div>
                        <div id="heading_album">
                            <h2>{productsArr.title}</h2>
                        </div>
                        <div className="img_album">
                            <NavLink to={"/products/"+productsArr.title}><Image src={productsArr.imageUrl}></Image></NavLink>
                        </div>
                        <div className="prod_details">
                            <span className="price">
                                <span className="symbol">₹</span>
                                <span>{productsArr.price}</span>
                                <Button className="buy_button" onClick={ctx.handleBuyClick} size="lg" variant="outline-dark">Buy</Button>
                            </span>
                        </div>
                        </div>
                        </div>
                    </Col>
                    
                })}

            </Row>
        </Container>
        <br></br>
    </Fragment>
}

export default CardData;