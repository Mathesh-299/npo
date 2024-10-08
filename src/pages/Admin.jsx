<<<<<<< HEAD
import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { addProjects, addProjects1, addProjects2 } from '../ngo/api';
=======
import { X } from 'lucide-react'; // Importing the X icon from lucide-react
import React, { useRef, useState } from 'react';
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267

const AdminLogin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const [showAddService, setShowAddService] = useState(false); // State to show Add Service form
  const [food, setfood] = useState(false)
  const [edc, setedc] = useState(false)
  const [shel, setshel] = useState(false)
  // Hardcoded email and password for admin verification
  const adminEmail = 'admin@example.com';
  const adminPassword = '123';

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

  const handleAddServiceClick1 = () => {
    setShowAddService(true); // Show the Add Service form
    setedc(true);
    setshel(false);
    setfood(false)
  };
  const handleAddServiceClick2 = () => {
    setShowAddService(true); // Show the Add Service form
    setfood(true);
    setshel(false);
    setedc(false);
  };
  const handleAddServiceClick3 = () => {
    setShowAddService(true); // Show the Add Service form
    setshel(true);
    setfood(false);
    setedc(false);
  };

  const handleCancelClick = () => {
    setShowAddService(false); // Go back to the admin dashboard
  };

  const name = useRef(null);
  const location = useRef(null);
  const description = useRef(null);
  const contact = useRef(null);
  const history = useRef(null);
  const impact = useRef(null);
  const submit = async (e) => {
    e.preventDefault();
    handleCancelClick()
    const project = {
      name: name.current.value,
      location: location.current.value,
      description: description.current.value,
      contact: contact.current.value,
      history: history.current.value,
      impact: impact.current.value,
    }
    try {
      if (edc) {
        const response = await addProjects(project)
        console.log(response)
      }
      else if (food) {
        const response = await addProjects1(project)
        console.log(response)
      }
      else if (shel) {
        const response = await addProjects2(project)
        console.log(response)
      }
    }
    catch (error) {
      console.log(error)
    }
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
                autoComplete="email" // Added autocomplete attribute
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
                autoComplete="current-password" // Added autocomplete attribute
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
          <div className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 mb-6 max-w-md mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
              Welcome Admin
            </h2>
            <p className="mb-8 text-gray-600 text-center">
              You are now logged in as an admin. From here, you can manage services, events, and more for your platform.
              To add a new service, click the button below.
            </p>
            <div className="flex justify-around gap-4">
              <button
                onClick={handleAddServiceClick1}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Add Education
              </button>
              <button
                onClick={handleAddServiceClick2}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Add Food
              </button>
              <button
                onClick={handleAddServiceClick3}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Add Shelter
              </button>
            </div>
          </div>

        ) : (
          // Add Service Form (no redirection)
          <div className="relative bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="absolute top-4 right-4 cursor-pointer" onClick={handleCancelClick}>
              <X className="h-6 w-6 text-gray-500 hover:text-gray-700" /> {/* Using the X icon */}
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Add a New Service</h2>
            <form onSubmit={submit}>
              {/* Service Name Title */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">
                  Service Name Title
                </label>
                <input
                  id="serviceName"
                  type="text"
                  ref={name}
                  placeholder="Enter service name title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  autoComplete="off" // Add appropriate value if needed
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
                  ref={location}
                  placeholder="District, State, Pincode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  autoComplete="address-level1" // Add appropriate autocomplete attribute
                />
              </div>

              {/* Description About the Service */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description About the Service
                </label>
                <textarea
                  id="description"
                  ref={description}
                  placeholder="Provide a detailed description of the service"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                  autoComplete="off" // Add appropriate value if needed
                />
              </div>

              {/* Contact (Email) */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                  Contact (Email)
                </label>
                <input
                  id="contact"
                  ref={contact}
                  type="email"
                  placeholder="Enter email for contact"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  autoComplete="email" // Added autocomplete attribute
                />
              </div>

              {/* History of the Service */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="history">
                  History of the Service
                </label>
                <textarea
                  id="history"
                  ref={history}
                  placeholder="Provide the history of the service"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  required
                  autoComplete="off" // Add appropriate value if needed
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
                  ref={impact}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  required
                  autoComplete="off" // Add appropriate value if needed
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
