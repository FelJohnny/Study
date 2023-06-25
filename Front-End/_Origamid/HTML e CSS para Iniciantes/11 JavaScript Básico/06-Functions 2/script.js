function livro(nome,ano,autor){
    const nomeMaior = nome.toUpperCase();
    const Totalanos = 2050 - ano;
    const frase = nome + " por " + autor;
    return {
        nome: nomeMaior,
        Totalanos,
        frase,
    };
}

const livroretorno = livro("Nome livro",2000,"Johnny");

console.log(livroretorno.frase);