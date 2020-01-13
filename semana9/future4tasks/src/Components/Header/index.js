import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
margin: 0 auto;
padding: 30px; 
`

const NewTask = styled.input`
width: 800px;
height: 30px;
margin: 0 auto;
`

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskValue: ""
        }
    }

    onChangePost = event => {
        this.setState({ newTaskValue: event.target.value });
      };

    
    render () {
        return (
            <div>
                <PageTitle>4 Task</PageTitle>
                <NewTask onChange={this.onChangePost} 
                value={this.state.newTaskValue} 
                placeholder="O que tem que ser feito?">
                </NewTask>
            </div>
        )
    }
}

export default Header;