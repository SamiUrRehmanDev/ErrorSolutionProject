import { useRef } from 'react';
import { Users, Target, Sparkles, TrendingUp, Heart, Zap,BrainCircuit  } from 'lucide-react';

const About = () => {
  // const [counters, setCounters] = useState({ projects: 50, awards: 10, satisfaction: 100 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: BrainCircuit ,
      title: "AI Excellence",
      description: "Recognition for excellence in AI research and development from prestigious institutions",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by industry professionals with proven track records in cutting-edge technologies",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to solving real-world problems through innovative technology solutions",
      color: "from-green-400 to-teal-500"
    }
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', icon: TrendingUp },
    { number: 10, suffix: '+', label: '10+ AI Models Deployed', icon: BrainCircuit  },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: Heart }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-10 animate-floatReverse"></div>
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce-gentle opacity-5"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <Zap className="w-6 h-6 text-teal-600" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About Error Solution
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-shadow">
            Who We <span className="gradient-text">Are</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Content */}
          <div>
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
              <p className="text-lg lg:text-xl font-medium text-black mb-3 lg:mb-4">
                Transforming Ideas into Intelligent Solutions
              </p>
              
              <p>
                Error Solution is a forward-thinking technology company dedicated to building intelligent software solutions that make a real difference. Our mission is to bridge the gap between cutting-edge research and practical applications that drive meaningful change.
              </p>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 lg:p-6 rounded-xl lg:rounded-2xl border-l-4 border-teal-600">
                <p className="font-medium text-black mb-2">Led by Innovation</p>
                <p className="text-sm lg:text-base">
                  Under the leadership of <strong className="text-teal-700">Zahid Mittha, Founder & CEO</strong>, our team combines deep technical expertise with a passion for innovation. We've earned recognition through multiple academic awards and consistently deliver solutions that exceed expectations.
                </p>
              </div>
              
              <p>
                From AI-powered educational platforms to sophisticated computer vision systems, we transform complex challenges into elegant, scalable solutions that drive business growth and create positive social impact.
              </p>
            </div>
          </div>
          
          {/* Right Stats */}
          <div>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300">
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-teal-600 mb-1">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                <div className="w-full h-full bg-white rounded-2xl lg:rounded-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <achievement.icon className="w-6 h-6 lg:w-7 lg:h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Hover effect sparkles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce-gentle"></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-teal-700/50 animate-shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-3 lg:mb-4">Ready to Innovate Together?</h3>
              <p className="text-teal-100 mb-4 lg:mb-6 max-w-2xl mx-auto text-sm lg:text-base">
                Join us in creating the next generation of intelligent software solutions that make a difference.
              </p>
              <a href='#contact-form' className="w-fit bg-white text-teal-700 px-6 py-3 lg:px-8 lg:py-4 rounded-lg lg:rounded-xl font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto">
                Let's Work Together
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;