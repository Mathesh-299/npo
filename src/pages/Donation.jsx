// src/pages/Donation.js
import React, { useState } from 'react';

const Donation = () => {
  const [visible, setVisible] = useState(false);

  const handleDonateClick = () => {
    setVisible(true); // Show the donation form
  };

  const handleClose = () => {
    setVisible(false); // Hide the donation form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-blue-200 p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Make a Donation</h2>
      <button
        onClick={handleDonateClick}
        className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors duration-300"
      >
        Donate Now
      </button>

      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X {/* Close button */}
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Donation Form</h3>
            <form className='space-y-4'> {/* Added spacing between form elements */}
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  required
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  required
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="tel"
                  required
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  required
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Donation Amount:</label>
                <input
                  type="number"
                  required
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message:</label>
                <textarea
                  rows="4"
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-green-400"
                  placeholder="Optional message"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-full"
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
