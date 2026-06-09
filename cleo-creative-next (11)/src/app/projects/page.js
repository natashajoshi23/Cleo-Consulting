import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
export const metadata = { title: 'Projects — Cleo Consulting' }
const projects = [
  { title: 'Cisco Network Solutions', desc: 'Comprehensive Cisco network solutions for secure, scalable infrastructures.', img: '/images/server-rack.webp' },
  { title: 'Cloud Integration Services', desc: 'Connect cloud-based applications to drive productivity and growth.', img: '/images/digital-globe.webp' },
  { title: 'Cyber Security Services', desc: 'Safeguarding digital assets with expert security consultation.', img: '/images/code-blue.webp' },
  { title: 'Data Science Solutions', desc: 'Leverage the potential of your data for informed decisions.', img: '/images/circuit-brain.webp' },
  { title: 'IT Networking Solutions', desc: 'Robust network infrastructure for modern businesses.', img: '/images/circuit-board.webp' },
  { title: 'Palo Alto Network Solutions', desc: 'Next-generation firewall and threat prevention.', img: '/images/code-python.webp' },
  { title: 'Salesforce Services', desc: 'Maximize your CRM investment and drive growth.', img: '/images/laptop-teamwork.webp' },
  { title: 'ServiceNow Service', desc: 'Optimize workflows and streamline IT service management.', img: '/images/desk-bw.webp' },
  { title: 'Software Development', desc: 'Build robust and scalable software solutions.', img: '/images/code-php.webp' },
  { title: 'AEM Development', desc: 'Superior digital experiences and content management.', img: '/images/ai-cube.webp' },
]
const highlights = [
  { title: 'Cisco Network Infrastructure', text: 'Enterprise-grade networking for Fortune 500 clients.', img: '/images/server-rack.webp' },
  { title: 'Azure Cloud Migration', text: 'Seamless migration of legacy systems to Azure cloud.', img: '/images/digital-globe.webp' },
  { title: 'Palo Alto Security Deployment', text: 'Next-gen firewall deployment protecting 10,000+ endpoints.', img: '/images/circuit-board.webp' },
  { title: 'Healthcare Staffing Program', text: '200+ nurses placed across 50 care facilities.', img: '/images/doctor-bp.webp' },
  { title: 'Salesforce CRM Implementation', text: 'Full CRM rollout for a mid-market tech company.', img: '/images/finance-tablet.webp' },
  { title: 'AI & Data Solutions', text: 'Cutting-edge AI driving business intelligence.', img: '/images/ai-cube.webp' },
]
export default function Projects() {
  return (
    <>
      <PageBanner eyebrow="Onshore or Offshore" title="OUR<br>PROJECTS" num="06" bgImage="/images/server-rack.webp" />
      <div className="pg-body">
        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '720px', marginBottom: '1rem' }}>Strategic partnerships delivering consulting projects with both onshore and offshore delivery models.</p>
        <div className="ap-grid">
          {projects.map(({ title, desc, img }) => (
            <div className="ap-item" key={title}><div className="ap-img"><img src={img} alt={title} className="img-cover" /></div><div><div className="ap-title">{title}</div><p className="ap-desc">{desc}</p></div></div>
          ))}
        </div>
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div style={{ padding: '5rem 0', background: 'var(--ink2)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 3rem' }}>
          <div className="sec-label" style={{ marginBottom: '1rem' }}>What We Deliver</div>
          <h2 className="big-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '2rem' }}>PROJECT<br /><span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold)' }}>Highlights</span></h2>
        </div>
        <div className="h-scroll-strip">
          {highlights.map(({ title, text, img }) => (
            <div className="h-scroll-card" key={title}>
              <div className="img-zoom"><img src={img} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} /></div>
              <div className="h-scroll-card-body"><div className="h-scroll-card-title">{title}</div><p className="h-scroll-card-text">{text}</p></div>
            </div>
          ))}
        </div>
      </div>

      <CTABand label="Start a project" title="LET'S<br><em>Build</em>" btnText="Start Conversation" btnHref="/contact" />
    </>
  )
}