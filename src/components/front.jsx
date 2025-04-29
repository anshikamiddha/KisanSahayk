import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center flex justify-center items-center flex-col text-white font-sans z-10 bg-black opacity-90"
      style={{ backgroundImage: "url('https://i.postimg.cc/3rsfd9cr/A-tractor-on-the-field-waters-the-plants-with-pesticides-royalty-free-stock-image.jpg')" }} // Background image
    >
      {/* Top-right buttons */}
      <div className="absolute top-5 right-5 z-20 flex gap-4">
        <button
          className="bg-transparent text-black border-2 border-white py-2 px-4 rounded-md transition-all duration-500 hover:bg-green-200 hover:text-gray-800 active:bg-green-600 active:text-white"
          onClick={() => navigate('/login')}
        >
          Login/Signup
        </button>
      </div>

      {/* Content text */}
      <div className="text-center z-40 mb-10">
        <h1 className="text-6xl mb-5">Welcome to Kishan Sahayak</h1>
        <p className="text-xl">Your journey begins here.</p>
      </div>

    </div>


  );
};

export default SplashScreen;
