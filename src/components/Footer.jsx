export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">Designed for dark lovers • Neon infused • 2025</p>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">Privacy</a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
