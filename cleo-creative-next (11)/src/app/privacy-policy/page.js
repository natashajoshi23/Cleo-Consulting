import PageBanner from '@/components/PageBanner'
export const metadata = { title: 'Privacy Policy — Cleo Consulting' }
export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner eyebrow="Legal" title="PRIVACY<br>POLICY" num="09" />
      <div className="pg-body">
        <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.9, marginBottom: '2rem' }}>
          Last updated: June 2026
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>INFORMATION WE COLLECT</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          When you visit our website, contact us through our forms, or engage our services, we may collect personal information such as your name, email address, phone number, company name, and details about your staffing or consulting requirements. We collect this information only when you voluntarily provide it to us.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>HOW WE USE YOUR INFORMATION</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          We use the information we collect to respond to your inquiries, provide our IT consulting, staffing, and healthcare placement services, communicate with you about relevant opportunities, improve our website and services, and comply with applicable legal obligations. We do not sell, trade, or rent your personal information to third parties.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>DATA PROTECTION</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          We implement reasonable security measures to protect the personal information we collect. However, no method of electronic storage or transmission over the Internet is 100% secure, and we cannot guarantee absolute security. We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>COOKIES</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings. Disabling cookies may affect some functionality of the website.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>THIRD-PARTY SERVICES</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          We may share your information with trusted third-party service providers who assist us in operating our business, such as our healthcare staffing partner Nersify. These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify. We may also disclose information if required by law.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>YOUR RIGHTS</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          You have the right to access, correct, or delete the personal information we hold about you. You may also withdraw your consent to our processing of your data at any time. To exercise any of these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>INTERNATIONAL DATA TRANSFERS</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          As Cleo Consulting operates across the United States, Canada, and India, your information may be transferred to and processed in countries other than your country of residence. We take appropriate steps to ensure that your personal data receives adequate protection in accordance with applicable data protection laws.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>CHANGES TO THIS POLICY</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '760px' }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
        </p>

        <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.8rem', color: 'var(--paper)', letterSpacing: '0.04em', marginBottom: '1rem', marginTop: '2.5rem' }}>CONTACT US</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--fog)', lineHeight: 1.85, marginBottom: '1rem', maxWidth: '760px' }}>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
        </p>
        <div style={{ background: 'var(--ink2)', borderLeft: '3px solid var(--gold)', padding: '2rem', marginTop: '1rem', maxWidth: '500px' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--paper)', fontWeight: 600, marginBottom: '0.5rem' }}>Cleo Consulting Inc.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.85 }}>
            Email: <a href="mailto:info@cleoconsult.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>info@cleoconsult.com</a><br />
            Phone: <a href="tel:+18663906604" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+1 866-390-6604</a><br />
            1879 Whitehaven Road, Suite C<br />
            Grand Island, NY 14072
          </p>
        </div>
      </div>
    </>
  )
}
