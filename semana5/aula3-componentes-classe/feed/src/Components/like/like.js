import React from 'react'
import './like.css'

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numeroDeLikes: 0,
            imagemCoracao: "/Users/andressaflores/Andressa-Salvatierra/semana5/aula3-componentes-classe/feed/src/favorite-white.svg"
        };
    }

    aoCLicarNoCoracao = () => {
        const numeroDeLikes = this.state.numeroDeLikes;
        this.setState({
            numeroDeLikes: numeroDeLikes + 1,
            imagemCoracao: "/Users/andressaflores/Andressa-Salvatierra/semana5/aula3-componentes-classe/feed/src/favorite.svg"
        });
    };

    render() {
        return (
        <div id="like">
            <img src={this.state.imagemCoracao} onClick={this.aoCLicarNoCoracao}></img>
            <p>{this.state.numeroDeLikes}</p>

        </div>   
    )}
}

export default Like;