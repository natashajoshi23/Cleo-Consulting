'use client'
import { useState, useEffect } from 'react'

const slides = [
  { img: '/images/gptw-badge.webp', alt: 'Great Place to Work Certified 2025' },
  { img: '/images/gptw-2.webp', alt: 'Great Place to Work Certification Details' },
  { img: '/images/gptw-3.webp', alt: 'Great Place to Work Team Recognition' },
]

export default function CertificationPopup() {
  const [show, setShow] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const seen = sessionStorage.getItem('gptw-seen')
    if (seen) {
      setShowBadge(true)
    } else {
      const timer = setTimeout(() => setShow(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    setShow(false)
    setShowBadge(true)
    sessionStorage.setItem('gptw-seen', '1')
  }

  const next = () => setCurrent(c => (c + 1) % slides.length)

  const arrowStyle = {
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff', fontSize: '1.5rem', cursor: 'pointer',
    width: '48px', height: '48px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s', flexShrink: 0,
  }

  return (
    <>
      {/* Full popup */}
      {show && (
        <div onClick={close} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn 0.3s ease',
        }}>
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', animation: 'popUp 0.3s ease' }}>

            {/* Back arrow - only on last slide */}
            {current === slides.length - 1 ? (
              <button onClick={() => setCurrent(0)} aria-label="Back to first slide" style={arrowStyle}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >{'\u2039'}</button>
            ) : (
              <div style={{ width: '48px', flexShrink: 0 }} />
            )}

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <button onClick={close} style={{
                position: 'absolute', top: '10px', right: '10px', zIndex: 10,
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }} onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}>{'\u00D7'}</button>
              <a href="https://www.greatplacetowork.com/certified-company/7090232" target="_blank" rel="noopener noreferrer">
                <img src={slides[current].img} alt={slides[current].alt} style={{
                  height: '500px', width: 'auto', display: 'block',
                  filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.4))',
                }} />
              </a>
            </div>

            {/* Next arrow - only on slides 1 and 2 */}
            {current < slides.length - 1 ? (
              <button onClick={next} aria-label="Next slide" style={arrowStyle}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >{'\u203A'}</button>
            ) : (
              <div style={{ width: '48px', flexShrink: 0 }} />
            )}

          </div>

          {/* Dots + Learn More */}
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} style={{
                  width: i === current ? '24px' : '8px', height: '8px',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
                  transition: 'all 0.3s',
                }} />
              ))}
            </div>
            <a href="https://www.greatplacetowork.com/certified-company/7090232" target="_blank" rel="noopener noreferrer" style={{
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Learn More →</a>
          </div>
        </div>
      )}

      {/* Corner badge */}
      {showBadge && !show && (
        <a
          href="https://www.greatplacetowork.com/certified-company/7090232"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 900,
            transition: 'transform 0.3s, opacity 0.3s',
            animation: 'fadeIn 0.4s ease',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img src="/images/gptw.webp" alt="Great Place to Work Certified 2025" style={{
            height: '170px', width: 'auto', display: 'block',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          }} />
        </a>
      )}
    </>
  )
}