import { Routes, Route } from 'react-router-dom'
import ParticleApp from './components/ParticleApp'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import { lazy, Suspense } from "react"
const Features = lazy(() => import("./components/Features"))
const Docs = lazy(() => import("./components/Docs"))

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<ParticleApp />} />
      <Route path="/features" element={<Features />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  </main>
  <Footer />
</div>

  )
}