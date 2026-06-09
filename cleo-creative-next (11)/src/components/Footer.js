import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="ft-inner">
          <div className="ft-top">
            <div>
            <Image src="/images/logo-dark.webp" alt="Cleo Consulting" width={180} height={80} style={{ height: '160px', width: 'auto', objectFit: 'contain', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem' }} />              <p className="ft-desc">A partner-led IT Consulting and Recruitment firm operating across USA, Canada & India. Built by partners with 40+ years of combined experience.</p>
            </div>
            <div>
              <div className="ft-col-title">Company</div>
              <ul className="ft-links">
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/social-responsibility">Social Responsibility</Link></li>
                <li><Link href="/blogs">Insights</Link></li>
              </ul>
            </div>
            <div>
              <div className="ft-col-title">Services</div>
              <ul className="ft-links">
                <li><Link href="/managed-services">Managed Services</Link></li>
                <li><Link href="/health-services">Health Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
              </ul>
            </div>
            <div>
              <div className="ft-col-title">Connect</div>
              <ul className="ft-links">
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/contact">Our Offices</Link></li>
                <li><a href="mailto:info@cleoconsult.com">info@cleoconsult.com</a></li>
              </ul>
            </div>
          </div>
          <div className="ft-bottom">
            <span>© 2026 Cleo Consulting. All rights reserved.</span>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
