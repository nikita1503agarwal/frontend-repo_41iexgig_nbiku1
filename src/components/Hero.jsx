import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-20 overflow-hidden">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-fuchsia-700/20 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-700/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Kinky Neon Interface Kit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-zinc-300"
            >
              Dark, seductive, and dripping with purple neon. Build immersive UI with glossy surfaces, soft glows, and micro-interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/15 px-5 py-3 text-sm text-fuchsia-100 hover:bg-fuchsia-500/25 transition-colors">
                Explore Components
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-zinc-200 hover:bg-white/10 transition-colors">
                Live Playground
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Neon-ready
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                Micro-animated
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Responsive
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-purple-500/5 pointer-events-none" />
            <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
