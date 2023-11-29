
import React, { useEffect, useRef, useState } from "react";


function App() {

  const video = useRef();
  const [comentario, setComentario]= useState([]);
  const [inputText, setinputText]=useState('')
  const refInput = useRef();

  function handleclick(){
    setComentario([...comentario, inputText])
    setinputText('')
    refInput.current.focus();
  }
  useEffect(()=>{  
    console.log(video.current);
    },[video])

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
    </>

  );
};

export default App
