import React, { useState } from 'react';

const Donation = () => {
  const [visible, setVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDonateClick = () => {
    setVisible(true); // Show the donation form
  };

  const handleClose = () => {
    setVisible(false); // Hide the donation form
    setSuccessMessage(''); // Clear success message
    setErrorMessage(''); // Clear error message
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission logic
    const isSuccess = Math.random() > 0.2; // Simulating success (80% chance)

    if (isSuccess) {
      setSuccessMessage('Form submitted successfully!'); // Set success message
      handleClose(); // Hide form after successful submission
    } else {
      setErrorMessage('An error occurred while submitting the form. Please try again.'); // Set error message
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/75/a8/a6/75a8a6baf1eacdb72dabf731bf00bf5e.jpg")',
      }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-white"></h2>

      {/* Section about the importance of donation */}
      <div className="text-center mb-6 text-lg text-white max-w-3xl bg-black bg-opacity-50 p-6 rounded-md">
        {/* <p>
          Your generosity fuels our mission. Every contribution helps us reach more people, deliver vital services, and
          make a lasting impact in our communities. By donating today, you’re not just giving funds,
          you’re giving hope and creating opportunities for those in need.
        </p>
        <p className="mt-2">
          Together, we can build a brighter future. No donation is too small, and every act of kindness matters.
          Help us continue the vital work that changes lives for the better.
        </p> */}
      </div>

      <button
        onClick={handleDonateClick}
        className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors duration-300"
      > Donate Now
      </button>

      {/* Success message */}
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-400 rounded-md w-full max-w-md text-center">
          {successMessage}
        </div>
      )}

      {/* Error message (toast) */}
      {errorMessage && (
        <div className="fixed top-5 right-5 p-4 bg-red-100 text-red-700 border border-red-400 rounded-md w-full max-w-xs">
          {errorMessage}
        </div>
      )}

      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-[50%] bg-white rounded-lg p-6 max-w-lg mx-auto relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times; {/* Close button */}
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Donation Form</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-4 w-[50%]">
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
