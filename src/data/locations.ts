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

export interface SoundCollageLocation {
    id: number;
    name: string;
    description: string;
    position: [number, number];
    audioUrl: string;
    type: 'soundCollage';
}

export type Location = SoundLocation | ZoningLocation | SoundCollageLocation;

// Sound locations for the soundwalk
export const soundLocations: SoundLocation[] = [
    {
        id: 1,
        name: 'Highland Overlook Point',
        description: 'From the highest viewpoint in Highland park with surrounding panoramic views of Roxbury and downtown, this recording captures a gentle soundscape that is comprised of wind swooshing through the trees, bird calls, and faint blimps of traffic noise and sirens from the neighborhood. Within Uebel\'s "Urban Green Space Soundscapes and Their Perceived Restorativeness," he notes how urban parks are "rarely entirely natural," with their soundscapes embodying a balance between natural and anthropogenic noise, as can be heard in this recording (Uebel Abstract). As traffic noise is less dominant on the hill, green spaces such as Highland are capable of being sites of "psychological restorativeness," evidenced through results of the study "[demonstrating] a clear gradient of increasing perceived restorativeness scores as perceived traffic volume decreases and perceived bird species richness increases" (Uebel 762). However, the sense of quiet and nature noises within Highland Park is also inseparable from Roxbury\'s history of urban renewal and displacement over time. Boston\'s redevelopment campaigns within the 1960s directly razed large portions of land nearby Lower Roxbury, as "both corridors were cleared of the houses and business districts that lined their streets," with historian Heath noting how "you could come out of Dudley Station, walk a block and it was utter devastation" (Miller 1). Further, these planning decisions also redirected major traffic routes within the Roxbury neighborhood, which produced an influx of traffic that is still present today. \n\nTrudeau and Gustavino argue that neighborhoods\' access to quiet is unequally distributed across socioeconomic lines, which further shows how the tranquility at Highlands overlook is not simply environmental but also reflects political and infrastructural decisions. As discussed in "Urban Renewal in Roxbury," the rising property values of Highland\'s neighborhood and the continued development of townhouses also raises questions about who gets access to urban quiet and green spaces (and at what cost); the soundscapes heard at the hilltop of Highland here reflect how silence, restoration, renewal, and displacement are intertwined in this community\'s history and present. This recording highlights how access to silence and natural soundscapes is both a health resource and a marker of spatial privilege within the city.',
        position: [42.325307, -71.094391],

        audioUrl: '/audio/highland.mp3',
        type: 'sound',
    },
    {
        id: 2,
        name: '57 Fort Avenue',
        description: 'At 57 Fort Avenue, the soundscape makes a sonic transition between the quieter Highland Park nature sounds and the noises of traffic and commuting from the neighboring streets, Centre St., and Columbus Avenue. One can still hear the mixed soundscapes of residential Roxbury (such as distant birds, intermittent traffic, footsteps, and running), which further illustrates Uebel\'s concept of the "rarely entirely natural" qualities of urban sonic environments (Uebel Abstract). This recording further captures the "gradient" of access to noise and silence in the neighborhood, where silence and noise coexist and are in constant flux, reflecting how soundwalks can acoustically map patterns of change and inequality in the soundscape.',
        position: [42.326300, -71.095377],
        audioUrl: '/audio/ftave.mp3',
        type: 'sound',
    },
    {
        id: 3,
        name: '140 Marcella Street',
        description: 'At 140 Marcella St, the soundscape exists between Highland Park\'s interior neighborhood (farther upon the hill) and the heavy traffic of Columbus Avenue as it is the lowest street in Highland beyond Centre St. This recording captures a constant sonic underlay (almost muffled sounding) of passing cars and electrical hums, integrated with the faint bird calls of upper Highland, embodying a mixture of the typical soundscapes of residential blocks that border major transit routes in Boston. This recording further reflects Trudeau\'s research on the uneven distribution of urban noise, as communities near corridors that are highly used experience continuous, low-level exposure to urban noise every day. On Marcella St, the neighborhood meets the sonic pressures of the transit infrastructure in such close proximity, reflecting how streets in neighborhood reveal the patterns of infrastructural planning and mobility within Boston.',
        position: [42.325375, -71.096840],
        audioUrl: '/audio/marcellast.mp3',
        type: 'sound',
    },
    {
        id: 4,
        name: 'Stop & Shop - Centre Street',
        description: 'Across the street from the Highland neighborhood, separated by the four lane Columbus Avenue road, the soundscape of Centre St near Stop and Shop is layered and dense, with prominent low frequency sounds, buses braking, commuters, music from apartments and cars, delivery trucks on their routes, sirens, car alarms, and engine roars. Arregi et. al. argue in "Road Traffic Noise Exposure and Its Impact on Health" that noise within urban spaces can operate as a "chronic stressor that triggers a chain reaction of oxidative, inflammatory, and metabolic effects, resulting in non-auditory health outcomes," further producing stress hormones such as cortisol and adrenaline in listeners (Arregi 3). Even when people "habituate" their emotions and report less annoyance through "isolation of noise from consciousness," Arregi argues that "the physiological response to noise [still] persists," which can further cause cardiovascular and metabolic burdens (Arregi 2–3). Erica Walker further warns about soundscapes with unpredictable and mechanical sounds, as they are not extreme in decibel level (similar to Arregi\'s mentioning of noise in consciousness) but can accumulate in negative health effects overtime. Through her own soundscape research, she notes how it\'s "overwhelmingly the littler noises…that people are affected by," especially when citizens don\'t have community access to quiet or restorative environments (Porter-Brown 1). Further, Trudeau\'s argues that socioeconomic inequalities of noise exposure introduce "a double vulnerability problem in that they are both more susceptible [31] and more exposed to noise" (Trudeau 7).',
        position: [42.322939, -71.102203],
        audioUrl: '/audio/stopandshop.mp3',
        type: 'sound',
    },
    {
        id: 5,
        name: 'Highland Street',
        description: 'Here on Highland St, next to the parking lots that border the Southwest Corridor and Columbus Avenue, the soundscape reflects the exact meeting point of the Highland Neighborhood with transit routes and urban infrastructure of Boston. Within the recording, the lot\'s emptiness amplifies the sounds of passing cars and distant train movement, relating to Erica Walkers concept of layered everyday noises that shape (consciously and unconsciously) how residents experience their sonic environment. On Highland St, the  moments of quiet coexist with the mechanical sounds of traffic and transit, further illustrating how the edges of the neighborhood reveal the acoustic effects of planning decisions within Roxbury\'s shared spaces.',
        position: [42.324535, -71.097475],
        audioUrl: '/audio/location5.mp3',
        type: 'sound',
    },
    {
        id: 6,
        name: 'Jackson Square T Station',
        description: 'At the Jackson Square T Stop, the soundscape reflects the noises of transit through the rumble of buses, metal, idling engines, and the flux of citizens moving throughout the station; the noise exposure to transportation is continuous both through traffic and transit (bus and train). Arregi notes how transportation and "road traffic noise stands out as a significant factor contributing to widespread public health issues," functioning as one of the most persistent noise exposures and environmental stressors for citizens of urban areas (Arregi Abstract). The audio from the Jackson Square T sound walk captures simultaneously how the infrastructure designed for mobility through public transit can also place a physiological burden on citizens who live in immediate proximity to noise. In Roxbury, decades of urban planning have concentrated the transit corridors through working neighborhoods, which further reflects a division of noise distribution and access to silence.',
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

// Sound collage location
export const soundCollageLocation: SoundCollageLocation = {
    id: 10,
    name: "Naomi's Sound Collage - Northeastern Campus",
    description: 'This sound collage is built from field recordings captured across Northeastern\'s campus and layered so they play simultaneously. By compressing these everyday sounds into a single listening experience, the piece highlights just how much noise surrounds students, most of which we rarely notice. Although we don\'t typically hear all these sounds at once, presenting them together is meant to draw attention to the constant noise pollution on campus and encourage more mindful listening.',
    position: [42.338909, -71.088629],
    audioUrl: '/audio/naomi_sound_collage.wav',
    type: 'soundCollage',
};

