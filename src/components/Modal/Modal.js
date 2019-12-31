import React from 'react';
import propTypes from 'prop-types';

const Modal = ({showHideModal}) => {

    return (
        <>
            <h1 style={{fontSize:"2rem",fontWeight:"900", color:"#212731", margin:"0px 0px 25px"}}>Ooops Server Error</h1>
            <img src={require('../../media/icons/no-connection.png')} alt={'server error'} style={{width:"auto", height:"175px", margin:"25px 0px 25px"}}/>
            <p style={{fontSize:"1.5rem",fontWeight:"900", color:"#212731"}}>App will show only static information</p>
            <button onClick={() => showHideModal(false)} style={{fontSize:"1rem", padding:"10px",fontWeight:"900",color:"#212731",cursor:"pointer", borderRadius: "5px", outline:"none", margin:"25px 0px 0px" }}>Try later</button>
        </>
    )
}

Modal.propTypes  = {
    showHideModal: propTypes.func,
}

export default Modal