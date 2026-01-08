import React, { useEffect, useState } from "react";
import CardsHeading from "./CardsHeading";
import { Clipboard, Check, CirclePlus } from "lucide-react";
import api from "../../axios/api";

const HomeHeading = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await api.get("/habit/get-habits");
        setHabits(response.data.habits);
      } catch (err) {
        if (err.response?.status === 500) {
          alert(err.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const todayCompletedCount = habits.filter((habit) =>
    habit.completedDates?.some((d) => {
      const date = new Date(d);
      return date >= startOfToday && date <= endOfToday;
    })
  ).length;

  return (
    <div>
      <h2 className="capitalize lg:text-3xl font-bold px-2 lg:px-0">
        Track Your daily habits
      </h2>
      <p className=" lg:w-[35vw] text-sm px-2 lg:px-0 py-2 text-[#648d76]">
        Build consistency and reach your goal one day at a time. Visualizing
        your progress is the first step to success
      </p>
      <div className="maindiv mt-3 flex flex-col gap-5 lg:gap-0  lg:flex-row justify-between">
        <CardsHeading
          title="Total Habits"
          count={habits.length}
          icon={Clipboard}
        />
        <CardsHeading
          title="Completed Today"
          count={todayCompletedCount}
          icon={Check}
        />
      </div>
    </div>
  );
};

export default HomeHeading;
