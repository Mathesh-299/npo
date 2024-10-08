import React, { useEffect, useRef, useState } from 'react';
import { addProjects3, getProjects3 } from '../ngo/api';

// Blog component for individual blog posts
const Blog = ({ title, content, image, isLeft }) => (
  <div
    className={`flex mb-8 transform transition duration-300 hover:scale-105 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
  >
    <div className="flex-1 p-4 bg-white shadow-lg rounded-lg hover:bg-gradient-to-r from-blue-200 to-purple-500 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800 hover:text-white transition duration-300">{title}</h2>
      <p className="mt-2 text-gray-600 hover:text-white transition duration-300">{content}</p>
    </div>
    <div className="flex-1">
      <img
        src={image}
        alt={title}
        className="w-full h-[18rem] object-cover rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition duration-300 ease-in-out"
      />
    </div>
  </div>
);

// Main Blogs component
const Blogs = () => {
  
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: '' });
  const [showForm, setShowForm] = useState(false);
  // New blog state for form inputs
  const [currentBlogs, setCurBlog] = useState(null);
  const blogsNew = async () => {
    try {
      const { data } = await getProjects3();
      setCurBlog(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Add new blog
  const handleAddBlog = async () => {
    try {
      const response = await addProjects3(newBlog);
      console.log(response);
      setShowForm(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    blogsNew()
    handleAddBlog()
}, []);
  if (!currentBlogs || currentBlogs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Add Blog Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Add Blog
        </button>
      </div>
      {/* Blog Form */}
      {showForm && (
        <div className="mb-8 border p-8 rounded-lg bg-gray-100 shadow-md w-[50rem]">
          <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            value={newBlog.title}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <textarea
            placeholder="Content"
            value={newBlog.content}      
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            className="w-full h-[6rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBlog.image}   
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddBlog}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Add Blog Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Add Blog
        </button>
      </div>
      {/* Blog Form */}
      {showForm && (
        <div className="mb-8 border p-8 rounded-lg bg-gray-100 shadow-md w-[50rem]">
          <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
          <input
            type="text"
            placeholder="Title"
            
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            value={newBlog.title}
            
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <textarea
            placeholder="Content"
            value={newBlog.content}
            
      onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            className="w-full h-[6rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBlog.image}
            
      onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700 hover:bg-white font-bold mb-4"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddBlog}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Blog List */}
      {currentBlogs.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          content={blog.content}
          image={blog.image}
          isLeft={index % 2 === 0} // Alternating layout
        />
      ))}
    </div>
  );
};

export default Blogs;
