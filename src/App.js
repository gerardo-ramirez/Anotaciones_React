import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './component/FormComponent';
import  FuncionalComponent from './component/FuncionalComponent'
import ClassComponent from './component/ClassComponent';
import ConsumoApi from './component/ConsumoApi';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <FormComponent/>
          <h2>Componente funcional</h2>
          <FuncionalComponent propiedad="soy la propiedad"/>
          <h2>Componente de clase</h2>
          <ClassComponent/>
          <h2> Consumo de API:</h2>
          <ConsumoApi/>
     
      </div>
    );
  }
}

export default App;
