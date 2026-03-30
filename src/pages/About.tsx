import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, Target, Lightbulb, Settings, Users, Minus } from "lucide-react";

export default function About() {
  return (
    <div className="pt-[120px]">
      {/* Page Header */}
      <section className="relative py-24 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/nasa-Q1p7bh3SHj8-unsplash-1-scaled.jpg" 
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/clayton-cardinalli-hkJNx0EDbjE-unsplash-scaled.jpg" 
                  className="w-full"
                  alt="Who We Are"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500/10 rounded-full -z-0 blur-3xl"></div>
            </div>
            <div>
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">We are a team of dedicated consultants</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                raFT Consulting is a leading professional services firm that provides a wide range of solutions to businesses across various sectors. Our expertise lies in Recruitment, Staffing, Learning and Development, and Accounting Compliances.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We believe in building long-term partnerships with our clients, acting as an extension of their own teams. Our approach is diagnostic and tailored to the specific needs of each organization we work with.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Expert Consultants",
                  "Diagnostic Approach",
                  "PAN India Presence",
                  "Value Based Solutions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#f7f7f7]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To add value to your business, thus enabling your organisation to achieve its goals. We strive to be the most trusted partner for our clients by providing innovative and effective solutions that drive growth and success.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the preferred choice for organizations seeking single-window corporate solutions. We envision a future where businesses can focus on their core competencies while we handle their resource and compliance needs seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "We maintain the highest standards of professional and ethical conduct in all our interactions." },
              { title: "Excellence", desc: "We are committed to delivering superior quality in every project and every hire." },
              { title: "Partnership", desc: "We work as an extension of your team, sharing your goals and celebrating your success." }
            ].map((value, i) => (
              <div key={i} className="group">
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500">
                    <Settings className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Ready to grow your business with us?
          </h2>
          <Link to="/contact-us/" className="bg-white text-green-600 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 hover:text-white transition-all">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
