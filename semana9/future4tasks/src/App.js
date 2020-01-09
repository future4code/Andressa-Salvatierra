import React from 'react';
import styled from 'styled-components';
import TaskContainer from './Components/TodoContainer';
import Header from "./Components/Header"


//*** ESTILIZAÇÃO ***//

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  align-items: center;
`

//*** COMPONENTE DE CLASSE ***//

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <TaskContainer/>
      </MainContainer>
    );
  }
  
}

export default App;
