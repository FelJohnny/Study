import React, { useState } from 'react'

const TokenPost = () => {
    const [username, setUsername]= useState('')
    const [token, setToken]= useState('')

    const [password, setPassword]= useState('')

    function handleSubmit(event){
        event.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then(response =>{
            console.log(response)
            return response.json();
        }).then(json=>{
            console.log(json)
            setToken(json.token)
            return json
        })
        console.log(username, password)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username"value={username} onChange={({target})=> setUsername(target.value)}/>
      <input type="text" placeholder="password"value={password} onChange={({target})=> setPassword(target.value)}/>
      <button>Enviar</button>
      <p>{token}</p>
    </form >
  )
}

export default TokenPost
