'use client'
import { useState, useEffect } from 'react'

export default function CertificationPopup() {
  const [show, setShow] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

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
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'inline-block', animation: 'popUp 0.3s ease' }}>
            <button onClick={close} style={{
              position: 'absolute', top: '10px', right: '10px', zIndex: 10,
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }} onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}>{'\u00D7'}</button>
            <a href="https://www.greatplacetowork.com/certified-company/7090232" target="_blank" rel="noopener noreferrer">
              <img src="/images/gptw-badge.webp" alt="Great Place to Work Certified 2025" style={{
                height: '450px', width: 'auto', display: 'block',
                filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.4))',
              }} />
            </a>
          </div>
          <a href="https://www.greatplacetowork.com/certified-company/7090232" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{
            marginTop: '1.5rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
            fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>Learn More →</a>
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
            height: '160px', width: 'auto', display: 'block',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          }} />
        </a>
      )}
    </>
  )
}