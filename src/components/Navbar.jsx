import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: 'Agro Smart', path: '/agrosmart' },
    { title: 'Buy And Rent', path: '/buy-and-rent' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">KISANSAHAYAK</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 font-bold">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-pink-500 bg-purple-100'
                    : 'text-black hover:text-pink-500 hover:bg-purple-50'
                }`}
              >
                {item.title}
              </Link>
            ))}

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-black hover:text-pink-500 hover:bg-purple-50 transition-colors"
              >
                Profile <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link to="/notifications" className="block px-4 py-2 text-sm hover:bg-purple-50">Notifications</Link>
                  <Link to="/language" className="block px-4 py-2 text-sm hover:bg-purple-50">Language</Link>
                  <Link to="/user" className="block px-4 py-2 text-sm hover:bg-purple-50">User Info</Link>
                  <Link to="/support" className="block px-4 py-2 text-sm hover:bg-purple-50">Customer Care</Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-purple-50">Log Out</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-pink-400 hover:text-purple-200 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-pink-500 bg-purple-50'
                    : 'text-black hover:text-pink-500 hover:bg-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="border-t mt-2 pt-2">
              <Link to="/notifications" className="block px-3 py-2 text-sm hover:bg-purple-50">Notifications</Link>
              <Link to="/language" className="block px-3 py-2 text-sm hover:bg-purple-50">Language</Link>
              <Link to="/user" className="block px-3 py-2 text-sm hover:bg-purple-50">User Info</Link>
              <Link to="/support" className="block px-3 py-2 text-sm hover:bg-purple-50">Customer Care</Link>
              <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-purple-50">Log Out</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
