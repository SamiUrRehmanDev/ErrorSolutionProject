import { useRef, useState } from 'react';
import { ExternalLink, Github, Award, TrendingUp, Sparkles } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "ASLense",
      description: "Revolutionary educational platform for deaf and mute students, featuring AI-powered sign language recognition and interactive learning modules with 95% accuracy.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI", "Computer Vision", "Education", "React"],
      stats: { users: "10K+", accuracy: "95%", awards: "3" },
      link: "#",
      featured: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time data visualization platform with ML-powered insights and predictive analytics for business intelligence, processing 1M+ data points daily.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["ML", "Analytics", "Dashboard", "Python"],
      stats: { dataPoints: "1M+", clients: "50+", uptime: "99.9%" },
      link: "#",
      featured: false
    },
    {
      title: "Automated Quality Control",
      description: "Computer vision system for manufacturing quality control, reducing defects by 95% through automated inspection and real-time monitoring.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Computer Vision", "Manufacturing", "AI", "IoT"],
      stats: { defectReduction: "95%", speed: "10x", savings: "$2M+" },
      link: "#",
      featured: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-teal-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-15 animate-floatReverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-gradient-radial from-teal-50 to-transparent opacity-40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Featured Projects
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-shadow">
            Our <span className="gradient-text">Work</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We turn research into real-world products. Explore some of our award-winning solutions that are making a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl lg:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer ${
                project.featured ? 'ring-2 ring-teal-200' : ''
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>
              )}
              
              {/* Image container with overlay effects */}
              <div className="relative overflow-hidden h-48 lg:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <button className="bg-white/90 backdrop-blur-sm text-black p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm text-black p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Animated particles */}
                {activeProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400 rounded-full animate-bounce-gentle"
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${20 + (i % 3) * 30}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-4 lg:p-6 relative">
                <h3 className="text-lg lg:text-xl font-bold text-black mb-2 lg:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3 lg:mb-4 p-2 lg:p-3 bg-gray-50 rounded-xl">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-base lg:text-lg font-bold text-teal-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 lg:px-3 lg:py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium hover:bg-teal-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Learn more button */}
                <button className="group/btn w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-2.5 lg:py-3 rounded-xl font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm lg:text-base">
                  View Project
                  <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-teal-600/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl lg:rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 lg:mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-4 lg:mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <button className="group bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-1 flex items-center gap-2 mx-auto">
              Start Your Project
              <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;