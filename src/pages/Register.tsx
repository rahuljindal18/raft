import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight, Upload } from "lucide-react";

export default function Register() {
  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/register/1920/1080?blur=10" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-6xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Register With Us
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Register With Us</span>
          </nav>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Mail className="w-8 h-8 text-green-500" />, 
                title: "Mail", 
                content: <a href="mailto:info@raftconsulting.in" className="hover:text-green-500 transition-colors">info@raftconsulting.in</a> 
              },
              { 
                icon: <Phone className="w-8 h-8 text-green-500" />, 
                title: "Call", 
                content: <a href="tel:+919810304630" className="hover:text-green-500 transition-colors">+91-9810304630</a> 
              },
              { 
                icon: <MapPin className="w-8 h-8 text-green-500" />, 
                title: "Address", 
                content: "Noida | Delhi | Bangalore" 
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 p-8 border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h6 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h6>
                  <p className="text-lg font-bold text-[#1c1c1c]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* India Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-8 border-l-4 border-green-500 pl-4">
                For Job Opportunities In India
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                  <input type="tel" placeholder="Mobile Number" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
                
                <div className="relative">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Upload CV</p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Abroad Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-8 border-l-4 border-green-500 pl-4">
                For Study & Work Abroad
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                  <input type="tel" placeholder="Mobile Number" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                </div>
                <input type="email" placeholder="Email" className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <select className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors appearance-none text-gray-500">
                    <option>Country Of Preference</option>
                    <option>Dubai</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>UK</option>
                  </select>
                  <select className="w-full bg-gray-50 border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors appearance-none text-gray-500">
                    <option>Nationality</option>
                    <option>Indian</option>
                    <option>Other</option>
                  </select>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full">
        <iframe 
          title="Raft Consulting Location"
          src="https://maps.google.com/maps?q=Raft%20Consulting%20Services%20Private%20Limited&t=m&z=15&output=embed&iwloc=near" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
