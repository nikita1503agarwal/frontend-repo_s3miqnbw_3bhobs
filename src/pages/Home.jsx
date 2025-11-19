import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FleetSection from '../components/FleetSection'
import Steps from '../components/Steps'
import ContactSupport from '../components/ContactSupport'

export default function Home(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FleetSection />
      <Steps />
      <ContactSupport />
      <footer className="border-t border-white/10 py-10 text-center text-white/60 bg-[#090909]">© {new Date().getFullYear()} Najm Rent • Riyadh • Jeddah</footer>
    </div>
  )
}
