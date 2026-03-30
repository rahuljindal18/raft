import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Search, FolderOpen, MessageCircle, User, Calendar, ChevronLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Leadership Styles which can help Transformation.",
    slug: "leadership-styles-which-can-help-transformation",
    image: "https://raftconsulting.in/wp-content/uploads/2024/04/Untitled-design-1.png",
    date: "April 10, 2024",
    category: "Business",
    comments: 0,
    excerpt: "Leadership styles refer to the approaches, behaviors, and attitudes that leaders employ to guide, motivate, and manage their teams or organizations. There are various leadership styles, each with its own characteristics, advantages, and drawbacks...",
    author: "Raft"
  },
  {
    id: 2,
    title: "Role of HR in Learning and Development",
    slug: "role-of-hr-in-learning-and-development",
    image: "https://raftconsulting.in/wp-content/uploads/2024/03/Green-and-Beige-Human-Resources-Modern-Presentation-.png",
    date: "March 6, 2024",
    category: "Business",
    comments: 0,
    excerpt: "Human Resources plays a pivotal role in shaping the learning and development landscape within an organization. From identifying skill gaps to implementing training programs...",
    author: "Raft"
  },
  {
    id: 3,
    title: "Essential traits for post pandemic leadership",
    slug: "essential-traits-for-post-pandemic-leadership",
    image: "https://picsum.photos/seed/leadership/1920/1080",
    date: "March 6, 2024",
    category: "Business",
    comments: 0,
    excerpt: "The pandemic has fundamentally changed how we work and lead. In this post, we explore the essential traits that leaders must possess to thrive in the post-pandemic era...",
    author: "Raft"
  },
  {
    id: 4,
    title: "Six Effective ways to clear the interview",
    slug: "six-effective-ways-to-clear-the-interview",
    image: "https://raftconsulting.in/wp-content/uploads/2024/02/Interview.png",
    date: "February 15, 2024",
    category: "Business",
    comments: 0,
    excerpt: "Preparing for an interview can be daunting. Here are six effective ways to ensure you stand out and clear your next big interview with confidence...",
    author: "Raft"
  },
  {
    id: 5,
    title: "The Future of Remote Work in 2025",
    slug: "the-future-of-remote-work-in-2025",
    image: "https://picsum.photos/seed/remote/1920/1080",
    date: "January 20, 2024",
    category: "Hiring Staff",
    comments: 2,
    excerpt: "As we move further into the decade, remote work continues to evolve. Companies are now focusing on hybrid models that balance flexibility with collaboration...",
    author: "Raft"
  },
  {
    id: 6,
    title: "Building a Strong Employer Brand",
    slug: "building-a-strong-employer-brand",
    image: "https://picsum.photos/seed/branding/1920/1080",
    date: "January 5, 2024",
    category: "Recruitment",
    comments: 5,
    excerpt: "Your employer brand is your reputation among current and potential employees. Learn how to craft a narrative that attracts top talent...",
    author: "Raft"
  },
  {
    id: 7,
    title: "Upskilling: The Key to Employee Retention",
    slug: "upskilling-the-key-to-employee-retention",
    image: "https://picsum.photos/seed/upskilling/1920/1080",
    date: "December 15, 2023",
    category: "Learning & Development",
    comments: 1,
    excerpt: "Investing in your employees' growth is one of the most effective ways to keep them engaged and loyal to your organization...",
    author: "Raft"
  },
  {
    id: 8,
    title: "Navigating the Great Resignation",
    slug: "navigating-the-great-resignation",
    image: "https://picsum.photos/seed/resignation/1920/1080",
    date: "November 28, 2023",
    category: "Business",
    comments: 3,
    excerpt: "Understanding why employees are leaving and how to create a workplace that makes them want to stay is crucial for modern businesses...",
    author: "Raft"
  }
];

const categories = [
  { name: "Business", count: 12 },
  { name: "Hiring Staff", count: 8 },
  { name: "Learning & Development", count: 15 },
  { name: "Recruitment", count: 10 }
];

const tags = [
  "Employer Branding", "HR Trends", "Job Seekers", "Nelson Mandela", "Quotes", "Strategies", "Talent Acquisition", "Thought", "Trends"
];

const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPosts]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Page Title & Breadcrumb */}
      <section className="relative py-32 bg-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/blog/1920/1080?blur=10" 
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
            Blog
          </motion.h1>
          <nav className="flex justify-center items-center gap-2 text-white/60 font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-green-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-500">Blog</span>
          </nav>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Side */}
            <div className="lg:w-2/3 space-y-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post, index) => (
                      <div key={post.id} className="group">
                        <div className="relative overflow-hidden mb-8">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-0 left-0 bg-green-500 text-white px-6 py-4 font-bold">
                            <div className="text-2xl leading-none">{post.date.split(' ')[1].replace(',', '')}</div>
                            <div className="text-xs uppercase tracking-widest opacity-80">{post.date.split(' ')[0]}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                            <div className="flex items-center gap-2">
                              <FolderOpen className="w-4 h-4 text-green-500" />
                              <span className="hover:text-green-500 cursor-pointer transition-colors">{post.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-green-500" />
                              <span>{post.comments} Comments</span>
                            </div>
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] hover:text-green-500 transition-colors leading-tight">
                            <Link to={`/${post.slug}/`}>{post.title}</Link>
                          </h2>
                          
                          <p className="text-gray-500 leading-relaxed text-lg">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-gray-400" />
                              </div>
                              <span className="text-sm font-bold text-[#1c1c1c]">by {post.author}</span>
                            </div>
                            <Link 
                              to={`/${post.slug}/`}
                              className="flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest text-xs group/btn"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20">
                      <h3 className="text-2xl font-bold text-gray-400">No posts found matching your search.</h3>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center gap-2 pt-12">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-12 h-12 flex items-center justify-center rounded-sm transition-colors ${
                      currentPage === 1 
                        ? "bg-gray-50 text-gray-300 cursor-not-allowed" 
                        : "bg-gray-100 text-[#1c1c1c] hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-12 h-12 flex items-center justify-center font-bold rounded-sm transition-colors ${
                        currentPage === i + 1 
                          ? "bg-green-500 text-white" 
                          : "bg-gray-100 text-[#1c1c1c] hover:bg-green-500 hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-12 h-12 flex items-center justify-center rounded-sm transition-colors ${
                      currentPage === totalPages 
                        ? "bg-gray-50 text-gray-300 cursor-not-allowed" 
                        : "bg-gray-100 text-[#1c1c1c] hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Side */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search Widget */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-green-500">
                  Search
                </h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-gray-50 p-8 rounded-sm">
                <h4 className="text-xl font-bold text-[#1c1c1c] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-green-500">
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post) => (
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
                          <Link to={`/${post.slug}/`}>{post.title}</Link>
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
                  {categories.map((cat, i) => (
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
                  {tags.map((tag, i) => (
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
