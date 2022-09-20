import React, { useState } from "react";
import './App.css';

function App() {

  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [apodo, setApodo] = useState('');


  const isDisable = (nombre === '' || apellido === '' || apodo === '');

  const cancelCourse = () => {
    setNombre('')
    setApellido('')
    setApodo('')
  }

  const EnviarDatos = () => {
    const nuevosDatos = {
      nombre: nombre,
      apellido: apellido,
      apodo: apodo
    }
    setDatos([nuevosDatos,...datos])
  }

  const Imprimir = () => {
    return datos.map((dato) => (
      <ls key={dato}>
        {dato.nombre}, 
        {dato.apellido}, 
        [{dato.apodo}]
      </ls>
    ))
  }
 

  return (
    <div className="App">
      <label>Nombre:</label>
      <input 
        type = "text"
        value={nombre}
        onChange={(e) => {setNombre(e.target.value)}}>
      </input>
      <br/>

      <label>Apellido:</label>
      <input 
        type = "text"
        value={apellido}
        onChange={(e) => {setApellido(e.target.value)}}>
      </input>
      <br/>

      <label>Apodo:</label>
      <input 
        type = "text"
        value={apodo}
        onChange={(e) => {setApodo(e.target.value)}}>
      </input>
      <br/>
      <button disabled={isDisable} onClick={EnviarDatos}>Enviar</button>
      <button onClick={cancelCourse}>Limpiar</button>

      <br/>
      {Imprimir()}
    </div>
    
    
  );
}

export default App;
