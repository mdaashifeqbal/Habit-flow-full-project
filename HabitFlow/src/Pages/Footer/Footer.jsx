import React from "react";
import {Leaf} from "lucide-react"

const Footer = () => {
  return (
    <div className="w-full h-15 py-15 bg-white flex flex-col justify-center items-center">
      <h2 className="flex text-xl justify-center items-center gap-1">
  
        <Leaf /> <span className="mb-1 font-semibold">HabitFlow</span>
      </h2>
      <p className="text-[#747d83] text-sm">
        Consistency is the key to success. Keep going
      </p>
      <p className="text-[#83c3ed] text-xs py-4">
        2024 HabitFlow. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
