import React from 'react';
import './App.css';
import ProjectContext from './components/ProjectContext';
import SoundwalkMap from './components/SoundwalkMap';
import PodcastPlayer from './components/PodcastPlayer';
import Essay from './components/Essay';
import WorksCited from './components/WorksCited';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Listening to Boston </h1>
        <p className="subtitle">Exploring access to silence and noise distribution within communities of Boston</p>
      </header>
      <main>
        <ProjectContext />
        <SoundwalkMap />
        <PodcastPlayer />
        <Essay />
        <WorksCited />
      </main>
    </div>
  );
}

export default App;

