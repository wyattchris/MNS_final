# Virtual Soundwalk - Highland Park, Roxbury

A virtual soundwalk experience that allows users to explore Highland Park in Roxbury through interactive map markers and audio recordings.

## Features

- Interactive map visualization of Highland Park area
- Multiple location markers scattered across the map
- Click markers to view descriptions and play audio recordings
- Beautiful, modern UI with gradient design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Adding Audio Files

To add actual audio recordings:

1. Create an `audio` folder in the `public` directory
2. Add your audio files (e.g., `location1.mp3`, `location2.mp3`, etc.)
3. Update the `audioUrl` paths in `src/components/SoundwalkMap.tsx` to match your file names

## Technologies Used

- React 18
- TypeScript
- React Leaflet (for map visualization)
- Leaflet (mapping library)
- CSS3

## Project Structure

```
src/
  components/
    SoundwalkMap.tsx    # Main map component with markers
    SoundwalkMap.css    # Styles for the map component
  App.tsx               # Main app component
  App.css               # App styles
  index.tsx             # Entry point
```

## Future Enhancements

- Add actual audio recordings from Highland Park
- Implement audio visualization
- Add more interactive features
- Mobile optimization improvements

