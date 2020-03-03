import React from "react";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List'
import styled from "styled-components"
import ToDoItem from "../ToDoItem";

const DayOfTheWeek = styled.div`
    margin-top: 20px;
    border: dotted black 1px;
`

class WeekDayTasks extends React.Component{
    render() {
        return (
            <div>
                <DayOfTheWeek>
                    <Card>
                        <CardContent>
                            <Typography variant="overline" color="primary">{this.props.weekdays.day}</Typography>
                            <hr/>
                            <List>
                                <ToDoItem />
                            </List>
                        </CardContent>
                    </Card>
                </DayOfTheWeek>
            </div>
        )
    }
}

export default connect()(WeekDayTasks)
