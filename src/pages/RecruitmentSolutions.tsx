import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, Users, ThumbsUp, Target, ShieldCheck, Zap } from "lucide-react";

export default function RecruitmentSolutions() {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
      text: "Years of specialized experience"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "A team of qualified professionals spread across India"
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-green-600" />,
      text: "Exceptional client servicing experience."
    }
  ];

  const strengths = [
    {
      title: "Communication",
      description: "Clear and transparent communication throughout the recruitment lifecycle.",
      icon: <Zap className="w-8 h-8 text-green-500" />
    },
    {
      title: "Engagement",
      description: "Deep engagement with both clients and candidates to ensure the perfect fit.",
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: "Relationships",
      description: "Building strong, long-term working relationships based on trust.",
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: "Project Management",
      description: "Efficient project management to meet tight deadlines and complex requirements.",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/recruitment/1920/1080?blur=10" 
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
            Recruitment Solutions
          </motion.h1>
          
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight leading-tight">
                  Exceptional Professionals for Exceptional Organizations
                </h2>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our biggest strengths are communication, engagement, strong working relationships, and efficient project management.
                </p>
                <p>
                  We provide multiple services, and have been searching and placing exceptional professionals for our clients.
                </p>
                <p>
                  We work PAN India with leading and most recognizable organizations in almost all verticals of HR services.
                </p>
              </div>

              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-[#1c1c1c]">When you choose raFT Consulting as your partner you get:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-sm border border-gray-100 group hover:border-green-500 transition-colors">
                      <div className="shrink-0 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <span className="font-bold text-[#1c1c1c]">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {strengths.map((strength, index) => (
                <div key={index} className="bg-white p-10 shadow-2xl border-b-4 border-green-500 space-y-6 hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                    {strength.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1c1c1c]">{strength.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{strength.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
