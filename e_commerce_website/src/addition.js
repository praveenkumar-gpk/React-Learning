import './App.css'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import ContextForCart from './store/ContextForCart'

const Addition = ()=>{
    const ctx = useContext(ContextForCart)
    return ctx.isLoggedIn && <div className="title_holder">
    <Container>
    <p className="title" style={{height:15}}>The one Zone of all your wanted collections</p>
    </Container>
  </div>
}

export default Addition;