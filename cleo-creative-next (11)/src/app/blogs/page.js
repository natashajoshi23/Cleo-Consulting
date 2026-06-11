import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
export const metadata = { title: 'Insights — Cleo Consulting' }
const posts = [
  { date: '27 Feb 2024', title: 'Hire Palo Alto Certified Engineers', excerpt: 'Fast, verified and specialist-matched PCNSE-certified Network Security Engineers.', img: '/images/digital-globe.webp', slug: 'palo-alto-engineers' },
  { date: '04 Feb 2024', title: 'What Are Cloud Integration Services?', excerpt: 'How cloud integration connects platforms, on-premise systems, APIs and data sources.', img: '/images/code-php.webp', slug: 'cloud-integration-what' },
  { date: '08 Nov 2023', title: "Palo Alto's Advanced Threat Protection", excerpt: 'How Advanced Threat Protection protects against emerging cyber threats.', img: '/images/code-blue.webp', slug: 'threat-protection' },
  { date: '14 Jul 2023', title: '10 Best Practices for Cisco Network Engineering', excerpt: 'Essential best practices for designing, implementing, and managing Cisco networks.', img: '/images/circuit-board.webp', slug: 'cisco-best-practices' },
  { date: '14 Jul 2023', title: 'IT Networking in Buffalo', excerpt: 'A guide for Buffalo businesses looking to enhance their IT networking capabilities.', img: '/images/city-skyscrapers.webp', slug: 'networking-buffalo' },
  { date: '07 Jun 2023', title: '10 Benefits of Cloud Integration Services', excerpt: 'Powerful benefits of cloud integration for seamless business growth.', img: '/images/circuit-brain.webp', slug: 'cloud-integration-benefits' },
  { date: '07 Jun 2023', title: 'Google Cloud Services & CLEO', excerpt: 'The ultimate cloud computing combination for taking your business to the next level.', img: '/images/ai-hand.webp', slug: 'google-cloud' },
]
export default function Blogs() {
  return (
    <>
      <PageBanner eyebrow="Insights" title="LATEST<br>THINKING" num="07" bgImage="/images/business-newspaper.webp" />
      <div className="pg-body" style={{ paddingTop: '2.5rem' }}>
        <div className="blog-grid">
          {posts.map(({ date, title, excerpt, img, slug }) => (
            <Link href={"/blogs/" + slug} className="blog" key={slug} style={{ textDecoration: 'none' }}>
              <div className="blog-card-img-real"><img src={img} alt={title} /></div>
              <div style={{ padding: '1.5rem' }}>
                <div className="blog-date" style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.8rem' }}>{date}</div>
                <div className="blog-title">{title}</div>
                <p className="blog-excerpt">{excerpt}</p>
                <span className="blog-read">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}