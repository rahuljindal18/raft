import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckSquare, DollarSign, TrendingUp, Zap, UserCheck, BarChart3 } from "lucide-react";

export default function OutsourcedStaffing() {
  const benefits = [
    {
      title: "Reduced Cost",
      description: "One of the prime benefits of working with raFT is its cost-effectiveness - our clients have had to manage less, hence invest less.",
      icon: <DollarSign className="w-6 h-6 text-green-600" />
    },
    {
      title: "Scalability",
      description: "Our customers have come back to us with growth/de-growth and we have hand-held them through the process of scale-up and scale-down with much ease.",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />
    },
    {
      title: "Reduced Time-to-Hire",
      description: "Our constantly updated databases and experienced recruiters have given our clients just-in-time resources.",
      icon: <Zap className="w-6 h-6 text-green-600" />
    },
    {
      title: "Improved Candidate Quality",
      description: "It's our endeavour to manage high fitment of Skills and Attributes, thus giving a reduced time to train and deploy.",
      icon: <UserCheck className="w-6 h-6 text-green-600" />
    },
    {
      title: "Analytics and Reporting",
      description: "Once on our rolls and your floor, we take an initiative to give you updated analytics on the WHAT and HOW of the resource deployed.",
      icon: <BarChart3 className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/staffing/1920/1080?blur=10" 
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
            Outsourced Staffing
          </motion.h1>
          
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4"
            >
              Strategic Partnership
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] tracking-tight leading-tight">
              Giving Our Clients That Edge
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed italic">
              "The concept is not new, but has constantly improved to give our clients that edge."
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#1c1c1c] mb-2 tracking-tight">Five Key Benefits</h3>
            <p className="text-gray-500">Experience the raFT advantage in outsourced staffing.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 shadow-sm border border-gray-100 group hover:border-green-500 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-4">{benefit.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-[#1c1c1c] tracking-tight">Our Commitment to Quality</h3>
              <p className="text-lg text-gray-500 leading-relaxed">
                We don't just provide resources; we manage the entire lifecycle of the staffing process. From initial sourcing to ongoing performance analytics, we ensure that every professional on your floor meets the high standards of your organization.
              </p>
              <ul className="space-y-4">
                {[
                  "Rigorous skill assessment and attribute matching",
                  "Just-in-time resource deployment",
                  "Comprehensive scalability support",
                  "Data-driven reporting and insights"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1c1c1c] font-bold">
                    <CheckSquare className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/team/800/600" 
                alt="Our Team" 
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-green-500 p-12 hidden md:block">
                <p className="text-white text-4xl font-bold tracking-tighter">100%</p>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1c1c1c] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Scale your workforce with confidence.</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Partner with raFT Consulting for reliable, cost-effective, and scalable staffing solutions.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact-us" 
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all shadow-2xl"
            >
              Get a Consultation
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
