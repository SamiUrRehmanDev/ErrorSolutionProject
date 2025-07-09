import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Sparkles, MessageCircle, Calendar, ArrowRight, Star, Shield, Zap, User, Building, Briefcase, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    'AI & ML Development',
    'Full Stack Development',
    'Computer Vision',
    'Custom Software',
    'Consulting',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@errorsolution.tech',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lahore, Pakistan',
      description: 'Come say hello at our office',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    }
  ];

  const stats = [
    { icon: Clock, number: '24h', label: 'Response Time', color: 'text-blue-600' },
    { icon: Users, number: '50+', label: 'Happy Clients', color: 'text-green-600' },
    { icon: CheckCircle, number: '100%', label: 'Success Rate', color: 'text-purple-600' }
  ];

  const features = [
    { icon: Star, text: 'Award-winning team' },
    { icon: Shield, text: 'Secure & reliable' },
    { icon: Zap, text: 'Fast delivery' }
  ];

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', icon: User, required: true, placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email', icon: Mail, required: true, placeholder: 'john@example.com' },
    { name: 'company', label: 'Company', type: 'text', icon: Building, required: false, placeholder: 'Your Company' },
    { name: 'service', label: 'Service Interested In', type: 'select', icon: Briefcase, required: false, placeholder: 'Select a service' }
  ];

  const validateField = (name: string, value: string) => {
    const errors: {[key: string]: string} = {};
    
    if (name === 'name' && !value.trim()) {
      errors.name = 'Name is required';
    }
    
    if (name === 'email') {
      if (!value.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errors.email = 'Please enter a valid email';
      }
    }
    
    if (name === 'message' && !value.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key as keyof typeof formData]);
      Object.assign(errors, fieldErrors);
    });
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-10 animate-floatReverse"></div>
        
        {/* Animated shimmer lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-20 animate-shimmer-line"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-20 animate-shimmer-line-reverse"></div>
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-teal-300/50 animate-shimmer"></div>
            <MessageCircle className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-shadow">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help you achieve your goals.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you have a clear vision or just an idea, we're here to help you bring it to life. Our team of experts will work closely with you to understand your needs and deliver exceptional results.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-teal-50 px-3 py-2 rounded-lg">
                      <feature.icon className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-teal-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group relative ${info.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer border border-white/50`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-shimmer`}></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-12 h-12 ${info.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <info.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-black mb-1 group-hover:text-teal-600 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-teal-600 font-semibold mb-1">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-100/50 to-teal-200/50 animate-shimmer"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-black mb-3">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-teal-50 transition-colors duration-300 group shadow-sm">
                      <Calendar className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Schedule a Consultation</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-teal-50 transition-colors duration-300 group shadow-sm">
                      <MessageCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Start Live Chat</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dramatically Enhanced Contact Form */}
          <div>
            <div id='contact-form' className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-gray-100">
              {/* Enhanced form background decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-20 transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 transform -translate-x-16 translate-y-16"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent opacity-0 animate-shimmer"></div>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-teal-400 rounded-full animate-float opacity-30"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full text-sm font-medium mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-blue-200/50 animate-shimmer"></div>
                    <FileText className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Send us a Message</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">Let's Start the Conversation</h3>
                  <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Enhanced form fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {formFields.slice(0, 2).map((field) => (
                        <div key={field.name} className="group">
                          <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <field.icon className="w-4 h-4 text-teal-600" />
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <div className="relative">
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField(field.name)}
                              onBlur={() => setFocusedField(null)}
                              required={field.required}
                              className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50/50 ${
                                formErrors[field.name]
                                  ? 'border-red-300 ring-2 ring-red-100'
                                  : focusedField === field.name 
                                    ? 'border-teal-500 ring-2 ring-teal-200 shadow-lg bg-white' 
                                    : 'border-gray-200 hover:border-teal-300 hover:bg-white'
                              }`}
                              placeholder={field.placeholder}
                            />
                            {focusedField === field.name && !formErrors[field.name] && (
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-shimmer pointer-events-none"></div>
                            )}
                            {formErrors[field.name] && (
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/5 to-red-600/5 pointer-events-none"></div>
                            )}
                          </div>
                          {formErrors[field.name] && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                              <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                              {formErrors[field.name]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {formFields.slice(2).map((field) => (
                        <div key={field.name} className="group">
                          <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <field.icon className="w-4 h-4 text-teal-600" />
                            {field.label}
                          </label>
                          <div className="relative">
                            {field.type === 'select' ? (
                              <select
                                name={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50/50 ${
                                  focusedField === field.name 
                                    ? 'border-teal-500 ring-2 ring-teal-200 shadow-lg bg-white' 
                                    : 'border-gray-200 hover:border-teal-300 hover:bg-white'
                                }`}
                              >
                                <option value="">{field.placeholder}</option>
                                {services.map((service) => (
                                  <option key={service} value={service}>
                                    {service}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 bg-gray-50/50 ${
                                  focusedField === field.name 
                                    ? 'border-teal-500 ring-2 ring-teal-200 shadow-lg bg-white' 
                                    : 'border-gray-200 hover:border-teal-300 hover:bg-white'
                                }`}
                                placeholder={field.placeholder}
                              />
                            )}
                            {focusedField === field.name && (
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-shimmer pointer-events-none"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-teal-600" />
                        Project Description <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none bg-gray-50/50 ${
                            formErrors.message
                              ? 'border-red-300 ring-2 ring-red-100'
                              : focusedField === 'message' 
                                ? 'border-teal-500 ring-2 ring-teal-200 shadow-lg bg-white' 
                                : 'border-gray-200 hover:border-teal-300 hover:bg-white'
                          }`}
                          placeholder="Tell us about your project goals, timeline, budget, and any specific requirements. The more details you provide, the better we can help you!"
                        />
                        {focusedField === 'message' && !formErrors.message && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-shimmer pointer-events-none"></div>
                        )}
                        {formErrors.message && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/5 to-red-600/5 pointer-events-none"></div>
                        )}
                      </div>
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    
                    {/* Enhanced submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-teal-600 via-teal-700 to-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:from-teal-700 hover:via-teal-800 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-600/30 hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Your Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            <span>Send Message</span>
                            <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
                          </>
                        )}
                      </span>
                    </button>
                    
                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>24h Response</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>No Spam</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-teal-600">
                      <Sparkles className="w-4 h-4" />
                      <span>We're excited to work with you!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;