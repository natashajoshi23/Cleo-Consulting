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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = {
    color: 'var(--fog)',
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    position: 'relative',
    paddingBottom: '2px',
  }

  const isAboutActive = pathname.includes('/team') || pathname.includes('/social')

  return (
    <nav id="nav" role="banner" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">
        <Image
          src={isDark ? '/images/logo-dark.webp' : '/images/logo-light.webp'}
          alt="Cleo Consulting"
          width={200} height={64}
          style={{ height: isDark ? '145px' : '180px', width: 'auto', objectFit: 'contain', marginLeft: isDark ? '-25px' : '-15px', marginTop: isDark ? '0px' : '-10px' }}
          priority
        />
      </Link>

      <ul className="nav-links">
        <li><Link href="/" style={{ ...linkStyle, color: pathname === '/' ? 'var(--gold)' : linkStyle.color, borderBottom: pathname === '/' ? '2px solid var(--gold)' : '2px solid transparent', fontWeight: pathname === '/' ? 700 : 500 }}>Home</Link></li>
        <li
          style={{ position: 'relative' }}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <span style={{ ...linkStyle, cursor: 'pointer', color: isAboutActive ? 'var(--gold)' : 'var(--fog)', borderBottom: isAboutActive ? '2px solid var(--gold)' : '2px solid transparent', fontWeight: isAboutActive ? 700 : 500 }}>
            About ▾
          </span>
          {aboutOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--ink2)', border: '1px solid var(--ghost)', minWidth: '190px', padding: '0.4rem 0', zIndex: 300 }}>
              <Link href="/team" style={{ display: 'block', padding: '0.65rem 1.2rem', color: pathname === '/team' ? 'var(--gold)' : 'var(--fog)', fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: pathname === '/team' ? 700 : 400 }}>Our Team</Link>
              <Link href="/social-responsibility" style={{ display: 'block', padding: '0.65rem 1.2rem', color: pathname === '/social-responsibility' ? 'var(--gold)' : 'var(--fog)', fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: pathname === '/social-responsibility' ? 700 : 400 }}>Social Responsibility</Link>
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
            <Link href={href} style={{ ...linkStyle, color: pathname === href || pathname.startsWith(href + '/') ? 'var(--gold)' : 'var(--fog)', borderBottom: pathname === href || pathname.startsWith(href + '/') ? '2px solid var(--gold)' : '2px solid transparent', fontWeight: pathname === href || pathname.startsWith(href + '/') ? 700 : 500 }}>{label}</Link>
          </li>
        ))}
        <li>
          <div style={{ display: 'flex', overflow: 'hidden', borderRadius: '2px' }}>
            <Link href="/contact" style={{ padding: '0.6rem 2rem', background: pathname === '/contact' ? 'var(--paper)' : 'transparent', border: '1px solid var(--fog)', borderRight: 'none', fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: pathname === '/contact' ? 'var(--ink)' : 'var(--paper)', textDecoration: 'none', fontWeight: 550, transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseOut={e => { if (pathname !== '/contact') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--paper)' } }}
            >Contact</Link>
            <Link href="/apply" style={{ padding: '0.6rem 2rem', background: pathname === '/apply' ? 'var(--paper)' : 'var(--gold)', border: '1px solid ' + (pathname === '/apply' ? 'var(--paper)' : 'var(--gold)'), fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: pathname === '/apply' ? 'var(--ink)' : 'var(--ink)', textDecoration: 'none', fontWeight: 750, transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#111' }}
              onMouseOut={e => { if (pathname !== '/apply') { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--gold)' } else { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--paper)' } }}
            >Apply Now</Link>
          </div>
        </li>
        <li>
          <button
            onClick={() => setIsDark(!isDark)}
            title="Toggle light/dark mode"
            aria-label="Toggle dark and light mode"
            style={{
              background: 'none',
              border: '1px solid var(--ghost)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--gold)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = 'var(--gold)'; e.target.style.background = 'rgba(200,153,31,0.1)' }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'var(--ghost)'; e.target.style.background = 'none' }}
          >
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  )
}