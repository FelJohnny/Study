import React from "react";
import Input from "../Input/Input";

const Form =  () =>{
    return(
        <form action="">
            <h1>Formulario</h1>
            <label htmlFor="nome">Nome</label>
            <Input/>
            <label htmlFor="nome">Email</label>
            <Input/>
        </form>
    )
}

export default Form