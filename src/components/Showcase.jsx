import { motion } from 'framer-motion'
import { Gauge, Gem, Zap, Shield, Sparkles, Layout } from 'lucide-react'

const cards = [
  {
    icon: Gauge,
    title: 'Glass Panels',
    desc: 'Frosted panes with neon borders and soft inner glow.',
    gradient: 'from-fuchsia-600/30 to-purple-600/30',
  },
  {
    icon: Gem,
    title: 'Jewelry Buttons',
    desc: 'Gem-like buttons with iridescent sheen and hover shimmer.',
    gradient: 'from-purple-600/30 to-indigo-600/30',
  },
  {
    icon: Zap,
    title: 'Electric Toggles',
    desc: 'Snappy switches with reactive glow and subtle spark.',
    gradient: 'from-pink-600/30 to-fuchsia-600/30',
  },
  {
    icon: Shield,
    title: 'Dark Forms',
    desc: 'Ultra-dark fields with focus halos and error pulses.',
    gradient: 'from-violet-600/30 to-purple-600/30',
  },
]

export default function Showcase() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-fuchsia-300" />
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">UI Elements</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/60 p-5 overflow-hidden"
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-tr ${c.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-zinc-950/80 flex items-center justify-center mb-4">
                  <c.icon className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{c.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1.5 text-xs text-fuchsia-100 hover:bg-fuchsia-500/20">Try</button>
                  <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10">Docs</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
