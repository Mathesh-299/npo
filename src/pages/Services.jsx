// src/components/Services.js
import React from 'react';
import Education from '../Service/Education';
import Food from '../Service/Food';
import Shelter from '../Service/Shelter';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6"> {/* You can use bg-gray-100 or bg-white for a solid light background */}
      <div className="bg-blue-300 bg-opacity-90 rounded-lg p-10 shadow-lg max-w-4xl mx-auto font-serif">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Services</h2>
        <div className="flex flex-col space-y-8">
          <Shelter />
          <Food />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Services;
