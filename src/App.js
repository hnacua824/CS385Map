import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Extinction</h1>
        <img src ="/images/map.png" alt = ""/>
        <button class= "Penguin">Penguin</button>
        <button class= "Rhino">Rhino</button>
        <button class= "Leopard">Leopard</button>
        <button class= "PolarBears">Polar Bears</button>
        <button class= "Crocodiles">Crocodiles</button>
        <button class= "Dolphins">Dolphins</button>
        <button class= "Pandas">Panda</button>
        <button class= "Whale">Whale</button>
        <button class= "Mink">Mink</button>
        <button class ="CaliCon">Cali Condor</button>
        <button class ="Jaguars">Jaguars</button>
      </div>
      
    );
  }
}


export default App;

