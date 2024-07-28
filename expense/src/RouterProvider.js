import React, { useContext } from "react";
import Signin from "./components/Sign-in";
import Home from "./components/Home";
import { Route,createRoutesFromElements,createBrowserRouter,RouterProvider,Router } from "react-router-dom";
import App from "./App";
import ExpensesForm from "./components/ExpensesForm";
import ContextForExpense from "./store/ContexForExpense";

const Routervalue = (props)=>{
    const ctx = useContext(ContextForExpense)
    const routerValue = createRoutesFromElements(
        <Route>
            {ctx.isLogin&&<Route path="/*" element={
                <div>
                    <Home/>
                    <ExpensesForm/>
                </div>
            }/>}
            {!ctx.isLogin && <Route path="*" element={
                <Signin/>
            }/>}
        </Route>
    )
    const routertopage = createBrowserRouter(routerValue)
    return <RouterProvider router={routertopage}>{props.childer}</RouterProvider>
}

export default Routervalue