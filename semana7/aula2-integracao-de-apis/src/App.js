import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './componentes/CadastroUsuario';
import ListaUsuarios from './componentes/ListaUsuarios';
import axios from 'axios';

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

  handleChangePage = () => {
    if (this.state.tela === "cadastro") {
      this.setState({tela: "usuarios"})
    } else {
      this.setState({tela: "cadastro"})
    }
  }

  render() {
    const buttonText = this.state.tela === "cadastro" ? "Mostrar Lista de Usuários" : "Mostrar Formulário de Cadastro"

    return ( 
      <MainContainer>
      <Botao onClick={this.handleChangePage}>{buttonText}</Botao>
      {this.state.tela === "cadastro" ? <CadastroUsuario/> : <ListaUsuarios/>}
      </MainContainer>
    )
  }
}

export default App;
