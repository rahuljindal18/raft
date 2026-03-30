import { Mail, Phone, MapPin, Briefcase, Smile } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-24 pb-0">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Footer Top Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 border-b border-white/5 pb-20">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-green-500">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h6 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-1">Mail</h6>
              <a href="mailto:hr@raftconsulting.in" className="text-lg font-bold hover:text-green-500 transition-colors">hr@raftconsulting.in</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-green-500">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h6 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-1">Call</h6>
              <a href="tel:+919560333643" className="text-lg font-bold hover:text-green-500 transition-colors">+91-9560333643</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-green-500">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h6 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-1">Address</h6>
              <p className="text-sm font-bold text-slate-200">A-9 Sector 59 Noida, UP - 201301</p>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          

          {/* Explore Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/about-us/" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/our-solutions/" className="hover:text-green-500 transition-colors">Our Solutions</Link></li>
              <li><Link to="/contact-us/" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy/" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms/" className="hover:text-green-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Our Solutions</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link to="/recruitment-solutions/" className="hover:text-green-500 transition-colors">Recruitment Solutions</Link></li>
              <li><Link to="/outsourced-staffing/" className="hover:text-green-500 transition-colors">Outsourced Staffing</Link></li>
              <li><Link to="/learning-and-development/" className="hover:text-green-500 transition-colors">Learning & Development</Link></li>
              <li><Link to="/accounting-compliances/" className="hover:text-green-500 transition-colors">Accounting Compliances</Link></li>
            </ul>
          </div>

          
        </div>

        {/* Footer Bottom */}
        <div className="py-4 border-t border-white/5 flex justify-center items-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center">
            © 2023 | Developed By <a href="#" className="text-slate-300 hover:text-green-500">DigiComfy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
