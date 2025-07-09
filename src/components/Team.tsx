import { useState } from 'react';
import { Award, Users, Target, Sparkles, Linkedin, Github, Mail, Star, Code, Brain, Eye } from 'lucide-react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Zahid Mittha",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary AI researcher and developer, known for pioneering work in machine learning and computer vision. Recipient of multiple academic awards and a published contributor to cutting-edge AI research.",
      specialties: ["AI Researcher", "Full Stack Development", "Research"],
      achievements: ["3× Academic Awards", "5× Champion in Coding & AI Competitions", "AI Research Pioneer"],
      social: {
        linkedin: "https://www.linkedin.com/in/zahid-mittha",
        github: "https://github.com/zahidyasinmittha?tab=repositories",
        email: "zahid.mittha@errorsolution.tech"
      },
      gradient: "from-teal-500 to-blue-600",
      icon: Brain
    },
    {
      name: "Sarah Chen",
      role: "Lead AI Engineer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in neural networks and deep learning with a passion for solving complex problems through innovative AI solutions.",
      specialties: ["Deep Learning", "Neural Networks", "Computer Vision"],
      achievements: ["PhD in AI", "20+ Research Papers", "Industry Expert"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@errorsolution.com"
      },
      gradient: "from-purple-500 to-pink-600",
      icon: Code
    },
    {
      name: "Marcus Rodriguez",
      role: "Full Stack Architect",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer with expertise in modern web technologies and scalable system architecture.",
      specialties: ["React", "Node.js", "Cloud Architecture"],
      achievements: ["AWS Certified", "Open Source Contributor", "Tech Speaker"],
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@errorsolution.com"
      },
      gradient: "from-blue-500 to-cyan-600",
      icon: Eye
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Research scientist specializing in computer vision and pattern recognition with extensive academic background.",
      specialties: ["Computer Vision", "Pattern Recognition", "Research"],
      achievements: ["PhD Computer Science", "15+ Publications", "Research Awards"],
      social: {
        linkedin: "#",
        github: "#",
        email: "emily@errorsolution.com"
      },
      gradient: "from-green-500 to-teal-600",
      icon: Target
    }
  ];

  const stats = [
    { number: "5+", label: "Years Combined Experience", icon: Award },
    { number: "100+", label: "Projects Delivered", icon: Target },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Sparkles }
  ];

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-10 animate-floatReverse"></div>
        
        {/* Animated shimmer lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-20 animate-shimmer-line"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-shimmer-line-reverse"></div>
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce-gentle opacity-5"
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 rounded-full text-sm font-medium mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-purple-200/50 animate-shimmer"></div>
            <Users className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Meet Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-shadow">
            The Minds Behind <span className="gradient-text">Innovation</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts combines deep technical knowledge with creative problem-solving to deliver exceptional results for every project.
          </p>
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-teal-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            const isHovered = hoveredMember === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 p-6">
                  {/* Profile image with enhanced effects */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Specialty icon */}
                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Floating particles */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-bounce-gentle"
                            style={{
                              left: `${10 + i * 15}%`,
                              top: `${10 + (i % 3) * 30}%`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Member info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-black mb-1 group-hover:text-teal-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 text-center">
                    {member.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium hover:bg-teal-100 transition-colors duration-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2 text-center">Key Achievements</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2 text-xs text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-teal-600 via-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Want to Join Our Team?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto">
                View Open Positions
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;