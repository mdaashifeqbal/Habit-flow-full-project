const CreateHabit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Create Habit
        </h2>

        <form className="space-y-5">
          {/* Habit Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Habit Image
            </label>

            <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-50 transition">
              <input type="file" />
            </label>
          </div>

          {/* Habit Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Habit Title
            </label>
            <input
              type="text"
              placeholder="Enter habit title"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Habit Motive */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Habit Motive
            </label>
            <input
              type="text"
              placeholder="Why do you want this habit?"
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
