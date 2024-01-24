import React, {useContext, useEffect, useState} from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Cadastrar = ()=>{

    const {entidade, setEntidade} = useContext(GlobalContext)

    const [form, setForm]=useState({
        nome:'',
        idade:'',
        nota1:'',
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
            idade:'',
            nota1:'',
        })
    }

    useEffect(()=>{
        console.log(entidade)
    },[entidade])

    return(
        <section>
            <h1>cadastrar Entidade</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="nome"
                    id='nome'
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    
                    
                />
                <input 
                    type="text" 
                    id='idade'
                    placeholder="idade"
                    value={form.idade}
                    onChange={handleChange}

                    
                    
                />
                <input 
                    type="text" 
                    id='nota1'
                    placeholder="nota"
                    value={form.nota1}
                    onChange={handleChange}


                    
                    
                />
                <button >Cadastrar</button>
            </form>
        </section>
    )
}

export default Cadastrar 