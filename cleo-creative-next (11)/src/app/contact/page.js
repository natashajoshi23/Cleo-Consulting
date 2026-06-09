'use client'
import { useState } from 'react'
import PageBanner from '@/components/PageBanner'
const offices = [
  { country: 'USA', city: 'New York', lines: '1879 Whitehaven Road, Suite C\nGrand Island, NY 14072', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'USA', city: 'Texas', lines: '5900 Balcones Drive Ste 100\nAustin, TX 78731', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'USA', city: 'Virginia', lines: '1806 Summit Ave, Suite 300 #112\nRichmond, VA 23230', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'USA', city: 'New Jersey', lines: '971 US Highway 202N, Ste R\nBranchburg, NJ 08876', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com' },
  { country: 'Canada', city: 'Ontario', lines: '40 Wynford Drive, Suite 304B\nToronto, ON M3C 1J5', phone: '+1 866-390-6604', email: 'canada@cleoconsult.com' },
  { country: 'India', city: 'Karnataka', lines: '#21178, Tower-21, Prestige Shantiniketan\nWhitefield Main Road, Bangalore 560048', phone: '+91 80 4333-3655', email: 'india@cleoconsult.com' },
]
export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageBanner eyebrow="Reach Out" title="LET'S<br>TALK" num="07" bgImage="/images/office-sunset.webp" />
      <div className="pg-body">
        <h2 style={{ fontFamily: 'var(--display)', fontSize: '2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>OUR OFFICES</h2>
        <div className="offices-grid">
          {offices.map(({ country, city, lines, phone, email }) => (
            <div className="office" key={city}>
              <div className="office-country">{country}</div>
              <div className="office-city">{city}</div>
              <p>{lines.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
                <a href={`tel:${phone}`}>{phone}</a><br />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          ))}
        </div>
        <div className="contact-form-sec">
          <div className="cf-title">SEND A MESSAGE</div>
          <div className="cf-sub">Fill out the form and we&rsquo;ll get back to you promptly.</div>
          {sent ? (
            <div style={{ background: 'rgba(200,153,31,0.1)', border: '1px solid var(--gold)', padding: '1.5rem', color: 'var(--paper)', fontWeight: 600 }}>✓ Thank you! We will be in touch shortly.</div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <div className="cf-row">
                <div className="fg"><label>First Name</label><input type="text" placeholder="Your first name" /></div>
                <div className="fg"><label>Last Name</label><input type="text" placeholder="Your last name" /></div>
              </div>
              <div className="cf-row">
                <div className="fg"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                <div className="fg"><label>Phone</label><input type="tel" placeholder="+1 (000) 000-0000" /></div>
              </div>
              <div className="fg">
                <label>Service of Interest</label>
                <select><option value="">Select a service...</option><option>IT Consulting / Projects</option><option>IT Recruitment / Staff Augmentation</option><option>Managed Services</option><option>Health Services / Nursing Staffing</option><option>Cloud Services</option><option>Cyber Security</option><option>Other</option></select>
              </div>
              <div className="fg"><label>Message</label><textarea placeholder="Tell us about your project or requirements..." /></div>
              <button type="submit" className="btn-fill">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
