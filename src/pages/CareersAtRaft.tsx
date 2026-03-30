import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, MapPin, Clock, GraduationCap } from "lucide-react";

export default function CareersAtRaft() {
  const requirements = [
    "Knowledge of MS Office – PowerPoint, Excel, Word, and Outlook",
    "Source candidates through various channels such as job portals, social media, and employee referrals.",
    "Screen resumes to evaluate candidates’ qualifications and fit for the role.",
    "Conduct initial interviews to shortlist potential hires.",
    "Collaborate with department heads to understand hiring requirements.",
    "Strong sourcing skills using platforms like Naukri, LinkedIn, or Indeed.",
    "Excellent communication and interpersonal skills.",
    "Ability to manage multiple tasks and meet deadlines.",
    "Proficient in MS Office and applicant tracking systems (ATS).",
    "Has great communication skills and can work in a team",
    "Can commute to the office 6 days a week (office in Noida)"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/careers/1920/1080?blur=10" 
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
            Careers At raFT
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Careers At raFT</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="border-l-4 border-green-500 pl-8 space-y-4">
              <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight">Research Intern Required</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                raFT Consulting is looking for an Intern to help them with Technical Recruitment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-8 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Position</p>
                  <p className="font-bold text-[#1c1c1c]">Technical Recruiter</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Duration</p>
                  <p className="font-bold text-[#1c1c1c]">3 Months (Paid)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</p>
                  <p className="font-bold text-[#1c1c1c]">Noida (On-site)</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#1c1c1c]">Skills and Attributes Needed</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-600 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1c1c1c] p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 space-y-6">
                <h4 className="text-3xl font-bold tracking-tight">Growth Opportunity</h4>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                  The internship will be for 3 months (paid). If the candidate comes up the curve, a suitable job offer will be made within the same company.
                </p>
                <div className="pt-4">
                  <Link 
                    to="/submit-resume" 
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-xl"
                  >
                    Apply for Internship
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1c1c1c] mb-4 tracking-tight">Why Work With Us?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We believe in nurturing talent and providing a platform for exponential career growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-sm border border-gray-100 space-y-4">
              <h5 className="text-xl font-bold text-[#1c1c1c]">Mentorship</h5>
              <p className="text-gray-500 leading-relaxed">Learn from industry veterans who are committed to your professional development.</p>
            </div>
            <div className="bg-white p-10 shadow-sm border border-gray-100 space-y-4">
              <h5 className="text-xl font-bold text-[#1c1c1c]">Innovation</h5>
              <p className="text-gray-500 leading-relaxed">Work on cutting-edge recruitment strategies and tools in a fast-paced environment.</p>
            </div>
            <div className="bg-white p-10 shadow-sm border border-gray-100 space-y-4">
              <h5 className="text-xl font-bold text-[#1c1c1c]">Impact</h5>
              <p className="text-gray-500 leading-relaxed">Help shape the careers of thousands of professionals across various industries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
