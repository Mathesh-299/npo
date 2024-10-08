// src/components/Services.js
import React, { useState } from 'react';
import Education from '../Service/Education';
import Food from '../Service/Food';
import Shelter from '../Service/Shelter';
import Donation from './Donation';

const Services = () => {
    const [visible, setVisible] = useState(false);

    const handleDonateClick = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Services</h2>
                <Shelter onDonateClick={handleDonateClick} />
                <Food onDonateClick={handleDonateClick} />
                <Education onDonateClick={handleDonateClick} />
            </div>
            {visible && <Donation onClose={handleClose} />}
        </div>
    );
};

export default Services;
