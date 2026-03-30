import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Target, 
  Lightbulb, 
  Settings, 
  CheckCircle2, 
  Briefcase, 
  Database, 
  Smile, 
  ChevronLeft, 
  ChevronRight, 
  Minus 
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("clients");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Helping Businesses Grow",
      description: "Organizations need the right resource to grow and expand their horizons in the new business scenario. We let businesses focus on their core capability while we add to their resources.",
      image: "https://raftconsulting.in/wp-content/uploads/2022/11/nasa-Q1p7bh3SHj8-unsplash-1-scaled.jpg"
    },
    {
      title: "Right Candidate | Right Skills | Right Fit",
      description: "Recruitment is all about understanding the basic characteristics of your organisation. Giving you the right fit each time, in terms of Knowledge, Skills and Attributes.",
      image: "https://raftconsulting.in/wp-content/uploads/2022/11/clayton-cardinalli-hkJNx0EDbjE-unsplash-scaled.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Banner Carousel */}
      <section className="relative h-[650px] overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slides[currentSlide].image}')` }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1400px] mx-auto px-4 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-relaxed opacity-90">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Carousel Controls */}
        <div className="absolute bottom-10 right-10 flex gap-4 z-20">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Recruitment Solutions", 
                icon: <Target className="w-10 h-10 text-green-600" />,
                img: "https://raftconsulting.in/wp-content/uploads/2022/11/benjamin-child-GWe0dlVD9e0-unsplash-scaled.jpg",
                link: "/recruitment-solutions/"
              },
              { 
                title: "Staffing Solutions", 
                icon: <Lightbulb className="w-10 h-10 text-green-600" />,
                img: "https://raftconsulting.in/wp-content/uploads/2022/11/smartworks-coworking-Uz8THWPXwhI-unsplash-scaled.jpg",
                link: "/outsourced-staffing/"
              },
              { 
                title: "Learning and Development", 
                icon: <Settings className="w-10 h-10 text-green-600" />,
                img: "https://raftconsulting.in/wp-content/uploads/2022/11/carlos-arthur-m-r-963uzyQwa6s-unsplash-scaled.jpg",
                link: "/learning-and-development/"
              },
              { 
                title: "Accounting Compliances", 
                icon: <CheckCircle2 className="w-10 h-10 text-green-600" />,
                img: "https://raftconsulting.in/wp-content/uploads/2022/11/gemma-evans-X9BaomHPW-s-unsplash-scaled.jpg",
                link: "/accounting-compliances/"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center">
                <div className="p-10 flex flex-col items-center">
                  <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-6 h-14 flex items-center">{feature.title}</h3>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6">
                    <img 
                      src={feature.img} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <Link to={feature.link} className="bg-green-600 text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-slate-900 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-8">
            <div className="w-12 h-1 bg-green-500 mx-auto mb-2"></div>
            <div className="w-8 h-1 bg-green-500 mx-auto"></div>
          </div>
          <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed italic">
            "At raFT, we are committed to building value for our customers. Each project, each hire, each advice has to be a value add to our clients. This partnership of profit is by far the most sustainable Motto of our business."
          </p>
        </div>
      </section>

      {/* Funfact Section */}
      <section className="py-24 bg-[#1c1c1c] text-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { count: "1800", label: "Projects Completed", icon: <Briefcase className="w-12 h-12 text-green-500 mx-auto mb-6" /> },
              { count: "500", label: "Employer Solutions", icon: <Lightbulb className="w-12 h-12 text-green-500 mx-auto mb-6" /> },
              { count: "250000", label: "Resume Database", icon: <Database className="w-12 h-12 text-green-500 mx-auto mb-6" /> },
              { count: "500", label: "Happy Customers", icon: <Smile className="w-12 h-12 text-green-500 mx-auto mb-6" /> }
            ].map((stat, i) => (
              <div key={i}>
                {stat.icon}
                <div className="text-5xl font-bold mb-2 text-green-500">{stat.count}</div>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Section (Tabs) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-10">
                <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Value to our Customers</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Single Window Corporate Solutions</h2>
              </div>
              <button className="bg-green-600 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 transition-colors">
                Connect With Us
              </button>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
              <div className="flex gap-4 mb-10 border-b border-slate-200">
                <button 
                  onClick={() => setActiveTab("clients")}
                  className={`pb-4 px-4 font-bold uppercase tracking-widest text-sm transition-all relative ${activeTab === "clients" ? "text-green-600" : "text-slate-400 hover:text-slate-600"}`}
                >
                  For Clients
                  {activeTab === "clients" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-green-600" />}
                </button>
                <button 
                  onClick={() => setActiveTab("candidates")}
                  className={`pb-4 px-4 font-bold uppercase tracking-widest text-sm transition-all relative ${activeTab === "candidates" ? "text-green-600" : "text-slate-400 hover:text-slate-600"}`}
                >
                  For Candidates
                  {activeTab === "candidates" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-green-600" />}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img 
                    src={activeTab === "clients" ? "https://raftconsulting.in/wp-content/uploads/2022/11/krakenimages-Y5bvRlcCx8k-unsplash-scaled.jpg" : "https://raftconsulting.in/wp-content/uploads/2022/11/charlesdeluvio-Lks7vei-eAg-unsplash-scaled.jpg"} 
                    className="w-full h-full object-cover"
                    alt="Agency"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {activeTab === "clients" 
                      ? "At raFT we are committed to give your that edge over your competition by offering you the best value proposition"
                      : "We at raFT respect your job preferences and your remuneration"}
                  </p>
                  <ul className="space-y-4">
                    {(activeTab === "clients" 
                      ? [
                        "Skills, Knowledge and Attribute Based Recruitment Process",
                        "Outsourced staffing services with skills and compensation matching",
                        "Learning and Development Solutions via a diagnostic approach",
                        "Reducing Costs with accounting advisory and compliances"
                      ] 
                      : [
                        "Best Support for Resume Updation",
                        "Get interviewed and shortlisted confidentially",
                        "Offering Jobs as per your current skill set and experience"
                      ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://raftconsulting.in/wp-content/uploads/2022/11/Screenshot-2022-11-28-at-3.18.33-PM.png" 
                className="w-full rounded-2xl shadow-2xl"
                alt="Solutions"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Solutions That Fit</h2>
              <h3 className="text-xl font-bold text-green-600 mb-8 uppercase tracking-widest text-sm">Recruitment | Staffing | Learning and Development | Accounting Compliances</h3>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                Our biggest strengths are communication, engagement, strong working relationships, and efficient project management. We provide multiple services, we take pride in enabling our clients to grow giving them the solutions they seek and solutions that fit. We work PAN India with leading and most recognisable organisations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Minus className="text-green-500 w-8 h-8" />
                    <h4 className="font-bold text-xl">Our Strategy</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">Our teams work in tandem with you to understand your dynamic requirements.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Minus className="text-green-500 w-8 h-8" />
                    <h4 className="font-bold text-xl">Our Mission</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">To add value to your business, thus enabling your organisation to achieve its goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Simplifying Solutions For You</span>
            <h2 className="text-4xl md:text-5xl font-bold">Our Process</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Connect with raFT", desc: "Call us or mail us and our team will get back to you in the shortest time period" },
              { step: "02", title: "Share your Requirements", desc: "Our experienced teams, form an extension of your organisation by understanding your requirements with a detailed approach" },
              { step: "03", title: "Contract With Us", desc: "We will ensure the advisory process is easy and cost effective in order to sustain your organisational growth" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="mb-10 relative">
                  <div className="w-24 h-24 bg-slate-50 rounded-full mx-auto flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500">
                    <Briefcase className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="absolute -top-2 right-1/2 translate-x-12 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Get the right Solution for your business at raFT
          </h2>
          <Link to="/contact-us/" className="bg-white text-green-600 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <div className="mb-8">
                <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Micro Blogs</span>
                <h2 className="text-4xl font-bold leading-tight">Latest News & Articles</h2>
              </div>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We encourage you to have a look at our daily Micro Blogs and give your inputs on what you observe can be done better.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { 
                  date: "10 Apr", 
                  title: "Leadership Styles which can help Transformation.", 
                  slug: "leadership-styles-which-can-help-transformation",
                  img: "https://raftconsulting.in/wp-content/uploads/2024/04/Untitled-design-1-370x265.png" 
                },
                { 
                  date: "06 Mar", 
                  title: "Role of HR in Learning and Development", 
                  slug: "role-of-hr-in-learning-and-development",
                  img: "https://raftconsulting.in/wp-content/uploads/2024/03/Green-and-Beige-Human-Resources-Modern-Presentation--370x265.png" 
                }
              ].map((blog, i) => (
                <div key={i} className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={blog.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Blog" />
                    <div className="absolute top-4 left-4 bg-green-600 text-white p-2 text-center rounded-sm min-w-[60px]">
                      <div className="font-bold text-lg leading-none">{blog.date.split(' ')[0]}</div>
                      <div className="text-xs uppercase font-bold">{blog.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> Business</span>
                      <span className="flex items-center gap-1"><Smile className="w-3 h-3" /> 0 Comments</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                      <Link to={`/${blog.slug}/`}>{blog.title}</Link>
                    </h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">By raft</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
