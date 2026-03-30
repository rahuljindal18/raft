import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Upload, Send, Phone, Mail, User } from "lucide-react";

export default function SubmitResume() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/resume/1920/1080?blur=10" 
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
            Submit Your Resume
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Submit Your Resume</span>
          </nav>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-16 rounded-sm border border-gray-100 shadow-sm"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-4 tracking-tight">Join Our Talent Pool</h2>
              <p className="text-gray-500">Fill out the form below and upload your latest CV. We'll get in touch when a suitable opportunity arises.</p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                    <User className="w-3 h-3 text-green-500" />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                    <Phone className="w-3 h-3 text-green-500" />
                    Mobile Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter mobile number"
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Mail className="w-3 h-3 text-green-500" />
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="Enter email address"
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your career goals..."
                  className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Upload className="w-3 h-3 text-green-500" />
                  Upload CV
                </label>
                <div className="relative group">
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-white border-2 border-dashed border-gray-200 px-6 py-10 rounded-sm text-center group-hover:border-green-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-300 mx-auto mb-4 group-hover:text-green-500 transition-colors" />
                    <p className="text-sm text-gray-400 font-medium">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-gray-300 uppercase mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-[#1c1c1c] text-white py-5 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-lg group">
                Submit Application
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-[#1c1c1c]">Email Us</h4>
              <p className="text-gray-500">Send your queries to<br/><a href="mailto:jobs@raftconsulting.in" className="text-green-600 font-bold">jobs@raftconsulting.in</a></p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-[#1c1c1c]">Call Us</h4>
              <p className="text-gray-500">Speak with our recruiters<br/><span className="text-green-600 font-bold">+91-9560333643</span></p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <User className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-[#1c1c1c]">Careers</h4>
              <p className="text-gray-500">Learn more about our culture<br/><Link to="/about" className="text-green-600 font-bold">Work at RaFT</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
