import React from 'react';
import './App.css';
//import Todos from './testing/index'
//import Todos from './Componts/index'
import Todos from './newTime/index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Simple todo app  </p>
      </header>
      <Todos />
    </div>
  );
}

export default App;
