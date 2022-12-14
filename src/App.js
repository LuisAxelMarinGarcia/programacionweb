import './App.css';
import './css/style.css';
import blue from './imgs/blue.jpg';

function Nombre(props) {
  return <h1><a href="#" class="title">{props.name}</a></h1>;
}
function App() {
  return (
    <div className="App">
<div id="wrap">
  <div id="header">
    <div class="title">
      <Nombre name="STEEM" />
      <div class="tagline">Videogame Wiki</div>
    </div>
  </div>
  <div id="content">
    <div id="menu">
      <h2>Navegar</h2>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contenido 1</a></li>
        <li><a href="#">Contenido 2</a></li>
        <li><a href="#">Contenido 3</a></li>
        <li><a href="#">Contenido 4</a></li>
        <li><a href="#">Contenido 5</a></li>
      </ul>
    </div>
    <div id="main">
      <div class="main_content">
        <h2>Los inicios        </h2>
        <p><img src={blue}  className="blue" alt="blue" /> Durante bastante tiempo ha sido complicado señalar cual fue el</p>
<p>primer videojuego, principalmente debido a las múltiples definiciones</p>
        <p>de este que se han ido estableciendo, pero se puede considerar</p>
        <p>como primer videojuego el Nought and crosses, también llamado</p>
        <p>OXO, desarrollado por Alexander S.Douglas en 1952. El juego era</p>
        <p>una versión computerizada del tres en raya que se ejecutaba sobre</p>
        <p>la EDSAC y permitía enfrentar a un jugador humano contra la máquina.</p>
      </div>
    </div>
  </div>
  <div id="footer">
    <div class="bottom">copyright</div>
  </div>
</div>
<div id="ffscrollbarfix"></div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>s  rc/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default App;
