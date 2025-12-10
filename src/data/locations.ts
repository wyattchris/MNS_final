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
        description: 'On my walk through Highland Park, I decided to climb to the highest overlook over the park (which is something I don\'t usually do in my everyday routines as it is out of the way from my typical routes), and felt an immediate awareness of how quiet the space felt despite its proximity to busier streets and traffic (Columbus Avenue). From the highest viewpoint in Highland park with surrounding panoramic views of Roxbury and downtown, this recording captures a gentle soundscape that is comprised of wind swooshing through the trees, bird calls, and faint blimps of traffic noise and sirens from the neighborhood. Within Konrad Uebel\'s "Urban Green Space Soundscapes and Their Perceived Restorativeness," he notes how urban parks are "rarely entirely natural," with their soundscapes embodying a balance between natural and anthropogenic noise, as can be heard in this recording (Uebel Abstract). As traffic noise is less dominant on the hill, green spaces such as Highland are capable of being sites of "psychological restorativeness," evidenced through results of the study "[demonstrating] a clear gradient of increasing perceived restorativeness scores as perceived traffic volume decreases and perceived bird species richness increases" (Uebel 762). However, the sense of quiet and nature noises within Highland Park is also inseparable from Roxbury\'s history of urban renewal and displacement over time. Boston\'s redevelopment campaigns within the 1960s directly razed large portions of land nearby Lower Roxbury, as "both corridors were cleared of the houses and business districts that lined their streets," with historian Heath noting how "you could come out of Dudley Station, walk a block and it was utter devastation" (Miller 1). Further, these planning decisions also redirected major traffic routes within the Roxbury neighborhood, which produced an influx of traffic in Lower Roxbury that is still present today. Trudeau and Gustavino argue that neighborhoods\' access to quiet is unequally distributed across socioeconomic lines, which further shows how the tranquility at Highlands overlook is not simply natural but also reflects political and infrastructural decisions. As discussed in "Urban Renewal in Roxbury," the rising property values of Highland\'s neighborhood and the continued development of townhouses also raises questions about who gets access to urban quiet and green spaces (and at what cost); the soundscapes heard at the hilltop of Highland here reflect how silence, restoration, renewal, and displacement are intertwined in this community\'s history and present. This recording highlights how access to silence and natural soundscapes in a community is a health resource that is unevenly distributed along socioeconomic and racial lines.',        
        position: [42.325307, -71.094391],

        audioUrl: '/audio/highland.mp3',
        type: 'sound',
    },
    {
        id: 2,
        name: '57 Fort Avenue',
        description: 'Walking past 57 Fort Avenue, I could feel the moment when the soundscape of the neighborhood began to shift from the relative quiet of the overlook into steadier, muffled sounds of traffic and movement from the surrounding streets. Listening more closely, my attention became focused on distant engines and passing movements rather than the stillness and quiet of the park — further, the bird noises that were still present created a sonic overlap that further emphasized this location as a transition within the soundscape at Highland. At 57 Fort Avenue, the soundscape makes a sonic transition between the quieter Highland Park nature sounds and the noises of traffic in the daily commute from the neighboring streets, Centre Street, and Columbus Avenue. One can still hear the mixed soundscapes of residential Roxbury (such as distant birds, intermittent traffic, footsteps, and running), which further illustrates Uebel\'s concept of the "rarely entirely natural" qualities of urban sonic environments (Uebel Abstract). This recording further captures the "gradient" of access to noise and silence in the neighborhood, where silence and noise coexist and are in constant flux, reflecting how soundwalks can acoustically map patterns of change and inequality in the soundscape.',
        position: [42.326300, -71.095377],
        audioUrl: '/audio/ftave.mp3',
        type: 'sound',
    },
    {
        id: 3,
        name: '140 Marcella Street',
        description: 'As Marcella Street is by my current apartment, this is a soundscape that I move through daily, often times preoccupied or with headphones on; however, when I listened more closely, I could hear the low rumble of cars with electrical noise that is typically clouded by my music, forming a sonic background layer continuously reflecting the surrounding infrastructure and transit in the neighborhood. At 140 Marcella Street, the soundscape exists between Highland Park\'s interior neighborhood (farther upon the hill) and the heavy traffic of Columbus Avenue as it is the lowest street in Highland beyond Centre Street. This recording captures a constant sonic underlay (almost muffled sounding) of passing cars and electrical hums, integrated with the faint bird calls of upper Highland, embodying a mixture of the soundscapes of residential blocks and major transit routes in Boston. This recording further reflects Trudeau\'s research on the uneven distribution of urban noise, as communities near corridors that are frequently used experience continuous, low-level exposure to urban noise every day. On Marcella Street, the neighborhood meets the sonic pressures of the transit infrastructure in such close proximity, reflecting how streets in the neighborhood reveal the patterns of infrastructural planning and mobility within Boston.',
        position: [42.325375, -71.096840],
        audioUrl: '/audio/marcellast.mp3',
        type: 'sound',
    },
    {
        id: 4,
        name: 'Stop & Shop - Centre Street',
        description: 'Centre Street, especially the area near Stop & Shop and the neighboring small business, is the most common place where I go out to eat with my roommates or grocery shop; it is a central hub that is tied to both transit and everyday social interactions within the residential area, which is further reflected by its soundscape. Across the street from the Highland neighborhood (separated by the four lane Columbus Avenue road) the soundscape of Centre Street is layered and dense, with prominent low frequency sounds, buses braking, commuters, music from apartments and cars, delivery trucks on their routes, sirens, car alarms, and engine roars. Arregi et. al. argue in "Road Traffic Noise Exposure and Its Impact on Health" that noise within urban spaces can operate as a "chronic stressor that triggers a chain reaction of oxidative, inflammatory, and metabolic effects, resulting in non-auditory health outcomes," further producing stress hormones such as cortisol and adrenaline in listeners (Arregi 3). Even when people "habituate" their emotions and report less annoyance through "isolation of noise from consciousness," Arregi argues that "the physiological response to noise [still] persists" (Arregi 2–3). Erica Walker further explores lived soundscapes experiences with unpredictable and mechanical sounds in her soundscape research, noting how they are not extreme in decibel level (similar to Arregi\'s mentioning of noise in consciousness) but can accumulate in negative health effects over time. Through her research, she notes how it is "overwhelmingly the littler noises…that people are affected by," which can be amplified when citizens don\'t have access to quiet or restorative environments (Porter-Brown 1).',
        position: [42.322939, -71.102203],
        audioUrl: '/audio/stopandshop.mp3',
        type: 'sound',
    },
    {
        id: 5,
        name: 'Highland Street',
        description: 'On my commute to school or errands, Highland Street acts as the direct transition from the neighborhood onto Columbus Avenue. As I stood, next to the parking lots that border the Southwest Corridor and Columbus Avenue, the soundscape reflected the exact meeting point of the Highland Neighborhood with transit routes and urban infrastructure of Boston. Within her research on noise, environmental scholar Erica Walker explores how everyday urban sounds (especially those that are mechanical and unpredictable) can impact citizens cumulatively over time — both in their conscious and unconscious experiences of soundscapes —  even if those songs are not considered loud in traditional decibel measurements. Within the recording, the lot\'s emptiness amplifies the sounds of passing cars and distant train movement, relating to Erica Walker\'s concept of layered soundscapes that shape (consciously and unconsciously) how residents experience their sonic environment. On Highland Street, the moments of quiet coexist with the mechanical sounds of traffic and transit, further illustrating how the edges of the neighborhood reveal the acoustic effects of planning decisions within Roxbury\'s shared spaces.',
        position: [42.324535, -71.097475],
        audioUrl: '/audio/lots.m4a',
        type: 'sound',
    },
    {
        id: 6,
        name: 'Jackson Square T Station',
        description: 'The Jackson Square T stop is the transit hub I pass and utilize whenever leaving or returning from home, which makes it a familiar soundscape in my daily routine (also being one of the most bustling soundscapes in my direct area). There is a constant layering of voices from travel, metal from construction, and a sense of urgency from the transit that contrasts the residential streets nearby. At the Jackson Square T Stop, the soundscape reflects the noises of transit through the rumble of buses, metal, idling engines, and the flux of citizens moving throughout the station; the noise exposure to transportation is continuous both through traffic and transit (bus and train). Ane Arregi notes how transportation and "road traffic noise stands out as a significant factor contributing to widespread public health issues," functioning as one of the most persistent noise exposures and environmental stressors for citizens of urban areas (Arregi Abstract). The audio from the Jackson Square T soundwalk captures simultaneously how the infrastructure designed for mobility through public transit can also place a physiological burden on citizens who live in immediate proximity to noise; the concentration of the transit corridor through working neighborhoods further reflects a division of noise distribution and access to silence.',
        position: [42.3235, -71.0995],
        audioUrl: '/audio/jacksonsquaret.m4a',
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

