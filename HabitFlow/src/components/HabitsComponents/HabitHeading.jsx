import React from "react";
import HabitHeadCard from "./HabitHeadCard";
import { Clipboard, Check} from "lucide-react";

const HabitHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="capitalize text-2xl font-bold leading-5 ">
        Track Your daily habits
      </h2>
      <p className=" lg:w-[35vw] py-2 text-[#648d76] leading-5 text-center text-sm">
        Build consistency and achieve your goals one day at a time.Small steps
        lead to big changes
      </p>
      <div className="w-full flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between">
        <HabitHeadCard  title="TOTAL HABITS" count="12"  icon={Clipboard} />
        <HabitHeadCard title="COMPLETED TODAY" count="8" icon={Check} />
      </div>
    </div>
  );
};

export default HabitHeading;
