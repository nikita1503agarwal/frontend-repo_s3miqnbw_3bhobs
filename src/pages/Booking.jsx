import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Booking(){
  const [params] = useSearchParams()
  const carId = params.get('car')

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Booking</h1>
        <p className="text-white/60 mt-1">Complete your reservation in a few simple steps.</p>

        <form className="mt-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Pickup Date</label>
              <input type="date" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
            <div>
              <label className="text-sm text-white/70">Return Date</label>
              <input type="date" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
            <div>
              <label className="text-sm text-white/70">Phone (KSA)</label>
              <input type="tel" placeholder="05xxxxxxxx" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="text-sm text-white/70">Pickup City</label>
            <select className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2">
              <option>Riyadh</option>
              <option>Jeddah</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Link to="/fleet" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20">Back</Link>
            <Link to="/payment" className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500">Continue to Payment</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
