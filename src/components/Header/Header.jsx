import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  DollarSign,
  Gift,
  Star,
  Zap,
  Trophy,
  Users,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "./Navbar";

const Header = ({ coins, setCoins }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const [coins, setCoins] = useState(0);

  const handleClaimCredit = () => {
    const creditCoins = Math.floor(100000 + Math.random() * 900000);

    setCoins(coins + creditCoins);

    toast.success(
      `🎉 Congratulations! You got ${creditCoins.toLocaleString()} coins!`,
      {
        duration: 3000,
        style: {
          border: "1px solid #4ade80",
          padding: "16px",
          color: "#065f46",
          background: "#ecfdf5",
        },
        iconTheme: {
          primary: "#10b981",
          secondary: "#a7f3d0",
        },
      }
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 overflow-hidden">
      <Navbar coins={coins} />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-50/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl animate-pulse"></div>
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

      {/* Hero Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium mb-8 transform hover:scale-105 transition-all duration-300">
            <Star className="w-4 h-4" />
            <span>FIFA World Cup 2026 – Feel the Heat from Bangladesh</span>
            <Star className="w-4 h-4" />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight">
            Assemble Your Ultimate
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dream 11 Football Team
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-slate-800">
              Beyond Boundaries
            </span>
            , Beyond Limits.
            <span className="block mt-2 text-base lg:text-lg font-medium">
              Create your dream team and compete with millions of players
              worldwide
            </span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button
                className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300 cursor-pointer"
                onClick={handleClaimCredit}
              >
                <Gift className="w-6 h-6" />
                Claim Free Credit
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-bounce">
                  !
                </div>
              </button>
            </div>

            <button className="flex items-center gap-2 px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl text-slate-700 font-semibold hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer hover:shadow-xl">
              <Users className="w-5 h-5" />
              Join Tournament
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
