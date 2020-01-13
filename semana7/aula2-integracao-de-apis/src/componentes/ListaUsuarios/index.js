import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListaContainer = styled.div`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;   
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    align-items: center;


    `
const Lista = styled.ul`
    list-style: none;
    `

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"


class ListaUsuarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allUsers: []
        }
    }

    getAllUsers = () => {
        const axiosHeader = {
            headers: {
            "api-token": "andressa"
        }}

        const getAllUsersRequest = axios.get(`${baseURL}/users/getAllUsers`, axiosHeader)
        
        getAllUsersRequest.then((response) => {
            this.setState({allUsers: response.data.result})
            console.log(response)
            console.log(response.data)
            console.log(response.data.result)
        })

    }

    componentDidMount() {
        this.getAllUsers()
    }


    render() {
        return (
        <ListaContainer>
            <h1>Usuários Cadastrados:</h1>
            <Lista>
                {this.state.allUsers.map(user => (
                <li>{user}</li>

                ))}
            </Lista>
        </ListaContainer>
        )
    }
}

export default ListaUsuarios;