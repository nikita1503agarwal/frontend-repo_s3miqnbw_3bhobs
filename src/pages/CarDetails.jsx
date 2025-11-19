import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const carsSeed = [
  { id: 1, name: 'Toyota Camry', brand: 'Toyota', type: 'Sedan', price: 220, img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Hyundai Tucson', brand: 'Hyundai', type: 'SUV', price: 280, img: 'https://images.unsplash.com/photo-1627454824616-c0ac1b61f2a7?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Mercedes E-Class', brand: 'Mercedes', type: 'Luxury', price: 680, img: 'https://images.unsplash.com/photo-1614200179384-c8244e9f2d88?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Lexus RX', brand: 'Lexus', type: 'SUV', price: 520, img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop' },
]

export default function CarDetails(){
  const { id } = useParams()
  const car = carsSeed.find(c => String(c.id) === id)
  const navigate = useNavigate()

  if(!car){
    return (
      <div className="min-h-screen grid place-items-center bg-black text-white">
        <div>
          <p>Car not found.</p>
          <button className="underline" onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <img src={car.img} alt={car.name} className="w-full h-[360px] object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <p className="text-white/60 mt-2">{car.brand} • {car.type}</p>
            <div className="mt-4 text-emerald-400 font-bold text-2xl">SAR {car.price} <span className="text-sm text-white/60 font-normal">/ day</span></div>

            <div className="mt-6 flex gap-3">
              <Link to={`/booking?car=${car.id}`} className="rounded-full px-6 py-3 bg-emerald-600 hover:bg-emerald-500">Book Now</Link>
              <Link to="/fleet" className="rounded-full px-6 py-3 bg-white/10 hover:bg-white/20">Back to Fleet</Link>
            </div>
          </div>
        </div>

        {/* 360 viewer placeholder using panoramic scroll */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">360° View</h2>
          <div className="mt-3 rounded-2xl overflow-x-auto whitespace-nowrap ring-1 ring-white/10 bg-white/5 p-2">
            {[1,2,3,4,5,6,7,8].map(i => (
              <img key={i} src={car.img} alt="angle" className="inline-block w-64 h-40 object-cover rounded-lg mr-2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
