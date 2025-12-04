import React, { useState, useRef } from 'react';
import './PodcastPlayer.css';

const PodcastPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/Generational_Sounscapes.mp4');
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        audioRef.current = null;
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="podcast-section">
      <div className="section-divider">
        <h2>Isabella Valle: Generational Soundscapes</h2>
      </div>
      <div className="podcast-player-container">
        <button 
          className="podcast-play-btn"
          onClick={handlePlayPause}
        >
          {isPlaying ? '⏸ Pause Podcast' : '▶ Play Podcast'}
        </button>
      </div>
    </div>
  );
};

export default PodcastPlayer;

