import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    `

function Etapa3 () {
    return (
        <FormContainer>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <label for="why"><p>5. Por que você não terminou um curso de graduação?</p></label>
        <input type="text" id="why"></input>
        <label for="complementar"><p>6. Você fez algum curso complementar?</p></label>
            <select id="complementar">
                <option value="nenhum">Nenhum</option>
                <option value="tecnico">Curso técnico</option>
                <option value="ingles">Curso de inglês</option>
            </select>
        </FormContainer>
    )

}

export default Etapa3;