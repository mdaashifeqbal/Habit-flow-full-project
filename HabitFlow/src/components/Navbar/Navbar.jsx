import React, { useState } from "react";
import { Leaf, Menu, X,CircleUser } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import api from "../../axios/api";

const Navbar = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // UI-only state

  const handleLogout = async () => {
    try {
      const userAnswer = confirm("Are you sure want to logout ?");

      if (userAnswer) {
        await api.post("/user/logout");
        navigate("/login");
      }
    } catch (err) {
      navigate("/login");
    }
  };

  const activeClass =
    "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1";
  const normalClass =
    "text-[#648d76] hover:text-indigo-600 transition";

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-black font-semibold flex items-center gap-2 text-lg">
          <Leaf className="text-indigo-600" />
          HabitFlow
        </h2>

        {/* Desktop Nav */}
        {isAuth && (
          <nav className="hidden lg:flex gap-10 text-base">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Home
            </NavLink>
            <NavLink to="/habits" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Habits
            </NavLink>
            <NavLink to="/create-habits" className={({ isActive }) => isActive ? activeClass : normalClass}>
              Create Habit
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => isActive ? activeClass : normalClass}>
              About Us
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? activeClass : normalClass}>
              <CircleUser />
            </NavLink>
          </nav>
        )}

        {/* Desktop Logout */}
        {isAuth && (
          <button
            onClick={handleLogout}
            className="hidden lg:flex px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
          >
            Logout
          </button>
        )}

        {/* Hamburger */}
        {isAuth && (
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {open && isAuth && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/habits"
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >
              Habits
            </NavLink>
            <NavLink
              to="/create-habits"
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >
              Create Habit
            </NavLink>

            
            <NavLink
              to="/profile"
              
              className={({ isActive }) => isActive ? activeClass : normalClass}
            >
              <CircleUser/>
            </NavLink>

            <button
              onClick={handleLogout}
              className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
