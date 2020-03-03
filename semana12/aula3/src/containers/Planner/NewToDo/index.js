import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { connect } from "react-redux"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import styled from 'styled-components'

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
                        <Typography variant="h5" color="secondary">
                            Crie uma nova tarefa!
                        </Typography>
                        <br />
                        <InputLabel htmlFor="age-simple">Para qual dia da semana?</InputLabel>
                        <Select 
                        name="day"
                        type="day"
                        label="Dia da semana" 
                        placeholder="Para quando?" 
                        fullWidth 
                        value={day}
                        onChange={this.handleFieldChange}
                        >
                            <MenuItem value=""> <em>Escolha o dia</em> </MenuItem>
                            <MenuItem value="monday"> Segunda </MenuItem>
                            <MenuItem value="tuesday"> Terça </MenuItem>
                            <MenuItem value="wednesday"> Quarta </MenuItem>
                            <MenuItem value="thursday"> Quinta </MenuItem>
                            <MenuItem value="friday"> Sexta </MenuItem>
                            <MenuItem value="saturday"> Sábado </MenuItem>
                            <MenuItem value="sunday"> Domingo </MenuItem>
                        </Select>
                        <br/> <br />
                        <TextField 
                        name="text"
                        type="text"
                        label="Tarefa" 
                        placeholder="O que?" 
                        fullWidth
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