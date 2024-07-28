import React,{Fragment,useContext} from "react";
import ContextForCart from "./store/ContextForCart";
import { Route,createRoutesFromElements,createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Addition from "./addition";
import UserForm from "./components/Form";
import Card from './components/Cards'
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import Home from "./components/Home";
import BugReportingForm from "./components/BugReporting";

const Routerecommerce = (props)=>{
const ctx = useContext(ContextForCart);  
  const routeElement = createRoutesFromElements(
    <Route>
      {!ctx.isLoggedIn && <Route path="*" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <UserForm/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}
      {ctx.isLoggedIn && <Route path="/store" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <Card/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}
      {ctx.isLoggedIn && <Route path="/about" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <About/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}
      {ctx.isLoggedIn && <Route path="/home" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <Home/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}
      {ctx.isLoggedIn && <Route path="/bug-reporting" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <BugReportingForm/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}
      {ctx.isLoggedIn && <Route path="/products/:products" element = {
        <Fragment>
          <Header/>
          <Addition />
          <div className="img_cover">
          <Products/>
          <Cart/>
          <Footer/>
          </div> 
          </Fragment>}/>}   
    </Route>
  )
  
  const router = createBrowserRouter(routeElement)
  return <RouterProvider router={router}>{props.childer}</RouterProvider>
}

export default Routerecommerce