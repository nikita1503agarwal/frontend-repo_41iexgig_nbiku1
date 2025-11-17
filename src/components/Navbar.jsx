import { useState } from 'react'
import { Menu, X, Flame, Sparkles } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-fuchsia-600/40 via-purple-600/40 to-indigo-600/40" />
              <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-zinc-950 border border-white/10">
                <Flame className="h-5 w-5 text-fuchsia-400" />
              </div>
            </div>
            <span className="text-white font-semibold tracking-tight flex items-center gap-2">
              Flames Kinky
              <Sparkles className="h-4 w-4 text-purple-300" />
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Features</NavLink>
            <NavLink>Styles</NavLink>
            <NavLink>Gallery</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          <div className="hidden md:flex">
            <a href="#" className="relative inline-flex items-center gap-2 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors">
              <span>Get Started</span>
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-zinc-900/60 text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-4 space-y-3">
            <NavLink>Features</NavLink>
            <NavLink>Styles</NavLink>
            <NavLink>Gallery</NavLink>
            <a href="#" className="block text-center rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200 hover:bg-fuchsia-500/20 transition-colors">Get Started</a>
          </div>
        )}
      </div>
    </header>
  )
}
