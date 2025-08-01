import { Menu, X, DollarSign, Gift, Star, Zap, Trophy, Users } from "lucide-react";

const Stats = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
        {[
          {
            icon: Users,
            number: "10M+",
            label: "Join Football Lovers in the Game",
            color: "text-blue-600",
          },
          {
            icon: Trophy,
            number: "৳100Cr+",
            label: "Won by Our Champions",
            color: "text-indigo-600",
          },
          {
            icon: Zap,
            number: "50K+",
            label: "Contests Every Day",
            color: "text-purple-600",
          },
          {
            icon: Star,
            number: "4.8★",
            label: "on App Stores – Users Love Us!",
            color: "text-yellow-600",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 lg:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            <stat.icon
              className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color} mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300`}
            />
            <div className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">
              {stat.number}
            </div>
            <div className="text-slate-600 text-xs lg:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>100% Safe & Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span>Covering 100% of FIFA World Cup Matches</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
