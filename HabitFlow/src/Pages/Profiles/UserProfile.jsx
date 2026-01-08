import { useEffect, useState } from "react";
import api from "../../axios/api";
import LoadingSpinner from "../../components/Spinner/Spinner";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.post("/user/me");
        setUser(response.data.user);
      } catch (err) {
        if (err.response?.status === 404) {
          alert(err.response.data.message);
        }
      } finally {
        setloading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <LoadingSpinner size={25} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold">User Profile</h2>
          <p className="text-sm opacity-90">
            Manage your personal information
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md -mt-16 md:mt-0 bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-lg font-medium text-gray-800 capitalize">
              {user.gender || "Not specified"}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">Weight</p>
            <p className="text-lg font-medium text-gray-800">
              {user.weight ? `${user.weight} kg` : "Not specified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
