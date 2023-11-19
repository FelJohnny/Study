import React from "react"

function App() {

  function handleclick(event){
    console.log(event)
  }

  return (
    <>
    <button onClick={handleclick} >click</button>
    <button onClick={(e) => console.log(e.target.innerText)} >click</button>
    </>
  )
}

export default App

//https://legacy.reactjs.org/docs/events.html