import Link from 'next/link'

export default function CTABand({ label, title, btnText, btnHref }) {
  return (
    <div className="cta-sec" style={{ padding: '5rem 3rem' }}>
      <div className="cta-label">
        <div className="cta-dash" />
        {label}
        <div className="cta-dash" />
      </div>
      <h2 className="cta-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }} dangerouslySetInnerHTML={{ __html: title }} />
      <div className="cta-btns">
        <Link href={btnHref} className="btn-fill">{btnText}</Link>
      </div>
    </div>
  )
}
