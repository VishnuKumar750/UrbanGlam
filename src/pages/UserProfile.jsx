import  { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Sample user data and orders
const user = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  profilePicture: "/images/profile.jpg",
};

const orders = [
  {
    id: 1,
    date: "2024-09-01",
    items: ["Glam Lipstick", "Luxury Foundation"],
    total: 49.98,
  },
  {
    id: 2,
    date: "2024-08-15",
    items: ["Eyelash Curler"],
    total: 9.99,
  },
];

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 py-10">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center bg-white shadow-lg rounded-lg p-6 mb-10">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border-4 border-pink-500"
          />
          <div className="ml-6 flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-lg text-gray-600">{user.email}</p>
            <button
              onClick={handleEditClick}
              className="mt-4 text-blue-600 hover:underline flex items-center"
            >
              <FaEdit className="mr-2" /> {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Edit Profile Form */}
        {isEditing && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Edit Profile
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user.name}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user.email}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Orders Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Orders</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {orders.length === 0 ? (
              <p className="text-gray-600">You have no orders yet.</p>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="border-b border-gray-200 pb-4 mb-4 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Order #{order.id}
                    </h3>
                    <p className="text-gray-600">{order.date}</p>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-gray-700">
                      Items:
                    </h4>
                    <ul className="list-disc list-inside pl-5">
                      {order.items.map((item, index) => (
                        <li key={index} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-800">
                      Total: ${order.total.toFixed(2)}
                    </p>
                    <button className="text-red-600 hover:underline flex items-center">
                      <FaTrash className="mr-2" /> Cancel Order
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
