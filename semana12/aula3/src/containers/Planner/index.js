import React from "react";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ToDoItem from "./ToDoItem";
import styled from "styled-components"
import NewToDo from "./NewToDo"

const ListContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  align-items: space-evenly;
`

class Planner extends React.Component {
  render() {
    return ( 
      <div>
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="secondary">
            Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <ListContainer>
        <NewToDo />
        <List>
            <ToDoItem />
          </List>
      </ListContainer>

      </div>
    )
 
  }
}

export default connect()(Planner);
