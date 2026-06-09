import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'

const services = {
  'cloud-engineers': {
    title: 'Cloud Engineers & Architects',
    banner: 'CLOUD<br>ENGINEERS',
    img: '/images/server-rack.webp',
    intro: 'Cloud computing has revolutionized the way organizations manage data, applications, and infrastructure. Skilled cloud engineers and architects are critical to every modern business.',
    bullets: [
      'AWS, Azure, and Google Cloud Platform expertise',
      'Cloud migration strategy and execution',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Kubernetes and container orchestration',
      'Cost optimization and cloud governance',
      'Multi-cloud and hybrid cloud architectures',
    ],
    closing: 'Whether you need a single cloud architect or an entire team, Cleo connects you with certified professionals who deliver results.',
  },
  'cyber-security': {
    title: 'Cyber Security Consultant',
    banner: 'CYBER<br>SECURITY',
    img: '/images/code-blue.webp',
    intro: 'Cyber threats are increasingly sophisticated. Cybersecurity has become a crucial component of every organization\'s risk management strategy.',
    bullets: [
      'Security Operations Center (SOC) staffing',
      'Penetration testing and vulnerability assessment',
      'Identity and Access Management (IAM)',
      'SIEM implementation and monitoring',
      'Compliance and regulatory consulting (SOC2, HIPAA, PCI)',
      'Incident response and threat intelligence',
    ],
    closing: 'Protect your digital assets with our vetted cybersecurity professionals who bring real-world experience to your organization.',
  },
  'data-scientist': {
    title: 'Data Scientist',
    banner: 'DATA<br>SCIENCE',
    img: '/images/circuit-brain.webp',
    intro: 'Data Scientists analyze and interpret complex data, driving informed business decisions across every industry vertical.',
    bullets: [
      'Machine Learning and AI model development',
      'Data pipeline architecture and ETL processes',
      'Business intelligence and analytics',
      'Python, R, SQL, and big data tools',
      'Data visualization (Tableau, Power BI)',
      'Predictive modeling and statistical analysis',
    ],
    closing: 'From junior analysts to lead data scientists, we place professionals who turn your data into actionable insights.',
  },
  'java-dotnet': {
    title: 'Java & .Net Developer',
    banner: 'JAVA &<br>.NET',
    img: '/images/code-python.webp',
    intro: 'Top-tier Java & .NET developer staffing. Highly skilled developers to deliver robust, scalable software solutions.',
    bullets: [
      'Full-stack Java and .NET development',
      'Spring Boot, Microservices architecture',
      'ASP.NET Core, Blazor, Entity Framework',
      'RESTful API design and development',
      'CI/CD pipelines and DevOps practices',
      'Legacy system modernization',
    ],
    closing: 'Our developers bring production-grade experience and integrate seamlessly into your existing teams.',
  },
  'palo-alto': {
    title: 'Palo Alto Certified Engineers',
    banner: 'PALO ALTO<br>ENGINEERS',
    img: '/images/digital-globe.webp',
    intro: 'PCNSE-certified engineers with deep expertise in next-generation firewalls, network security, and threat prevention.',
    bullets: [
      'PCNSE and PCNSA certified professionals',
      'Next-generation firewall deployment and management',
      'GlobalProtect VPN configuration',
      'Panorama centralized management',
      'Threat prevention and WildFire integration',
      'Network segmentation and Zero Trust architecture',
    ],
    closing: 'Our Palo Alto engineers come with verified certifications and hands-on deployment experience.',
  },
  'salesforce': {
    title: 'Salesforce Consultant',
    banner: 'SALESFORCE<br>CONSULTING',
    img: '/images/laptop-teamwork.webp',
    intro: 'Our experienced Salesforce professionals help your team maximize the potential of the world\'s leading CRM platform.',
    bullets: [
      'Salesforce Administration and Configuration',
      'Apex and Lightning Web Components development',
      'Sales Cloud, Service Cloud, Marketing Cloud',
      'Salesforce integration with third-party systems',
      'Data migration and system optimization',
      'Certified Salesforce Architects and Developers',
    ],
    closing: 'From implementation to optimization, our Salesforce consultants drive adoption and ROI for your CRM investment.',
  },
  'aem': {
    title: 'AEM Developer',
    banner: 'AEM<br>DEVELOPMENT',
    img: '/images/ai-cube.webp',
    intro: 'Expert Adobe Experience Manager developers helping you build and manage exceptional digital experiences at scale.',
    bullets: [
      'AEM Sites and AEM Assets implementation',
      'Custom component and template development',
      'AEM as a Cloud Service migration',
      'Content workflow and DAM optimization',
      'Adobe Analytics and Target integration',
      'Multi-site and multi-language management',
    ],
    closing: 'Our AEM developers help enterprises deliver personalized digital experiences across every channel.',
  },
  'servicenow': {
    title: 'ServiceNow Consultant',
    banner: 'SERVICENOW<br>CONSULTING',
    img: '/images/desk-bw.webp',
    intro: 'Consultants who help businesses optimize workflows and enhance IT service management processes effectively.',
    bullets: [
      'ITSM, ITOM, and ITBM module implementation',
      'Custom application development on Now Platform',
      'Service Portal design and configuration',
      'Integration with third-party tools',
      'Performance analytics and reporting',
      'CSA and CIS certified consultants',
    ],
    closing: 'Streamline your operations with ServiceNow experts who understand both the platform and your business needs.',
  },
  'engineering': {
    title: 'Engineering & Design',
    banner: 'ENGINEERING<br>& DESIGN',
    img: '/images/circuit-board.webp',
    intro: 'Specialized staffing across engineering and design disciplines — from mechanical engineers to UX designers.',
    bullets: [
      'Mechanical, electrical, and civil engineering',
      'UX/UI design and user research',
      'Product design and prototyping',
      'CAD/CAM specialists',
      'Quality assurance and testing',
      'Project engineering and management',
    ],
    closing: 'We connect you with skilled engineers and designers who bring technical expertise and creative problem-solving.',
  },
  'finance': {
    title: 'Finance & Accounting',
    banner: 'FINANCE &<br>ACCOUNTING',
    img: '/images/finance-tablet.webp',
    intro: 'Recruiting across Finance and Accounting roles — from junior analysts to CFOs — building strong financial teams.',
    bullets: [
      'Financial analysts and controllers',
      'Accounts payable and receivable specialists',
      'Tax preparation and compliance',
      'Bookkeeping and payroll management',
      'CFO and VP of Finance placements',
      'Audit and risk management professionals',
    ],
    closing: 'Build a financial team you can trust with professionals vetted for accuracy, integrity, and business acumen.',
  },
  'information-technology': {
    title: 'Information Technology',
    banner: 'INFORMATION<br>TECHNOLOGY',
    img: '/images/code-php.webp',
    intro: 'Tailored IT recruitment — short-term contractors with specific skills or permanent staff for long-term needs.',
    bullets: [
      'Help desk and desktop support',
      'Network administration and engineering',
      'Database administration (SQL, Oracle, MongoDB)',
      'System administration (Windows, Linux)',
      'IT project management (PMP, Agile, Scrum)',
      'Business analysts and QA engineers',
    ],
    closing: 'From entry-level support to senior architects, we staff every layer of your IT organization.',
  },
}

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }))
}

