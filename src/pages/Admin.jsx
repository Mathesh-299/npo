import React, { useState, useRef } from 'react';
import { X } from 'lucide-react'; // Importing the X icon from lucide-react

const AdminLogin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const [showAddService, setShowAddService] = useState(false); // State to show Add Service form

  // Hardcoded email and password for admin verification
  const adminEmail = 'admin@example.com';
  const adminPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // Simple email and password verification
    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
      setIsLoggedIn(true); // Set login status to true
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleAddServiceClick = () => {
    setShowAddService(true); // Show the Add Service form
  };

  const handleCancelClick = () => {
    setShowAddService(false); // Go back to the admin dashboard
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xl">
        {!isLoggedIn ? (
          // Admin Login Form
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="Enter admin email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="Enter password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        ) : !showAddService ? (
          // Welcome Message and Add Service Button
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4 text-center">Welcome Admin</h2>
            <p className="mb-6 text-gray-700">
              You are now logged in as an admin. From here, you can manage services, events, and more for your platform.
              To add a new service, click the button below.
            </p>
            <button
              onClick={handleAddServiceClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Service
            </button>
          </div>
        ) : (
          // Add Service Form (no redirection)
          <div className="relative bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="absolute top-4 right-4 cursor-pointer" onClick={handleCancelClick}>
              <X className="h-6 w-6 text-gray-500 hover:text-gray-700" /> {/* Using the X icon */}
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Add a New Service</h2>
            <form>
              {/* Service Name Title */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">
                  Service Name Title
                </label>
                <input
                  id="serviceName"
                  type="text"
                  placeholder="Enter service name title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* Location (District, State, Pincode) */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="District, State, Pincode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* Description About the Service */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description About the Service
                </label>
                <textarea
                  id="description"
                  placeholder="Provide a detailed description of the service"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                />
              </div>

              {/* Contact (Email) */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                  Contact (Email)
                </label>
                <input
                  id="contact"
                  type="email"
                  placeholder="Enter email for contact"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* History of the Service */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="history">
                  History of the Service
                </label>
                <textarea
                  id="history"
                  placeholder="Provide the history of the service"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  required
                />
              </div>

              {/* Impact of the Service */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="impact">
                  Impact of the Service
                </label>
                <textarea
                  id="impact"
                  placeholder="Describe the impact of this service"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Service
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
