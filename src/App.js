import React from 'react';
import './App.css';
import "./components/FontAwesomeIcons/FontAwesomeIcons"
/*import Home from "./components/Home/Home"*/
import RegisterUser from "./components/Register/RegisterUser"


function App() {
  return (
    <div className="App">
      <RegisterUser/>
      {/*<Home/>*/}
    </div>
  );
}

export default App;
