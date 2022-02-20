let profileLinks = [
  {
    id: 1,
    variant: 'classic',
    label: 'Official Website',
    link: 'https://www.arloparksofficial.com/',
    music: [],
    shows: [],
  },
  {
    id: 2,
    variant: 'classic',
    label: `Arlo Parks Wants Her Songs to ‘Feel Like Surround Sound Cinema' - The New York Times`,
    link: 'https://www.nytimes.com/2021/01/20/arts/music/arlo-parks.html',
    music: [],
    shows: [],
  },
  {
    id: 3,
    variant: 'music',
    label: `Stream "Black Dog"`,
    link: 'https://linktr.ee/',
    music: [
      {
        service: 'Spotify',
        link: 'https://open.spotify.com/track/37pShAS4iuRXJeRAa9k6xw?si=1a50e6e80524406b',
        icon: 'spotify',
      },
      {
        service: 'Apple Music',
        link: 'https://music.apple.com/au/album/black-dog/1550632003?i=1550632010',
        icon: 'apple',
      },
      {
        service: 'Soundcloud',
        link: 'https://soundcloud.com/arlo_parks/black-dog-2',
        icon: 'soundcloud',
      },
      {
        service: 'Bandcamp',
        link: 'https://arloparks.bandcamp.com/track/black-dog',
        icon: 'bandcamp',
      },
    ],
    shows: [],
  },
  {
    id: 4,
    variant: 'shows',
    label: 'Upcoming Shows',
    link: 'https://linktr.ee/',
    music: [],
    shows: [
      {
        date: '9 Aug 2022',
        link: 'https://www.songkick.com/concerts/40129725-arlo-parks-at-170-russell',
        location: '170 Russell, Melbourne',
        soldOut: true,
      },
      {
        date: '11 Aug 2022',
        link: 'https://www.songkick.com/concerts/40129048-arlo-parks-at-tivoli',
        location: 'The Tivoli, Brisbane',
        soldOut: false,
      },
      {
        date: '13 Aug 2022',
        link: 'https://www.songkick.com/concerts/40129727-arlo-parks-at-metro-theatre',
        location: 'Metro Theatre, Sydney',
        soldOut: false,
      },
    ],
  },
];

export let fetchData = () => new Promise(resolve => resolve(profileLinks));