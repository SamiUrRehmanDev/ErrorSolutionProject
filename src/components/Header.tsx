import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    // { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'projects', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo with uploaded image */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 overflow-hidden">
                <img 
                  src="/logo-removebg-preview.png" 
                  alt="Error Solution Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-black'
              }`}>
                Error Solution
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-600'
              }`}>
                AI & Tech Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-teal-600 group ${
                  activeSection === item.href.slice(1)
                    ? 'text-teal-600'
                    : isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-700 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group relative bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/25 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="w-4 h-4 transition-transform group-hover:scale-110" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 px-4 py-6">
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:bg-teal-50 hover:text-teal-600 animate-slideInLeft ${
                  activeSection === item.href.slice(1) ? 'bg-teal-50 text-teal-600' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:shadow-lg animate-slideInLeft"
              style={{ animationDelay: '600ms' }}
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;