import React from "react";

const MainCard = () => {
  return (
    <div className="carddiv h-[48vh] w-full lg:w-[23vw] bg-white rounded-xl overflow-hidden">
      <div className="h-1/2 w-full bg-yellow-200">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1549943365-6bb16fecadeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          
        />
      </div>

      <div className="h-1/2 w-full py-3 px-5">
        <h2 className="text-lg font-bold"> Morning Yoga</h2>
        <div className="w-full h-[11vh] text-sm text-[#859485] ">
          Run 5km around the park to start the day fresh.
        </div>
        <div className="py-1 flex justify-center ">
          <button className="w-[60vw] py-2 bg-[#2bee7c] rounded-lg font-semibold cursor-pointer">
            {" "}
            &#10003; Mark as Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
