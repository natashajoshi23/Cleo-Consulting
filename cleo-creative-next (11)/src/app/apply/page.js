'use client'
import { useState, useEffect } from 'react'
import PageBanner from '@/components/PageBanner'
import { client } from '@/sanity/client'

export default function ApplyPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState({})
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "job" && isOpen == true] | order(postedAt desc) {
      _id, jobId, title, department, location, type, description, isOpen, postedAt
    }`).then(data => setJobs(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email) newErrors.email = 'Email is required'
    if (!form.position) newErrors.position = 'Please select a position'
    if (!fileName) newErrors.resume = 'Resume is required'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setErrors({})
    await fetch('https://formspree.io/f/xojzlzol', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
  }

  const scrollToForm = (jobTitle, jobId) => {
    setForm(f => ({ ...f, position: `${jobTitle} (${jobId})` }))
    setSelectedJob(null)
    const formEl = document.getElementById('apply-form-section')
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
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
              { label: 'Locations', value: '3 Global Offices' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }} role="listitem">
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--paper)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Opportunities</div>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '2rem' }}>OPEN POSITIONS</h3>

          {jobs.length === 0 ? (
            <div style={{ padding: '3rem', border: '1px solid var(--ghost)', textAlign: 'center', color: 'var(--fog)' }}>
              No open positions at the moment. Check back soon.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {jobs.map(job => (
                <div key={job._id}
                  onClick={() => setSelectedJob(job)}
                  style={{ border: '1px solid var(--ghost)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--ghost)'}
                >
                  <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Posted {job.postedAt ? new Date(job.postedAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'} · <span style={{ color: 'var(--gold)' }}>{job.jobId}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, margin: 0 }}>
                    {job.title}
                  </h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {job.type && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--gold)', color: 'var(--gold)' }}>{job.type}</span>}
                    {job.department && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--ghost)', color: 'var(--fog)' }}>{job.department}</span>}
                  </div>
                  {job.location && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--fog)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--gold)' }}>◎</span> {job.location}
                    </div>
                  )}
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    View details →
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Application Form */}
        <div id="apply-form-section" style={{ marginBottom: '4rem', scrollMarginTop: '14rem' }}>
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
                    {jobs.map(job => (
                      <option key={job._id} value={`${job.title} (${job.jobId})`} style={{ background: 'var(--ink)' }}>
                        {job.title} {job.jobId ? `(${job.jobId})` : ''}
                      </option>
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

        {/* Job Modal */}
        {selectedJob && (
          <div
            onClick={() => setSelectedJob(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--ink)', border: '1px solid var(--ghost)', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '3rem', position: 'relative' }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--fog)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }}
              >×</button>
              <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Posted {selectedJob.postedAt ? new Date(selectedJob.postedAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                {selectedJob.title}
              </h2>
              <div style={{ fontSize: '0.65rem', color: 'var(--fog)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Job ID: <span style={{ color: 'var(--gold)' }}>{selectedJob.jobId}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {selectedJob.type && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--gold)', color: 'var(--gold)' }}>{selectedJob.type}</span>}
                {selectedJob.department && <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', border: '1px solid var(--ghost)', color: 'var(--fog)' }}>{selectedJob.department}</span>}
              </div>
              {selectedJob.location && (
                <div style={{ fontSize: '0.85rem', color: 'var(--fog)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--ghost)' }}>
                  <span style={{ color: 'var(--gold)' }}>◎</span> {selectedJob.location}
                </div>
              )}
              {selectedJob.description && (
                <div style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                  {selectedJob.description.map((block, i) => (
                    <p key={i} style={{ marginBottom: '1rem' }}>
                      {block.children?.map(child => child.text).join('')}
                    </p>
                  ))}
                </div>
              )}
              <button
                onClick={() => scrollToForm(selectedJob.title, selectedJob.jobId)}
                className="btn-fill"
                style={{ fontSize: '0.8rem', padding: '1rem 3rem', cursor: 'pointer', border: 'none' }}
              >
                APPLY FOR THIS ROLE
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}