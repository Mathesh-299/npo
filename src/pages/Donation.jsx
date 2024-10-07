// src/Donation.jsx
import React, { useState } from 'react';

const Donation = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (amount) {
            const upiLink = `upi://pay?pa=yourupi@bank&pn=YourName&mc=YourMerchantCode&tid=uniqueTransactionId&am=${amount}&tid=123456&url=https://yourwebsite.com&tn=Donation`;
            window.location.href = upiLink;
        } else {
            alert('Please enter a valid amount.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Donate Now</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Donation Amount (INR)</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            min="1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Donate via UPI
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donation;
