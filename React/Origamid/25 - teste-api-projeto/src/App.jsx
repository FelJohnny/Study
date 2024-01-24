import React from "react"
import './App.css'
import Api from "./api/api"
import UserPost from './api/endpoints/UserPost.jsx'

  function App() {


    return (
      <>
        <Api/>
        <UserPost/>
        
      </>
    )
  }

export default App
