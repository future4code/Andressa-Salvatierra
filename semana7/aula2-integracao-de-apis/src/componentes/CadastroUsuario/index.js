import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    width: 30%;
    margin-top: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
const Salvar = styled.button`
  color: white;
  background-color: blue;
`
function CadastroUsuario() {
    return(
        <FormContainer>
            <label for="nome">Nome: </label>
            <input id="nome" type="text"></input>
            <br/>
            <label for="email">E-mail: </label>
            <input id="email" type="email"></input>
            <br />
            <Salvar>Salvar</Salvar>
        </FormContainer>
    )
}

export default CadastroUsuario;