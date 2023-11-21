import React from "react";

const Modal = (props)=>{
    if(props.modal === true)
    return(
        <>
            <div>Esse é um modal</div>
            <button onClick={() => props.setModal(false)}>Fechar</button>
        </>
    )
}

export default Modal