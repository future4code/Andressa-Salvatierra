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

const UploadVideo = () => {

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm()

    return (
        <MainContainer>
            <Header text="Upload Video"/>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <TextField
                        type="text"
                        label="URL do vídeo"
                        name="url"
                        value={inputs.url}
                        onChange={handleInputChange}
                        variant="filled" required />
                    <TextField
                        type="text"
                        label="Título"
                        name="title"
                        value={inputs.title}
                        onChange={handleInputChange}
                        variant="filled" required />
                    <TextField
                        type="text"
                        label="Descrição do vídeo"
                        name="description"
                        value={inputs.description}
                        onChange={handleInputChange}
                        variant="filled" required multiline />
                    <Button variant="contained" color="primary" type="submit"> Enviar </Button>
                </FormContainer>

            </form>
        </MainContainer>
      );
}

export default connect()(UploadVideo)