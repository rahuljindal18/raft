import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, Users, Lightbulb, MessageSquare, Heart, Shield, Clock, Brain, UserPlus, Presentation, UserCircle, RefreshCw, Share2 } from "lucide-react";

export default function LearningAndDevelopment() {
  const tenets = [
    { title: "Managing Self", description: "Developing personal effectiveness and emotional intelligence." },
    { title: "Managing Environment", description: "Navigating organizational dynamics and productivity." },
    { title: "Managing Others", description: "Building leadership and high-performing teams." }
  ];

  const nonNegotiables = [
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      text: "An experienced panel of facilitators"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      text: "An in-depth diagnostic or TNA that identifies the real needs"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-green-600" />,
      text: "Learning Content that delivers on results"
    }
  ];

  const modules = [
    {
      title: "Effective Communication",
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      items: [
        "The importance of effective communication",
        "Verbal and non-verbal communication skills",
        "Active listening techniques",
        "Building rapport and empathy",
        "Conflict resolution and negotiation strategies"
      ]
    },
    {
      title: "Emotional Intelligence",
      icon: <Heart className="w-8 h-8 text-green-500" />,
      items: [
        "Understanding emotional intelligence (EQ)",
        "Self-awareness and self-management",
        "Empathy and social awareness",
        "Developing effective interpersonal relationships",
        "Managing emotions under pressure"
      ]
    },
    {
      title: "Leadership and Teamwork",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      items: [
        "The qualities of an effective leader",
        "Building and leading high-performing teams",
        "Collaborative decision-making",
        "Conflict resolution within teams",
        "Motivating and inspiring others"
      ]
    },
    {
      title: "Time Management and Productivity",
      icon: <Clock className="w-8 h-8 text-green-500" />,
      items: [
        "Setting clear goals and priorities",
        "Planning and organizing your time effectively",
        "Overcoming procrastination and managing distractions",
        "Delegation and task prioritization",
        "Stress management and work-life balance"
      ]
    },
    {
      title: "Problem Solving and Critical Thinking",
      icon: <Brain className="w-8 h-8 text-green-500" />,
      items: [
        "Analytical thinking and problem-solving skills",
        "Identifying and evaluating different solutions",
        "Decision-making techniques",
        "Creative thinking and innovation",
        "Adaptability and resilience in the face of challenges"
      ]
    },
    {
      title: "Interpersonal Skills",
      icon: <UserPlus className="w-8 h-8 text-green-500" />,
      items: [
        "Building effective relationships with colleagues and clients",
        "Networking and professional etiquette",
        "Conflict resolution and constructive feedback",
        "Building trust and credibility",
        "Cultural sensitivity and diversity awareness"
      ]
    },
    {
      title: "Presentation Skills",
      icon: <Presentation className="w-8 h-8 text-green-500" />,
      items: [
        "Planning and structuring presentations",
        "Engaging your audience and using visual aids",
        "Overcoming stage fright and managing nerves",
        "Delivering persuasive and impactful speeches",
        "Handling questions and feedback"
      ]
    },
    {
      title: "Personal Branding",
      icon: <UserCircle className="w-8 h-8 text-green-500" />,
      items: [
        "Defining your personal brand",
        "Creating a positive online presence",
        "Professional etiquette and business communication",
        "Dressing for success and personal grooming",
        "Developing a strong professional reputation"
      ]
    },
    {
      title: "Adaptability and Resilience",
      icon: <RefreshCw className="w-8 h-8 text-green-500" />,
      items: [
        "Embracing change and uncertainty",
        "Developing a growth mindset",
        "Resilience-building techniques",
        "Managing stress and pressure",
        "Learning from failure and bouncing back"
      ]
    },
    {
      title: "Networking",
      icon: <Share2 className="w-8 h-8 text-green-500" />,
      items: [
        "The power of networking for career growth",
        "Building professional relationships",
        "Effective communication in networking situations",
        "Leveraging social media for networking",
        "Developing a networking strategy"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/learning/1920/1080?blur=10" 
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
            Learning And Development
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Learning And Development</span>
          </nav>
        </div>
      </section>

      {/* Intro Section */}
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
                  Customised Interventions for Your Unique Needs
                </h2>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At raFT we are committed to help our clients address their learning needs via our customised interventions. We believe in a solutions based approach for our clients.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {tenets.map((tenet, i) => (
                    <div key={i} className="bg-gray-50 p-6 border-t-2 border-green-500">
                      <h4 className="font-bold text-[#1c1c1c] mb-2">{tenet.title}</h4>
                      <p className="text-xs text-gray-500">{tenet.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-[#1c1c1c]">Our Non-Negotiables:</h3>
                <div className="space-y-4">
                  {nonNegotiables.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-sm border border-gray-100 group hover:border-green-500 transition-colors">
                      <div className="shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-bold text-[#1c1c1c]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <img 
                src="https://picsum.photos/seed/training/800/1000" 
                alt="Training Session" 
                className="w-full h-full object-cover shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 -right-10 bg-green-500 p-12 hidden xl:block">
                <p className="text-white text-4xl font-bold tracking-tighter">3</p>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Core Tenets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#1c1c1c] tracking-tight">Our Learning Modules</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive programmes designed to develop talent and drive organizational growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-10 shadow-sm border border-gray-100 group hover:border-green-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {module.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-6">{module.title}</h4>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1c1c1c] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Invest in your greatest asset.</h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Empower your team with the skills they need to excel in today's dynamic business environment.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact-us/" 
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-12 py-5 font-bold uppercase tracking-widest text-sm transition-all shadow-2xl"
            >
              Start Training Today
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
