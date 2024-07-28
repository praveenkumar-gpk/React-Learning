import React, { Fragment } from "react";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import BodyForHome from "./BodyForHome";

const Home = () => {
    return <Fragment><div className="row_">
        <Button variant="outline-info" size="lg">Get our Latest Album</Button>
    </div>
    <div className="row_">
        <Button className="rounded_button img_wrapper"variant="outline-info" size="lg"> </Button>
    </div>
    <BodyForHome/>
    </Fragment>
}

export default Home;