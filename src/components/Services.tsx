import { useRef } from 'react';
import { Brain, Code, Megaphone, Layers, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description: "Intelligent algorithms that learn and adapt to solve complex business challenges with cutting-edge machine learning models.",
      features: ["Chat bot integration", "LLMs & Agentic Ai", "Object Detection"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web and mobile applications built with modern technologies and scalable architectures.",
      features: ["Modern Stack", "Cloud Integration", "API Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Megaphone, // from lucide-react
      title: "Digital Marketing & WordPress",
      description: "Custom WordPress websites with integrated digital marketing strategies to boost brand visibility and engagement.",
      features: ["SEO Optimization", "Custom Themes", "Social Media Integration"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Layers,
      title: "Custom Software Systems",
      description: "Tailored solutions designed specifically for your business needs with enterprise-grade security.",
      features: ["System Integration", "Database Design", "Performance Optimization"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 lg:py-10 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-200 rounded-full opacity-15 animate-floatReverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-teal-50 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Expertise
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-shadow">
            What We <span className="gradient-text">Do</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge technology solutions that drive innovation and business growth through intelligent software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl lg:rounded-3xl`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                <div className="w-full h-full bg-white rounded-2xl lg:rounded-3xl"></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon with enhanced animation */}
                <div className="mb-4 lg:mb-6 relative">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-1.5 lg:space-y-2 mb-4 lg:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs lg:text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Free Consultation button */}
                <a href="#contact-form" className="group/btn flex items-center gap-2 text-sm lg:text-base text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300">
                  Free Consultation
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover/btn:translate-x-1" />
                </a >
              </div>
              
              {/* Hover effect particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-400 rounded-full animate-bounce-gentle"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 80}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        {/* <div className="text-center mt-12 lg:mt-16">
          <button className="group bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-1 flex items-center gap-2 mx-auto">
            Explore All Services
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;