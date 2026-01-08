import React, { useEffect, useState } from "react";
import HabitHeading from "../../components/HabitsComponents/HabitHeading";
import MainCard from "../../components/HabitsComponents/MainCard";
import api from "../../axios/api";
import Spinner from "../../components/Spinner/Spinner";
import EmptyHabits from "../../components/HabitsComponents/EmptyHabits";

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await api.get("/habit/get-habits");
        setHabits(response.data.habits);
      } catch (err) {
        alert("Failed to fetch habits");
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  // ✅ update habit (mark complete)
  const handleHabitUpdate = (updatedHabit) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit._id === updatedHabit._id ? updatedHabit : habit
      )
    );
  };

  // ✅ delete habit
  const handleHabitDelete = (habitId) => {
    setHabits((prev) => prev.filter((habit) => habit._id !== habitId));
  };

  if (loading) return <Spinner />;
  if(!habits || habits.length===0)
  {
    return <EmptyHabits/>
  }
  return (
    <div className="max-w-6xl mx-auto">
      <HabitHeading habits={habits} />

      <div className="py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {habits.map((habit) => (
          <MainCard
            key={habit._id}
            id={habit._id}
            habit={habit}
            onUpdate={handleHabitUpdate}
            onDelete={handleHabitDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Habits;
