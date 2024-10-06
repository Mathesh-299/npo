import React from 'react';

const Blogs = () => {
  return (
    <>

      <div className="flex flex-wrap justify-center gap-6 my-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 1</h3>
          <p className="text-gray-600 mb-4">
            Brief description of the blog post goes here. Learn more about our initiatives and how you can get involved.
          </p>
          {/* <Link to="/blogs"> */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded mt-auto transition-all duration-300">
              Read More
            </button>
          {/* </Link> */}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 2</h3>
          <p className="text-gray-600 mb-4">
            Brief description of the blog post goes here. Discover stories of impact and change within our community.
          </p>
          {/* <Link to="/blogs"> */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded mt-auto transition-all duration-300">
              Read More
            </button>
          {/* </Link> */}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 3</h3>
          <p className="text-gray-600 mb-4">
            Brief description of the blog post goes here. Join us in making a difference through your contributions.
          </p>
          {/* <Link to="/blogs"> */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded mt-auto transition-all duration-300">
              Read More
            </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Blogs;
