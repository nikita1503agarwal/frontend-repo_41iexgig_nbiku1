import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Subtle tile pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0,transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
