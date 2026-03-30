import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header 
      className="w-full transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-5xl font-bold tracking-tighter flex items-baseline">
              <span>r</span>
              <span className="relative inline-block mx-0.5">
                a
                <span className="absolute -top-1 left-0 w-full h-[3px] bg-green-500 rounded-full"></span>
              </span>
              <span>FT</span>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10 text-[16px] font-bold text-white">
            <div className="relative py-4 group">
              <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
              {/* Active underline */}
              {isHome && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              {/* Hover underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
            </div>

            <div className="relative py-4 group">
              <Link to="/about-us/" className="hover:text-green-500 transition-colors flex items-center gap-1">
                About Us
              </Link>
              {/* Active underline */}
              {location.pathname === "/about-us/" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              {/* Hover underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
            </div>

            <div className="relative group py-4">
              <Link to="/our-solutions/" className="hover:text-green-500 transition-colors flex items-center gap-1">
                Our Solutions
              </Link>
              {location.pathname === "/our-solutions/" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-[#1c1c1c] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-[110]">
                <div className="py-0">
                  <Link to="/recruitment-solutions/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors border-b border-white/5">Recruitment Solutions</Link>
                  <Link to="/outsourced-staffing/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors border-b border-white/5">Outsourced Staffng</Link>
                  <Link to="/learning-and-development/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors border-b border-white/5">Learning And Development</Link>
                  <div className="relative group/sub">
                    <Link to="/accounting-compliances/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors flex justify-between items-center">
                      Accounting Compliances
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                    
                    {/* Sub-menu for Accounting Compliances */}
                    <div className="absolute left-full top-0 w-[240px] bg-[#1c1c1c] shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-4 group-hover/sub:translate-x-0">
                      <div className="py-0">
                        <Link to="/accounting-compliances/#accounting" className="block px-8 py-4 text-sm text-white hover:text-green-500 transition-colors border-b border-white/5">Accounting Solutions</Link>
                        <Link to="/accounting-compliances/#goods" className="block px-8 py-4 text-sm text-white hover:text-green-500 transition-colors border-b border-white/5">Goods And Services Tax</Link>
                        <Link to="/accounting-compliances/#payroll" className="block px-8 py-4 text-sm text-white hover:text-green-500 transition-colors border-b border-white/5">Payroll Processing</Link>
                        <Link to="/accounting-compliances/#business" className="block px-8 py-4 text-sm text-white hover:text-green-500 transition-colors border-b border-white/5">Business Setup In India</Link>
                        <Link to="/accounting-compliances/#tax" className="block px-8 py-4 text-sm text-white hover:text-green-500 transition-colors">Tax Compliances</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group py-4">
              <span className={`hover:text-green-500 transition-colors flex items-center gap-1 cursor-pointer ${location.pathname.includes('openings') ? 'text-green-500' : ''}`}>
                Job Postings
                <ChevronDown className="w-4 h-4 opacity-50" />
              </span>
              {location.pathname === "/current-openings/" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-[#1c1c1c] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-[110]">
                <div className="py-0">
                  <Link to="/current-openings/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors border-b border-white/5">Current Openings</Link>
                  <Link to="/submit-your-resume/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors border-b border-white/5">Submit Your Resume</Link>
                  <Link to="/careers-at-raft/" className="block px-8 py-5 text-white hover:text-green-500 transition-colors">Careers At RaFT</Link>
                </div>
              </div>
            </div>
            <div className="relative py-4 group">
              <Link to="/register-with-us/" className="hover:text-green-500 transition-colors">Register With Us</Link>
              {/* Active underline */}
              {location.pathname === "/register-with-us/" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              {/* Hover underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
            </div>
            <div className="relative py-4 group">
              <Link to="/blog/" className="hover:text-green-500 transition-colors">Blog</Link>
              {/* Active underline */}
              {location.pathname === "/blog/" && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-100">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
                </div>
              )}
              {/* Hover underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-green-500"></div>
              </div>
            </div>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact-us/" 
              className="bg-[#28a745] hover:bg-[#218838] text-white px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-lg inline-block"
            >
              Business Queries
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
