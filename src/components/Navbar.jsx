import { useState } from 'react'
import { Menu, X, Phone, Car, MessageCircle } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const activeClass = 'text-white'
  const baseClass = 'text-white/70 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-items-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <Car className="text-white" size={20} />
            </div>
            <span className="font-semibold text-white tracking-wide">Najm Rent</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => `${isActive ? activeClass : baseClass}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/booking" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition">
              <Car size={18} />
              <span>Book Now</span>
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white/80">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `block ${isActive ? activeClass : baseClass}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-600 text-white">
              <Car size={18} />
              <span>Book Now</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
