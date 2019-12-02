import React from 'react';
import styled from 'styled-components';
import Etapa1 from './etapa1';
import Etapa2 from './etapa2';
import Etapa3 from './etapa3';
import Etapa4 from './etapa4';

const Botao = styled.button`
  display: flex;
  align-self: flex-end;
  `
const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; `

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tela: "etapa1",
      numeroCliques: 0
    }
  }

  controleCliques = () => {
    if (this.state.tela === "etapa1" && this.state.numeroCliques === 0) {
      this.setState({numeroCliques: 1})
      this.onClickUm()
    } else if (this.state.tela === "etapa2" && this.state.numeroCliques === 1) {
      this.setState({numeroCliques: 2})
      this.onClickDois()
    } else if (this.state.tela === "etapa3" && this.state.numeroCliques === 2) {
      this.onClickTres()
    }
  }

  onClickUm = () => {
    this.setState({
      tela: "etapa2"
    })
  }
  onClickDois = () => {
    this.setState({
      tela: "etapa3"
    })
  }
  onClickTres = () => {
    this.setState({
      tela: "etapa4"
    })
  }

  esconderBotao = () => {

  }


render() {
  let tela;
  switch (this.state.tela) {
    case "etapa1":
      (tela = <Etapa1></Etapa1>);
      break;

    case "etapa2":
      (tela = <Etapa2></Etapa2>);
      break;

    case "etapa3":
      (tela = <Etapa3></Etapa3>);
      break;

    case "etapa4":
      (tela = <Etapa4></Etapa4>);
      break;

    default:
      (tela = <h1>Erro!</h1>)
      break;
  }

  return (
    <ContainerDiv>
      {tela}
      <Botao onClick={this.controleCliques, () => {}} id="button">Próxima etapa</Botao>

    </ContainerDiv> 
  );
};
}

export default App;
