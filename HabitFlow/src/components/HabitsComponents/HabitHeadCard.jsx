import React from "react";

const HabitHeadCard = ({ title, count, icon: Icon }) => {
  return (
    <div className="cards h-[11vh] lg:w-[25vw] bg-white rounded flex justify-between items-center px-5">
      <div className="flex flex-col">
        <h2 className="text-[#648d76] font-semibold text-sm">{title}</h2>
        <h2 className="text-2xl font-bold">{count}</h2>
      </div>
      <div>
        <h2 className="bg-gray-200 h-6 w-6 rounded-full flex justify-center items-center font-bold">
          <Icon />
        </h2>
      </div>
    </div>
  );
};

export default HabitHeadCard;
