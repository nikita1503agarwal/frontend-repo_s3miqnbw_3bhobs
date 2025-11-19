import Navbar from '../components/Navbar'
import FleetSection from '../components/FleetSection'

export default function Fleet(){
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        <FleetSection />
      </div>
    </div>
  )
}
