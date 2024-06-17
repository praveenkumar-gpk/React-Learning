import React, { Fragment } from 'react'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'


const Footer = () => {
    return <Fragment>
        <footer className='footer'>
            <div className='inner_div'>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Twitter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Facebook</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href='https://www.youtube.com'>Youtube</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </footer>
    </Fragment>
}

export default Footer