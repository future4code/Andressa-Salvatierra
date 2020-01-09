import React from "react";
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
                <ListItem>
                    <Checkbox/>
                    <ListItemText primary={this.props.todos.text}/>
                </ListItem>
        )
    }
}

export default TodoItem;