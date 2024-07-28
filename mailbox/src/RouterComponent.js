import React from 'react';
import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Signin from './components/Signin';
import Header from './components/Header';
import {useSelector} from 'react-redux'
import Sidebar from './components/Sidebar';
import './index.css'
import MailboxBody from './components/MailboxBody';
import Compose from './components/Compose';
import MailShow from './components/MailShow';
import Send from './components/Send';


const RouterComponent = props => {
    const state = useSelector(state=>state.login);
    const composeStatus = useSelector(state=>state.composeStatus)
    const elementRouter = createRoutesFromElements(
        <Route>
            {state && <Route path='/home' element={
                <div className='mail_box'>
                    <div>
                    <Header/>
                    </div>
                    <div className='body_mailbox'>
                    <Sidebar/>
                    <MailboxBody/>
                    {!composeStatus && <Compose/>}
                    </div>
                    
                </div>
            }/>}
            {state && <Route path='/mail' element={
                <div className='mail_box'>
                    <div>
                    <Header/>
                    </div>
                    <div className='body_mailbox'>
                    <Sidebar/>
                    <MailShow/>
                    {!composeStatus && <Compose/>}
                    </div>
                </div>
            }/>}
            {state && <Route path='/send' element={
                <div className='mail_box'>
                    <div>
                    <Header/>
                    </div>
                    <div className='body_mailbox'>
                    <Sidebar/>
                    <Send/>
                    {!composeStatus && <Compose/>}
                    </div>
                </div>
            }/>}
            {!state && <Route path='*' element={<Signin/>}/>}
        </Route>
    )
    const router = createBrowserRouter(elementRouter)
    return (
        <RouterProvider router={router}>
            {props.children}
        </RouterProvider>
    );
};



export default RouterComponent;