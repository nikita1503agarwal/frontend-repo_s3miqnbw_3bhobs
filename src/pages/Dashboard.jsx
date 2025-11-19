import Navbar from '../components/Navbar'

export default function Dashboard(){
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <p className="text-white/60 mt-1">Manage reservations and profile.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Upcoming Trips</h3>
            <div className="text-white/60 text-sm mt-2">No upcoming trips yet.</div>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Profile</h3>
            <div className="text-white/60 text-sm mt-2">Name, Phone, Preferences</div>
          </div>
        </div>
      </div>
    </div>
  )
}