export default function ServicePage({ params }) {
  const svc = services[params.slug]
  if (!svc) return <div className="pg-body"><h1>Service not found</h1><Link href="/managed-services">Back to Services</Link></div>

  return (
    <>
      <PageBanner eyebrow="Our Services" title={svc.banner} num="" bgImage={svc.img} />
      <div className="pg-body">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '1.5rem', lineHeight: 1.2 }}>{svc.title}</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '2rem' }}>{svc.intro}</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '2rem' }}>{svc.closing}</p>
            <Link href="/contact" className="btn-fill">Hire {svc.title.split(' ')[0]} Talent</Link>
          </div>
          <div>
            <div style={{ height: '250px', overflow: 'hidden', borderRadius: '2px', marginBottom: '2rem', position: 'relative' }}>
              <img src={svc.img} alt={svc.title} className="img-cover" style={{ filter: 'sepia(30%) saturate(130%) brightness(0.75)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.12), rgba(0,18,41,0.4))', pointerEvents: 'none' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.25rem' }}>WHAT WE PLACE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {svc.bullets.map(b => (
                <div key={b} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--ghost)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>—</span> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ghost)' }}>
          <Link href="/managed-services" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>← Back to All Services</Link>
        </div>
      </div>
      <CTABand label="Ready to hire" title="LET'S<br><em>Talk</em>" btnText="Contact Us" btnHref="/contact" />
    </>
  )
}
