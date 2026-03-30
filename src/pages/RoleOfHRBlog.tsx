import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, FolderOpen, MessageCircle, User, Calendar, Facebook, Twitter, Instagram } from "lucide-react";

export default function RoleOfHRBlog() {
  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/hr/1920/1080?blur=10" 
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
            Blog Post
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">raFT Consulting</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog/" className="hover:text-green-500 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Business</span>
          </nav>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Side */}
            <div className="lg:w-2/3">
              <div className="news-block-one">
                <div className="inner-box">
                  <figure className="relative overflow-hidden mb-8">
                    <img 
                      src="https://raftconsulting.in/wp-content/uploads/2024/03/Green-and-Beige-Human-Resources-Modern-Presentation-.png" 
                      alt="Role of HR"
                      className="w-full aspect-[16/9] object-cover rounded-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 left-0 bg-green-500 text-white px-8 py-6 font-bold">
                      <div className="text-3xl leading-none">06</div>
                      <div className="text-sm uppercase tracking-widest opacity-80">March 2024</div>
                    </div>
                  </figure>
                  
                  <div className="space-y-6">
                    <ul className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                      <li className="flex items-center gap-2">
                        <FolderOpen className="w-4 h-4 text-green-500" />
                        <Link to="/category/business/" className="hover:text-green-500 transition-colors">Business</Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span>0 Comments</span>
                      </li>
                    </ul>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] leading-tight">
                      Role of HR in Learning and Development
                    </h2>
                    
                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">1. Training Needs Analysis:</h3>
                          <p>
                            HR professionals collaborate with managers and department heads to identify skill gaps and determine the training needs of employees. This involves assessing current competencies, future requirements, and aligning them with organizational goals.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">2. Design and Delivery of Learning Programs:</h3>
                          <p>
                            HR plays a central role in designing and delivering effective learning programs. This includes selecting appropriate training methods, content development, and choosing the right delivery platforms. HR also ensures that these programs are in line with the overall business strategy.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">3. Talent Development and Succession Planning:</h3>
                          <p>
                            HR is responsible for identifying high-potential employees and developing talent pipelines. This involves creating succession plans and implementing strategies to prepare employees for leadership roles. By investing in continuous learning and development, HR helps ensure a pool of skilled individuals ready to take on key positions.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">4. Employee Engagement and Motivation:</h3>
                          <p>
                            HR contributes to employee engagement by fostering a culture of learning and growth within the organization. This includes promoting a positive attitude toward learning, recognizing and rewarding achievements, and providing opportunities for professional development. Engaged employees are more likely to participate actively in learning initiatives.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">5. Monitoring and Evaluation:</h3>
                          <p>
                            HR tracks the effectiveness of learning programs through various metrics and feedback mechanisms. This involves assessing the impact of training on employee performance, identifying areas for improvement, and making necessary adjustments to the L&D strategy. Regular evaluations help ensure that the organization’s learning initiatives align with its goals.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">6. Technology Integration:</h3>
                          <p>
                            With the advancement of technology, HR plays a role in integrating learning management systems (LMS) and other digital tools to streamline the learning process. This includes selecting and implementing technology solutions that enhance the accessibility, effectiveness, and efficiency of learning initiatives.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-[#1c1c1c]">7. Adapting to Changes and Trends:</h3>
                          <p>
                            HR professionals stay abreast of industry trends, changes in job roles, and emerging skills. By understanding the evolving landscape, HR can proactively update learning programs to address new challenges and opportunities, ensuring that employees remain equipped with the latest skills and knowledge.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-10 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-gray-400" />
                        </div>
                        <span className="text-lg font-bold text-[#1c1c1c]">by Raft</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Share:</span>
                        <div className="flex gap-2">
                          <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#1c1c1c] hover:bg-green-500 hover:text-white transition-all rounded-sm">
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#1c1c1c] hover:bg-green-500 hover:text-white transition-all rounded-sm">
                            <Twitter className="w-4 h-4" />
                          </button>
                          <button className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#1c1c1c] hover:bg-green-500 hover:text-white transition-all rounded-sm">
                            <Instagram className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Side */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Recent Posts Widget */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-green-500">
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      id: 1,
                      title: "Leadership Styles which can help Transformation.",
                      image: "https://raftconsulting.in/wp-content/uploads/2024/04/Untitled-design-1.png",
                      date: "10 Apr 2024",
                      link: "/leadership-styles-which-can-help-transformation/"
                    },
                    {
                      id: 2,
                      title: "Role of HR in Learning and Development",
                      image: "https://raftconsulting.in/wp-content/uploads/2024/03/Green-and-Beige-Human-Resources-Modern-Presentation-.png",
                      date: "06 Mar 2024",
                      link: "/role-of-hr-in-learning-and-development/"
                    },
                    {
                      id: 3,
                      title: "Essential traits for post pandemic leadership",
                      image: "https://picsum.photos/seed/leadership/1920/1080",
                      date: "06 Mar 2024",
                      link: "/essential-traits-for-post-pandemic-leadership/"
                    }
                  ].map((post) => (
                    <div key={post.id} className="flex gap-4 group">
                      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <h6 className="text-sm font-bold text-[#1c1c1c] leading-snug group-hover:text-green-500 transition-colors line-clamp-2">
                          <Link to={post.link}>{post.title}</Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-green-500">
                  Categories
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Business", count: 12 },
                    { name: "Hiring Staff", count: 8 },
                    { name: "Learning & Development", count: 15 },
                    { name: "Recruitment", count: 10 }
                  ].map((cat, i) => (
                    <li key={i} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-gray-500 font-bold group-hover:text-green-500 transition-colors">{cat.name}</span>
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-colors">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-green-500">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Employer Branding", "HR Trends", "Job Seekers", "Nelson Mandela", "Quotes", "Strategies", "Talent Acquisition", "Thought", "Trends"
                  ].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white border border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-widest rounded-sm hover:bg-green-500 hover:text-white hover:border-green-500 cursor-pointer transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
