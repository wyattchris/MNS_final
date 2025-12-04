export interface SoundLocation {
  id: number;
  name: string;
  description: string;
  position: [number, number];
  audioUrl: string;
  type: 'sound';
}

export interface ZoningLocation {
  id: number;
  name: string;
  description: string;
  position: [number, number];
  timestamp: string;
  type: 'zoning';
}

export type Location = SoundLocation | ZoningLocation;

// Sound locations for the soundwalk
export const soundLocations: SoundLocation[] = [
  {
    id: 1,
    name: 'Park Entrance',
    description: 'The gentle rustle of leaves and distant city sounds create a peaceful atmosphere at the park entrance.',
    position: [42.3250, -71.0945],
    audioUrl: '/audio/location1.mp3',
    type: 'sound',
  },
  {
    id: 2,
    name: 'Grove of Trees',
    description: 'Birds chirping and the wind through the branches offer a natural symphony in this quiet grove.',
    position: [42.3245, -71.0938],
    audioUrl: '/audio/location2.mp3',
    type: 'sound',
  },
  {
    id: 3,
    name: 'Overlook Point',
    description: 'From this vantage point, you can hear the urban rhythm of Roxbury mixed with park tranquility.',
    position: [42.3255, -71.0940],
    audioUrl: '/audio/location3.mp3',
    type: 'sound',
  },
  {
    id: 4,
    name: 'Walking Path',
    description: 'Footsteps on the path and conversations in the distance capture the community spirit of the park.',
    position: [42.3242, -71.0950],
    audioUrl: '/audio/location4.mp3',
    type: 'sound',
  },
  {
    id: 5,
    name: 'Garden Area',
    description: 'The sounds of nature are most vibrant here, with insects, birds, and rustling vegetation.',
    position: [42.3258, -71.0935],
    audioUrl: '/audio/location5.mp3',
    type: 'sound',
  },
];

// Zoning locations referenced in the podcast
export const zoningLocations: ZoningLocation[] = [
  {
    id: 6,
    name: 'South End',
    description: '3:19 - Here is one of the zoning locations referenced in the podcast, where historical protections exist on the neighborhoods to prevent from too much allowed development',
    position: [42.3400, -71.0750],
    timestamp: '3:19',
    type: 'zoning',
  },
  {
    id: 7,
    name: 'Southie',
    description: '3:21 - Here is one of the zoning locations referenced in the podcast, where historical protections exist on the neighborhoods to prevent from too much allowed development',
    position: [42.3375, -71.0500],
    timestamp: '3:21',
    type: 'zoning',
  },
  {
    id: 8,
    name: 'State Street',
    description: '3:27 - Here is one of the zoning locations referenced in the podcast, where they have allowed the height limits to expand to build the financial district and allow for more offices/jobs',
    position: [42.3580, -71.0575],
    timestamp: '3:27',
    type: 'zoning',
  },
  {
    id: 9,
    name: 'Back Bay',
    description: '3:29 - Here is one of the zoning locations referenced in the podcast, where they have allowed the height limits to expand to build the shopping complexes, offices, and apartment buildings.',
    position: [42.3500, -71.0800],
    timestamp: '3:29',
    type: 'zoning',
  },
];

