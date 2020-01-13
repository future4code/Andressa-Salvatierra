import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    `

function Etapa4 () {
    return (
        <FormContainer>
        <h3>O FORMULÁRIO ACABOU!</h3>
        <p>Obrigada por responder! Entraremos em contato :)</p>
        </FormContainer>
    )

}

export default Etapa4;