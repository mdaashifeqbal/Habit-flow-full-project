import React from "react";
import HabitHeading from "../../components/HabitsComponents/HabitHeading";
import MainCard from "../../components/HabitsComponents/MainCard";

const Habits = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <HabitHeading />
      <div className="maindiv py-2  w-full grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 px-2">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
};

export default Habits;
