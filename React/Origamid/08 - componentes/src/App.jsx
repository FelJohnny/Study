import  React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Form from './componentes/Form/Form'


const Teste = () =>{
    const ativo = true;
    if(ativo){
        return <p>ativo</p>
    }else{
        return null
    }
}

const App = () => {
 return (
    <>
        <Header/>
            <div>App React</div>
            <Form/>
            <Teste/>
        <Footer/>
    </>
)
    
}

export default App
