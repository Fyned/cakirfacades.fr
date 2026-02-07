import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import TopBar from './TopBar'
import Footer from './Footer'
import MobileCTA from './MobileCTA'
import ScrollToTop from '../ui/ScrollToTop'
import CookieBanner from '../ui/CookieBanner'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // TopBar is visible only when not scrolled
  const topBarVisible = !isScrolled

  return (
    <div className="min-h-screen flex flex-col">
      {/* TopBar - Desktop only, hides on scroll */}
      <TopBar isVisible={topBarVisible} />

      {/* Header */}
      <Header topBarVisible={topBarVisible} />

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        <Outlet />
      </main>

      <Footer />
      <MobileCTA />
      <ScrollToTop />
      <CookieBanner />
    </div>
  )
}
