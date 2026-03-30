import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function TopBar() {
  return (
    <div className="text-slate-300 py-2 text-[13px] border-b border-white/5 hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:hr@raftconsulting.in" className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <Mail className="w-4 h-4 text-green-500" />
            <span>hr@raftconsulting.in</span>
          </a>
          <a href="tel:+919810304630" className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <Phone className="w-4 h-4 text-green-500" />
            <span>+91-9560333643</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-500" />
            <span>A-9 Sector 59 Noida, District Gautam Buddha Nagar, Uttar Pradesh - 201301</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/81929921/admin/" className="hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
          <a href="https://www.instagram.com/raftconsultants/" className="hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
}
