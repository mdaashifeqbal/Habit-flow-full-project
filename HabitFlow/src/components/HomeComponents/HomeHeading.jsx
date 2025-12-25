import React from "react";
import CardsHeading from "./CardsHeading";
import { Clipboard, Check, CirclePlus } from "lucide-react";

const HomeHeading = () => {
  return (
    <div>
      <h2 className="capitalize lg:text-3xl font-bold px-2 lg:px-0">Track Your daily habits</h2>
      <p className=" lg:w-[35vw] text-sm px-2 lg:px-0 py-2 text-[#648d76]">
        Build consistency and reach your goal one day at a time. Visualizing
        your progress is the first step to success
      </p>
      <div className="maindiv mt-3 flex flex-col gap-5 lg:gap-0  lg:flex-row justify-between">
        <CardsHeading title="Total Habits" count="0" icon={Clipboard} />
        <CardsHeading title="Completed Today" count="0" icon={Check} />
      </div>
      
    </div>
  );
};

export default HomeHeading;
