// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const Exercicio = ()=>{

    const luana = {
        cliente: 'Luana',
        idade: 27,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
        ],
        ativa: true,
      };

      const mario = {
        cliente: 'Mario',
        idade: 31,
        compras: [
          { nome: 'Notebook', preco: 'R$ 2500' },
          { nome: 'Geladeira', preco: 'R$ 3000' },
          { nome: 'Smartphone', preco: 'R$ 1500' },
          { nome: 'Guitarra', preco: 'R$ 3500' },
        ],
        ativa: false,
      };

      const dados = luana;


    const transform = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    
    const total = transform.reduce((a,b) => a+b)


    return(
        <>

          <h1></h1>
            <h3>Cliente: {dados.cliente}</h3>
            <h3>Idade: {dados.idade}</h3>
            <h3>Compras:</h3>
            <h3>{dados.compras.map( item => (
              <li>{item.nome}: {item.preco}</li>
            ))}</h3>
            <h3>Cliente Ativo:{dados.ativa === true ? <p style={{color: "green"}}>true</p>: <p style={{color: 'red'}}>false</p> }</h3>
              <h3>Total Gasto: {total}</h3>
              {total > 10000? <h3>GASTOU MAIS QUE 10MIL REAIS :O</h3>: <h3>gastou menos que 10mil</h3>}
        </>
    )
}

export default Exercicio