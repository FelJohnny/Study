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

      let nome = dados.cliente == "Luana" ? nome = luana : nome = mario;
    return(
        <>
        
            <h1>Exercicio</h1>
            
            
        </>
    )
}

export default Exercicio