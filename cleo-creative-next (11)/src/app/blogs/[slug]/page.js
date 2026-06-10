import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'

const blogs = {
  'palo-alto-engineers': {
    title: 'Hire Palo Alto Certified Engineers',
    date: '27 February 2024',
    banner: 'PALO ALTO<br>ENGINEERS',
    img: '/images/digital-globe.webp',
    content: [
      'Reliable IT staffing for organizations that need verified Palo Alto expertise fast. At Cleo Consulting, we specialize in placing PCNSE-certified engineers who bring hands-on experience with next-generation firewalls, network security, and advanced threat prevention.',
      'Palo Alto Networks has established itself as a leader in cybersecurity, and their certified engineers are in high demand across industries. Finding qualified professionals with genuine hands-on experience can be challenging, which is where Cleo Consulting comes in.',
      'Our recruitment team understands the technical requirements for Palo Alto roles and can assess candidates for both certification validity and practical expertise. We have placed Palo Alto engineers across financial services, healthcare, government, and technology sectors.',
      'Whether you need a single PCNSE-certified engineer for a firewall deployment or a team of security professionals for a large-scale network transformation, Cleo Consulting can help you find the right talent quickly and efficiently.',
    ],
  },
  'cloud-integration': {
    title: 'What Are Cloud Integration Services?',
    date: '04 February 2024',
    banner: 'CLOUD<br>INTEGRATION',
    img: '/images/server-rack.webp',
    content: [
      'Cloud integration services help organizations connect cloud-based applications, on-premise systems, APIs, and data sources to create a unified technology ecosystem. As businesses adopt more cloud solutions, the need for seamless integration becomes critical.',
      'At Cleo Consulting, we help organizations navigate the complexities of cloud integration by providing expert consultants who specialize in connecting disparate systems. Our professionals work with all major cloud platforms including AWS, Azure, and Google Cloud.',
      'Key benefits of cloud integration include improved data consistency across systems, reduced manual data entry and errors, real-time data synchronization, enhanced business process automation, and better visibility across your technology stack.',
      'Whether you are migrating to the cloud, connecting multiple cloud platforms, or integrating cloud applications with your existing on-premise systems, our team can help you develop and implement a comprehensive integration strategy.',
    ],
  },
  'threat-protection': {
    title: "Palo Alto Advanced Threat Protection",
    date: '08 November 2023',
    banner: 'THREAT<br>PROTECTION',
    img: '/images/code-blue.webp',
    content: [
      "In today's hyper-connected digital landscape, cyber threats are evolving at an unprecedented rate. Advanced Threat Protection (ATP) from Palo Alto Networks provides multi-layered defense against both known and unknown threats.",
      "ATP combines multiple security technologies including WildFire malware analysis, DNS Security, URL Filtering, and Threat Prevention to create a comprehensive security posture that protects against the full spectrum of cyber attacks.",
      "Organizations that implement Palo Alto ATP benefit from automated threat detection and prevention, reduced time to identify and contain breaches, protection against zero-day exploits and advanced persistent threats, and centralized security management through Panorama.",
      "At Cleo Consulting, we place certified Palo Alto engineers who have hands-on experience deploying and managing Advanced Threat Protection solutions for enterprise clients across multiple industries.",
    ],
  },
  'cisco-best-practices': {
    title: '10 Best Practices for Cisco Network Engineering',
    date: '14 July 2023',
    banner: 'CISCO<br>NETWORKING',
    img: '/images/circuit-board.webp',
    content: [
      'Cisco is a renowned leader in network engineering, providing robust and reliable networking solutions worldwide. Implementing Cisco technologies effectively requires following established best practices that ensure performance, security, and scalability.',
      'Key best practices include proper network segmentation for security and performance, implementing redundancy at every critical layer, maintaining up-to-date firmware and security patches, using network monitoring tools for proactive issue detection, and documenting all network configurations and changes.',
      'Additional best practices encompass implementing Quality of Service (QoS) policies for traffic prioritization, using access control lists (ACLs) for network security, regular backup of device configurations, capacity planning for future growth, and conducting regular network assessments and audits.',
      'At Cleo Consulting, our certified Cisco engineers follow these best practices and more when designing, implementing, and managing network solutions for our clients across North America.',
    ],
  },
  'networking-buffalo': {
    title: 'IT Networking in Buffalo',
    date: '14 July 2023',
    banner: 'NETWORKING<br>BUFFALO',
    img: '/images/code-php.webp',
    content: [
      'Buffalo, New York is a thriving market for businesses demanding robust connectivity and reliable IT networking infrastructure. As the city continues to grow its technology sector, the demand for skilled IT networking professionals has never been higher.',
      'Cleo Consulting, headquartered in the Buffalo area, is uniquely positioned to help local businesses enhance their IT networking capabilities. With our deep knowledge of the local market and extensive network of IT professionals, we connect Buffalo businesses with top-tier networking talent.',
      'Our networking services in the Buffalo area cover enterprise network design and implementation, wireless network deployment, network security solutions, cloud connectivity and integration, and ongoing network management and support.',
      'Whether you are a small business looking to upgrade your network infrastructure or a large enterprise seeking specialized networking talent, Cleo Consulting has the expertise and local presence to meet your needs.',
    ],
  },
  'google-cloud': {
    title: 'Google Cloud Services & CLEO',
    date: '07 June 2023',
    banner: 'GOOGLE<br>CLOUD',
    img: '/images/ai-cube.webp',
    content: [
      'Google Cloud Services and CLEO Consulting — the ultimate combination for taking your business to the next level. Google Cloud Platform offers a comprehensive suite of cloud computing services that can transform how your organization operates.',
      'At Cleo Consulting, we provide expert Google Cloud professionals who can help you leverage the full potential of GCP. From infrastructure migration to data analytics and machine learning, our consultants bring deep expertise across the Google Cloud ecosystem.',
      'Key Google Cloud services we support include Compute Engine for scalable virtual machines, Google Kubernetes Engine for container orchestration, BigQuery for data analytics, Cloud AI and Machine Learning services, and Cloud Storage and networking solutions.',
      'Our Google Cloud certified professionals are ready to help your organization plan, implement, and optimize your cloud strategy. Contact Cleo Consulting to learn how we can accelerate your cloud transformation.',
    ],
  },
}

const allSlugs = Object.keys(blogs)

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }))
}

export default function BlogPage({ params }) {
  const blog = blogs[params.slug]
  if (!blog) return <div className="pg-body"><h1>Blog not found</h1><Link href="/blogs">Back to Blogs</Link></div>

  return (
    <>
      <PageBanner eyebrow="Insights" title={blog.banner} num="" bgImage={blog.img} />
      <div className="pg-body" style={{ maxWidth: '800px' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>{blog.date}</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--paper)', lineHeight: 1.3, marginBottom: '2.5rem' }}>{blog.title}</h2>
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{ height: '350px', overflow: 'hidden', borderRadius: '2px', position: 'relative' }}>
            <img src={blog.img} alt={blog.title} className="img-cover" style={{ filter: 'sepia(20%) saturate(120%) brightness(0.8)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(200,153,31,0.08), rgba(0,18,41,0.3))', pointerEvents: 'none' }} />
          </div>
        </div>
        {blog.content.map((p, i) => (
          <p key={i} style={{ fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, marginBottom: '1.5rem' }}>{p}</p>
        ))}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ghost)' }}>
          <Link href="/blogs" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>\u2190 Back to All Insights</Link>
        </div>
      </div>
      <CTABand label="Get in touch" title="LET\'S<br><em>Connect</em>" btnText="Contact Us" btnHref="/contact" />
    </>
  )
}
