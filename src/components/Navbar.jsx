import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-gray-800'); // Start with solid background
  const [textColor, setTextColor] = useState('text-white'); // Text color remains white

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('bg-white'); // Change to white on scroll
      setTextColor('text-black/30'); // Change text color to black with 30% opacity
    } else {
      setBgColor('bg-gray-800'); // Solid color at the top
      setTextColor('text-white'); // Keep text color white
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${bgColor} fixed top-0 w-full transition-colors duration-300 z-10`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-lg font-bold ${textColor}`}>
            <Link to="/" className="hover:text-gray-300">HOME</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-bold text-xl">
            <Link to="/services" className={`hover:text-gray-300 ${textColor}`}>Services</Link>
            <Link to="/admin" className={`hover:text-gray-300 ${textColor}`}>Admin</Link>
            <Link to="/donation" className={`hover:text-gray-300 ${textColor}`}>Donation</Link>
            <Link to="/about" className={`hover:text-gray-300 ${textColor}`}>About Us</Link>
            <Link to="/contact" className={`hover:text-gray-300 ${textColor}`}>Contact</Link>
            <Link to="/logout" className={`hover:text-gray-300 ${textColor}`}>Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
