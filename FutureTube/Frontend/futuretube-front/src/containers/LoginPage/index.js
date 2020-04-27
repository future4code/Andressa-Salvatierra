import React from 'react';
import { connect } from "react-redux";
import Header from "../Header"
import { MainContainer } from "../../style/divContainers"
import { TextField, Button } from '@material-ui/core';
import { useSignUpForm } from '../../customHooks'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: grid;
  margin: 8% auto;
  justify-content: space-evenly;
  grid-gap: 10px;
  grid-template-columns: 20%;
`

const Login = () => {

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm()

    return (
        <MainContainer>
            <Header text="Login"/>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <TextField
                        type="text"
                        label="Email"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        variant="filled" required />
                    <TextField
                        type="password"
                        label="Senha"
                        name="password"
                        value={inputs.password}
                        onChange={handleInputChange}
                        variant="filled" required />
                    <Button variant="contained" color="primary" type="submit"> Enviar </Button>
                </FormContainer>

            </form>
        </MainContainer>
    )
}

export default connect()(Login)