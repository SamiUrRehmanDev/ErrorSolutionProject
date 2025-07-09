import React, { useEffect, useState } from 'react';
import { ChevronRight, Play, Sparkles, Code2, Brain, Zap, Cpu, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const words = ['Innovation', 'Intelligence', 'Excellence', 'Solutions'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Code2, delay: '0s', position: 'top-20 left-20' },
    { icon: Brain, delay: '1s', position: 'top-32 right-32' },
    { icon: Zap, delay: '2s', position: 'bottom-40 left-16' },
    { icon: Sparkles, delay: '0.5s', position: 'bottom-20 right-20' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50 flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-teal-200/30 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-15 animate-floatReverse"></div>
        
        {/* Floating tech icons - hidden on mobile */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} opacity-10 animate-pulse-slow hidden md:block`}
            style={{ animationDelay: element.delay }}
          >
            <element.icon className="w-6 h-6 lg:w-8 lg:h-8 text-teal-600" />
          </div>
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2314b8a6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-teal-100 text-teal-700 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6 animate-shimmer">
              <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
              From Errors to Excellence
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              <span className="block text-shadow">Empowering</span>
              <span className="block relative">
                <span 
                  className="gradient-text transition-all duration-500 ease-in-out"
                  key={currentWord}
                >
                  {words[currentWord]}
                </span>
              </span>
              <span className="block text-shadow">Through Code</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build <span className="font-semibold text-teal-600">intelligent software solutions</span> powered by AI, machine learning, and modern web technologies that transform businesses and drive innovation.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group relative bg-teal-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-teal-700 hover:shadow-2xl hover:shadow-teal-600/25 hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('#projects')}
              className="group relative border-2 border-black text-black px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <Play className="w-4 h-4 lg:w-5 lg:h-5 transition-all group-hover:scale-110 relative z-10" />
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fadeInUp' : ''}`}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '3x', label: 'Award Winner' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Right Visual Element */}
        <div className={`relative flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'animate-slideInRight' : ''}`}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] group">
            {/* Main container with enhanced animations */}
            <div className="relative w-full h-full">
              {/* Multiple animated layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-50 to-white rounded-3xl shadow-2xl animate-slideInRight group-hover:shadow-3xl transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl opacity-10 shadow-xl animate-slideInRight group-hover:opacity-20 transition-all duration-500" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute inset-2 bg-gradient-to-br from-white to-teal-50 rounded-3xl shadow-xl animate-slideInRight group-hover:shadow-2xl transition-all duration-500" style={{ animationDelay: '0.6s' }}></div>
              
              {/* Enhanced Tech Icons Grid */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="grid grid-cols-3 gap-4 lg:gap-6">
                  {[
                    { icon: Code2, color: 'bg-teal-600' },
                    { icon: Brain, color: 'bg-purple-600' },
                    { icon: Database, color: 'bg-blue-600' },
                    { icon: Cpu, color: 'bg-orange-600' },
                    { icon: Globe, color: 'bg-green-600' },
                    { icon: Zap, color: 'bg-yellow-600' },
                    { icon: Code2, color: 'bg-red-600' },
                    { icon: Brain, color: 'bg-indigo-600' },
                    { icon: Sparkles, color: 'bg-pink-600' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center hover-lift hover-glow animate-slideInRight group-hover:scale-110 transition-all duration-500 cursor-pointer`}
                      style={{ 
                        animationDelay: `${0.8 + index * 0.1}s`,
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <div className={`w-6 h-6 lg:w-8 lg:h-8 ${item.color} rounded-lg flex items-center justify-center animate-pulse-slow`}>
                        <item.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced floating particles */}
              <div className="absolute inset-0 hidden sm:block pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-teal-400 rounded-full animate-float opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      left: `${15 + (i * 10)}%`,
                      top: `${10 + (i % 4) * 25}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + (i % 3)}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-spin-slow"></div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-teal-400 opacity-0 group-hover:opacity-10 animate-pulse transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-teal-600 rounded-full flex justify-center cursor-pointer hover:border-teal-700 transition-colors duration-300">
          <div className="w-1 h-2 lg:h-3 bg-teal-600 rounded-full mt-1.5 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;