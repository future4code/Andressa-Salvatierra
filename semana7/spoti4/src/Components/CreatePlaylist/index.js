import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <input placeholder="Insira o nome da sua nova playlist" size="34"></input>
                <button>Criar playlist</button>                
            </div>
        );
    }
    
}

export default CreatePlaylist;