import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";
import Prueba from "./components/Prueba";

function App() {
  return (
    <div className="container">
      <div className="sub-sontainer">
      </div>
      <div className="lista">
        <h1>Mis Tareas</h1>
        <Prueba/>
        <ListaDeTareas/>
       
      </div>
    </div>
  );
}

export default App;
