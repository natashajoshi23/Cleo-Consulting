import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import CertificationPopup from '@/components/Certificationpopup'

export const metadata = {
  title: 'Cleo Consulting — We Sniff Out the Best Talent',
  description: 'IT Consulting and Recruitment firm operating in USA, Canada and India.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <a href="#main" className="skip-link">Skip to main content</a>
          <CertificationPopup />
          <ScrollProgress />
          <Navbar />
          <main id="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}