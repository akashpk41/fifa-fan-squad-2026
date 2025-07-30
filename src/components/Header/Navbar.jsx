import React, { useState } from "react";
import { FaBars, FaTimes, FaDollarSign } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 z-50 backdrop-blur-md bg-white/30 shadow-md text-white">
      <div className="navbar-start md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost text-2xl"
        >
          {menuOpen ? <FaTimes /> : <CiMenuBurger />}
        </button>
      </div>

      <div className="navbar-start hidden md:flex">
        <a className=" normal-case text-xl">
          <img src="/logo.png" alt="Logo" className="h-18 w-auto" />
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {["Home", "Fixture", "Teams", "Schedules"].map((link) => (
            <li key={link}>
              <a className="text-lg  font-medium transition duration-300 hover:text-yellow-400 ">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end pr-2">
        <button className="btn btn-outline btn-sm flex items-center gap-2 hover:bg-white/10 text-xl px-6 py-4">
          <span className="text-green-600 font-bold">0</span>
          <span className="  text-orange-600 flex items-center gap-1">
            Coin <FaDollarSign />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md shadow-md md:hidden">
          <ul className="menu p-4">
            {["Home", "Fixture", "Teams", "Schedules"].map((link) => (
              <li key={link}>
                <a className="text-md font-medium transition duration-300 text-xl hover:text-blue-500 hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
