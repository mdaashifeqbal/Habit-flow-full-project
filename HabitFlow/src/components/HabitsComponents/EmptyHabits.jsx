import React from "react";
import { HeartPulse , PlusCircle} from "lucide-react";
import {Link} from "react-router-dom"

const EmptyHabits = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      
      {/* Animated Icon Container */}
      <div className="relative mb-10">
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></span>

        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-green-50 shadow-inner">
          <HeartPulse
            size={64}
            className="text-green-600 animate-pulse"
          />
        </div>
      </div>

      {/* Headline */}
      <h3 className="text-2xl  sm:text-3xl font-bold text-gray-800">
        No habits created yet
      </h3>

      {/* Description */}
      <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
        Your habit journey hasn’t started yet — and that’s perfectly okay.
        Every healthy lifestyle begins with a single small habit.
      </p>

      <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-lg">
        Create your first habit and start building consistency,
        progress, and a healthier version of yourself 🌱
      </p>

      <Link
  to="/create-habits"
  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full
             bg-indigo-600 text-white font-semibold text-sm sm:text-base
             hover:bg-indigo-700 active:scale-95 transition
             shadow-md hover:shadow-lg"
>
  <PlusCircle size={18} />
  Create first daily habit
</Link>

      {/* Bottom spacing for sticky navbar */}
      <div className="h-20"></div>
      
    </div>
  );
};

export default EmptyHabits;
