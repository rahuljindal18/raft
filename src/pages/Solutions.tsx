import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Briefcase, Users, GraduationCap, FileText, ChevronRight } from "lucide-react";

const solutions = [
  {
    title: "Recruitment Solutions",
    category: "Recruitment",
    description: "Finding the right candidate; ensuring the right fit is our endeavour",
    icon: <Briefcase className="w-10 h-10" />,
    image: "https://raftconsulting.in/wp-content/uploads/2021/03/service-1.jpg",
    link: "/recruitment-solutions"
  },
  {
    title: "Outsourced Staffing Solutions",
    category: "Staffing",
    description: "Giving your organisation the edge, to compete in a dynamic market.",
    icon: <Users className="w-10 h-10" />,
    image: "https://raftconsulting.in/wp-content/uploads/2021/03/service-2.jpg",
    link: "/outsourced-staffing"
  },
  {
    title: "Learning and Development",
    category: "Talent Management",
    description: "Enabling your teams to with tools of knowledge and productivity, with the help of experts in the field",
    icon: <GraduationCap className="w-10 h-10" />,
    image: "https://raftconsulting.in/wp-content/uploads/2021/03/service-3.jpg",
    link: "/learning-and-development"
  },
  {
    title: "Accounting Compliances",
    category: "Compliances",
    description: "Providing the right compliance advisory and solution for the smooth functioning of the business",
    icon: <FileText className="w-10 h-10" />,
    image: "https://raftconsulting.in/wp-content/uploads/2021/03/service-4.jpg",
    link: "/accounting-compliances"
  }
];

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/solutions/1920/1080?blur=10" 
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
            Our Solutions
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Our Solutions</span>
          </nav>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    {solution.category}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-4 text-green-500 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {solution.icon}
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-4 group-hover:text-green-500 transition-colors">
                    <Link to={solution.link}>{solution.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Link 
                    to={solution.link}
                    className="inline-flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-widest group/link"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  
                  {/* Background Icon Accent */}
                  <div className="absolute bottom-4 right-4 opacity-[0.03] pointer-events-none transform scale-150 group-hover:scale-[2] transition-transform duration-700">
                    {solution.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1c1c1c] p-12 md:p-20 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                Ready to transform your business?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
                Our experts are here to help you find the right solutions for your organizational needs.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 font-bold text-sm tracking-widest uppercase transition-all shadow-lg">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
