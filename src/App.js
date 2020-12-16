import React from 'react';
import './App.css';
import Jokes from './Jokes';
import Weather from './Weather';

function App() {
  return (
    <div>
      <header className="App-header">Welcome</header>
        <Jokes />
        <Weather />
      <footer className="App-footer">E.K.</footer>
    </div>
  )
}

export default App;
