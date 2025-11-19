import { MessageCircle, MapPin, Phone, WhatsappLogoIcon } from 'lucide-react'

export default function ContactSupport(){
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact & Support</h2>
            <p className="text-white/60 mt-2">We are here 24/7 on WhatsApp and live chat.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://wa.me/966500000000" target="_blank" className="rounded-2xl p-5 bg-emerald-600/20 text-emerald-200 ring-1 ring-emerald-500/30 hover:bg-emerald-600/30 transition">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-80">Tap to chat with us</div>
              </a>
              <button className="rounded-2xl p-5 bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 transition">
                <div className="font-semibold">Live Chat</div>
                <div className="text-sm opacity-70">Start a conversation</div>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10">
                <div className="font-semibold text-white">Riyadh</div>
                <div className="text-sm text-white/60">King Fahd Rd, Olaya</div>
              </div>
              <div className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10">
                <div className="font-semibold text-white">Jeddah</div>
                <div className="text-sm text-white/60">Al Andalus, Prince Mohammed Bin Abdulaziz St</div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[320px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <iframe title="KSA Map" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8677485.529930534!2d41.1719153!3d23.884151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1530a6d66ed2ad8f%3A0x4b2a247e790e6a2b!2sSaudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
