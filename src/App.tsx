import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App" data-test="container-app">
      <h1>Changes doing through feature branch into develop....</h1>
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
