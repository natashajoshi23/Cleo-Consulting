export default function PageBanner({ eyebrow, title, num }) {
  return (
    <div className="inner-banner">
      <div className="banner-ghost">{num || ''}</div>
      <div className="banner-eyebrow">{eyebrow}</div>
      <h1 className="banner-h1" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}
