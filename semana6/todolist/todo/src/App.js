import React from 'react';
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  `

const AddTarefa = styled.div`
  display: flex;
  justify-content:space-between;
  `

const Filtro = styled.div`
  display: flex;
  justify-content: space-between;
  `


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaDeTarefas: [],
      tarefaFeita: false,
      inputTarefa: ""
    }
  }

  onChange = (event) => {
    this.setState({inputTarefa: event.target.value})
  }
  

  aoClicarAdicionar = () => {
    this.setState({
      inputTarefa: "",
    })
    const novaLista = [...this.state.listaDeTarefas, this.state.inputTarefa];
  }


  


render() {
  return(
    <ContainerPrincipal>
      <h1>Lista de Tarefas</h1>
      <AddTarefa>
        <input type="text" id="tarefas"></input>
        <button>Adicionar</button>
      </AddTarefa>
      <br></br>
      <Filtro>
        <label for="filtro">Filtro</label>
        <select id="filtro">
          <option id="nenhum">Nenhum</option>
          <option id="pendentes">Pendentes</option>
          <option id="completas">Completas</option>
        </select>
      </Filtro>
    </ContainerPrincipal>

  )
}
}


export default App;
