import React from 'react';
import styled from 'styled-components';

const ListaContainer = styled.div`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;   
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    align-items: center;


    `
const Lista = styled.ul`
    list-style: none;
    `



function ListaUsuarios() {
    return (
        <ListaContainer>
        <h1>Usuários Cadastrados:</h1>
        <Lista>
            <li>Nome <h3>X</h3></li>
        </Lista>
        </ListaContainer>
    )
}


export default ListaUsuarios;