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
          <div className="hidden md:flex space-x-8 font-bold text-xl">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/services" className='hover:text-gray-300'>Services</Link>
            <Link to="/events" className="hover:text-gray-300">Events</Link>
            <Link to="/donation" className="hover:text-gray-300">Donation</Link>
            {/* <Link to="/volunteer" className="hover:text-gray-300">Volunteer</Link> */}
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
