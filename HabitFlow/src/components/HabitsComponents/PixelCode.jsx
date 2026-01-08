import React from "react";
import { Code2, Heart, Sparkles } from "lucide-react";

const PixelCode = () => {
  return (
    <div className="w-full flex justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white border rounded-2xl shadow-sm p-8 sm:p-10 relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 opacity-20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-indigo-50">
            <Code2 className="text-indigo-600" size={28} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            About the Developer
          </h2>
        </div>

        {/* Content */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold text-gray-800">PixelCode</span> —
          a frontend developer who loves turning ideas into clean,
          user-friendly interfaces.
        </p>

        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          I built <span className="font-semibold text-indigo-600">HabitFlow</span>{" "}
          to practice real-world frontend concepts like state management,
          API integration, and responsive UI — while also creating something
          genuinely useful.
        </p>

        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          This project represents my learning journey, consistency,
          and passion for building products that feel simple,
          smooth, and meaningful.
        </p>

        {/* Footer */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Heart size={14} className="text-red-500" />
            Built with care
          </span>

          <span className="flex items-center gap-1">
            <Sparkles size={14} className="text-indigo-500" />
            Learning by building
          </span>
        </div>
      </div>
    </div>
  );
};

export default PixelCode;
