import React from "react";
import { Leaf, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass =
    "text-indigo-600 font-semibold border-b-2 border-indigo-600";
  const normalClass = "text-[#648d76]";
  return (
    <div className="w-full  lg:px-5 py-2 bg-white  text-white flex justify-around lg:justify-between items-center">
      <div>
        <h2 className=" text-black font-semibold flex items-center gap-1 text-sm lg:text-xl">
          <Leaf /> HabitFlow
        </h2>
      </div>
      <div className=" flex gap-3 lg:gap-10 text-sm">
        <NavLink
          to="/"
          className={({isActive})=>isActive ? activeClass:normalClass}
        >
          Home
        </NavLink>
          <NavLink
          to="/habits"
          className={({isActive})=>isActive ? activeClass:normalClass}
        >
          Habits
        </NavLink>
          <NavLink
          to="/profiles"
          className={({isActive})=>isActive ? activeClass:normalClass}
        >
          Profile
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <button className="px-3 py-1 bg-[#2bee7c] text-black rounded flex justify-center items-center cursor-pointer">
          <Plus size={20} />
          Add Habit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
