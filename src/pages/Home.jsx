import React, { useState } from 'react';
import { FaBlog } from 'react-icons/fa'; // Make sure to install react-icons
import { Link } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-center p-8 relative">
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
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Donation Page?</h2>
        <p className="text-lg text-gray-600 mb-4">
          The Donation page is where you can contribute to our cause. Your generous donations help us fund vital programs, support our volunteers, and provide necessary services to communities in need. Every donation, big or small, makes a significant impact on the lives of those we serve.
        </p>
        <Link to="/donation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Volunteer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Volunteer Page?</h2>
        <p className="text-lg text-gray-600 mb-4">
          The Volunteer page is where you can sign up to help make a difference in your community. Whether you have time to spare or specific skills to offer, your involvement will directly contribute to the success of our mission. Join a team of passionate individuals working to create positive change.
        </p>
        <Link to="/volunteer">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Blog Icon Section */}
      <div
        className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blog Icon */}
        <FaBlog className={`text-4xl text-gray-600 transition-transform duration-300 ${isHovered ? 'transform scale-125' : 'hover:text-blue-600'}`} />
        
        {/* Blog Box */}
        {isHovered && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-2 w-48 transition-transform duration-300">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Latest Blog Posts</h4>
            <p className="text-gray-600 mb-4">
              Explore our recent blog posts to learn more about our mission, initiatives, and the positive impact we are making in the community.
            </p>
            <Link to="/blogs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-1 px-2 rounded">
                Read More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;