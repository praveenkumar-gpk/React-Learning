import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap'

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]
const CardData = () => {
    return <Fragment>

        <Row className="g-4">
            {productsArr.map((products) => {
                return <Col><br></br> <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src={products.imageUrl} />
                    <Card.Body>
                        <Card.Title>{products.title}</Card.Title>
                    </Card.Body>
                    <div>
                        <Card.Subtitle style={{marginLeft:"270px"}}>₹{products.price}</Card.Subtitle>
                        <br></br>
                    </div>
                    <Button variant="primary" size="=lg">Buy</Button>
                </Card>
                </Col>
            })}
        </Row>
    </Fragment>
}

export default CardData;