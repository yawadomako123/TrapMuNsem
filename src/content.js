// All site copy and imagery lives here so it can be edited without touching components.
// Image paths are relative to /public. A missing image renders as a labelled placeholder.
// `pos` is an optional CSS object-position for how the photo is cropped in its tile.

export const site = {
  brand: 'TrapMuNsem',
  designer: 'Big Wilson',
  handle: 'jiggyboy04',
  location: 'Ghana',
  disciplines: 'Creative Direction / Fashion Styling / Visual Direction',
  tagline: '“I dress how my mind creates.”',
  heroImage: '/images/hero.jpg',
}

export const about = {
  label: 'The Designer',
  paragraphs: [
    'I’m Big Wilson — Jiggy. Creative director and fashion stylist from Ghana, founder of TrapMuNsem and artistic director for AIM05 Clothing.',
    'My work lives between streetwear, culture, and story. I style myself and the people around me, direct the shoots, and build the images that carry the clothes — so every fit says something about where we come from.',
  ],
  quote: 'We turned what they feared into culture. That’s the JIGGY way.',
}

export const marqueeWord = 'TrapMuNsem'

// Each chapter renders as sticky copy on the left and an asymmetric photo grid on the right.
// `layout` picks one of the grid recipes in App.css (portrait, editorial, label, bts).
export const chapters = [
  {
    id: 'designer',
    title: 'The Man',
    meta: [
      ['Talent', 'Big Wilson'],
      ['Styling', 'Self-styled'],
    ],
    text: 'Before he dresses anyone else, he dresses himself. Fits he put together, worn the way he sees them.',
    layout: 'portrait',
    images: [
      { src: '/images/man-1.jpg', alt: 'Big Wilson in a black shirt and rosary' },
      { src: '/images/man-2.jpg', alt: 'Big Wilson in wide black trousers against a blue backdrop' },
      { src: '/images/man-3.jpg', alt: 'Big Wilson in an AIM05 jersey on red', pos: 'center 20%' },
      { src: '/images/man-4.jpg', alt: 'Big Wilson self-styled in Ghana colours', pos: 'center 25%' },
      { src: '/images/man-5.jpg', alt: 'Big Wilson in a patterned wrap', pos: 'center 25%' },
      { src: '/images/man-6.jpg', alt: 'Big Wilson in a teal blazer and plaid shirt', pos: 'center 20%' },
      { src: '/images/man-7.jpg', alt: 'Big Wilson self-styled in denim vest and layered shorts', pos: 'center 10%' },
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial',
    meta: [
      ['Role', 'Stylist / Creative Direction'],
      ['Photography', '@kobby_flags'],
    ],
    text: 'Concept-led shoots built around culture, character, and memory — styled and directed by Jiggy.',
    layout: 'editorial',
    images: [
      { src: '/images/editorial-1.jpg', alt: 'Ritual Drip editorial', pos: 'center 30%' },
      { src: '/images/editorial-2.jpg', alt: 'Old Soldier Never Dies editorial', pos: 'center 30%' },
      { src: '/images/editorial-3.jpg', alt: 'From the corner store to the cover page', pos: 'center 40%' },
      { src: '/images/editorial-4.jpg', alt: 'Back Then editorial', pos: 'center 55%' },
      { src: '/images/editorial-5.jpg', alt: 'Rooted in culture, dressed in power', pos: 'center 35%' },
      { src: '/images/editorial-6.jpg', alt: 'Abofra film cast', pos: 'center 42%' },
    ],
  },
  {
    id: 'label',
    title: 'The Label',
    meta: [
      ['Brands', 'TrapMuNsem / AIM05'],
      ['Role', 'Founder / Artistic Director'],
    ],
    text: 'TrapMuNsem pieces and AIM05 releases — clothes made to carry a point of view.',
    layout: 'label',
    images: [
      { src: '/images/label-1.jpg', alt: 'TrapMuNsem shirt', pos: 'center 30%' },
      { src: '/images/label-2.jpg', alt: 'Victory look', pos: 'center 30%' },
      { src: '/images/label-3.jpg', alt: 'AIM05 Worldview Tee', pos: 'center 45%' },
      { src: '/images/label-4.jpg', alt: 'AIM05 — Always In Mind 05 release' },
    ],
  },
  {
    id: 'bts',
    title: 'House of Trappers',
    meta: [
      ['Type', 'Behind the scenes'],
      ['Styled by', 'TMN'],
    ],
    text: 'The crew, the sets, and the moments in between where the work actually happens.',
    layout: 'bts',
    images: [
      { src: '/images/bts-1.jpg', alt: 'House of Trappers crew on the stairs', pos: 'center 62%' },
      { src: '/images/bts-2.jpg', alt: 'Fur coat and dog, behind the scenes' },
      { src: '/images/bts-3.jpg', alt: 'Pink fabric in motion', pos: 'center 30%' },
    ],
  },
]

// TrapMuAmamerɛ — the vintage archive. Each item is a card: photo, name, era, and a short story.
// "Amamerɛ" is Twi for tradition/culture.
export const amamere = {
  title: 'TrapMuAmamerɛ',
  label: 'The Vintage Archive',
  intro:
    'Amamerɛ means tradition. These are the vintage pieces — found, kept, and restyled — that carry the old days into the trap. Every piece has lived a life before it got to us.',
  items: [
    {
      src: '/images/vintage/vintage-1.jpg',
      title: 'The Journeyman',
      era: 'Village days',
      story:
        'Back in the days, a village would gather its little savings and send one trusted son to the capital to chase a better future. The Journeyman carried his people’s hopes in a single suitcase — he left with nothing, and came home carrying his family’s survival and pride.',
      pos: 'center 30%',
    },
    {
      src: '/images/vintage/vintage-2.jpg',
      title: 'Ghana Must Go',
      era: '1983',
      story:
        'In 1983, millions of Ghanaians were forced out of Nigeria with their whole lives packed into one checkered bag, and the world mocked it as the “Ghana Must Go” bag. Today we carry it not as rejection, but as resilience, culture, and pride. They said Ghana must go — we answer, Ghana must shine.',
      pos: 'center 45%',
    },
    {
      src: '/images/editorial-2.jpg',
      title: 'Old Soldier Never Dies',
      era: 'Pan-African',
      story:
        'The turban carries Gaddafi’s spirit — the man who dreamed of one Africa, free and proud. They called him a rebel, but he spoke unity, a vision too bold for his time. His fire lives on in everyone who still believes the continent can rise as one.',
      pos: 'center 30%',
    },
    {
      src: '/images/editorial-4.jpg',
      title: 'Back Then',
      era: 'Radio days',
      story:
        'Before the scrolls, likes, and filters, there was rhythm. Our parents sat close by the radio, laughing, dreaming, and dancing to the crackle of a gramophone tune — no Wi-Fi, no hashtags, just pure connection. They didn’t need the internet to go viral; their love already did.',
      pos: 'center 55%',
    },
    {
      src: '/images/editorial-5.jpg',
      title: 'Rooted in Culture',
      era: 'African renaissance',
      story:
        'Three young men in sharp suits, rooted deep in the soil of their ancestors. The red wall holds the blood and sacrifice of those who came before; the suits take what was once foreign and redefine it with swagger; the rug at their feet is heritage, unshaken by time. Africa is not stuck in the past — it is rewriting the future.',
      pos: 'center 35%',
    },
  ],
}

export const services = [
  ['Fashion Styling', 'Looks for shoots, artists, campaigns, and appearances — built around character and culture.'],
  ['Creative Direction', 'Concept, casting, location, and mood for editorials, films, and releases.'],
  ['Visual Direction', 'Shaping how a brand or artist is seen, from the first idea to the final image.'],
  ['TrapMuNsem Pieces', 'Original and made-to-order garments from the label, like the Double P and Triple pants.'],
  ['Brand Direction', 'Artistic direction for clothing labels — release concepts, lookbooks, and campaigns.'],
  ['Collaborations', 'Capsules and projects with photographers, brands, artists, and other creatives.'],
]

export const contact = {
  heading: "Let's Work",
  text: 'For styling, creative direction, collaborations, and custom pieces, reach out below.',
  links: [
    ['Instagram', 'https://www.instagram.com/jiggyboy04'],
    ['TrapMuNsem', 'https://www.instagram.com/trapmunsem_styling'],
    // TODO: confirm with client
    ['Email', 'mailto:jiggyboy016@gmail.com'],
  ],
}
