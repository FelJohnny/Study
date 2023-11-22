import React from "react";

export const ButtonModal = (props) =>{
    return(
        <button onClick={() => props.setModal(true)}>Abrir Modal</button>
    )
}