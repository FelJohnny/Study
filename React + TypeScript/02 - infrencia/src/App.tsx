import { useState } from "react"
import Button from "./Button"


function App() {
  const [total, setTotal] = useState(100)

  function incrementar(){
    setTotal((total)=> total + 1)
  }
  return (
    <div>
      <p>total: {total}</p>
      <Button tamanho='1rem' children='incrementar' onClick={incrementar}/>
      <Button tamanho='1rem' children='sdjhakdgadkgasdkjhas' onClick={incrementar}/>
      <Button tamanho='1rem' children='incrementar' onClick={incrementar}/>
      <Button tamanho='1rem' children='incrementar' onClick={incrementar}/>
      <Button tamanho='1rem' children='incrementar' onClick={incrementar}/>
      <Button tamanho='1rem' children='incrementar' onClick={incrementar}/>
    </div>
  )
}

export default App
