import React, { useState } from 'react';
import { FaBlog } from 'react-icons/fa'; // Make sure to install react-icons
import { Link } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-center p-8 relative">
<<<<<<< HEAD
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Welcome to Our Non-Profit Organization
      </h1>

      <p className="text-2xl text-gray-700 mb-4 max-w-4xl">
        Our mission is to create a better world by empowering individuals and transforming communities. Through our services and events, we aim to make a lasting impact and provide support where it's needed the most.
      </p>

      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Join us in this journey to uplift and inspire. Whether you choose to volunteer, donate, or participate in our events, every contribution helps us bring positive change to those in need. Together, we can build a brighter future for everyone.
=======
      <h1 className="text-5xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInDown">
        Join Us in Making a Difference
      </h1>

      <p className="text-2xl text-gray-700 mb-4 max-w-4xl animate__animated animate__fadeIn">
        At our non-profit organization, we believe in the power of community. Together, we can turn compassion into action, creating ripples of change that transform lives.
      </p>

      <p className="text-lg text-gray-600 mb-8 max-w-3xl animate__animated animate__fadeIn">
        Your involvement matters! Whether you donate, volunteer, or spread the word, every effort contributes to our shared vision of a brighter future. Let’s inspire hope and bring joy to those who need it most.
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
      </p>

      {/* Donation Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Donation Page?</h2>
=======
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Empower Change Through Donations</h2>
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
        <p className="text-lg text-gray-600 mb-4">
          Your contributions help fuel our initiatives, from food drives to educational programs. Imagine the smiles you'll bring by supporting those in need—every dollar counts!
        </p>
        <Link to="/donation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
<<<<<<< HEAD
            Donate Now
=======
            Donate Today
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
          </button>
        </Link>
      </div>

      {/* Volunteer Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-3xl transition-transform transform hover:scale-105 hover:shadow-xl">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the Volunteer Page?</h2>
=======
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Become a Volunteer Hero</h2>
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
        <p className="text-lg text-gray-600 mb-4">
          Dive into meaningful experiences that uplift our community. From hands-on events to skill-sharing opportunities, your passion can make a real impact. Join us, and let's make memories together!
        </p>
<<<<<<< HEAD
        <Link to="/Contact">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Contact Us
=======
        <Link to="/contact">
          <button className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Get Involved
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
          </button>
        </Link>
      </div>

      {/* Blog Icon Section */}
<<<<<<< HEAD
      <div
        className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {/* Blog Icon */}
        <FaBlog className={`text-4xl text-gray-600 transition-transform duration-300`} />
        
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
=======
      <div className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer">
        {/* // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        // aria-label="Blog Icon"
        // role="button"
        // tabIndex={0}
        // onKeyPress={(e) => e.key === 'Enter' && setIsHovered(true)}> */}
        {/* Blog Icon */}
        <FaBlog className={`text-4xl text-gray-600 transition-transform duration-300 `} />
        <span className='absolute bottom-[-35px] text-sm text-white bg-black px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Blogs</span>
        {/* Blog Box */}
        
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
        {/* )} */}
>>>>>>> fb1063b4969616ff91840bb386f1e2cd9fff9267
      </div>
    </div>
  );
};

export default Home;