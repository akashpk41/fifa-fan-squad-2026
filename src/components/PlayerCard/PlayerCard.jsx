import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineRefresh } from "react-icons/hi";

const PlayerCard = ({ coins, setCoins, setSelectedPlayer, selectedPlayer }) => {
  const [players, setPlayers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data)
        setLoading(false)
      } )
      .catch((err) => console.error("Fetch failed:", err));

  }, []);

  const handleSelectPlayer = async (player) => {
    if (selectedPlayer.length >= 6) {
      toast.error("😅 You can select up to 6 players only!", {
        duration: 3000,
        style: {
          border: "1px solid #fca5a5",
          padding: "16px",
          color: "#b91c1c",
          background: "#fef2f2",
          fontWeight: "500",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fecaca",
        },
      });
      return;
    }

    if (coins < player.price) {
      toast.error(`😢 Not enough coins! Please claim free credit.`, {
        duration: 3000,
        style: {
          border: "1px solid #fca5a5",
          padding: "16px",
          color: "#b91c1c",
          background: "#fef2f2",
          fontWeight: "500",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fecaca",
        },
      });
      return;
    }

    // cheek if player exist
    const existedPlayer = selectedPlayer.find((p) => p.id === player.id);
    // console.log(existedPlayer);
    if (existedPlayer) {
      toast.error("😅 Player already selected!");
      return;
    }

    // fake async operation for toast.promise
    const fakeSelect = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(), 1000); // simulate delay
      });

    toast.promise(fakeSelect(), {
      loading: "Selecting player...",
      success: `🎉 Congrats! You now own ${player.name}!`,
      error: "Something went wrong!",
    });

    // your additional logic (like marking player as owned)
    setSelectedPlayer([player, ...selectedPlayer]);

    setCoins((prev) => prev - player.price);
  };

  return (
    <>
      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <HiOutlineRefresh className="text-blue-600 text-5xl animate-spin" />
          <p className="mt-4 text-slate-700 font-medium">Loading players...</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 md:p-6 mt-6">
        {players.map((player, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100/95 via-white/90 to-blue-50/95 backdrop-blur-xl border border-blue-200/30 shadow-2xl transition-all duration-500 flex flex-col cursor-pointer touch-manipulation ${
                isHovered
                  ? "scale-[1.02] -translate-y-2 shadow-blue-400/20"
                  : ""
              }`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(239, 246, 255, 0.95) 100%)",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 25px 50px -12px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                minHeight: "480px",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 500)}
            >
              {/* Animated border glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-blue-400/30 transition-opacity duration-500 blur-sm ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {/* Image section */}
              <div className="relative overflow-hidden rounded-t-3xl flex-shrink-0 h-56 sm:h-60 md:h-64 lg:h-72">
                <div className="relative overflow-hidden rounded-t-3xl bg-white flex items-center justify-center h-56 sm:h-64 md:h-72">
                  <img
                    src={player.image}
                    alt={player.name}
                    className={`max-h-full max-w-full object-contain transition-transform duration-700 ${
                      isHovered ? "scale-105" : ""
                    }`}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg border border-green-400/20">
                  ${player.price.toLocaleString()}
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-6 flex flex-col flex-grow">
                <h2
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isHovered ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  {player.name}
                </h2>

                <div className="space-y-3 text-slate-700 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-lg">🌍</span>
                    <span className="text-sm font-semibold text-slate-600">
                      {player.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500 text-lg">🎯</span>
                    <span className="text-sm font-semibold text-slate-600">
                      Position: {player.position}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-500 text-lg">🦶</span>
                    <span className="text-sm font-semibold text-slate-600">
                      Foot: {player.foot}
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:ring-opacity-50"
                    onClick={() => handleSelectPlayer(player)}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px -5px rgba(59, 130, 246, 0.25)";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Select Player
                    </span>
                  </button>
                </div>

                {/* Decorative elements */}
                <div
                  className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-xl transition-opacity duration-500 ${
                    isHovered ? "opacity-50" : "opacity-30"
                  }`}
                ></div>
                <div
                  className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-blue-500/10 rounded-full blur-lg transition-opacity duration-500 ${
                    isHovered ? "opacity-40" : "opacity-25"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlayerCard;
