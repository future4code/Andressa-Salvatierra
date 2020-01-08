import React from 'react';
import styled from 'styled-components';
import TaskContainer from './Components/TaskContainer';


//*** ESTILIZAÇÃO ***//

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`

const PageTitle = styled.h1`
  margin: 0 auto;
  padding: 30px; 
`

const NewTask = styled.input`
  width: 800px;
  height: 30px;
  margin: 0 auto;
  `
//*** COMPONENTE FUNCIONAL ***//

function App() {
  return (
    <MainContainer>
      <PageTitle>4 Task</PageTitle>
      <NewTask placeholder="O que tem que ser feito?"></NewTask>
      <TaskContainer/>
    </MainContainer>
  );
}

export default App;
