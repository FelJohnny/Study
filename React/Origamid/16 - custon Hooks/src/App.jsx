import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


function App() {
  const [produto, setProduto] = useLocalStorage('produto','')

  function handleclick({target}){
    setProduto(target.innerText)
  }
  return (
    <>
      <h2>Custom Hooks</h2>
      <button onClick={handleclick}>book</button>
      <button onClick={handleclick}>tablet</button>
    </>
  )
}

export default App
