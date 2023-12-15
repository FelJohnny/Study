import { useEffect, useState } from "react";

const useFetch = ()=>{
    
    const [data, setData]=useState(null)
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(null)

    let response;
    let json;

    const request = async (url,options)=>{
        try{
            setLoading(true)
            response = await fetch(url,options)
            json = await response.json()
            setTimeout(()=>{
                setLoading(false)
                setData(json)
            },500)
        }catch(error){
            setError(error)
        }
    }

    return{data, error, loading, request, error}
}

export default useFetch