// src/pages/DonationPage.js
import React from 'react';

const Donation = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Support Our Cause</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
                Your generous donation helps us provide essential services to those in need. Thank you for making a difference!
            </p>

            <form className="bg-white rounded-lg p-6 shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Donation Form</h2>
                
                <label className="block mb-2 text-gray-700" htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Enter your name"
                />

                <label className="block mb-2 text-gray-700" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Enter your email"
                />

                <label className="block mb-2 text-gray-700" htmlFor="amount">Donation Amount:</label>
                <input
                    type="number"
                    id="amount"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Enter amount"
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
                >
                    Donate Now
                </button>
            </form>
        </div>
    );
};

export default Donation;
