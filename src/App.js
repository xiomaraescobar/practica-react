import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que nuestros exalumnos dicen sobre freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
