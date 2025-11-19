import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import CarDetails from './pages/CarDetails'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
