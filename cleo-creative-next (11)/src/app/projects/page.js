import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
export const metadata = { title: 'Projects — Cleo Consulting' }
const projects = [
  { title: 'Cisco Network Solutions', desc: 'Comprehensive Cisco network solutions for secure, scalable infrastructures.', img: '/images/server-rack.webp', slug: 'cisco-network' },
  { title: 'Cloud Integration Services', desc: 'Connect cloud-based applications to drive productivity and growth.', img: '/images/digital-globe.webp', slug: 'cloud-integration' },
  { title: 'Cyber Security Services', desc: 'Safeguarding digital assets with expert security consultation.', img: '/images/code-blue.webp', slug: 'cyber-security' },
  { title: 'Data Science Solutions', desc: 'Leverage the potential of your data for informed decisions.', img: '/images/circuit-brain.webp', slug: 'data-science' },
  { title: 'IT Networking Solutions', desc: 'Robust network infrastructure for modern businesses.', img: '/images/circuit-board.webp', slug: 'it-networking' },
  { title: 'Palo Alto Network Solutions', desc: 'Next-generation firewall and threat prevention.', img: '/images/code-python.webp', slug: 'palo-alto' },
  { title: 'Salesforce Services', desc: 'Maximize your CRM investment and drive growth.', img: '/images/laptop-teamwork.webp', slug: 'salesforce' },
  { title: 'ServiceNow Service', desc: 'Optimize workflows and streamline IT service management.', img: '/images/desk-bw.webp', slug: 'servicenow' },
  { title: 'Software Development', desc: 'Build robust and scalable software solutions.', img: '/images/code-php.webp', slug: 'software-dev' },
  { title: 'AEM Development', desc: 'Superior digital experiences and content management.', img: '/images/ai-cube.webp', slug: 'aem-development' },
]
export default function Projects() {
  return (
    <>
      <PageBanner eyebrow="Onshore or Offshore" title="OUR<br>PROJECTS" num="06" bgImage="/images/server-rack.webp" />
      <div className="pg-body">
        <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '720px', marginBottom: '1rem' }}>Strategic partnerships delivering consulting projects with both onshore and offshore delivery models.</p>
        <div className="ap-grid">
          {projects.map(({ title, desc, img, slug }) => (
            <Link href={"/projects/" + slug} className="ap-item" key={title} style={{ textDecoration: 'none' }}>
              <div className="ap-img"><img src={img} alt={title} className="img-cover" /></div>
              <div><div className="ap-title">{title}</div><p className="ap-desc">{desc}</p><span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.5rem', display: 'inline-block' }}>View Details \u2192</span></div>
            </Link>
          ))}
        </div>
      </div>
      <CTABand label="Start a project" title="LET\'S<br><em>Build</em>" btnText="Start Conversation" btnHref="/contact" />
    </>
  )
}
