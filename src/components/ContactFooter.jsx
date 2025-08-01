import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Users, Award, Shield, Zap, Star, Clock, Globe, Heart } from 'lucide-react';
import Stats from './Stats';

const ContactFooter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
  };

  return (
    <div className="relative mt-10 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-50/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Mouse Follower Effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
<Stats />
      {/* Newsletter Section */}
      <div className="relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-16 shadow-2xl shadow-blue-500/10 transform hover:scale-[1.02] transition-all duration-700">
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium mb-6 transform hover:scale-105 transition-all duration-300">
                <Star className="w-4 h-4" />
                <span>Join 10,000+ Happy Subscribers</span>
                <Star className="w-4 h-4" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4 lg:mb-6 leading-tight">
                Stay Ahead of the Curve
              </h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Get exclusive insights, tips, and updates delivered straight to your inbox. Join our community of forward-thinkers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 w-5 h-5 transition-colors duration-300" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 border border-slate-200 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 shadow-lg focus:shadow-xl"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                Subscribe Now
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% Spam Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-8 lg:space-y-12">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  <span>Let's Connect</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 lg:mb-6 leading-tight">
                  Ready to Start Something
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Amazing Together?
                  </span>
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  We're here to turn your vision into reality. Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "hello@yourcompany.com",
                    subtitle: "We respond within 2 hours",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9AM-6PM EST",
                    color: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "123 Innovation Street",
                    subtitle: "San Francisco, CA 94105",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((contact, index) => (
                  <div key={index} className="group p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-800 font-semibold text-lg mb-1">{contact.title}</h4>
                        <p className="text-slate-700 font-medium mb-1">{contact.info}</p>
                        <p className="text-slate-500 text-sm">{contact.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-600" },
                  { icon: Award, number: "50+", label: "Awards Won", color: "text-indigo-600" },
                  { icon: Shield, number: "99.9%", label: "Uptime", color: "text-purple-600" },
                  { icon: Zap, number: "24/7", label: "Support", color: "text-cyan-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 hover:shadow-lg group cursor-pointer">
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                    <div className="text-slate-600 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-500/10 transform hover:scale-[1.02] transition-all duration-700">
              <div className="space-y-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Send us a Message</h4>
                  <p className="text-slate-600">We'd love to hear about your project</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Tom"
                      className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 group-hover:shadow-md"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Cruise"
                      className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 group-hover:shadow-md"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="tom@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 group-hover:shadow-md"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Let's discuss my project"
                    className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 group-hover:shadow-md"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project, goals, and how we can help you achieve them..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-4 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 resize-none group-hover:shadow-md"
                  />
                </div>

                <button
                  onClick={handleContactSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-slate-500">
                  We'll get back to you within 24 hours. Promise! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/50 bg-white/40 backdrop-blur-xl mt-12 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Dream 11</h3>
              </div>
              <p className="text-slate-600 mb-8 max-w-md mx-auto sm:mx-0 leading-relaxed">
                We create digital experiences that inspire, engage, and deliver results. Our passionate team is dedicated to bringing your vision to life with innovation and excellence.
              </p>
              <div className="flex justify-center sm:justify-start gap-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                  <button key={social} className="w-12 h-12 bg-white/60 hover:bg-white/80 border border-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg group">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded group-hover:scale-110 transition-transform duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-slate-800 font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center sm:text-left">
              <h4 className="text-slate-800 font-semibold text-lg mb-6">Stay Connected</h4>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 backdrop-blur-sm transition-all duration-300 text-sm"
                />
                <button
                  
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-600 text-sm">
              © 2025 Akash PK. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;