import React, { useContext } from 'react'
import {Navbar,Nav,NavDropdown,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextForCart from '../store/ContextForCart';

const Header = ()=>{
    const ctx = useContext(ContextForCart);
    return <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" >
      <Container >
        <Navbar.Brand href="#home">E-Commerce_Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-success" size='lg' onClick={()=>ctx.handleCartClick()} >Cart</Button>
      </Container>
      
    </Navbar>
}
export default Header;