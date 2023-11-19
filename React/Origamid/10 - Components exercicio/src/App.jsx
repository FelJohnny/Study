import  React from 'react'
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Produtos from './Components/Produtos/produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)



const App = () => {
    let Pagina = Home
    const {pathname} = window.location;
    console.log(pathname)
    if(pathname === '/'){
        Pagina = Home
    }else if(pathname === '/produtos'){
        Pagina = Produtos

    }
 return (
    <>
        <h1>Exercicio componentes</h1>
        <Nav/>
        <Pagina color="green" fontWeight="bold"/>
    </>
 )
 
}

export default App
