import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/contact/1920/1080?blur=10" 
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
            Contact Us
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">raFT Consulting</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className="w-20 h-20 bg-green-50 mx-auto rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1c1c1c] mb-4">Our Address</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                A-9 Sector 59 Noida, District Gautam Buddha Nagar, <br />
                Uttar Pradesh - 201301
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className="w-20 h-20 bg-green-50 mx-auto rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1c1c1c] mb-4">Call Us</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                <a href="tel:+919810304630" className="hover:text-green-600 transition-colors">+91-9810304630</a> <br />
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
            >
              <div className="w-20 h-20 bg-green-50 mx-auto rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1c1c1c] mb-4">Email Us</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                <a href="mailto:info@raftconsulting.in" className="hover:text-green-600 transition-colors">info@raftconsulting.in</a> <br />
                We'll respond within 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h6 className="text-green-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Get in Touch</h6>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-500 mt-6 text-lg leading-relaxed">
                  Have a question or want to discuss a potential partnership? Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all appearance-none">
                    <option>Recruitment Solutions</option>
                    <option>Outsourced Staffing</option>
                    <option>Learning & Development</option>
                    <option>Accounting Compliances</option>
                    <option>Other Queries</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={6}
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all flex items-center gap-3 group shadow-lg shadow-green-600/20">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.208757434149!2d77.35140831508177!3d28.593510982433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50702b8572d%3A0x79c13b7a353023e!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648100000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1c1c1c] text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-10">Looking for a Career at RaFT?</h2>
          <Link 
            to="/careers-at-raft/" 
            className="inline-block bg-white text-[#1c1c1c] px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-green-500 hover:text-white transition-all"
          >
            Join Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
