import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (chave, inicial)=>{
    const [estado, setEstado]=useState(() =>{
        const local = window.localStorage.getItem(chave)
        return local? local: inicial;
    })

    useEffect(()=>{
        window.localStorage.setItem(chave, estado)
    },[estado, chave])

    return [estado, setEstado]
}

export default useLocalStorage