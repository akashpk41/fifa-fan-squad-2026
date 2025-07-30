import React from "react";
import Navbar from "./Navbar";
import { FaGift } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative">
      <Navbar />
      <section
        className="relative min-h-screen flex items-center justify-center px-4
        bg-center bg-no-repeat bg-cover
        bg-[url('/bg-cover.jpg')]
        bg-blend-overlay
        bg-gradient-to-br from-[#1e1f4b]/80 via-[#42275a]/80 to-[#734b6d]/80"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/20 z-0" />

        <div className="relative z-10 max-w-4xl text-center text-white p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Cricket Logo"
              className="md:h-32 h-42 w-auto drop-shadow-lg"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
            Assemble Your Ultimate Dream 11 Football Team
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/80 tracking-wide font-medium drop-shadow-md  italic">
            <span className="text-white font-semibold">Beyond Boundaries</span>,
            Beyond Limits.
          </p>

          {/* Claim Free Credit Button */}
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-sm"></div>
            <button className="relative btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-6 py-6 rounded-full shadow-lg flex items-center gap-2 border-2 border-yellow-500 hover:scale-105 transition-all duration-300">
              <FaGift className="text-xl text-green-600" />
              Claim Free Credit
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
