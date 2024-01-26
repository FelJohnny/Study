import React, {useContext, useEffect, useState} from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import styled from "styled-components";



const Section = styled.section`
  padding: 20px 50px;
  &>h1{
    font-size:2rem;
    padding-bottom:20px;
  }
`

const Input = styled.input`
  display:block;
  width:80%;
  height:20px;
  padding: 5px 12px;
  margin-bottom: 10px;
  font-size:1.2rem;
  border:0;
  border-radius:10px;
`
const Button = styled.button`
  color: white;
  padding: 10px 25px;
  background-color: #004949;
  border-radius:5px;
  cursor: pointer;
  
`
const Cadastrar = ()=>{

    const {entidade, setEntidade} = useContext(GlobalContext)

    const [form, setForm]=useState({
        nome:'',
        cpf:'',
        telefone:'',
        email:'',
        desconto:'',
    })

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]:value })
    }


    function handleSubmit(event){
        event.preventDefault();
        setEntidade([...entidade,form])         
        setForm({
            nome:'',
            cpf:'',
            telefone:'',
            email:'',
            desconto:'',
        })
    }

    useEffect(()=>{
        console.log(entidade)
    },[entidade])

    return(
        <Section>
            <h1>Cadastro de Entidade</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    placeholder="nome"
                    id='nome'
                    type="text"
                    value={form.nome}
                    onChange={handleChange}                    
                />
                <Input 
                    type="text" 
                    id='cpf'
                    placeholder="cpf"
                    value={form.cpf}
                    onChange={handleChange}  
                />
                <Input 
                    type="text" 
                    id='telefone'
                    placeholder="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
                <Input 
                    placeholder="email"
                    id='email'
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                />
                <Input 
                    placeholder="desconto"
                    id='desconto'
                    type="text"
                    value={form.desconto}
                    onChange={handleChange}
                />

                <Button >Cadastrar</Button>
            </form>
        </Section>
    )
}

export default Cadastrar 