import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylist from './Components/CreatePlaylist';

class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <CreatePlaylist></CreatePlaylist>
            </div>
        );
    }
    
}

export default App;