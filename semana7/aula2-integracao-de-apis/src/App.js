import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './componentes/CadastroUsuario';
import ListaUsuarios from './componentes/ListaUsuarios';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  `

const Botao = styled.button`

    `

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tela: "cadastro"
    }
  }


  render() {
    let tela;
    if (this.state.tela === "cadastro") {
      tela = (
        <MainContainer>
        <Botao>Ir para a página de lista</Botao>
        <CadastroUsuario></CadastroUsuario>
        <ListaUsuarios></ListaUsuarios>
      </MainContainer>
      )
    }
    return(
      <div>{tela}</div>
    )
  }
}

export default App;
