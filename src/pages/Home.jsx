import React, { useState } from 'react';
import { FaBlog } from 'react-icons/fa'; // Make sure to install react-icons
import { Link } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-center p-8 relative">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInDown">
        Join Us in Making a Difference
      </h1>

      <p className="text-2xl text-gray-700 mb-4 max-w-4xl animate__animated animate__fadeIn">
        At our non-profit organization, we believe in the power of community. Together, we can turn compassion into action, creating ripples of change that transform lives.
      </p>

      <p className="text-lg text-gray-600 mb-8 max-w-3xl animate__animated animate__fadeIn">
        Your involvement matters! Whether you donate, volunteer, or spread the word, every effort contributes to our shared vision of a brighter future. Let’s inspire hope and bring joy to those who need it most.
      </p>

      {/* Donation Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Empower Change Through Donations</h2>
        <p className="text-lg text-gray-600 mb-4">
          Your contributions help fuel our initiatives, from food drives to educational programs. Imagine the smiles you'll bring by supporting those in need—every dollar counts!
        </p>
        <Link to="/donation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Donate Today
          </button>
        </Link>
      </div>

      {/* Volunteer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Volunteer Hero</h2>
        <p className="text-lg text-gray-600 mb-4">
          Dive into meaningful experiences that uplift our community. From hands-on events to skill-sharing opportunities, your passion can make a real impact. Join us, and let's make memories together!
        </p>
        <Link to="/contact">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Get Involved
          </button>
        </Link>
      </div>

      {/* Blog Icon Section */}
      <div
        className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Blog Icon"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && setIsHovered(true)} // Accessibility: allows keyboard navigation
      >
        {/* Blog Icon */}
        <FaBlog className={`text-4xl text-gray-600 transition-transform duration-300 ${isHovered ? 'transform scale-125' : 'hover:text-blue-600'}`} />
        
        {/* Blog Box */}
        {isHovered && (
          <div className="bg-white p-4 rounded-lg shadow-lg mt-2 w-48 transition-transform duration-300">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Explore Our Journey</h4>
            <p className="text-gray-600 mb-4">
              Discover inspiring stories and updates about our work, the lives we've touched, and how you can get involved. Your journey starts here!
            </p>
            <Link to="/blogs">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-1 px-2 rounded">
                Read Our Blogs
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
