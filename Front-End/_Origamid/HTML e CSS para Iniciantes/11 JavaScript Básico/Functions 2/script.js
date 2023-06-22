function livro(nome,ano,autor){
    nome = nome.toUpperCase();
    ano = 2050 - ano;
    console.log(nome, ano, autor)
    const frase = nome + " por " + autor;
    return {
        nome,
        ano,
        autor,
        frase,
    };
}

livro("A vida",2000,"Johnny");

console.log(livro)

const guarda = livro;

livro();

console.log(livro.frase)