import React from 'react';
import './App.css';
import SoundwalkMap from './components/SoundwalkMap';
import PodcastPlayer from './components/PodcastPlayer';
import Essay from './components/Essay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Listening to Boston </h1>
        <p className="subtitle">Exploring access to silence and noise distribution within communities of Boston</p>
      </header>
      <main>
        <SoundwalkMap />
        <PodcastPlayer />
        <Essay />
      </main>
    </div>
  );
}

export default App;

