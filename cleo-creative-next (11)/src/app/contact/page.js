'use client'
import { useState } from 'react'
import PageBanner from '@/components/PageBanner'
const offices = [
  { country: 'USA - Headquarters', city: 'New York', lines: '1879 Whitehaven Road, Suite C\nGrand Island, NY 14072', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'Canada - Headquarters', city: 'Ontario', lines: '3390 South Service Rd, Suite 301 #24\nBurlington, ON L7N 3J5', phone: '+1 866-390-6604', email: 'canada@cleoconsult.com' },
  { country: 'USA', city: 'Texas', lines: '5900 Balcones Drive Ste 100\nAustin, TX 78731', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'USA', city: 'Virginia', lines: '1806 Summit Ave, Suite 300 #112\nRichmond, VA 23230', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'USA', city: 'New Jersey', lines: '971 US Highway 202N, Suite R\nBranchburg, NJ 08876', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'India', city: 'Karnataka', lines: '#21178, Tower-21, Prestige Shantiniketan\nWhitefield Main Road, Bangalore 560048', phone: '+91 80 4333-3655', email: 'india@cleoconsult.com' },
]
export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageBanner eyebrow="Reach Out" title="LET'S<br>TALK" num="08" bgImage="/images/conference-room.webp" />
      <div className="pg-body">
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.1rem' }}>OUR OFFICES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ height: '380px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
              <img src="/images/office-ny.webp" alt="Cleo Consulting New York headquarters office building" className="img-cover" style={{ objectPosition: 'center center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>USA Headquarters</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>New York, USA</div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', color: 'var(--paper)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
              <div>1879 Whitehaven Road, Suite C</div>
              <div>Grand Island, NY 14072</div>
              <a href="tel:+18663906604" style={{ color: 'var(--paper)' }} aria-label="Call New York office at +1 866-390-6604">+1 866-390-6604</a><br />
              <a href="mailto:usa@cleoconsult.com" style={{ color: 'var(--gold)' }} aria-label="Email New York office at usa@cleoconsult.com">usa@cleoconsult.com</a>
            </div>
          </div>
          <div>
            <div style={{ height: '380px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
              <img src="/images/office-ontario.webp" alt="Cleo Consulting Ontario headquarters office building" className="img-cover" style={{ objectPosition: '20% center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>Canada Headquarters</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Ontario, Canada</div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', color: 'var(--paper)', fontSize: '0.9rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
              <div>3390 South Service Rd, Suite 301 #24</div>
              <div>Burlington, ON L7N 3J5</div>
              <a href="tel:+18663906604" style={{ color: 'var(--paper)' }} aria-label="Call Ontario office at +1 866-390-6604">+1 866-390-6604</a><br />
              <a href="mailto:canada@cleoconsult.com" style={{ color: 'var(--gold)' }} aria-label="Email Ontario office at canada@cleoconsult.com">canada@cleoconsult.com</a>
            </div>
          </div>
        </div>
        <div className="offices-grid" style={{ marginTop: '1rem' }} role="list" aria-label="Office locations">
          {offices.slice(2).map(({ country, city, lines, phone, email }) => (
            <div className="office" key={city} role="listitem">
              <div className="office-country">{country}</div>
              <div className="office-city">{city}</div>
              <p>{lines.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
                <a href={`tel:${phone}`} aria-label={`Call ${city} office at ${phone}`}>{phone}</a><br />
                <a href={`mailto:${email}`} aria-label={`Email ${city} office at ${email}`}>{email}</a>
              </p>
            </div>
          ))}
        </div>
        <div className="contact-form-sec">
          <div className="cf-title" id="contact-form-heading">SEND A MESSAGE</div>
          <div className="cf-sub">Fill out the form and we&rsquo;ll get back to you promptly.</div>
          {sent ? (
            <div style={{ background: 'rgba(200,153,31,0.1)', border: '1px solid var(--gold)', padding: '1.5rem', color: 'var(--paper)', fontWeight: 600 }} role="alert">Thank you! We will be in touch shortly.</div>
          ) : (
            <form onSubmit={async e => { e.preventDefault(); try { const data = new FormData(e.target); await fetch('https://formspree.io/f/xeewlwqw', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } }); setSent(true) } catch (err) { setSent(true) } }} aria-labelledby="contact-form-heading">
              <div className="cf-row">
                <div className="fg"><label htmlFor="contact-fname">First Name *</label><input id="contact-fname" name="firstName" type="text" placeholder="Your first name" aria-required="true" required /></div>
                <div className="fg"><label htmlFor="contact-lname">Last Name</label><input id="contact-lname" name="lastName" type="text" placeholder="Your last name" /></div>
              </div>
              <div className="cf-row">
                <div className="fg"><label htmlFor="contact-email">Email *</label><input id="contact-email" name="email" type="email" placeholder="you@example.com" aria-required="true" required /></div>
                <div className="fg"><label htmlFor="contact-phone">Phone</label><input id="contact-phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" /></div>
              </div>
              <div className="fg">
                <label htmlFor="contact-service">Service of Interest</label>
                <select id="contact-service" name="service"><option value="">Select a service...</option><option>IT Consulting / Projects</option><option>IT Recruitment / Staff Augmentation</option><option>Managed Services</option><option>Health Services / Nursing Staffing</option><option>Cloud Services</option><option>Cyber Security</option><option>Other</option></select>
              </div>
              <div className="fg"><label htmlFor="contact-message">Message *</label><textarea id="contact-message" name="message" placeholder="Tell us about your project or requirements..." required /></div>
              <button type="submit" className="btn-fill">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}