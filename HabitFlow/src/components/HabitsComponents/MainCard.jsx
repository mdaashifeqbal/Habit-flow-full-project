import React from "react";
import { Trash2 } from "lucide-react";
import api from "../../axios/api";

const MainCard = ({ habit, id, onUpdate, onDelete }) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const isCompletedToday = habit.completedDates?.some((d) => {
    const date = new Date(d);
    return date >= startOfToday && date <= endOfToday;
  });

  const handleComplete = async () => {
    if (isCompletedToday) return;

    try {
      await api.post(`/habit/completed/${id}`);

      onUpdate({
        ...habit,
        completedDates: [
          ...(habit.completedDates || []),
          new Date().toISOString(),
        ],
      });
    } catch {
      alert("Already completed today");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this habit?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/habit/delete-habit/${id}`);
      onDelete(id); // 🔥 UPDATE UI INSTANTLY
    } catch {
      alert("Failed to delete habit");
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-4 hover:shadow-md transition">
      
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3">
        {/* TEXT */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 ">wrap-break-word
            {habit.title}
          </h3>
          <p className="text-sm text-gray-600 wrap-break-word">
            {habit.description}
          </p>
        </div>

        {/* DELETE */}
        <button
          onClick={handleDelete}
          className="shrink-0 text-gray-400 hover:text-red-500 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* ACTION */}
      <button
        onClick={handleComplete}
        disabled={isCompletedToday}
        className={`px-4 py-2 rounded-md text-sm font-medium transition
          ${
            isCompletedToday
              ? "bg-green-400 opacity-60 cursor-not-allowed text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }
        `}
      >
        {isCompletedToday ? "Completed Today" : "Mark Completed"}
      </button>
    </div>
  );
};

export default MainCard;
