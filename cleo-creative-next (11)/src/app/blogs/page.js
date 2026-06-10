import PageBanner from '@/components/PageBanner'
// import CTABand from '@/components/CTABand'
import Link from 'next/link'
export const metadata = { title: 'Blogs — Cleo Consulting' }
const posts = [
  { date: '27 Feb', title: 'Hire Palo Alto Certified Engineers', excerpt: 'Specialist IT Staffing with PCNSE Certified engineers.', img: '/images/digital-globe.webp', slug: 'palo-alto-engineers' },
  { date: '04 Feb', title: 'What Are Cloud Integration Services?', excerpt: 'Connect cloud platforms, on-premise systems, APIs and data sources.', img: '/images/server-rack.webp', slug: 'cloud-integration' },
  { date: '08 Nov', title: "Palo Alto Advanced Threat Protection", excerpt: 'How Advanced Threat Protection protects against emerging cyber threats.', img: '/images/code-blue.webp', slug: 'threat-protection' },
  { date: '14 Jul', title: '10 Best Practices for Cisco Network Engineering', excerpt: 'Cisco provides robust and reliable networking solutions worldwide.', img: '/images/circuit-board.webp', slug: 'cisco-best-practices' },
  { date: '14 Jul', title: 'IT Networking in Buffalo', excerpt: 'Enhancing IT Networking in Buffalo for businesses demanding robust connectivity.', img: '/images/code-php.webp', slug: 'networking-buffalo' },
  { date: '07 Jun', title: 'Google Cloud Services & CLEO', excerpt: 'The ultimate combination for taking your business to the next level.', img: '/images/ai-cube.webp', slug: 'google-cloud' },
]
export default function Blogs() {
  return (
    <>
      <PageBanner eyebrow="Insights" title="LATEST<br>THINKING" num="08" bgImage="/images/business-newspaper.webp" />
      <div className="pg-body">
        <div className="blog-grid">
          {posts.map(({ date, title, excerpt, img, slug }) => (
            <Link href={"/blogs/" + slug} className="blog" key={title} style={{ textDecoration: 'none' }}>
              <div className="blog-card-img-real"><img src={img} alt={title} /></div>
              <div style={{ padding: '1.5rem' }}><div className="blog-date">{date}</div><div className="blog-title">{title}</div><p className="blog-excerpt">{excerpt}</p><span className="blog-read">Read More \u2192</span></div>
            </Link>
          ))}
        </div>
      </div>
      {/* <CTABand label="Stay sharp" title="LET\'S<br><em>Connect</em>" btnText="Contact Us" btnHref="/contact" /> */}
    </>
  )
}
