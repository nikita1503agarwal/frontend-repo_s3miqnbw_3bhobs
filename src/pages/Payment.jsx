import Navbar from '../components/Navbar'

export default function Payment(){
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Payment</h1>
        <p className="text-white/60 mt-1">Secure checkout with instant confirmation.</p>

        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <label className="text-sm text-white/70">Cardholder Name</label>
            <input type="text" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <label className="text-sm text-white/70">Card Number</label>
            <input type="text" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <label className="text-sm text-white/70">Expiry</label>
              <input type="text" placeholder="MM/YY" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <label className="text-sm text-white/70">CVC</label>
              <input type="text" className="w-full mt-1 bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2" />
            </div>
          </div>
          <button className="mt-2 rounded-full px-6 py-3 bg-emerald-600 hover:bg-emerald-500">Pay Now</button>
        </div>
      </div>
    </div>
  )
}
