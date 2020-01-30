import React from "react";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ToDoItem from "./ToDoItem";
import styled from "styled-components"
import NewToDo from "./NewToDo"
import WeekDayTasks from "./WeekDayTasks";

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: space-evenly;
`
const NewToDoContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  align-items: space-evenly;
  margin-top: 20px;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`

const days = [
  {
    id: "monday",
    day: "Segunda"
  },
  {
    id: "tuesday",
    day: "Terça"
  },
  {
    id: "wednesday",
    day: "Quarta"
  },
  {
    id: "thursday",
    day: "Quinta"
  },
  { 
    id: "friday",
    day: "Sexta"
  },
  {
    id: "saturday", 
    day: "Sábado"
  },
  {
    id: "sunday",
    day: "Domingo"
  }
]


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

      <NewToDoContainer>
        <NewToDo />
      </NewToDoContainer>
      
      <MainContainer>
        <ListContainer>
          {days.map(day => (<WeekDayTasks weekdays={day} key={day.id}/>))}
        </ListContainer>
      </MainContainer>

      </div>
    )
  }
}

export default connect()(Planner);
