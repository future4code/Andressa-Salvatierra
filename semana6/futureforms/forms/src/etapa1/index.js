import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    `

function Etapa1() {
    return (
        <FormContainer>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <label for="nome"><p>1. Qual seu nome?</p></label>
            <input type="text" id="nome"></input>
            <label for="nome"><p>2. Qual sua idade?</p></label>
            <input type="number" id="idade"></input>
            <label for="email"><p>3. Qual seu email?</p></label>
            <input type="email" id="email"></input>
            <label for="escolaridade"><p>4. Qual a sua escolaridade?</p></label>
            <select id="escolaridade">
                <option value="medioIncom">Ensino médio incompleto</option>
                <option value="medioCom">Ensino médio completo</option>
                <option value="superiorIncom">Ensino superior incompleto</option>
                <option value="superiorCom">Ensino superior completo</option>
                </select>
        </FormContainer>
    )
} 

export default Etapa1;