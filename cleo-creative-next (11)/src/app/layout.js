import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata = {
  title: 'Cleo Consulting — We Sniff Out the Best Talent',
  description: 'IT Consulting and Recruitment firm operating in USA, Canada and India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <div className="page-wrap">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}