import React from 'react';

const LockheedMartinHeader = () => {
  return (
    <div className="bg-white shadow p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Left Section */}
        <div className="flex ml-56 items-center space-x-4">
          {/* Lockheed Martin Logo */}
          <img
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/debbff68624041821d0c56fbccbcc330" // Replace with the actual image path for the Lockheed Martin logo
            alt="Lockheed Martin"
            className="w-12 h-12"
          />
          {/* Company Name and Rating */}
          <div>
            <h1 className="text-lg font-bold">Lockheed Martin</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">75</span>
              <span className="ml-2 flex items-center">
                {/* Placeholder for the badge */}
                <span className="w-4 h-4 bg-gradient-to-r from-teal-400 to-indigo-400 rounded-full inline-block"></span>
                <span className="ml-2 text-gray-800 text-sm">4.0</span>
                <span className="ml-1 text-pink-600">★★★★☆</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex mr-56 space-x-4 items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Follow</button>
          <button className="text-blue-600 hover:underline">Write a review</button>
        </div>
      </div>

      {/* Middle Section (Navbar) */}
      <div className="mt-4 flex justify-center">
        <div className="hidden md:flex space-x-8">
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">Snapshot</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">Why Join Us</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">9.7K Reviews</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">36.7K Salaries</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">2K Jobs</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">446 Q&A</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">Interviews</span>
          <span className="text-gray-800 hover:text-pink-600 cursor-pointer">30 Photos</span>
        </div>
      </div>
    </div>
  );
};

export default LockheedMartinHeader;
