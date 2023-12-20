
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [form, setForm]= useState(
    {
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      
    }
  )


  async function apiForm(){

    const api = fetch('https://ranekapi.origamid.dev/json/api/usuario',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const response = await (await api).json()
    console.log(response)
    console.log(api)

  }

  function handleSubmit(event){
    event.preventDefault()
    apiForm()
    setForm(
      {
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      }
    )

    console.log(form)
  }

  function handleChange({target}){
    const {id, value} = target
    setForm({...form, [id]:value}) //o spread é utilizado para aplicar a todos 'id' e values contidos no formulario
  }

  function alterei({target}){
    setInput(target.value)
  }


  return (
    <>



      <h1>Formulario com useState normal:</h1>
      <label htmlFor="campo">campo:</label>
      <input type="text" name="campo" id='campo' value={input} onChange={alterei}/>

      <h1>Formulario com useState com objeto:</h1>
      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id='nome' 
          name='nome' 
          value={form.nome} 
          onChange={handleChange} 
        />

        <label htmlFor="email">Email:</label>
        <input type="email" 
          id='email' 
          name='email' 
          value={form.email} 
          onChange={handleChange} 
        />

        <label htmlFor="senha">Senha:</label>
        <input 
          type="password" 
          id='senha' 
          name='senha' 
          value={form.senha} 
          onChange={handleChange} 
        />

        <label htmlFor="cep">Cep</label>
        <input 
          type="text" 
          id="cep" 
          value={form.cep} 
          onChange={handleChange} 
        />

        <label htmlFor="senha">Rua</label>
        <input 
          type="text" 
          id="rua" 
          value={form.rua} 
          onChange={handleChange} 
        />

        <label htmlFor="numero">Número</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />


        <button>enviar</button>
      </form>
      
    </>
  )
}

export default App
