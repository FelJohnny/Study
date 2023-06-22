const nomeFilme = "Naruto filme1";
const anoFilme = '2003';
const diretorFilme = "Masashi Kishimoto"


/* criando objeto */
const Filme ={
    nome: "Naruto filme1",
    ano: 2003,
    diretor: "Masashi Kishimoto",
    genero: "Shounen",
};

console.log(Filme);


console.log( 2023 - Filme.ano);

console.log(Filme.nome + " " + Filme.genero);


const texto = document.querySelector("h3");

/*mostra a altura */
console.log(texto.clientHeight);

/*transforma em maiusculo */

console.log(Filme.nome.toUpperCase());
