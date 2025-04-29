// src/pages/CropManagementDashboard.jsx
import React from 'react';
import {
  FaCloudSun,
  FaLeaf,
  FaBookOpen,
  FaCloud,
  FaUsers,
  FaMapMarkerAlt,
  FaHome,
  FaShoppingCart,
  FaQuestionCircle,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CropManagementDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-green-100 flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">My Crop Management</h1>

        <div className="bg-white rounded-xl p-4 shadow flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span className="font-semibold text-gray-700">Ahmedabad</span>
            </div>
            <p className="text-gray-400 text-sm">clear sky</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCloudSun className="text-yellow-500 text-2xl" />
            <span className="text-xl font-bold text-gray-700">35.24°C</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Link to="/mycrop">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:bg-green-50 cursor-pointer">
              <FaLeaf className="text-green-500 text-3xl mb-2" />
              <h2 className="font-semibold">My Crop</h2>
              <p className="text-sm text-gray-400">Top suggestion: mothbeans</p>
            </div>
          </Link>

          <Link to="/krishigyan">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:bg-green-50 cursor-pointer">
              <FaBookOpen className="text-blue-500 text-3xl mb-2" />
              <h2 className="font-semibold">Krishi Gyan</h2>
              <p className="text-sm text-gray-400">Agricultural knowledge</p>
            </div>
          </Link>

          <Link to="/weather">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:bg-green-50 cursor-pointer">
              <FaCloud className="text-purple-500 text-3xl mb-2" />
              <h2 className="font-semibold">Weather</h2>
              <p className="text-sm text-gray-400">Forecasts for farming</p>
            </div>
          </Link>

          <Link to="/community">
            <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow hover:bg-green-50 cursor-pointer">
              <FaUsers className="text-green-700 text-3xl mb-2" />
              <h2 className="font-semibold">Community</h2>
              <p className="text-sm text-gray-400">Connect with farmers</p>
            </div>
          </Link>
        </div>

        {/* My Field Section */}
        <Link to="/myfield">
          <div className="bg-white rounded-xl p-4 shadow flex items-center justify-between mt-6 hover:bg-green-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaLeaf className="text-purple-500 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">My Field</h3>
                <p className="text-sm text-gray-400">View Your Field</p>
              </div>
            </div>
            <div className="text-gray-400 text-xl">&gt;</div>
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white p-2 shadow-inner flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-green-500">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </Link>
        <div className="flex flex-col items-center text-gray-500 hover:text-green-500">
          <FaShoppingCart className="text-xl" />
          <span className="text-xs">Shop</span>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-green-500">
          <FaQuestionCircle className="text-xl" />
          <span className="text-xs">FAQ</span>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-green-500">
          <FaUser className="text-xl" />
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default CropManagementDashboard;
