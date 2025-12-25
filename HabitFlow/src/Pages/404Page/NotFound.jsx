import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  from-indigo-600 to-purple-700 text-gray-900 px-4">
      
      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold leading-none">404</h1>

      {/* Message */}
      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-center max-w-md mt-3 text-lg opacity-90">
        Looks like this habit doesn’t exist yet.  
        Let’s get you back on track with your goals.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:scale-105 transition-transform duration-300"
      >
        Go Back to Habit Flow
      </Link>

      {/* Footer text */}
      <p className="mt-10 text-sm opacity-70">
        Stay consistent. Small habits, big changes 🌱
      </p>
    </div>
  );
};

export default NotFound;
