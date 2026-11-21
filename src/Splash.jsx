import { useCallback, useEffect, useRef, useState } from 'react'
import { markSplashSeen } from './splashSession.js'
import './Splash.css'

const LOGO = '/images/tmn-logo.webp'
// Stacked copies behind the face give the flat logo a chrome edge when it turns side-on.
const DEPTH = 12
const HOLD_MS = 3700 // intro + spin + lock, before the curtain lifts
const EXIT_MS = 1000

const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function Splash({ onReveal, onDone }) {
  const [ready, setReady] = useState(false)
  const [exiting, setExiting] = useState(false)
  // A ref keeps `exit` stable, so re-renders never restart the hold timer.
  const exitingRef = useRef(false)

  const exit = useCallback(() => {
    if (exitingRef.current) return
    exitingRef.current = true
    setExiting(true)
    onReveal()
    markSplashSeen()
  }, [onReveal])

  // Unmount once the curtain has lifted.
  useEffect(() => {
    if (!exiting) return
    const t = setTimeout(onDone, EXIT_MS)
    return () => clearTimeout(t)
  }, [exiting, onDone])

  // Start only once the logo is decoded, so the spin never plays on an empty frame.
  useEffect(() => {
    const img = new Image()
    img.src = LOGO
    let started = false
    const start = () => {
      if (started) return
      started = true
      setReady(true)
    }
    img.decode().then(start, start)
    const fallback = setTimeout(start, 2500)
    return () => clearTimeout(fallback)
  }, [])

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(exit, reduceMotion() ? 1100 : HOLD_MS)
    return () => clearTimeout(t)
  }, [ready, exit])

  useEffect(() => {
    const onKey = (e) => (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') && exit()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [exit])

  return (
    <div
      className={`splash${ready ? ' is-ready' : ''}${exiting ? ' is-exit' : ''}`}
      onClick={exit}
      aria-label="TrapMuNsem"
      role="img"
    >
      <div className="splash-grain" />
      <div className="splash-flare" />
      <div className="splash-burst" />
      <div className="splash-stage">
        <div className="splash-exit">
          <div className="splash-hit">
            <div className="splash-logo">
              {Array.from({ length: DEPTH }, (_, i) => (
                <img
                  key={i}
                  className={`splash-layer${i === DEPTH - 1 ? ' is-back' : ''}`}
                  src={LOGO}
                  alt=""
                  style={{ '--i': i + 1 }}
                />
              ))}
              <img className="splash-face" src={LOGO} alt="" />
              <img className="splash-rgb is-red" src={LOGO} alt="" />
              <img className="splash-rgb is-cyan" src={LOGO} alt="" />
              <span className="splash-shine" style={{ '--logo': `url(${LOGO})` }} />
            </div>
          </div>
        </div>
      </div>
      <div className="splash-bar">
        <span />
      </div>
      <p className="splash-skip">Tap to enter</p>
    </div>
  )
}
