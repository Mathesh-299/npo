import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to Our Non-Profit Organization
      </h1>
      
      <p className="text-2xl text-gray-700 mb-4 max-w-4xl">
        Our mission is to create a better world by empowering individuals and transforming communities. Through our services and events, we aim to make a lasting impact and provide support where it's needed the most.
      </p>
      
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Join us in this journey to uplift and inspire. Whether you choose to volunteer, donate, or participate in our events, every contribution helps us bring positive change to those in need. Together, we can build a brighter future for everyone.
      </p>

      {/* Donation Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Donation Page?</h2>
        <p className="text-lg text-gray-600 mb-4">
          The Donation page is where you can contribute to our cause. Your generous donations help us fund vital programs, support our volunteers, and provide necessary services to communities in need. Every donation, big or small, makes a significant impact on the lives of those we serve.
        </p>
        <Link to="/donation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-lg">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Volunteer Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Volunteer Page?</h2>
        <p className="text-lg text-gray-600 mb-4">
          The Volunteer page is where you can sign up to help make a difference in your community. Whether you have time to spare or specific skills to offer, your involvement will directly contribute to the success of our mission. Join a team of passionate individuals working to create positive change.
        </p>
        <Link to="/volunteer">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-6 rounded-lg">
            Volunteer with Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
