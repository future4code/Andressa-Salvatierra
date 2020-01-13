import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    `

function Etapa2 () {
    return (
        <FormContainer>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <label for="nome"><p>5. Qual curso?</p></label>
        <input type="text" id="curso"></input>
        <label for="nome"><p>6. Qual a unidade de ensino?</p></label>
        <input type="text" id="unidade"></input>
        </FormContainer>
    )

}

export default Etapa2;