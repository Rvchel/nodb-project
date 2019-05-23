import React, {Component} from 'react';
import Add from './components/Add';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="Coffee_Holder">
     <h1 id="Latte">Latte<Add /></h1>
     <h1 id="Frap">Frap<Add /></h1>
     <h1 id="Ice_Coffee">Ice Coffee</h1>
     <h1 id="Expresso">Expresso</h1>
     <h1 id="Custom">Special</h1>
    </div>
  );
}

export default App;
