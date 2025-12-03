import React from 'react';
import './App.css';
import SoundwalkMap from './components/SoundwalkMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Listening to Boston </h1>
        <p className="subtitle">Explore Highland Park, Roxbury through sound</p>
      </header>
      <main>
        <SoundwalkMap />
      </main>
    </div>
  );
}

export default App;

