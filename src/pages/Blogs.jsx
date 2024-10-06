import React, { useState } from 'react';
import blogImage1 from '../assets/img/0_Wg8lzJC41aYgQXLv.png';
import blogImage4 from '../assets/img/employee-advocacy.png';
import blogImage5 from '../assets/img/fund.png';
import blogImage6 from '../assets/img/image1.jpeg';
import blogImage3 from '../assets/img/image2.jpg';
import blogImage2 from '../assets/img/vol.png';

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
  const [blogs, setBlogs] = useState([
    {
      title: "Empowering Communities Through Education",
      content: "Education is a powerful tool for change. In this blog, we explore how our nonprofit organization is providing educational resources and scholarships to underprivileged children, helping them build a brighter future.",
      image: blogImage1,
    },
    {
      title: "The Importance of Volunteerism",
      content: "Volunteers are the backbone of our organization. This blog discusses the vital role that volunteers play in our community outreach programs.",
      image: blogImage2,
    },
    {
      title: "Sustainable Solutions for Hunger Relief",
      content: "Hunger is a pressing issue that affects many families in our community. In this blog post, we highlight our innovative approach to tackling hunger through sustainable solutions.",
      image: blogImage3,
    },
    {
      title: "Creating Lasting Change Through Advocacy",
      content: "Advocacy is essential for driving systemic change. In this post, we discuss our efforts to advocate for policies that support marginalized communities.",
      image: blogImage4,
    },
    {
      title: "Fundraising: Building a Stronger Community",
      content: "Fundraising is crucial for sustaining our programs and initiatives. In this blog, we explore different fundraising strategies that have proven successful for our organization.",
      image: blogImage5,
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      content: "Mental health is an often-overlooked aspect of overall well-being. In this blog post, we address the importance of mental health awareness and the services we provide to support individuals in need.",
      image: blogImage6,
    },
  ]);

  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: '' });
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Add new blog
  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content && newBlog.image) {
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      setNewBlog({ title: '', content: '', image: '' });
      setShowForm(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Add Blog Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Add Blog
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <div className="mb-8 border p-8 rounded-lg bg-gray-100 shadow-md w-[50rem] h-[18rem]">
          <h2 className="text-xl font-bold mb-2">Add New Blog</h2>
          <input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700  hover:bg-white font-bold gap-4"
          />
          <textarea
            placeholder="Content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700  hover:bg-white font-bold gap-4"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBlog.image}
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            className="w-full h-[3rem] rounded-sm outline-none focus:border-b-2 hover:border-purple-700  hover:bg-white font-bold"
          />
          <button
            onClick={handleAddBlog}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
          >
            Submit
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 ml-2"
          >
            Cancel
          </button>
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

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-white bg-blue-500 shadow-md hover:bg-blue-600 transition-all ${
            currentPage === 1 && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-white bg-blue-500 shadow-md hover:bg-blue-600 transition-all ${
            currentPage === totalPages && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
