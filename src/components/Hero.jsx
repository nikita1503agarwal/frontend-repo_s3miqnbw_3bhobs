import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-black via-[#0a0f0a] to-black">
      {/* Saudi geometric subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(234,179,8,0.15), transparent 25%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.18), transparent 25%), radial-gradient(circle at 50% 90%, rgba(255,255,255,0.06), transparent 30%)'
      }} />

      {/* 3D Car Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30">
            Luxury • Speed • Trust
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Rent Your Perfect Car in Saudi Arabia
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            Premium, affordable, and fast car rental service across Riyadh & Jeddah.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_35px_rgba(16,185,129,0.4)] transition">
              Book Now
            </Link>
            <Link to="/fleet" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20">
              View Fleet
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Skyline outline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-20">
        <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 L120,80 L220,90 L260,70 L340,75 L380,40 L460,45 L520,60 L600,50 L660,70 L740,65 L820,55 L880,70 L950,60 L1020,75 L1120,50 L1200,80 L1320,60 L1440,85" stroke="url(#g)" strokeWidth="3" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
