import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const TaskDivContainer = styled.div`
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


function TaskContainer() {
    return (
        <TaskDivContainer>
            <List>
                {[0, 1, 2, 3].map(value => (
                    <ListItem key={value} role={undefined}>
                        <Checkbox/>
                        <ListItemText primary={`Tarefa ${value + 1}`} />
                    </ListItem>
                ))}
            </List>
            <hr></hr>
            <Filters>            
                <AllFilters>Marcar todas como completas</AllFilters>
                <AllFilters>Todas</AllFilters>
                <AllFilters>Pendentes</AllFilters>
                <AllFilters>Completas </AllFilters>
            </Filters>

        </TaskDivContainer>

    )
}

export default TaskContainer;