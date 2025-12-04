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
        name: 'Highland Overlook Point',
        description: 'At the tower in Highland Park, offering panoramic views of Roxbury and the surrounding area.',
        position: [42.325307, -71.094391],
        audioUrl: '/audio/highland.mp3',
        type: 'sound',
    },
    {
        id: 2,
        name: '57 Fort Avenue',
        description: 'At 57 Fort Avenue, capturing the sounds of the neighborhood approach to Highland.',
        position: [42.326300, -71.095377],
        audioUrl: '/audio/ftave.mp3',
        type: 'sound',
    },
    {
        id: 3,
        name: '140 Marcella Street',
        description: 'At 140 Marcella Street, experiencing the sounds of the residential area and nearby community spaces.',
        position: [42.325375, -71.096840],
        audioUrl: '/audio/marcellast.mp3',
        type: 'sound',
    },
    {
        id: 4,
        name: 'Stop & Shop - Centre Street',
        description: 'At 301 Centre Street, the Stop & Shop near Jackson Square, capturing the bustling commercial sounds of Centre Street.',
        position: [42.322939, -71.102203],
        audioUrl: '/audio/stopandshop.mp3',
        type: 'sound',
    },
    {
        id: 5,
        name: 'Highland Street',
        description: 'On Highland Street, near the parking lots across the Southwest Corridor, where urban infrastructure meets community space.',
        position: [42.324535, -71.097475],
        audioUrl: '/audio/location5.mp3',
        type: 'sound',
    },
    {
        id: 6,
        name: 'Jackson Square T Station',
        description: 'At the Jackson Square T station, experiencing the sounds of transit, commuters, and the rhythm of daily movement.',
        position: [42.3235, -71.0995],
        audioUrl: '/audio/location6.mp3',
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

