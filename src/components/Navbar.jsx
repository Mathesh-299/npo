import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link to="/" className="hover:text-gray-300">NPO Logo</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <div className="relative group">
              <button className="hover:text-gray-300 focus:outline-none">Services</button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden mt-2 w-48 bg-gray-700 rounded-md shadow-lg group-hover:block">
                <Link to="/services/service1" className="block px-4 py-2 hover:bg-gray-600">Service 1</Link>
                <Link to="/services/service2" className="block px-4 py-2 hover:bg-gray-600">Service 2</Link>
                <Link to="/services/service3" className="block px-4 py-2 hover:bg-gray-600">Service 3</Link>
              </div>
            </div>
            <Link to="/events" className="hover:text-gray-300">Events</Link>
            <Link to="/donation" className="hover:text-gray-300">Donation</Link>
            <Link to="/volunteer" className="hover:text-gray-300">Volunteer</Link>
            <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/logout" className="hover:text-gray-300">Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
