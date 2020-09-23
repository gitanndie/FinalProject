import React from 'react';
import './App.css';
import "./components/FontAwesomeIcons/FontAwesomeIcons"
/*import Home from "./components/Home/Home"*/
import RegistrarUsuario from "./components/Registro/RegistrarUsuario"


function App() {
  return (
    <div className="App">
      <RegistrarUsuario/>
      {/*<Home/>*/}
    </div>
  );
}

export default App;
