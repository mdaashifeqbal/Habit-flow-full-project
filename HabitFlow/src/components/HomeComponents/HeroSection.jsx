import React from "react";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full bg-white mt-2 flex flex-col justify-center items-center py-9 ">
      <div className="h-[32vh] lg:w-[22vw] bg-red-500 rounded-md overflow-hidden">
        <img
          className="h-full w-full object-center object-cover overflow-hidden"
          src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <h2 className="text-md font-semibold py-2">No habits added yet</h2>
      <p className=" lg:w-[25vw] leading-5 text-[#648d76] text-sm text-center">
        Your dashboard is looking a little empty. Get started by creating your
        first daily routine and begin your hourney
      </p>

      <button className="bg-[#e9e8e9] px-3 rounded-md mt-5 py-2 font-semibold flex justify-center items-center cursor-pointer border-2 border-red-200">
        <span>
          <CirclePlus size={16} />
        </span>

        <Link to="/login">Create a Habit</Link>
      </button>
    </div>
  );
};

export default HeroSection;
