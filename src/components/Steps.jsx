import { motion } from 'framer-motion'
import { Car, Calendar, User, CreditCard } from 'lucide-react'

const steps = [
  { icon: Car, title: 'Choose Car', desc: 'Select from our premium fleet' },
  { icon: Calendar, title: 'Choose Date', desc: 'Pick your dates and location' },
  { icon: User, title: 'Driver Info', desc: 'Enter your details securely' },
  { icon: CreditCard, title: 'Confirm & Pay', desc: 'Instant confirmation' },
]

export default function Steps() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Booking Process</h2>
        <p className="text-white/60 mt-2">Simple, fast, and secure.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-items-center text-white shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                <s.icon />
              </div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
