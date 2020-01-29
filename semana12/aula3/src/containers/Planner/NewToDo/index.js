import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from "styled-components"

const InputContainer = styled.div`
    text-align: center;

`


class NewToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day: "",
            text: ""
        }
    }

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    // handleClickSendPost = (day, text) => {
    //     this.props.createNewPost(day, text)
    //     this.setState({
    //         day: "",
    //         text: ""
    //     })
    // }



    render () {

        const { day, text } = this.state

        return (
            <Card>
                <InputContainer>
                    <CardContent>
                        <Typography variant="h5">
                            Crie uma nova tarefa!
                        </Typography>
                        <br />
                        <TextField 
                        name="day"
                        type="day"
                        label="Dia da semana" 
                        placeholder="Para quando?" 
                        fullWidth 
                        value={day}
                        onChange={this.handleFieldChange}
                        />
                        <br/> <br />
                        <TextField 
                        name="text"
                        type="text"
                        label="Tarefa" 
                        placeholder="O que?" 
                        fullWidth multiline rows='2'
                        value={text}
                        onChange={this.handleFieldChange}
                        />
                        <br /><br />
                        <Button>Bora!</Button>
                    </CardContent>
                </InputContainer>
            </Card>            
        )
    }
}

export default connect()(NewToDo)   