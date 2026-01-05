import React from "react";
import { Leaf} from "lucide-react";
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import api from "../../axios/api";

const Navbar = () => {
  const {isAuth}=useAuth()
  const navigate=useNavigate();

  const handleLogout=async()=>{
      try{
        const userAnswer=confirm("Are you sure want to logout ?");

      if(userAnswer)
      {
         const response=await api.post("/user/logout");
         navigate("/login")
      }
      }catch(err)
      {
        navigate("/login");
      }
  }


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
          to="/profile"
          className={({isActive})=>isActive ? activeClass:normalClass}
        >
          Profile
        </NavLink>
      </div>

      {
        isAuth ? <div className="hidden lg:block">
        <button
        onClick={()=>{
          handleLogout();
        }}
        className="px-3 py-1 bg-[#2bee7c] text-black rounded flex justify-center items-center cursor-pointer">
          Logout
        </button>
      </div> :null
      }
    </div>
  );
};

export default Navbar;
