import React from "react";
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ToDoItem extends React.Component {
  render() {
    return ( 
      <div>
            <Card>
                <CardContent>
                    <ListItem>
                        <Checkbox color="primary"/>
                        <ListItemText primary="To do item"/>
                    </ListItem> 
                </CardContent>
            </Card>
      </div>
    )
 
  }
}

export default connect()(ToDoItem);