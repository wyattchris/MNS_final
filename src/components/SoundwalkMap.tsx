import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './SoundwalkMap.css';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface SoundLocation {
  id: number;
  name: string;
  description: string;
  position: [number, number];
  audioUrl: string;
}

// Highland Park, Roxbury coordinates: approximately 42.3249, -71.0942
// Creating several markers scattered around the area
const soundLocations: SoundLocation[] = [
  {
    id: 1,
    name: 'Park Entrance',
    description: 'The gentle rustle of leaves and distant city sounds create a peaceful atmosphere at the park entrance.',
    position: [42.3250, -71.0945],
    audioUrl: '/audio/location1.mp3',
  },
  {
    id: 2,
    name: 'Grove of Trees',
    description: 'Birds chirping and the wind through the branches offer a natural symphony in this quiet grove.',
    position: [42.3245, -71.0938],
    audioUrl: '/audio/location2.mp3',
  },
  {
    id: 3,
    name: 'Overlook Point',
    description: 'From this vantage point, you can hear the urban rhythm of Roxbury mixed with park tranquility.',
    position: [42.3255, -71.0940],
    audioUrl: '/audio/location3.mp3',
  },
  {
    id: 4,
    name: 'Walking Path',
    description: 'Footsteps on the path and conversations in the distance capture the community spirit of the park.',
    position: [42.3242, -71.0950],
    audioUrl: '/audio/location4.mp3',
  },
  {
    id: 5,
    name: 'Garden Area',
    description: 'The sounds of nature are most vibrant here, with insects, birds, and rustling vegetation.',
    position: [42.3258, -71.0935],
    audioUrl: '/audio/location5.mp3',
  },
];

const SoundwalkMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<SoundLocation | null>(null);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Center of Highland Park, Roxbury
  const centerPosition: [number, number] = [42.3249, -71.0942];

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMarkerClick = (location: SoundLocation) => {
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
      const locationName = soundLocations.find(l => l.id === locationId)?.name || 'this location';
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
      <MapContainer
        center={centerPosition}
        zoom={16}
        style={{ height: '600px', width: '100%', borderRadius: '10px' }}
        className="soundwalk-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
                <p>{location.description}</p>
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
      </MapContainer>

      {selectedLocation && (
        <div className="location-details">
          <h2>{selectedLocation.name}</h2>
          <p>{selectedLocation.description}</p>
          <div className="audio-controls">
            <button
              className="play-audio-btn-large"
              onClick={() => handlePlayAudio(selectedLocation.id, selectedLocation.audioUrl)}
            >
              {playingAudio === selectedLocation.id ? '⏸ Pause Audio' : '▶ Play Audio Recording'}
            </button>
            <p className="audio-note">Note: Audio recordings will be added soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoundwalkMap;

