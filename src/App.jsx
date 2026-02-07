import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'

// Lazy loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Realisations = lazy(() => import('./pages/Realisations'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const DevisGratuit = lazy(() => import('./pages/DevisGratuit'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogArticle = lazy(() => import('./pages/BlogArticle'))
const FAQ = lazy(() => import('./pages/FAQ'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-cakir-gold border-t-transparent rounded-full animate-spin"></div>
      <p className="text-cakir-black/60 font-medium">Chargement...</p>
    </div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nos-services" element={<Services />} />
          <Route path="nos-services/:slug" element={<ServiceDetail />} />
          <Route path="nos-realisations" element={<Realisations />} />
          <Route path="a-propos" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="devis-gratuit" element={<DevisGratuit />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogArticle />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
