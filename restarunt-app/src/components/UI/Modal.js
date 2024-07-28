import React, { Fragment } from "react";
import ReactDom from 'react-dom'
import './Modal.css'

const Backdrop = ()=>{
    return <div className="backdrop"></div>
}

const ModalOverlay = (props)=>{
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>
}

const ReactPortalElement = document.getElementById('cart-modal')
const Modal = (props)=>{
    return <Fragment>
        {ReactDom.createPortal(<Backdrop />,ReactPortalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,ReactPortalElement)}
    </Fragment>
}




export default Modal;