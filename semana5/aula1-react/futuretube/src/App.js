import React from 'react';
import './App.css';

function App() {
    return ( 
    <div className = "App" >
        <header> 
            <h1>Future Tube</h1> 
            <input type="text" value="Buscar" id="barra-busca"></input>
        </header>

        <article id="video-1">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/waterfall.jpg" alt="video1" />
            </div>
            <div className="container">
                <p><h3>Cachoeira</h3></p>
            </div>
        </article>

        <article id="video-2">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/graf.jpg" alt="video2" />
            </div>
            <div className="container">
                <p><h3>Grafiti</h3></p>
            </div>
        </article>

        <article id="video-3">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/trafalgar.jpg" alt="video 3" />
            </div>
            <div className="container">
                <p><h3>Arte e Museus</h3></p>
            </div>
        </article>

        <article id="video-4">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/scarecrow.jpg" alt="video 3" />
            </div>
            <div className="container">
                <p><h3>Espantalho antigo</h3></p>
            </div>
        </article>

        <article id="video-5">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/secretcave.jpg" alt="video 5" />
            </div>
            <div className="container">
                <p><h3>Caverna secreta</h3></p>
            </div>
        </article>

        <article id="video-6">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/boat.jpg" alt="video 6" />
            </div>
            <div className="container">
                <p><h3>Wanderlust</h3></p>
            </div>
        </article>

        <article id="video-7">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/plane.jpg" alt="video 7" />
            </div>
            <div className="container">
                <p><h3>Céu azul</h3></p>
            </div>
        </article>

        <article id="video-8">
            <div className="video">
                <img src="http://writingexercises.co.uk/images2/randomimage/heavybox.jpg" alt="video 8" />
            </div>
            <div className="container">
                <p><h3>O peso</h3></p>
            </div>
        </article>

        <nav>
            <ul> 
                <li>Início</li>
                <li>Em Alta</li>
                <li>Inscrições</li>
                <li>Originais</li>
                <hr></hr>
                <li>Biblioteca</li>
                <li>Histórico</li>
            </ul>
        </nav>

        <footer><h4>Oi, eu moro no footer</h4></footer>

    </div>
    );
}   

export default App;