import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'

const projects = {
  'cisco-network': {
    title: 'Cisco Network Solutions',
    banner: 'CISCO<br>NETWORK',
    img: '/images/server-rack.webp',
    intro: 'At Cleo Consulting, we specialize in providing comprehensive Cisco network solutions that empower businesses to build secure, scalable, and reliable network infrastructures. As a trusted partner, we have the expertise and knowledge to help organizations of all sizes optimize their networks, enhance connectivity, and drive digital transformation.',
    sections: [
      { heading: 'Network Design & Implementation', text: 'Maximize the performance and efficiency of your network infrastructure with our expert network design and implementation services. Our team of certified Cisco professionals will assess your current network architecture, understand your business requirements, and design a scalable and secure network solution tailored to your organization\'s specific needs.' },
      { heading: 'Switching & Routing', text: 'Enhance your network connectivity and improve traffic management with Cisco switching and routing solutions. Our team will help you select and deploy the right switching and routing solutions to optimize your network performance and ensure seamless communication across your organization.' },
      { heading: 'Wireless & Mobility', text: 'Enable secure and reliable wireless connectivity with our Cisco wireless and mobility solutions. We provide end-to-end wireless network design, deployment, and management services to ensure seamless wireless access throughout your organization.' },
      { heading: 'Network Security', text: 'Protect your network infrastructure from emerging threats with our comprehensive network security solutions. We implement Cisco\'s industry-leading security technologies to safeguard your network, data, and users from cyber threats.' },
    ],
  },
  'cloud-integration': {
    title: 'Cloud Integration Services',
    banner: 'CLOUD<br>INTEGRATION',
    img: '/images/digital-globe.webp',
    intro: "In today\'s digital landscape, businesses rely on various cloud-based applications and systems to drive productivity and growth. At Cleo, we support all major cloud products and help businesses connect cloud-based applications, on-premise systems, APIs, and data sources seamlessly.",
    sections: [
      { heading: 'Multi-Cloud Strategy', text: 'We help organizations develop and implement multi-cloud strategies that leverage the best of AWS, Azure, and Google Cloud Platform to optimize performance, cost, and reliability.' },
      { heading: 'Cloud Migration', text: 'We provide comprehensive cloud migration services that help businesses move their operations to the cloud with ease, minimizing disruption and maximizing the benefits of cloud computing.' },
      { heading: 'Integration & APIs', text: 'Our integration experts connect your cloud-based applications with on-premise systems, third-party APIs, and data sources to create a unified, efficient technology ecosystem.' },
      { heading: 'Cloud Management', text: 'Ongoing cloud management and optimization services to ensure your cloud infrastructure remains secure, performant, and cost-effective.' },
    ],
  },
  'cyber-security': {
    title: 'Cyber Security Services',
    banner: 'CYBER<br>SECURITY',
    img: '/images/code-blue.webp',
    intro: 'At CLEO Consulting, we understand the critical importance of safeguarding your digital assets in today\'s increasingly interconnected world. Our comprehensive cybersecurity services are designed to protect your organization from evolving threats.',
    sections: [
      { heading: 'Security Assessment', text: 'Comprehensive security assessments to identify vulnerabilities in your infrastructure, applications, and processes before they can be exploited.' },
      { heading: 'Threat Prevention', text: 'Advanced threat prevention solutions including next-generation firewalls, intrusion detection systems, and endpoint protection platforms.' },
      { heading: 'Incident Response', text: 'Rapid incident response services to contain, investigate, and remediate security breaches, minimizing impact to your organization.' },
      { heading: 'Compliance & Governance', text: 'Help with regulatory compliance requirements including SOC2, HIPAA, PCI-DSS, and other industry-specific security standards.' },
    ],
  },
  'data-science': {
    title: 'Data Science Solutions',
    banner: 'DATA<br>SCIENCE',
    img: '/images/circuit-brain.webp',
    intro: 'Cutting-edge data science solutions helping you leverage the full potential of your data for informed business decisions and competitive advantage.',
    sections: [
      { heading: 'Data Analytics', text: 'Advanced analytics services that transform raw data into actionable business insights, helping you make informed decisions faster.' },
      { heading: 'Machine Learning', text: 'Custom machine learning models built to solve your specific business challenges, from predictive modeling to natural language processing.' },
      { heading: 'Business Intelligence', text: 'BI platform implementation and optimization using tools like Tableau, Power BI, and custom dashboards tailored to your needs.' },
      { heading: 'Data Engineering', text: 'Building robust data pipelines and infrastructure to ensure your data is accessible, reliable, and ready for analysis.' },
    ],
  },
  'it-networking': {
    title: 'IT Networking Solutions',
    banner: 'IT<br>NETWORKING',
    img: '/images/circuit-board.webp',
    intro: 'Robust network infrastructure solutions for the smooth functioning of modern connected businesses. We design, implement, and manage networking solutions that keep your organization connected and productive.',
    sections: [
      { heading: 'Network Architecture', text: 'Enterprise network architecture design that scales with your business, ensuring reliability, security, and performance.' },
      { heading: 'SD-WAN Solutions', text: 'Software-defined WAN solutions that optimize connectivity across multiple locations, reducing costs and improving application performance.' },
      { heading: 'Network Monitoring', text: 'Proactive network monitoring and management services that identify and resolve issues before they impact your business operations.' },
      { heading: 'Network Security', text: 'Comprehensive network security solutions including firewalls, VPNs, and access control systems to protect your infrastructure.' },
    ],
  },
  'palo-alto': {
    title: 'Palo Alto Network Solutions',
    banner: 'PALO ALTO<br>SOLUTIONS',
    img: '/images/code-python.webp',
    intro: 'Comprehensive Palo Alto solutions with next-generation firewall and threat prevention capabilities to protect your organization from advanced cyber threats.',
    sections: [
      { heading: 'Next-Gen Firewalls', text: 'Deployment and management of Palo Alto next-generation firewalls that provide advanced threat prevention and application-level visibility.' },
      { heading: 'Threat Prevention', text: 'Advanced threat prevention using WildFire, DNS Security, and URL Filtering to protect against known and unknown threats.' },
      { heading: 'Zero Trust', text: 'Implementation of Zero Trust architecture using Palo Alto Prisma and GlobalProtect to secure your workforce and applications.' },
      { heading: 'Security Operations', text: 'Cortex XDR and XSOAR implementation for automated security operations, threat detection, and incident response.' },
    ],
  },
  'salesforce': {
    title: 'Salesforce Services',
    banner: 'SALESFORCE<br>SERVICES',
    img: '/images/laptop-teamwork.webp',
    intro: 'Comprehensive Salesforce services to maximize your CRM investment and drive business growth through better customer relationships and streamlined processes.',
    sections: [
      { heading: 'Implementation', text: 'Full Salesforce implementation services from planning and configuration to data migration and user training.' },
      { heading: 'Customization', text: 'Custom Apex development, Lightning Web Components, and Salesforce platform customization to meet your unique business requirements.' },
      { heading: 'Integration', text: 'Salesforce integration with your existing systems including ERP, marketing automation, and customer service platforms.' },
      { heading: 'Optimization', text: 'Ongoing Salesforce optimization services to improve adoption, performance, and ROI of your CRM platform.' },
    ],
  },
  'servicenow': {
    title: 'ServiceNow Service',
    banner: 'SERVICENOW<br>SERVICES',
    img: '/images/desk-bw.webp',
    intro: 'Top-notch ServiceNow services to optimize workflows, streamline IT service management, and drive digital transformation across your organization.',
    sections: [
      { heading: 'ITSM Implementation', text: 'Full ITSM module implementation including incident, problem, change, and service request management.' },
      { heading: 'Custom Development', text: 'Custom application development on the Now Platform to automate business processes and improve efficiency.' },
      { heading: 'Integration', text: 'ServiceNow integration with your existing tools and systems for a unified IT management experience.' },
      { heading: 'Optimization', text: 'Performance optimization and best practice implementation to maximize the value of your ServiceNow investment.' },
    ],
  },
  'software-dev': {
    title: 'Software Development (Java & .NET)',
    banner: 'SOFTWARE<br>DEVELOPMENT',
    img: '/images/code-php.webp',
    intro: 'Exceptional software development services helping businesses build robust, scalable, and high-performance applications using Java and .NET technologies.',
    sections: [
      { heading: 'Custom Development', text: 'Full-stack custom software development using Java and .NET frameworks tailored to your business requirements.' },
      { heading: 'Modernization', text: 'Legacy system modernization and migration to modern architectures including microservices, cloud-native, and containerized applications.' },
      { heading: 'API Development', text: 'RESTful and GraphQL API design, development, and integration services for seamless system connectivity.' },
      { heading: 'DevOps', text: 'CI/CD pipeline implementation, infrastructure automation, and DevOps practices to accelerate development and deployment cycles.' },
    ],
  },
  'aem-development': {
    title: 'AEM Development Services',
    banner: 'AEM<br>DEVELOPMENT',
    img: '/images/ai-cube.webp',
    intro: 'Leveraging Adobe Experience Manager for superior digital experiences and content management that engages your audience across every channel.',
    sections: [
      { heading: 'AEM Implementation', text: 'Full AEM implementation services including Sites, Assets, and Forms for comprehensive digital experience management.' },
      { heading: 'Component Development', text: 'Custom AEM component and template development to create unique, branded digital experiences.' },
      { heading: 'Cloud Migration', text: 'AEM as a Cloud Service migration services to modernize your content management infrastructure.' },
      { heading: 'Integration', text: 'Integration with Adobe Marketing Cloud, Analytics, Target, and third-party systems for a unified marketing technology stack.' },
    ],
  },
}

