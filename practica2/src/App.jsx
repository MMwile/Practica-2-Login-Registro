import React, { useState } from "react";
import Login from "./Login";
import Registro from "./Registro";
import "./App.css"


const App = () => {
  const [pantalla, setPantalla] = useState('login')

  const getPantalla = () => {
    switch(pantalla) {
      case "registro":
        return <Registro/>;
      case 'login':
        return <Login setPantalla={setPantalla} />
      }
  }

  return (
    <div id="MainWindow">
      {getPantalla()}
    </div>
  );
};

export default App;
