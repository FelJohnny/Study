import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamento from './componentes/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100vw -30px;
  height: 100vh;
  background-image: linear-gradient(90deg,rgb(5, 88, 88), rgb(10, 163, 184));
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
      <UltimosLancamento />
    </AppContainer>
  );
}

export default App;
