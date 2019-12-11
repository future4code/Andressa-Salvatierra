import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
const Save = styled.button`
  color: white;
  background-color: blue;
`
class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: "",
            email: ""
        }
    }

    handleChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }
    
    createNewUser = () => {
        
    }
    
    
    render() {
        return(
            <FormContainer>
                <label for="nome">Nome: </label>
                <input id="nome" type="text" value={this.state.nome} onChange={this.handleChangeNome}></input>
                <br/>
                <label for="email">E-mail: </label>
                <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
                <br />
                <Save>Salvar</Save>
            </FormContainer>
        )
    
    }
    

}

export default CadastroUsuario;