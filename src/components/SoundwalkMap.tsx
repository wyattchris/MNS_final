import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './SoundwalkMap.css';
import { soundLocations, zoningLocations, soundCollageLocation, SoundLocation, ZoningLocation, SoundCollageLocation, Location } from '../data/locations';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// TOOD: Remove the description from the marker highlight
const SoundwalkMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Center of Boston area to show both Highland Park sound locations and zoning locations
  const centerPosition: [number, number] = [42.3300, -71.0850];

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handlePlayAudio = (locationId: number, audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (playingAudio === locationId) {
      setPlayingAudio(null);
      return;
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onerror = () => {
      console.log('Audio file not found. This is a placeholder for future recordings.');
      const locationName = soundLocations.find(l => l.id === locationId)?.name 
        || (soundCollageLocation.id === locationId ? soundCollageLocation.name : null)
        || 'this location';
      alert(`Audio recording for "${locationName}" will be available soon!`);
      setPlayingAudio(null);
      audioRef.current = null;
    };

    audio.onended = () => {
      setPlayingAudio(null);
      audioRef.current = null;
    };

    setPlayingAudio(locationId);
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
      setPlayingAudio(null);
      audioRef.current = null;
    });
  };

  return (
    <div className="soundwalk-map-container">
      <div className="section-divider">
        <h2>Chris Wyatt: Interactive Soundwalk - Highland Park, Roxbury</h2>
      </div>
      <div className="soundwalk-map-wrapper">
        <MapContainer
          center={centerPosition}
          zoom={13}
          style={{ height: '600px', width: '100%', borderRadius: '10px' }}
          className="soundwalk-map"
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Sound locations with default blue markers */}
        {soundLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            eventHandlers={{
              click: () => handleMarkerClick(location),
            }}
          >
            <Popup>
              <div className="marker-popup">
                <h3>{location.name}</h3>
                <button
                  className="play-audio-btn"
                  onClick={() => handlePlayAudio(location.id, location.audioUrl)}
                >
                  {playingAudio === location.id ? '⏸ Pause' : '▶ Play Sound'}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* Zoning locations with red markers */}
        {zoningLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={redIcon}
            eventHandlers={{
              click: () => handleMarkerClick(location),
            }}
          >
            <Popup>
              <div className="marker-popup">
                <h3>{location.name}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* Sound collage location with green marker */}
        <Marker
          key={soundCollageLocation.id}
          position={soundCollageLocation.position}
          icon={greenIcon}
          eventHandlers={{
            click: () => handleMarkerClick(soundCollageLocation),
          }}
        >
          <Popup>
            <div className="marker-popup">
              <h3>{soundCollageLocation.name}</h3>
              <button
                className="play-audio-btn"
                onClick={() => handlePlayAudio(soundCollageLocation.id, soundCollageLocation.audioUrl)}
              >
                {playingAudio === soundCollageLocation.id ? '⏸ Pause' : '▶ Play Sound Collage'}
              </button>
            </div>
          </Popup>
        </Marker>
        </MapContainer>
      </div>

      {selectedLocation && (
        <div className="location-details">
          <h2>{selectedLocation.name}</h2>
          <p>{selectedLocation.description}</p>
          {(selectedLocation.type === 'sound' || selectedLocation.type === 'soundCollage') && (
            <div className="audio-controls">
              <button
                className="play-audio-btn-large"
                onClick={() => handlePlayAudio(selectedLocation.id, (selectedLocation as SoundLocation | SoundCollageLocation).audioUrl)}
              >
                {playingAudio === selectedLocation.id ? '⏸ Pause Audio' : '▶ Play Audio Recording'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SoundwalkMap;

