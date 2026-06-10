'use client'
import { useState } from 'react'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'

const categories = [
  { area: 'Information Technology', roles: ['Program / Project Manager', 'Solutions Architect', '.NET / Java Developer', 'Business Analyst', 'Data Analyst', 'DBA / Data Warehousing', 'QA / Tester', 'UI / Web Developer', 'Cloud Computing', 'Network / System Administrator', 'Security Analyst'] },
  { area: 'Cyber Security', roles: ['Cyber Security Consultant', 'Palo Alto Certified Engineer', 'Security Operations Analyst', 'Penetration Tester', 'Compliance Analyst'] },
  { area: 'Cloud & Data', roles: ['Cloud Engineer (AWS / Azure / GCP)', 'Cloud Architect', 'Data Scientist', 'Data Engineer', 'Machine Learning Engineer'] },
  { area: 'Enterprise Platforms', roles: ['Salesforce Consultant', 'ServiceNow Consultant', 'AEM Developer', 'ERP Specialist (SAP / Oracle)'] },
  { area: 'Engineering & Design', roles: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Process Engineer', 'HVAC Specialist', 'Structural Engineer'] },
  { area: 'Finance & Accounting', roles: ['Accountant', 'Financial Analyst', 'Controller', 'Payroll Specialist', 'Tax Accountant', 'Internal Auditor', 'Accounts Payable / Receivable'] },
  { area: 'Healthcare (via Nersify)', roles: ['Registered Nurse (RN)', 'Licensed Practical Nurse (LPN)', 'Certified Nursing Assistant (CNA)', 'Nurse Practitioner'] },
]

export default function ApplyPage() {
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner eyebrow="Careers" title="APPLY<br>NOW" num="" bgImage="/images/handshake.webp" />
      <div className="pg-body" style={{ maxWidth: '1000px' }}>

        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, marginBottom: '1.25rem' }}>Join the Cleo <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Network</span></h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1rem' }}>We are always looking for talented professionals to join our network. Whether you are seeking a permanent role, contract opportunity, or project-based engagement, Cleo Consulting connects top-tier talent with industry-leading organizations across the USA, Canada, and India.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85 }}>Browse our areas of specialization below and submit your application. Our experienced recruiters will review your profile and reach out when we have an opportunity that matches your skills and career goals.</p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-8px', border: '1px solid var(--gold)', opacity: 0.3, transform: 'rotate(2deg)' }} />
            <div style={{ height: '280px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
              <img src="/images/conference-room.webp" alt="Careers" className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Areas of Specialization</div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>OPEN CATEGORIES</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--ghost)' }}>
            {categories.map((cat, i) => (
              <div key={cat.area} style={{ background: 'var(--ink)' }}>
                <button
                  onClick={() => setSelected(selected === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(200,153,31,0.04)'}
                  onMouseOut={e => e.currentTarget.style.background = 'none'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', color: 'var(--gold)', opacity: 0.5, width: '1.5rem' }}>{'0' + (i + 1)}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--paper)' }}>{cat.area}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--fog)', opacity: 0.6 }}>{cat.roles.length} roles</span>
                  </div>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', transform: selected === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                </button>
                {selected === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem 4rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {cat.roles.map(r => (
                        <span key={r} style={{
                          fontSize: '0.78rem', padding: '0.4rem 1rem', border: '1px solid var(--ghost)',
                          color: 'var(--fog)', borderRadius: '20px', lineHeight: 1,
                        }}>{r}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Get Started</div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>SUBMIT YOUR APPLICATION</h3>

          {submitted ? (
            <div style={{ padding: '3rem', border: '1px solid var(--gold)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1rem' }}>APPLICATION RECEIVED</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>Thank you for your interest in joining the Cleo Consulting network. Our recruitment team will review your profile and reach out if there is a match.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Full Name *</label>
                <input
                  type="text" required value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Email Address *</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Phone Number</label>
                <input
                  type="tel" value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Position of Interest *</label>
                <input
                  type="text" required value={form.position}
                  onChange={e => setForm({...form, position: e.target.value})}
                  placeholder="e.g. Cloud Engineer, Data Scientist"
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Years of Experience</label>
                <select
                  value={form.experience}
                  onChange={e => setForm({...form, experience: e.target.value})}
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', cursor: 'pointer' }}
                >
                  <option value="" style={{ background: 'var(--ink)' }}>Select</option>
                  <option value="0-2" style={{ background: 'var(--ink)' }}>0 - 2 years</option>
                  <option value="3-5" style={{ background: 'var(--ink)' }}>3 - 5 years</option>
                  <option value="5-10" style={{ background: 'var(--ink)' }}>5 - 10 years</option>
                  <option value="10+" style={{ background: 'var(--ink)' }}>10+ years</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Upload Resume</label>
                <label style={{
                  padding: '0.85rem 1rem', border: '1px dashed var(--ghost)', cursor: 'pointer',
                  fontSize: '0.85rem', color: 'var(--fog)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'border 0.2s',
                }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--ghost)'}
                >
                  <span style={{ color: 'var(--gold)' }}>{'\u2191'}</span> Choose file (PDF, DOC)
                  <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} />
                </label>
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Additional Information</label>
                <textarea
                  rows={4} value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell us about your background, availability, and what you're looking for..."
                  style={{ padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <button
                  onClick={handleSubmit}
                  className="btn-fill"
                  style={{ fontSize: '0.8rem', padding: '1rem 3.5rem', cursor: 'pointer', border: 'none' }}
                >SUBMIT APPLICATION</button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'var(--ghost)', marginTop: '4rem' }}>
          {[
            { label: 'Email Us', value: 'careers@cleoconsult.com', sub: 'For general inquiries' },
            { label: 'Locations', value: 'USA, Canada & India', sub: '6 global offices' },
            { label: 'Response Time', value: 'Within 48 Hours', sub: 'For qualified candidates' },
          ].map(item => (
            <div key={item.label} style={{ background: 'var(--ink)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.25rem' }}>{item.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fog)' }}>{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}