import { useEffect, useState } from "react";

const useFetch = ()=>{
    
    const [data, setData]=useState(null)
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(null)

    let response;
    let json;

    
    const request = async (url,options)=>{
        try{
            setError(null)
            setLoading(true)
            response = await fetch(url,options)
            json = await response.json()
            setTimeout(()=>{
                setData(json)
            })
        }catch(erro){
            setError('erro ao buscar API')
        }finally{
            setLoading(false)
        }
    }

    return{data, error, loading, request}
}

export default useFetch