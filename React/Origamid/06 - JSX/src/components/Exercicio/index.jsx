const Exercicio = ()=>{

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

return(
  <>
    <h1>Exercicio</h1>
    <p>Organize os produtos como mostrado no vídeo</p>
    <p>Mostre apenas produtos que forem mais caros que R$ 1500</p>
    {produtos.filter((produtos) =>{
      return(
        Number(produtos.preco.replace("R$", "")) > 1500
      )})
    .map(({id,nome, preco, cores})=>(
      <div key={id}>
        <h1>Nome: {nome}</h1>
        <h2>Preço:{preco}</h2>
        <h2>{cores.map((cor) =>(
          <h3 style={{backgroundColor: cor}}>{cor}</h3>
        ))}</h2>
      </div>

    ))}

  </>
)
}

export default Exercicio