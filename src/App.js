import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Calculator</h2>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
