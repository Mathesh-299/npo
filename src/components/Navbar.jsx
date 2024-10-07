import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-gray-800');
  const [textColor, setTextColor] = useState('text-white');
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // To get the current route

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('bg-white/50');
      setTextColor('text-black/80');
    } else {
      setBgColor('bg-gray-800');
      setTextColor('text-white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${bgColor} fixed top-0 w-full transition-colors duration-300 z-10`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-lg font-bold ${textColor} font-roboto`}>
            <Link to="/" className="hover:text-gray-300">HOME</Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Navigation"
              className={`${textColor} focus:outline-none`}
            >
              {isOpen ? '✕' : '☰'} {/* Toggle icon */}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-bold text-xl font-roboto">
            {['services', 'admin', 'donation', 'about', 'contact', 'logout'].map((link) => (
              <Link
                key={link}
                to={`/${link}`}
                className={`hover:text-gray-300 ${textColor} ${location.pathname === `/${link}` ? 'font-semibold' : ''}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className={`md:hidden bg-white/50 backdrop-blur-md shadow-lg transition-all duration-300`}>
          <div className="flex flex-col space-y-4 p-4">
            {['services', 'admin', 'donation', 'about', 'contact', 'logout'].map((link) => (
              <Link
                key={link}
                to={`/${link}`}
                className={`block text-xl ${textColor} hover:text-gray-300 ${location.pathname === `/${link}` ? 'font-semibold' : ''}`}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
