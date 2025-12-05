export interface Citation {
  text: string;
  url?: string;
}

export interface AuthorSection {
  author: string;
  citations: Citation[];
}

export const worksCited: AuthorSection[] = [
  {
    author: 'Chris Wyatt',
    citations: [
      {
        text: 'Arregi, Ane, Oscar Vegas, Aitana Lertxundi, Ana Silva, Isabel Ferreira, Ainhoa Bereziartua, Maria Teresa Cruz, and Nerea Lertxundi. "Road Traffic Noise Exposure and Its Impact on Health: Evidence from Animal and Human Studies-Chronic Stress, Inflammation, and Oxidative Stress as Key Components of the Complex Downstream Pathway Underlying Noise-Induced Non-Auditory Health Effects." Environmental science and pollution research international, July 2024.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11297122'
      },
      {
        text: 'Uebel, Konrad. "Urban Green Space Soundscapes and Their Perceived Restorativeness ." British Ecological Society, May 24, 2021.',
        url: 'https://besjournals.onlinelibrary.wiley.com/doi/full/10.1002/pan3.10215'
      },
      {
        text: 'Trudeau, Christopher, and Catherine Guastavino. "The Environmental Inequality of Urban Sound Environments." Research Gate, June 2021.',
        url: 'https://www.researchgate.net/publication/352475750_The_environmental_inequality_of_urban_sound_environments_a_comparative_analysis'
      },
      {
        text: 'Miller, Yaw. "When the BRA Leveled a Lower Roxbury Neighborhood." The Bay State Banner, August 24, 2022.',
        url: 'https://baystatebanner.com/2022/08/24/when-the-bra-leveled-roxbury/'
      },
      {
        text: 'Porter-Brown, Nell. "Harvard Researcher Erica Walker Combats Urban Noise." Harvard Magazine, October 17, 2022.',
        url: 'https://www.harvardmagazine.com/2018/02/erica-walker'
      },
      {
        text: 'Mehta, Malav. "Urban Renewal in Roxbury." Cities Landscape and Modern Culture. Accessed October 3, 2025.',
        url: 'https://landscapes.northeastern.edu/malav-mehta'
      }
    ]
  },
  {
    author: 'Isabella Valle',
    citations: [
      {
        text: 'Bob, Alex. Older Adult Homeowners, Gentrification, and Aging in the Right Place: Challenges and Opportunities in Boston, Cambridge, and Somerville, Massachusetts. Massachusetts Institute of Technology, Dept. of Urban Studies & Planning, 2019.'
      },
      {
        text: 'Boston Planning & Development Agency. 1980–2010 Change in Total Housing Units by Neighborhood. BPDA Research Division.'
      },
      {
        text: 'Fox, Gloria. "Gloria Fox." Lower Roxbury Black History Project, Northeastern University, n.d.',
        url: 'roxbury.library.northeastern.edu/gloria-fox/'
      },
      {
        text: 'Healthy Neighborhoods Study. "Gentrification Creates Stress by Intensifying Financial Insecurity." Cities & Health, 2022.'
      },
      {
        text: 'Lown, Josh. "Spectres of Gentrification: Towards a Hauntological Framework for Exploring the Impacts of Gentrification." Urban Studies, 2025.'
      },
      {
        text: 'Samuels, Marisa. "Neighborhood Noise May Increase Dementia Risk." Boston University School of Public Health, 6 Nov. 2020.',
        url: 'www.bu.edu/sph/news/articles/2020/neighborhood-noise-may-increase-dementia-risk/'
      },
      {
        text: 'Schafer, R. Murray. The Soundscape: Our Sonic Environment and the Tuning of the World. Knopf, 1977.'
      },
      {
        text: 'Welltower. 2017 Aging in Cities Survey: Executive Summary & Key Findings. Welltower, 2017.'
      }
    ]
  },
  {
    author: 'Naomi Zhang',
    citations: [
      {
        text: 'Arbor Day Foundation. Tree and shrub noise buffer design. 26 Aug. 2010. Using Trees and Shrubs to Reduce Noise.',
        url: 'https://www.arborday.org/perspectives/using-trees-and-shrubs-reduce-noise'
      },
      {
        text: 'A tranquil outdoor space with greenery and benches. The Sound of Silence: Creating Tranquil Outdoor Spaces Amid Urban Chaos, The Sound of Silence.',
        url: 'https://uslawns.com/featured/the-sound-of-silence-creating-tranquil-outdoor-spaces-amid-urban-chaos/'
      },
      {
        text: 'Basner, Mathias. "Why Noise Is Bad for Your Health." TED, Feb. 2019.',
        url: 'https://www.youtube.com/watch?v=ewNTwBbLUhM'
      },
      {
        text: 'Center for Occupational and Environmental Health (COEH). "How Noise Pollution Quietly Affects Your Health." COEH Website, University of California, Davis, 2019.',
        url: 'https://coeh.ucdavis.edu/research/how-noise-pollution-quietly-affects-your-health'
      },
      {
        text: 'Hartnett, Kevin. "Noise Report Cards for Boston Neighborhoods." Providence Noise Project, PNP, 6 Aug. 2024.',
        url: 'providencenoiseproject.org/article-noise-report-cards-for-boston-neighborhoods/'
      },
      {
        text: 'Hornberg, Jonas, et al. "Association between Perceived Sound Type Dominance and Overall Assessment of the Acoustic Environment Using ISO 12913 Soundwalks." The Journal of the Acoustical Society of America, vol. 156, no. 4, 2024, AIP Publishing.',
        url: 'https://pubs.aip.org/asa/jasa/article/156/4/2827/3317730/Association-between-perceived-sound-type-dominance'
      },
      {
        text: 'Jeon, Jin Yong, Joo Young Hong, and Pyoung Jik Lee. "Soundwalk Approach to Identify Urban Soundscapes Individually." The Journal of the Acoustical Society of America, vol. 134, no. 1, 2013, pp. 803–812. AIP Publishing.',
        url: 'https://pubs.aip.org/asa/jasa/article/134/1/803/614574/Soundwalk-approach-to-identify-urban-soundscapes'
      },
      {
        text: 'Mancini, Simona, Aurora Mascolo, and Gabriella Graziuso. "Soundwalk, Questionnaires and Noise Measurements in a University Campus: A Soundscape Study." Applied Acoustics, vol. 178, 2021, p. 107952. MDPI.',
        url: 'https://www.mdpi.com/2071-1050/13/2/841'
      },
      {
        text: 'Noise and the Blues: Exploring the Link Between Noise-Pollution and Depression. YouTube, uploaded by Dr Dalia Tsimpida, 2023.',
        url: 'https://www.youtube.com/watch?v=yTwnMgtD1BM'
      },
      {
        text: 'Porter-Brown, Nell. "Harvard Researcher Erica Walker Combats Urban Noise." Harvard Magazine, 7 Feb. 2018.',
        url: 'www.harvardmagazine.com/2018/02/erica-walker'
      },
      {
        text: 'Quinn, Cristina. "Boston Is Noisy. How Is That Affecting Our Health?" GBH, 28 Aug. 2023.',
        url: 'www.wgbh.org/news/local/2019-09-17/boston-is-noisy-how-is-that-affecting-our-health'
      },
      {
        text: 'U.S. Environmental Protection Agency. "EPA Identifies Noise Levels Affecting Health and Welfare." EPA, Environmental Protection Agency, 2 Apr. 1974.',
        url: 'epa.gov/archive/epa/aboutepa/epa-identifies-noise-levels-affecting-health-and-welfare.html'
      },
      {
        text: 'Walker, Erica D. "Who Gets Peace and Quiet? Urban Noise in the COVID-19 Pandemic." Medium, 4 Oct. 2023.',
        url: 'medium.com/vision-zero-cities-journal/who-gets-peace-and-quiet-urban-noise-in-the-covid-19-pandemic-c821e0a08887'
      },
      {
        text: 'Williams, Brett. "Brake for the Love of Nature: Without Commuter Traffic, Pandemic-Era Boston Drivers Are Speeding Faster, Increasing Noise Pollution." Boston University, 28 Apr. 2021.',
        url: 'www.bu.edu/articles/2021/without-commuter-traffic-pandemic-era-boston-drivers-are-speeding-up-increasing-noise-pollution'
      }
    ]
  }
];

