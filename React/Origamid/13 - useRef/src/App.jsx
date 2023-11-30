
import React, { useEffect, useRef, useState } from "react";


function App() {

  const [comentario, setComentario]= useState([]);
  const [inputText, setinputText]=useState('')
  const refInput = useRef();
  //carrinho
  const [carrinho, setCarrinho]=useState(0);
  const [notificação, setNotificação]=useState(null)
  const timeOut = useRef()
  
  function handleclick(){
    setComentario([...comentario, inputText])
    setinputText('')
    refInput.current.focus();
  }



  const video = useRef();
  useEffect(()=>{  
    console.log(video.current);
    },[video])


    function adicionarCarrinho(){
      setCarrinho (carrinho + 1)
      setNotificação("Item adicionado no carrinho")
      clearTimeout(timeOut.current)
      timeOut.current = setTimeout(() => {
        setNotificação(null)
      }, 1000);
    }
  return (

    <>
      <video src="" ref={video}></video>
      <ul>
        {comentario.map((comentario, index)=> <li key={index}>{comentario}</li>)}
      </ul>
      <input 
        type="text"
        ref={refInput}
        value={inputText}
        onChange={({target})=> setinputText(target.value)}/>
      <button onClick={handleclick}>click</button>

      <h1>Carrinho:</h1>
      <p>{notificação}</p>
      <button onClick={adicionarCarrinho}>itens no carrinho: {carrinho}</button>
    </>

  );
};

export default App
