//O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades.
// Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

import React from "react";
import ConteudoUsuario from "./components/ConteudoUsuario/ConteudoUsuario";
import Produto from "./components/Produto/Produto";

import { GlobalStorage } from "./components/GlobalContext/GlobalContext";

function App() {

  function TesteContext(){
    return <p>funcionou</p>
  }
  return (

    <>
      <ConteudoUsuario.Provider value={{nome: 'johnny', TesteContext}}>{/*os elementos filhos terao acesso ao valores declarados em "ConteudoUsuario" */}
        <Produto/>
      </ConteudoUsuario.Provider>

      {/*Exemplo real:*/}
      <GlobalStorage>
        <Produto/>
      </GlobalStorage>

    </>

  );
};

export default App
