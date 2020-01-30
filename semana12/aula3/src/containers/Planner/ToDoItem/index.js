import React from "react";
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";

class ToDoItem extends React.Component {
  render() {
    return ( 
      <div>
        <ListItem>
            <Checkbox color="primary"/>
            <ListItemText primary="To do item"/>
        </ListItem> 
      </div>
    )
 
  }
}

export default connect()(ToDoItem);