const allSlugs = Object.keys(projects)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

export default function ProjectPage({ params }) {
  const proj = projects[params.slug]
  if (!proj) return <div className="pg-body"><h1>Project not found</h1><Link href="/projects">Back to Projects</Link></div>
  const otherProjects = allSlugs.filter(s => s !== params.slug).slice(0, 4)

  return (
    <>
      <PageBanner eyebrow="Our Projects" title={proj.banner} num="" bgImage={proj.img} />
      <div className="pg-body">
        <p style={{ fontSize: '1rem', color: 'var(--fog)', lineHeight: 1.85, maxWidth: '800px', marginBottom: '3rem' }}>{proj.intro}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--ghost)' }}>
          {proj.sections.map(s => (
            <div key={s.heading} style={{ background: 'var(--ink)', padding: '2.5rem', borderTop: '2px solid var(--gold)' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.75rem' }}>{s.heading}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.8 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--ghost)' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>OTHER PROJECTS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--ghost)' }}>
            {otherProjects.map(slug => (
              <Link href={"/projects/" + slug} key={slug} style={{ textDecoration: 'none', background: 'var(--ink)', padding: '1.5rem', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--paper)', marginBottom: '0.3rem' }}>{projects[slug].title}</div>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>View Details \u2192</span>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/projects" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>\u2190 Back to All Projects</Link>
        </div>
      </div>
      <CTABand label="Start a project" title="LET'S<br><em>Build</em>" btnText="Contact Us" btnHref="/contact" />
    </>
  )
}
