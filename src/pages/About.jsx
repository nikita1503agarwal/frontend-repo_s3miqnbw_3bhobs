import Navbar from '../components/Navbar'

export default function About(){
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-white/70 mt-4 leading-relaxed">We are a premium car rental service in Saudi Arabia focused on reliability, luxury, and value. With branches in Riyadh and Jeddah, our mission is to deliver a seamless rental experience with top-tier vehicles and exceptional customer support.</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {['Luxury Fleet','24/7 Support','Trusted by Thousands'].map((t)=> (
            <div key={t} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 text-center">{t}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
