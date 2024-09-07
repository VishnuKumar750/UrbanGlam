import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn] = useState(true); // Replace with actual login state management
  const [cartItems] = useState(3); // Replace with actual cart item count
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-2xl mx-auto bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/" className="flex items-center space-x-2">
            <span>UrbanGlam</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
          <Link to="/AboutUs" className="text-gray-600 hover:text-gray-800">About Us</Link>
          <Link to="/Services" className="text-gray-600 hover:text-gray-800">Services</Link>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Conditionally Render Cart Icon */}
          {isLoggedIn && (
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-gray-600 text-2xl" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 block w-4 h-4 bg-red-600 text-white text-xs font-semibold rounded-full text-center">
                  {cartItems}
                </span>
              )}
            </Link>
          )}

          {/* User Profile Icon */}
          {isLoggedIn && (
            <Link to="/profile">
              <FaUser className="text-gray-600 text-2xl" />
            </Link>
          )}

          {/* Login/Register Buttons */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                <FaSignInAlt /> <span>Login</span>
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                <FaUserPlus /> <span>Register</span>
              </Link>
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile Menu */}
     
      {isMobileMenuOpen && (
        <>
        
        <nav className="md:hidden bg-gray-100 mt-2 absolute top-full left-0 right-0 z-10 p-4 shadow-md">
          
          <div className="flex justify-between items-center mb-4">
            <div>
              <Link to="/blog" className="block py-2 text-gray-600 hover:text-gray-800">Blog</Link>
              <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800">About Us</Link>
              <Link to="/services" className="block py-2 text-gray-600 hover:text-gray-800">Services</Link>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 text-2xl"
            >
              <FaTimes />
            </button>
          </div>

          {/* Login/Register Buttons in Mobile Menu */}
          {!isLoggedIn ? (
            <div className="flex flex-col space-y-2">
              <Link to="/login" className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                <FaSignInAlt /> <span>Login</span>
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                <FaUserPlus /> <span>Register</span>
              </Link>
            </div>
          ) : null}
        </nav>
        </>
      )}
    </header>
  );
};

export default Header;
