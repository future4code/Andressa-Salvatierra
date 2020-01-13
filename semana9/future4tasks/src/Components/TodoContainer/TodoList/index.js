import React from 'react';
import List from '@material-ui/core/List';
import TodoItem from '../TodoItem';

const todos = [
    {
        id: 1,
        text: "Comprar pão"
    },
    {
        id: 2, 
        text: "Limpar a casa"
    }
]

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <List> 
                {this.todos.map(todo => (<TodoItem todos={todos}/>))} 
            </List>
        )
    }
}

export default TodoList;