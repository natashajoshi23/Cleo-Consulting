'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

export default function Navbar() {
  const pathname = usePathname()
  const { isDark, setIsDark } = useTheme()
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMobileAboutOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const gold = 'var(--gold)'
  const fog = 'var(--fog)'

  const linkStyle = (active) => ({
    color: active ? gold : fog,
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: active ? 700 : 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    position: 'relative',
    paddingBottom: '2px',
    borderBottom: active ? `2px solid ${gold}` : '2px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: '44px',
  })

  const isAboutActive = pathname.includes('/team') || pathname.includes('/social')

  // Mobile drawer colors — respond to theme
  const drawerBg = isDark ? '#001229' : '#FDFAF4'
  const drawerBorder = isDark ? '1px solid rgba(245,237,230,0.1)' : '1px solid rgba(0,18,41,0.1)'
  const drawerLinkColor = (active) => active ? gold : (isDark ? 'rgba(245,237,230,0.75)' : '#444')
  const drawerDivider = isDark ? '1px solid rgba(245,237,230,0.08)' : '1px solid rgba(0,18,41,0.08)'
  const drawerSubBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'
  const drawerSubDivider = isDark ? '1px solid rgba(245,237,230,0.05)' : '1px solid rgba(0,18,41,0.05)'

  const ThemeButton = () => (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark and light mode"
      style={{
        background: 'none',
        border: '1px solid rgba(245,237,230,0.15)',
        borderRadius: '50%',
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: gold,
        flexShrink: 0,
      }}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      )}
    </button>
  )

  return (
    <>
      <nav
        id="nav"
        role="banner"
        className={scrolled ? 'scrolled' : ''}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0 1.25rem' : '0.75rem 3rem',
          height: isMobile ? '100px' : '170px',
          transition: 'background 0.5s, backdrop-filter 0.5s',
          background: scrolled
            ? (isDark ? 'rgba(0,18,41,0.95)' : 'rgba(253,250,244,0.95)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled && !isDark ? '1px solid rgba(0,18,41,0.08)' : 'none',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src={isDark ? '/images/logo-dark.webp' : '/images/logo-light.webp'}
            alt="Cleo Consulting"
            width={200} height={64}
            style={{
              height: isMobile ? (isDark ? '110px' : '140px') : (isDark ? '145px' : '180px'),
              width: 'auto',
              objectFit: 'contain',
              marginLeft: isMobile ? (isDark ? '-20px' : '-13px') : (isDark ? '-25px' : '-15px'),
              marginTop: isMobile ? (isDark ? '15px' : '9px') : (isDark ? '0px' : '-10px'),
            }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/" style={linkStyle(pathname === '/')}>Home</Link></li>
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span style={{ ...linkStyle(isAboutActive), cursor: 'pointer' }}>About ▾</span>
              {aboutOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: isDark ? 'var(--ink2)' : 'rgba(253,250,244,0.98)',
                  border: isDark ? '1px solid rgba(245,237,230,0.1)' : '1px solid rgba(0,18,41,0.1)',
                  minWidth: '190px', padding: '0.4rem 0', zIndex: 300,
                  backdropFilter: 'blur(16px)',
                }}>
                  <Link href="/team" style={{ display: 'block', padding: '0.65rem 1.2rem', color: pathname === '/team' ? gold : fog, fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Our Team</Link>
                  <Link href="/social-responsibility" style={{ display: 'block', padding: '0.65rem 1.2rem', color: pathname === '/social-responsibility' ? gold : fog, fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Social Responsibility</Link>
                </div>
              )}
            </li>
            {[
              { href: '/managed-services', label: 'Services' },
              { href: '/health-services', label: 'Health' },
              { href: '/projects', label: 'Projects' },
              { href: '/blogs', label: 'Insights' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={linkStyle(pathname === href || pathname.startsWith(href + '/'))}>{label}</Link>
              </li>
            ))}
            <li>
              <div style={{ display: 'flex', overflow: 'hidden', borderRadius: '2px' }}>
                <Link href="/contact" style={{ padding: '0.6rem 2rem', background: pathname === '/contact' ? 'var(--paper)' : 'transparent', border: '1px solid var(--fog)', borderRight: 'none', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: pathname === '/contact' ? 'var(--ink)' : 'var(--paper)', textDecoration: 'none', fontWeight: 550, transition: 'all 0.3s' }}>Contact</Link>
                <Link href="/apply" style={{ padding: '0.6rem 2rem', background: 'var(--gold)', border: '1px solid var(--gold)', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', textDecoration: 'none', fontWeight: 750, transition: 'all 0.3s' }}>Apply Now</Link>
              </div>
            </li>
            <li><ThemeButton /></li>
          </ul>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeButton />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none',
                border: isDark ? '1px solid rgba(245,237,230,0.15)' : '1px solid rgba(0,18,41,0.2)',
                borderRadius: '4px',
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                color: isDark ? fog : '#444',
              }}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '130px', left: 0, right: 0, bottom: 0,
          background: drawerBg,
          zIndex: 9998,
          overflowY: 'auto',
          borderTop: drawerBorder,
          display: 'flex',
          flexDirection: 'column',
        }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/managed-services', label: 'Services' },
            { href: '/health-services', label: 'Health' },
            { href: '/projects', label: 'Projects' },
            { href: '/blogs', label: 'Insights' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              display: 'block',
              padding: '1.1rem 1.5rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: drawerLinkColor(pathname === href),
              borderBottom: drawerDivider,
            }}>{label}</Link>
          ))}

          {/* About dropdown */}
          <div style={{ borderBottom: drawerDivider }}>
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.5rem',
                fontSize: '0.85rem',
                fontWeight: isAboutActive ? 700 : 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: drawerLinkColor(isAboutActive),
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              About
              <span style={{
                transition: 'transform 0.2s',
                transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                fontSize: '0.7rem',
                opacity: 0.6,
              }}>▾</span>
            </button>
            {mobileAboutOpen && (
              <div style={{ background: drawerSubBg }}>
                <Link href="/team" style={{ display: 'block', padding: '0.85rem 2.5rem', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: drawerLinkColor(pathname === '/team'), borderTop: drawerSubDivider }}>Our Team</Link>
                <Link href="/social-responsibility" style={{ display: 'block', padding: '0.85rem 2.5rem', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: drawerLinkColor(pathname === '/social-responsibility'), borderTop: drawerSubDivider }}>Social Responsibility</Link>
              </div>
            )}
          </div>

          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
            <Link href="/contact" style={{
              display: 'block', padding: '1rem', textAlign: 'center',
              border: isDark ? '1px solid rgba(245,237,230,0.3)' : '1px solid rgba(0,18,41,0.25)',
              color: isDark ? fog : '#333',
              textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>Contact</Link>
            <Link href="/apply" style={{
              display: 'block', padding: '1rem', textAlign: 'center',
              background: gold, color: '#001229',
              textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
            }}>Apply Now</Link>
          </div>
        </div>
      )}
    </>
  )
}