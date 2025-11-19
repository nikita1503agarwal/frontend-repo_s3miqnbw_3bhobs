import Navbar from '../components/Navbar'
import ContactSupport from '../components/ContactSupport'

export default function Contact(){
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ContactSupport />
      </div>
    </div>
  )
}
