import './Exercicio.css'

function Botao(props){
    
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${props.value}`)
    .then(response => response.json())
    .then(body => {
        
        props.setBotao(body.id)
        
    })

    return(
        <div className='Exercicio'>
            <button className='botao'>{props.botao}</button>
        </div>
    )
}

export default Botao