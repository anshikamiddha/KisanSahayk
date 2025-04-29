import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Added loading state

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');  // Redirect if already logged in
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', { email, password });

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userEmail', email);
        navigate('/');  // Redirect to Home
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      navigate('/'); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#b2f2bb] to-[#69db7c]">
      <div className="p-8 min-h-screen rounded-2xl shadow-2xl w-full max-w-md" 
        style={{ background: 'radial-gradient(circle, rgba(212, 237, 209, 1) 0%, rgba(230, 242, 235, 1) 50%, rgba(164, 214, 135, 1) 100%)' }}>

        {/* Image */}
        <div className="mb-6 flex justify-center">
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src="https://i.postimg.cc/4NsytY8b/Nourish-the-earth-feed-the-future-Regenerative-farming-Soil-restoration-Community.jpg"
            alt="AgroSmart"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-700">Create Your Account</h2>
          <p className="text-gray-500">Grow Smart, Farm Smart</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button 
            type="submit" 
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors mb-6"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Alternative Sign-In Options */}
        <div className="text-center text-sm text-gray-500 mb-6">OR</div>

        <div className="flex justify-center space-x-6 mb-6">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-red-100 text-red-600 text-xl font-bold flex items-center justify-center"
          >
            G
          </button>
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold flex items-center justify-center"
          >
            f
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
