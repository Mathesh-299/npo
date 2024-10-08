import React, { useEffect, useState } from 'react';
import { getProjects2 } from '../ngo/api';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Shelter = ({ onDonateClick }) => {
    const [providers, setPro] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate

    const provider = async () => {
        try {
            const { data } = await getProjects2();
            setPro(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        provider();
    }, []);

    if (!providers || providers.length === 0) {
        return <div className="w-full h-[10%] flex justify-center items-center"></div>;
    }

    const handleDonateClick = () => {
        if (onDonateClick) {
            onDonateClick();  // Call the onDonateClick function if provided
        }
        navigate('/donation');  // Navigate to the Donation page
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-200 to-blue-300 py-8 px-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Support Our Shelter Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 border-l-4 border-green-500"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{provider.name}</h3>
                        <p className="text-gray-600"><strong>Location:</strong> {provider.location}</p>
                        <p className="text-gray-700 mt-2">{provider.description}</p>
                        <p className="text-gray-600 mt-4"><strong>Contact:</strong> {provider.contact}</p>
                        <p className="text-gray-600"><strong>History:</strong> {provider.history}</p>
                        <p className="text-gray-600"><strong>Impact:</strong> {provider.impact}</p>
                        <button
                            onClick={handleDonateClick}  // Trigger handleDonateClick on click
                            className="inline-block mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-l transition-all duration-300"
                        >
                            Donate Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shelter;
