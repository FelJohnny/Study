import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'

function App() {
  const [produto, setProduto] = useLocalStorage('produto','')
  const {request, data, loading, error} = useFetch()
  
  useEffect(()=>{
    request('https://ranekapi.origamid.dev/json/api/produto/')
    
  },[])

  function handleclick({target}){
    setProduto(target.innerText)
  }

  if(error) return <p>{error}</p>
  if(loading) return <h2>loading...</h2>
  if(data)
  return (
    <>
      <h2>Custom Hooks</h2>
      <button onClick={handleclick}>book</button>
      <button onClick={handleclick}>tablet</button>

      <h2>Custom Hooks com Fetch</h2>
      <ul>
        {data.map((produto) =>(
          <li key={produto.id}><p>{produto.nome}</p></li>  
        ))}
      </ul>
    </>
  )
  else return null
}

export default App
