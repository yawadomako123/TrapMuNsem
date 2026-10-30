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
    'I’m Big Wilson — Jiggy. Creative director and fashion stylist from Ghana, founder of TrapMuNsem and artistic director at AIM05 Clothing.',
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

export const services = [
  ['Fashion Styling', 'Looks for shoots, artists, campaigns, and appearances — built around character and culture.'],
  ['Creative Direction', 'Concept, casting, location, and mood for editorials, films, and releases.'],
  ['Visual Direction', 'Shaping how a brand or artist is seen, from the first idea to the final image.'],
  ['TrapMuNsem Pieces', 'Original and made-to-order garments from the label, like the Double P and Triple pants.'],
  ['Brand Direction', 'Artistic direction for clothing labels — release concepts, lookbooks, and campaigns.'],
  ['Collaborations', 'Capsules and projects with photographers, brands, artists, and other creatives.'],
]

export const contact = {
  heading: "Let's Build",
  text: 'For styling, creative direction, collaborations, and custom pieces, reach out below.',
  links: [
    ['Instagram', 'https://www.instagram.com/jiggyboy04'],
    ['TrapMuNsem', 'https://www.instagram.com/trapmunsem_styling'],
    // TODO: confirm with client
    ['Email', 'mailto:hello@trapmunsem.com'],
    ['WhatsApp', 'https://wa.me/'],
  ],
}
