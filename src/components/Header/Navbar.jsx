import React, { useState, useEffect } from "react";
import { Menu, X, DollarSign, Gift, Star, Zap, Trophy, Users } from "lucide-react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      scrolled
        ? 'backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20'
        : 'backdrop-blur-md bg-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl bg-white/60 border border-white/40 text-slate-700 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
              <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-slate-800 hidden sm:block">
              Dream11
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Fixture", "Teams", "Schedules"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-700 font-medium hover:text-blue-600 transition-all duration-300 relative group px-2 py-1"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Coin Button */}
          <div className="flex items-center  ">
            <button className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 bg-white/60 border border-white/40 rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                0
              </span>
              <div className="flex items-center gap-1 text-orange-600 font-semibold">
                <span className="text-sm lg:text-base">Coin</span>
                <DollarSign size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {["Home", "Fixture", "Teams", "Schedules"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-slate-700 font-medium hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
