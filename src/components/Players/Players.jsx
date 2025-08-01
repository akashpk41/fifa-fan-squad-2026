import React, { useState } from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PlayerCard from "../PlayerCard/PlayerCard";

const Players = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="max-w-6xl w-11/12 mt-16 mb-24 mx-auto  py-5 px-2 ">
      <div className="md:flex justify-between text-center  md:text-left items-center mb-4">
        {/* Left side title */}
        <h3 className="text-3xl lg:text-3xl font-bold text-slate-800 leading-tight mb-6 md:mb-0 ">
          Available
          <span className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Players
          </span>
        </h3>

        {/* Right side toggle button style */}
        <div className=" flex   rounded-full border border-gray-300 overflow-hidden  ">
          <button
            className={` ${
              activeTab === "active"
                ? "bg-yellow-300 text-black"
                : "hover:bg-gray-100 text-gray-600"
            }  font-semibold px-5 py-2 text-sm transition-all duration-300 flex-1 md:flex-none cursor-pointer `}
            onClick={() => setActiveTab("active")}
          >
            Available
          </button>
          <button
            className={` ${
              activeTab === "selected"
                ? "bg-yellow-300 text-black "
                : "hover:bg-gray-100 text-gray-600"
            } bg-white  font-semibold px-5 py-2 text-sm transition-all duration-300  flex-1 md:flex-none  cursor-pointer`}
            onClick={() => setActiveTab("selected")}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {activeTab === "active" ? <PlayerCard /> : <SelectedPlayer />}
    </div>
  );
};

export default Players;
