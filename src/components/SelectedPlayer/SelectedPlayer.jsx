import React from "react";
import toast from "react-hot-toast";

const SelectedPlayer = ({
  selectedPlayers,
  setActiveTab,
  setSelectedPlayer,
}) => {
  const handleRemovePlayer = (player) => {
    const updatedPlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setSelectedPlayer(updatedPlayers);

    toast.success(`Removed ${player.name} from your squad`, {
      duration: 2500,
    });
  };
  return (
    <div className="w-full max-w-4xl mx-auto p-0 md:p-6">
      {/* Selected Players List */}
      <div className="space-y-4 mb-8">
        {selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50/95 via-white/90 to-blue-50/95 backdrop-blur-xl border border-blue-200/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300 hover:scale-[1.01] p-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(239, 246, 255, 0.95) 100%)",
              backdropFilter: "blur(15px)",
              boxShadow:
                "0 10px 25px -5px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="flex items-center justify-between">
              {/* Left side - Player info */}
              <div className="flex items-center gap-4">
                {/* Player image */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Player details */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors duration-300">
                    {player.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">🎯</span>
                      {player.position}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-emerald-500">💰</span>$
                      {player.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => handleRemovePlayer(player)}
                className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center  cursor-pointer "
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -5px rgba(239, 68, 68, 0.25)";
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}

        {/* Empty state */}
        {selectedPlayers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              No Players Selected
            </h3>
            <p className="text-slate-500">
              Start building your dream team by selecting players
            </p>
          </div>
        )}
      </div>

      {/* Add More Player Button */}
      {selectedPlayers.length < 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setActiveTab("active")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center gap-3 cursor-pointer"
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px -5px rgba(34, 197, 94, 0.25)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add More Player
          </button>
        </div>
      )}

      {/* Team Complete Message */}
      {selectedPlayers.length === 6 && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-2xl border border-green-200/50">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold">Your Dream Team is Complete!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayer;
