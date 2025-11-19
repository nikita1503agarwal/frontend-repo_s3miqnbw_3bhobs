import { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, Gauge, Fuel, Calendar, Check } from 'lucide-react'

const carsSeed = [
  { id: 1, name: 'Toyota Camry', brand: 'Toyota', type: 'Sedan', price: 220, available: true, features: ['Auto', 'A/C', 'Cruise'], img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Hyundai Tucson', brand: 'Hyundai', type: 'SUV', price: 280, available: true, features: ['Auto', 'A/C', 'Apple CarPlay'], img: 'https://images.unsplash.com/photo-1627454824616-c0ac1b61f2a7?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Mercedes E-Class', brand: 'Mercedes', type: 'Luxury', price: 680, available: false, features: ['Auto', 'Leather', 'Adaptive Cruise'], img: 'https://images.unsplash.com/photo-1614200179384-c8244e9f2d88?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Lexus RX', brand: 'Lexus', type: 'SUV', price: 520, available: true, features: ['Hybrid', 'A/C', 'Radar'], img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop' },
]

export default function FleetSection() {
  const [filters, setFilters] = useState({ type: 'All', brand: 'All', price: 'All', availability: 'All' })
  const types = ['All', 'Sedan', 'SUV', 'Luxury']
  const brands = ['All', 'Toyota', 'Hyundai', 'Mercedes', 'Lexus']
  const prices = ['All', '<300', '300-500', '>500']
  const availability = ['All', 'Available', 'Unavailable']

  const filtered = carsSeed.filter(c => {
    const typeOk = filters.type === 'All' || c.type === filters.type
    const brandOk = filters.brand === 'All' || c.brand === filters.brand
    const priceOk = (
      filters.price === 'All' ||
      (filters.price === '<300' && c.price < 300) ||
      (filters.price === '300-500' && c.price >= 300 && c.price <= 500) ||
      (filters.price === '>500' && c.price > 500)
    )
    const availOk = filters.availability === 'All' || (filters.availability === 'Available' ? c.available : !c.available)
    return typeOk && brandOk && priceOk && availOk
  })

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Fleet</h2>
            <p className="text-white/60 mt-2">Handpicked cars for every journey.</p>
          </div>
          {/* Filters */}
          <div className="hidden md:flex items-center gap-3">
            {[{k:'type',opts:types},{k:'brand',opts:brands},{k:'price',opts:prices},{k:'availability',opts:availability}].map(({k,opts}) => (
              <select key={k} value={filters[k]} onChange={e=>setFilters({...filters,[k]:e.target.value})}
                className="bg-white/10 text-white rounded-xl px-3 py-2 text-sm ring-1 ring-white/10">
                {opts.map(o=> <option key={o} value={o}>{o}</option>)}
              </select>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <motion.div key={c.id} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10">
              <div className="relative h-44 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-black/60 text-white ring-1 ring-white/10">
                  {c.available ? 'Available' : 'Unavailable'}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{c.name}</h3>
                  <div className="text-emerald-400 font-bold">SAR {c.price}<span className="text-xs text-white/60 font-normal">/day</span></div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
                  {c.features.map(f => (
                    <span key={f} className="px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">{f}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={`/cars/${c.id}`} className="text-sm text-white/90 hover:text-white underline-offset-4 hover:underline">Details</a>
                  <a href={`/booking?car=${c.id}`} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500">
                    <Check size={16} /> Book
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
