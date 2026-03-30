import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Briefcase, Clock, IndianRupee, Mail } from "lucide-react";

const openings = [
  {
    id: 1,
    company: "Edtech Domain-Based Company",
    position: "React Lead (Technical Lead)",
    experience: "6 to 10 years",
    salary: "As per standards",
    location: "Noida",
    description: "Should have experience as a Team Lead. Responsible for leading frontend development using React and managing a team of developers.",
    contact: "hr@raftconsulting.in",
    image: "https://raftconsulting.in/wp-content/uploads/2022/12/Screenshot-2022-12-05-at-1.21.43-PM-768x761.png"
  },
  {
    id: 2,
    company: "Global Consulting Firm",
    position: "Global Rewards Strategy Lead",
    experience: "8+ years",
    salary: "Competitive",
    location: "Remote / Hybrid",
    description: "Planning, designing, implementing, and administering a comprehensive global rewards strategy and programs including Compensation, Benefits and Employee wellness. Reports to Chief People Officer.",
    contact: "hr@raftconsulting.in",
    image: "https://raftconsulting.in/wp-content/uploads/2022/12/Screenshot-2022-11-29-at-1.27.16-PM-1024x848.png"
  }
];

const hiringBanners = [
  "https://raftconsulting.in/wp-content/uploads/2024/03/we-are-hiring-1-1024x1024.png",
  "https://raftconsulting.in/wp-content/uploads/2024/03/Red-And-White-We-Are-Hiring-Architect-Your-Story.png",
  "https://raftconsulting.in/wp-content/uploads/2024/03/Black-and-White-Minimalist-We-Are-Hiring-Instagram-Post.png"
];

export default function CurrentOpenings() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/jobs/1920/1080?blur=10" 
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
            Current Openings
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Current Openings</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="space-y-24">
            {/* Job Listings */}
            <div className="grid gap-12">
              {openings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row gap-12 items-start bg-gray-50 p-8 md:p-12 rounded-sm border border-gray-100"
                >
                  <div className="lg:w-1/3 shrink-0">
                    <img 
                      src={job.image} 
                      alt={job.position} 
                      className="w-full rounded-sm shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h6 className="text-green-600 font-bold uppercase tracking-widest text-xs mb-2">{job.company}</h6>
                      <h2 className="text-3xl font-bold text-[#1c1c1c] mb-4">{job.position}</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Exp: {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <IndianRupee className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Briefcase className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Full Time</span>
                      </div>
                    </div>

                    <p className="text-gray-500 leading-relaxed italic">
                      {job.description}
                    </p>

                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">How to apply</p>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-green-500" />
                        <span className="text-lg font-bold text-[#1c1c1c]">
                          mail your resume to: <a href={`mailto:${job.contact}`} className="text-green-600 hover:underline">{job.contact}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hiring Banners Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {hiringBanners.map((banner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={banner} 
                    alt="We are hiring" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Didn't find what you were looking for?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Submit your resume to our database and we'll contact you when a suitable position opens up.
          </p>
          <Link 
            to="/register" 
            className="inline-block bg-white text-green-600 px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#1c1c1c] hover:text-white transition-all shadow-xl"
          >
            Submit Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
