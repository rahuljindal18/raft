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
              <a href="mailto:info@raftconsulting.in" className="text-lg font-bold hover:text-green-500 transition-colors">info@raftconsulting.in</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-green-500">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h6 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-1">Call</h6>
              <a href="tel:+919810304630" className="text-lg font-bold hover:text-green-500 transition-colors">+91-9810304630</a>
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
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
              <input type="tel" placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors" />
              <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-bold uppercase tracking-widest text-sm transition-all">Send</button>
            </form>
          </div>

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

          {/* Recent Posts */}
          <div>
            <h4 className="text-xl font-bold mb-8">Blog</h4>
            <div className="space-y-8">
              {[
                { 
                  title: "Leadership Styles which can help Transformation.", 
                  date: "April 10, 2024", 
                  slug: "leadership-styles-which-can-help-transformation",
                  img: "https://raftconsulting.in/wp-content/uploads/2024/04/Untitled-design-1-70x70.png" 
                },
                { 
                  title: "Role of HR in Learning and Development", 
                  date: "March 06, 2024", 
                  slug: "role-of-hr-in-learning-and-development",
                  img: "https://raftconsulting.in/wp-content/uploads/2024/03/Green-and-Beige-Human-Resources-Modern-Presentation--70x70.png" 
                }
              ].map((post, i) => (
                <div key={i} className="flex gap-4 group">
                  <img src={post.img} className="w-16 h-16 object-cover rounded-sm" alt="Post" />
                  <div>
                    <h5 className="text-sm font-bold leading-snug group-hover:text-green-500 transition-colors">
                      <Link to={`/${post.slug}/`}>{post.title}</Link>
                    </h5>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
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
