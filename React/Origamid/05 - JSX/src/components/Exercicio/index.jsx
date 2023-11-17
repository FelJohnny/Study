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

    return(
        <>
        
            <h3>Cliente: {dados.cliente}</h3>
            <h3>Idade: {dados.idade}</h3>
            <h3>Compras:</h3>
            <h3>{dados.compras.map( item => (
              <li>{item.nome}</li>
            ))}</h3>
            <h3>Cliente Ativo:{dados.ativa === true?<p>true</p>: <p>false</p> }</h3>
            
            
        </>
    )
}

export default Exercicio