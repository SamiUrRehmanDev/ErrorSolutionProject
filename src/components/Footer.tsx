import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'AI & ML Development',
      'Full Stack Development',
      'Computer Vision',
      'Custom Software',
      'Consulting'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Contact'
    ],
    resources: [
      'Case Studies',
      'Documentation',
      'Support',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/errorsolution', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-600/10 to-teal-700/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-teal-700/10 to-teal-800/10 rounded-full animate-floatReverse"></div>
        
        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce-gentle opacity-20"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-teal-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Enhanced Company Info with Logo */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:rotate-3 overflow-hidden bg-white/10 backdrop-blur-sm">
                  <img 
                    src="/logo-removebg-preview.png" 
                    alt="Error Solution Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Error Solution</h3>
                  <p className="text-sm text-gray-400">AI & Tech Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming ideas into intelligent solutions through cutting-edge AI, machine learning, and modern web technologies.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  contact@errorsolution.tech
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-300 cursor-pointer group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Lahore, Pakistan
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative">
                Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-600 to-teal-700"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-600 to-teal-700"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative">
                Resources
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-600 to-teal-700"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 block"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-2 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Error Solution. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in San Francisco</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-all duration-300">
                  <ArrowUp className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;