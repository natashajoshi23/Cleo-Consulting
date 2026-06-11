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
  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email) newErrors.email = 'Email is required'
    if (!form.position) newErrors.position = 'Please select a position'
    if (!fileName) newErrors.resume = 'Resume is required'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    await fetch('https://formspree.io/f/xojzlzol', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
  }

  const inputStyle = { padding: '0.85rem 1rem', background: 'transparent', border: '1px solid var(--ghost)', color: 'var(--paper)', fontSize: '0.9rem', outline: 'none', transition: 'border 0.2s', width: '100%' }
  const errorStyle = { color: '#e74c3c', fontSize: '0.7rem', marginTop: '0.25rem' }

  return (
    <>
      <PageBanner eyebrow="Careers" title="APPLY<br>NOW" num="09" bgImage="/images/handshake.webp" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem 5rem' }}>

        {/* Intro bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3 }}>Join the Cleo <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Network</span></h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '600px', marginTop: '0.75rem' }}>Whether you are seeking a permanent role, contract opportunity, or project-based engagement, Cleo Consulting connects top-tier talent with industry-leading organizations across the USA, Canada, and India.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexShrink: 0 }} role="list" aria-label="Contact information">
            {[
              { label: 'Email', value: 'careers@cleoconsult.com' },
              { label: 'Response', value: 'Within 48 Hours' },
              { label: 'Locations', value: '6 Global Offices' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }} role="listitem">
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--paper)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Get Started</div>
          <h3 id="apply-form-heading" style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2.5rem' }}>SUBMIT YOUR APPLICATION</h3>

          {submitted ? (
            <div style={{ padding: '3rem', border: '1px solid var(--gold)', textAlign: 'center' }} role="alert">
              <div style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1rem' }}>APPLICATION RECEIVED</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>Thank you for your interest in joining the Cleo Consulting network. Our recruitment team will review your profile and reach out if there is a match.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-labelledby="apply-form-heading">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-name" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input id="apply-name" type="text" required aria-required="true" value={form.name}
                    onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: ''}) }}
                    style={{ ...inputStyle, borderColor: errors.name ? '#e74c3c' : undefined }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#e74c3c' : 'var(--ghost)'}
                  />
                  {errors.name && <span role="alert" style={errorStyle}>{errors.name}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-email" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Email Address <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <input id="apply-email" type="email" required aria-required="true" value={form.email}
                    onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ''}) }}
                    style={{ ...inputStyle, borderColor: errors.email ? '#e74c3c' : undefined }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#e74c3c' : 'var(--ghost)'}
                  />
                  {errors.email && <span role="alert" style={errorStyle}>{errors.email}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-phone" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Phone Number</label>
                  <input id="apply-phone" type="tel" value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-position" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Position of Interest <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <select id="apply-position" required aria-required="true" value={form.position}
                    onChange={e => { setForm({...form, position: e.target.value}); setErrors({...errors, position: ''}) }}
                    style={{ ...inputStyle, cursor: 'pointer', borderColor: errors.position ? '#e74c3c' : undefined }}
                  >
                    <option value="" style={{ background: 'var(--ink)' }}>Select a position</option>
                    {categories.map(cat => (
                      <optgroup key={cat.area} label={cat.area}>
                        {cat.roles.map(r => <option key={r} value={r} style={{ background: 'var(--ink)' }}>{r}</option>)}
                      </optgroup>
                    ))}
                  </select>
                  {errors.position && <span role="alert" style={errorStyle}>{errors.position}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-experience" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Years of Experience</label>
                  <select id="apply-experience" value={form.experience}
                    onChange={e => setForm({...form, experience: e.target.value})}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" style={{ background: 'var(--ink)' }}>Select</option>
                    <option value="0-2" style={{ background: 'var(--ink)' }}>0 - 2 years</option>
                    <option value="3-5" style={{ background: 'var(--ink)' }}>3 - 5 years</option>
                    <option value="5-10" style={{ background: 'var(--ink)' }}>5 - 10 years</option>
                    <option value="10+" style={{ background: 'var(--ink)' }}>10+ years</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-resume" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Upload Resume <span aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                  <label htmlFor="apply-resume" style={{ ...inputStyle, border: errors.resume ? '1px dashed #e74c3c' : '1px dashed var(--ghost)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                    onMouseOut={e => e.currentTarget.style.borderColor = errors.resume ? '#e74c3c' : 'var(--ghost)'}
                  >
                    <span style={{ color: 'var(--gold)' }}>{'\u2191'}</span> {fileName || 'Choose file (PDF, DOC)'}
                    <input id="apply-resume" type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={e => { setFileName(e.target.files[0]?.name || ''); setErrors({...errors, resume: ''}) }} />
                  </label>
                  {errors.resume && <span role="alert" style={errorStyle}>{errors.resume}</span>}
                </div>
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="apply-message" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--fog)' }}>Additional Information</label>
                  <textarea id="apply-message" rows={3} value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your background, availability, and what you're looking for..."
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--ghost)'}
                  />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn-fill" style={{ fontSize: '0.85rem', padding: '1rem 4rem', cursor: 'pointer', border: 'none' }}>SUBMIT APPLICATION</button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Job Categories */}
        <div>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Areas of Specialization</div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>OPEN CATEGORIES</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--ghost)' }} role="list">
            {categories.map((cat, i) => (
              <div key={cat.area} style={{ background: 'var(--ink)' }} role="listitem">
                <button
                  onClick={() => setSelected(selected === i ? null : i)}
                  aria-expanded={selected === i}
                  aria-controls={`cat-${i}`}
                  aria-label={`Toggle ${cat.area} - ${cat.roles.length} roles`}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(200,153,31,0.04)'}
                  onMouseOut={e => e.currentTarget.style.background = 'none'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', color: 'var(--gold)', opacity: 0.5, width: '1.5rem' }} aria-hidden="true">{'0' + (i + 1)}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--paper)' }}>{cat.area}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--fog)', opacity: 0.6 }}>{cat.roles.length} roles</span>
                  </div>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', transform: selected === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }} aria-hidden="true">+</span>
                </button>
                {selected === i && (
                  <div id={`cat-${i}`} style={{ padding: '0.75rem 1.5rem 2rem 4rem' }} role="region" aria-label={`${cat.area} roles`}>
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

      </div>
    </>
  )
}