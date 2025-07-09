import { useState, useEffect } from 'react';
import { Bot, X, Sparkles, Code, Eye, Award, Mail, Send, Zap, Users } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);

  const sectionMessages = {
    home: {
      icon: Sparkles,
      greeting: "Hi! I'm your AI assistant. Ready to explore Error Solution?",
      suggestions: ["Tell me about your services", "Show me your projects", "How can you help my business?"],
      color: 'from-teal-500 to-teal-600'
    },
    services: {
      icon: Code,
      greeting: "Interested in our technical expertise? I can help you understand our capabilities!",
      suggestions: ["What's AI & ML development?", "Tell me about full stack", "Computer vision examples"],
      color: 'from-blue-500 to-blue-600'
    },
    projects: {
      icon: Eye,
      greeting: "Check out our amazing work! Want to know more about any specific project?",
      suggestions: ["Tell me about ASLense", "Show similar projects", "How long do projects take?"],
      color: 'from-purple-500 to-purple-600'
    },
    about: {
      icon: Award,
      greeting: "Learn more about our team and achievements. What would you like to know?",
      suggestions: ["Meet the founder", "Company achievements", "Our mission & values"],
      color: 'from-green-500 to-green-600'
    },
    team: {
      icon: Users,
      greeting: "Meet our amazing team! Want to know more about our experts?",
      suggestions: ["Tell me about the founder", "Team expertise", "How to join the team"],
      color: 'from-indigo-500 to-indigo-600'
    },
    contact: {
      icon: Mail,
      greeting: "Ready to start your project? I can help you get in touch with our team!",
      suggestions: ["Schedule a consultation", "Get a quote", "Discuss my project idea"],
      color: 'from-orange-500 to-orange-600'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentConfig = sectionMessages[currentSection as keyof typeof sectionMessages];
  const IconComponent = currentConfig.icon;

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: message,
      isUser: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is a demo response. In production, this would connect to a real AI service to provide helpful answers about our services.",
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    handleSendMessage();
  };

  return (
    <>
      {/* Enhanced AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${currentConfig.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
          
          {isOpen ? (
            <X className="w-6 h-6 lg:w-7 lg:h-7 relative z-10" />
          ) : (
            <Bot className="w-6 h-6 lg:w-7 lg:h-7 relative z-10" />
          )}
          
          {/* Pulse animation when closed */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></div>
          )}
          
          {/* Enhanced section indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
            <IconComponent className="w-3 h-3 text-teal-600" />
          </div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
        </button>
      </div>

      {/* Enhanced AI Assistant Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 lg:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-fadeInUp overflow-hidden">
          {/* Enhanced Header */}
          <div className={`bg-gradient-to-r ${currentConfig.color} text-white p-4 rounded-t-2xl relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-shimmer"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-white/80 capitalize flex items-center gap-1">
                    <IconComponent className="w-3 h-3" />
                    {currentSection} Section
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Chat Content */}
          <div className="p-4 max-h-80 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white">
            {/* AI Greeting */}
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 mb-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-transparent animate-shimmer"></div>
                <p className="text-sm text-gray-800 relative z-10">{currentConfig.greeting}</p>
              </div>
              
              {/* Enhanced Quick Suggestions */}
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Quick suggestions:
                  </p>
                  {currentConfig.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-xs bg-teal-50 hover:bg-teal-100 text-teal-700 p-2 rounded-lg transition-all duration-200 hover:shadow-sm relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-shimmer"></div>
                      <span className="relative z-10">{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Messages */}
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[80%] p-3 rounded-2xl relative overflow-hidden ${
                  msg.isUser 
                    ? 'bg-teal-600 text-white rounded-tr-md' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-md'
                }`}>
                  {!msg.isUser && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-transparent animate-shimmer"></div>
                  )}
                  <p className="text-sm relative z-10">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="text-left mb-3">
                <div className="inline-block bg-gray-100 p-3 rounded-2xl rounded-tl-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-transparent animate-shimmer"></div>
                  <div className="flex gap-1 relative z-10">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-all duration-200 hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-shimmer"></div>
                <Send className="w-4 h-4 relative z-10" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Bot className="w-3 h-3" />
              This is a demo assistant. In production, it would connect to a real AI service.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;