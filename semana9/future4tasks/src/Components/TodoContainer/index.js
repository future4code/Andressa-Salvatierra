import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';


const Container = styled.div`
    border: 1px solid lightgrey;
    margin: 0 auto;
    margin-top: 1px;
    padding: 1px;
    width: 800px;
    align-items: center;
`

const Filters = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const AllFilters = styled.span`
    &:hover {
        border: 1px solid pink;
        cursor: pointer;
    }
    margin: 5px;

`


function TodoContainer() {
    return (
        <Container>
            <TodoItem />
            <hr></hr>
            <Filters>            
                <AllFilters>Marcar todas como completas</AllFilters>
                <AllFilters>Todas</AllFilters>
                <AllFilters>Pendentes</AllFilters>
                <AllFilters>Completas </AllFilters>
            </Filters>

        </Container>

    )
}

export default TodoContainer;