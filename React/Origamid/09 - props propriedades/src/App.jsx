import  React from 'react'

const Titulo = (props) =>{
    return(
        <h1 style={{color: props.cor}}>{props.texto}</h1>

    )
}

const Titulo2 = ({cor, texto, children}) =>{ //desestruturado
    return (
        <>
            <h1 style={{color: cor}}>{texto}</h1>
            <h1 style={{color: cor}}>{texto}, {children}</h1>
        </>
    )
}

const App = () => {
    
    return (
    <>
        <Titulo cor="red" texto="props texto1"/>
        <Titulo cor="blue" texto="props texto2"/>
        <Titulo texto="props texto3"/>
        <Titulo2 cor="blue" texto="props texto desestruturado"/>
        <Titulo2 cor="Teal" texto="props texto com filho">
            ESE É O CHILDREN
        </Titulo2>

    </>
    
    )
}

export default App
