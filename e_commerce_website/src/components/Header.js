import React, { useContext } from 'react'
import {Navbar,Nav,NavDropdown,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextForCart from '../store/ContextForCart';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = ()=>{
    const ctx = useContext(ContextForCart);
    return <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" >
      <Container >
        <Navbar.Brand as={Link} to="/home">All Album Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {ctx.isLoggedIn && <Nav.Link as={Link} to="/home" >Home</Nav.Link>}
            {ctx.isLoggedIn && <Nav.Link as={Link} to="/store"  >Store</Nav.Link>}
            {ctx.isLoggedIn && <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/home">
                Join Us
              </NavDropdown.Item>
            </NavDropdown>}
            {ctx.isLoggedIn && <Nav.Link as={Link} to='/bug-reporting' className='isactive'><img height={40} style={{borderRadius:10}} alt='bug-' src='https://static.vecteezy.com/system/resources/previews/012/916/753/original/bug-bugs-insect-testing-virus-flat-line-filled-icon-beautiful-logo-button-over-yellow-background-for-ui-and-ux-website-or-mobile-application-free-vector.jpg'/></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        {ctx.isLoggedIn && <Button type="button" variant="outline-success" size='lg' onClick={()=>ctx.handleCartClick()} >Cart {<span style={{color:'yellow',padding:10}}>{ctx.cartCount}</span>}</Button>}{' '}
        <Button type="button" variant="outline-success" size='lg' onClick={()=>{ctx.handleLogout()}}>{ctx.isLoggedIn?"Logout":"Login"}</Button>
      </Container>
      
    </Navbar>
}
export default Header; 