import React from "react";

export const ButtonModal = (props) =>{
    return(
        <button onClick={() => props.setModal(true)}>Abri Modal</button>
    )
}