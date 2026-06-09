import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
export const metadata = { title: 'Health Services — Cleo Consulting' }
export default function HealthServices() {
  return (
    <>
      <PageBanner eyebrow="Healthcare Staffing" title="CLEO HEALTH<br>SERVICES" num="05" bgImage="/images/doctor-female.webp" />
      <div className="pg-body">
        <div className="health-pg-grid">
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--paper)', lineHeight: 1.4, marginBottom: '1.25rem' }}>&ldquo;Specializing in Direct Placement of nursing professionals across North America.&rdquo;</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem' }}>We partner with you to build healthcare staffing solutions that address your unique workforce needs.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '130px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/doctor-bp.webp" alt="Doctor" className="img-cover" /></div>
              <div style={{ height: '130px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/nurse-scrubs.webp" alt="Nurse" className="img-cover" /></div>
              <div style={{ height: '130px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/lab-microscope.webp" alt="Lab" className="img-cover" /></div>
              <div style={{ height: '130px', overflow: 'hidden', borderRadius: '2px' }}><img src="/images/doctor-writing.webp" alt="Doctor" className="img-cover" /></div>
            </div>
            <div className="health-pill-wrap">
              {['Registered Nurse (RN)','Licensed Practical Nurse (LPN)','Certified Nursing Assistant (CNA)'].map(p => <span className="pill" key={p}>{p}</span>)}
            </div>
            <div className="nersify-strip" style={{ marginTop: '2rem' }}><h4>Partnership with Nersify</h4><p>A global HealthTech platform connecting qualified nurses with top-notch employers worldwide. 300+ hospital and care home partners.</p></div>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>WHY PARTNER WITH CLEO</h3>
            <div className="why-grid">
              {[{t:'Specialized',p:'Direct Placement of Nursing Staff only.'},{t:'Experienced',p:'Proven history partnering with leading healthcare organizations.'},{t:'Qualified Staff',p:'Focused on sourcing, screening and placing skilled nursing professionals.'},{t:'Our Specialties',p:'Hospitals, Retirement Living, Long-Term Care, Complex Care, Assisted Living, Memory Care.'}].map(({t,p})=>(
                <div className="why-item" key={t}><div className="why-t">{t}</div><p className="why-p">{p}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTABand label="Healthcare solutions" title="STAFF<br><em>Smarter</em>" btnText="Contact Us" btnHref="/contact" />
    </>
  )
}
