// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import './Exercicio.css'


const Exercicio = (props)=>{




    return(
        <>
            <h3>Selecione um produto</h3>
            <div className='Exercicio'>
                <button className='botao'>Produto 1</button>
                <button className='botao'>Produto 2</button>
                <button className='botao'>Produto 3</button>
            </div>
        </>
    )
}

export default Exercicio