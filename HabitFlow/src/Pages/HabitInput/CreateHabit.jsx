import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/api";

const CreateHabit = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/habit/create-habit", {
        title,
        description,
      });

      if (response.data.success) {
        alert(response.data.message);
        navigate("/habits");
      }
    } catch (err) {
      if (!err.response) {
        alert("Internal server error try again please");
      }
      if (err?.response?.status === 400) {
        alert(err.response.data.message);
      }

      if (err?.response?.status === 400) {
        alert(err.response.data.message);
      }
      if (err?.response?.status === 500) {
        alert(err.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Create Habit
        </h2>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-5"
        >
          {/* Habit Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Habit Title
            </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              maxLength={25}
              type="text"
              placeholder="Enter habit title (max 25 chars)"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Habit Motive */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Habit Motive
            </label>
            <input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              maxLength={60}
              type="text"
              placeholder="Why do you want this habit?(max 60 chars)"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHabit;
