import React from 'react';
import './postbox.css';
import Like from '/Users/andressaflores/Andressa-Salvatierra/semana5/aula3-componentes-classe/feed/src/Components/like/like.js'

function Postbox(props) {
    return (
        <div id="container-post">
            <article>
                <div id="usuario">
                    <img id="icone" alt="Usuário" src={require('/Users/andressaflores/Andressa-Salvatierra/semana5/aula3-componentes-classe/feed/src/account_circle-24px.svg')}></img> 
                    <p><b>usuária.42</b></p>
                </div>
                <img alt="Indisponível" src={props.imagem} width="300px" length="300px"></img>
                <Like></Like>
            </article>
        </div>
    );
}

export default Postbox;