import React from "react"
import { connect } from 'react-redux';
import Header from "../Header"
import { TextField, Button } from '@material-ui/core';
import { useSignUpForm } from '../../customHooks'
import styled from 'styled-components'
import { MainContainer } from "../../style/divContainers";

const FormContainer = styled.div`
  display: grid;
  margin: 8% auto;
  justify-content: space-evenly;
  grid-gap: 10px;
  grid-template-columns: 20%;
`

const SignUp = () => {

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm()

  return (
    <MainContainer>
      <Header text="Crie uma Conta" />
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <TextField
            type="text"
            label="Nome"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            variant="filled" required />
          <TextField
            type="email"
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
          <TextField
            type="text"
            label="Data de nascimento"
            name="birthDate"
            value={inputs.birthDate}
            onChange={handleInputChange}
            helperText="Formato DD/MM/AAAA"
            variant="filled" required
          />
          <TextField
            type="text"
            label="Foto (URL)"
            name="picture"
            value={inputs.picture}
            onChange={handleInputChange}
            variant="filled" required />
          <Button variant="contained" color="primary" type="submit"> Enviar </Button>
        </FormContainer>
      </form>

    </MainContainer>
  )
};

export default connect()(SignUp)