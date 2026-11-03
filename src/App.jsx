import { useEffect, useState } from 'react'
import { site, about, marqueeWord, chapters, amamere, services, contact } from './content.js'
import './App.css'

const YEAR = new Date().getFullYear()

const NAV = [
  ['#home', 'Home'],
  ['#about', 'About'],
  ['#work', 'Work'],
  ['#amamere', 'Vintage'],
  ['#services', 'Services'],
  ['#contact', 'Contact'],
]

// Shows the image, or a labelled frame when the file hasn't been added yet.
function Photo({ src, alt, pos, className = '', onOpen }) {
  const [missing, setMissing] = useState(false)
  if (missing) {
    return (
      <div className={`tile placeholder ${className}`} aria-label={alt}>
        <span>{src.split('/').pop()}</span>
      </div>
    )
  }
  return (
    <img
      className={`tile ${className}`}
      src={src}
      alt={alt}
      style={pos ? { objectPosition: pos } : undefined}
      loading="lazy"
      decoding="async"
      onError={() => setMissing(true)}
      onClick={onOpen}
    />
  )
}

function Marquee({ thin = false }) {
  const words = Array.from({ length: 10 }, (_, i) => <span key={i}>{marqueeWord}</span>)
  return (
    <div className={thin ? 'thin-marquee' : 'marquee'} aria-hidden="true">
      <div className="marquee-track">
        {words}
        {words}
      </div>
    </div>
  )
}

function Header({ active }) {
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <strong>{site.brand}</strong>
        <span>by {site.designer}</span>
      </a>
      <nav>
        {NAV.map(([href, label]) => (
          <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  const [missing, setMissing] = useState(false)
  return (
    <section id="home" className="hero section-dark">
      {!missing && (
        <img
          className="hero-image"
          src={site.heroImage}
          alt=""
          fetchPriority="high"
          onError={() => setMissing(true)}
        />
      )}
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">{site.location}</p>
        <h1>{site.brand}</h1>
        <p className="hero-subtitle">{site.disciplines}</p>
        <p className="hero-line">{site.tagline}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#work">View Work</a>
          <a className="button button-outline" href="#contact">Work With Me</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about section-light">
      <div className="about-inner reveal">
        <p className="mini-label">{about.label}</p>
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <blockquote className="about-quote">“{about.quote}”</blockquote>
      </div>
    </section>
  )
}

function Chapter({ chapter, onOpen }) {
  return (
    <article className="category" id={chapter.id}>
      <div className="category-copy">
        <h3>{chapter.title}</h3>
        <p className="category-meta">
          {chapter.meta.map(([k, v]) => (
            <span key={k}>
              {k}: {v}
              <br />
            </span>
          ))}
        </p>
        <p>{chapter.text}</p>
      </div>
      <div className={`category-gallery ${chapter.layout}-grid`}>
        {chapter.images.map((img, i) => (
          <Photo key={img.src} {...img} onOpen={() => onOpen(chapter.images, i)} />
        ))}
      </div>
    </article>
  )
}

function Work({ onOpen }) {
  return (
    <section id="work" className="work-section section-light">
      <div className="section-intro">
        <p className="mini-label">Selected Work</p>
        <h2>Work</h2>
      </div>
      {chapters.map((chapter, i) => (
        <div key={chapter.id}>
          <Chapter chapter={chapter} onOpen={onOpen} />
          {i < chapters.length - 1 && <Marquee thin />}
        </div>
      ))}
    </section>
  )
}

// The "ɛ" comes from a fallback font with a taller x-height, so it gets its own span to scale it down.
function withOpenE(text) {
  return text.split('ɛ').flatMap((part, i) => (i === 0 ? [part] : [<span key={i} className="open-e">ɛ</span>, part]))
}

function Amamere({ onOpen }) {
  const images = amamere.items.map((item) => ({ src: item.src, alt: item.title, caption: item.title }))
  return (
    <section id="amamere" className="amamere section-dark">
      <div className="amamere-intro">
        <p className="mini-label">{amamere.label}</p>
        <h2 aria-label={amamere.title}>{withOpenE(amamere.title)}</h2>
        <p className="amamere-lede">{amamere.intro}</p>
      </div>
      <div className="amamere-grid">
        {amamere.items.map((item, i) => (
          <article key={item.src} className="amamere-card reveal">
            <Photo src={item.src} alt={item.title} pos={item.pos} onOpen={() => onOpen(images, i)} />
            <div className="amamere-caption">
              <p className="amamere-meta">
                <span>No. {String(i + 1).padStart(2, '0')}</span>
                <span>{item.era}</span>
              </p>
              <h3>{item.title}</h3>
              <p>{item.story}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="services section-light">
      <div className="section-intro">
        <p className="mini-label">Services</p>
        <h2>What I Do</h2>
      </div>
      <div className="services-grid">
        {services.map(([title, text]) => (
          <div key={title} className="reveal">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact section-dark">
      <div className="contact-inner">
        <p className="mini-label">Contact</p>
        <h2>{contact.heading}</h2>
        <p>{contact.text}</p>
        <div className="contact-links">
          {contact.links.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Lightbox({ state, onClose, onStep }) {
  useEffect(() => {
    if (!state) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state, onClose, onStep])

  if (!state) return null
  const img = state.images[state.index]
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <img src={img.src} alt={img.alt} onClick={(e) => e.stopPropagation()} />
      {img.caption && <p className="lightbox-caption">{img.caption}</p>}
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onStep(-1) }} aria-label="Previous">←</button>
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onStep(1) }} aria-label="Next">→</button>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">Close</button>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [lightbox, setLightbox] = useState(null)

  // Highlight the nav link for whichever section is mid-viewport.
  useEffect(() => {
    const sections = NAV.map(([href]) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Fade elements in as they scroll into view.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .category')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const open = (images, index) => setLightbox({ images, index })
  const step = (dir) =>
    setLightbox((lb) => lb && { ...lb, index: (lb.index + dir + lb.images.length) % lb.images.length })

  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Work onOpen={open} />
        <Amamere onOpen={open} />
        <Services />
        <Contact />
      </main>
      <footer>
        <span>© {YEAR} {site.brand}</span>
        <a href={`https://www.instagram.com/${site.handle}`} target="_blank" rel="noreferrer">
          @{site.handle}
        </a>
      </footer>
      <Lightbox state={lightbox} onClose={() => setLightbox(null)} onStep={step} />
    </>
  )
}
