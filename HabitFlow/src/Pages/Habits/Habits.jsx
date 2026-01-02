import React from "react";
import HabitHeading from "../../components/HabitsComponents/HabitHeading";
import MainCard from "../../components/HabitsComponents/MainCard";
import HeroSection from "../../components/HomeComponents/HeroSection";

const Habits = () => {
  const count = 0;
  return (
    <div className="max-w-6xl mx-auto">
      <HabitHeading />
      <div className="maindiv py-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-3  lg:gap-5 px-2">
        {count < 1 ? <HeroSection /> : <MainCard />}
      </div>
    </div>
  );
};

export default Habits;
