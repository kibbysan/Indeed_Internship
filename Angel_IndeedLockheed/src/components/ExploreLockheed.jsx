import React from 'react';

const ExploreLockheed = () => {
  return (
    <div className="container mx-auto px-14 py-6 w-8/12">
      <h2 className="text-2xl font-bold mb-4 ml-10">Explore Lockheed Martin</h2>
      <div className="flex justify-center">
        {/* Card */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow border -ml-96 mr-64">
          {/* Icon/Image */}
          <div className="w-12 h-12 bg-gray-200 flex justify-center items-center rounded mr-4">
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              {/* Placeholder SVG icon */}
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V7h2v3z" />
            </svg>
          </div>
          {/* Details */}
          <div>
            <a href="#" className="text-blue-600 font-semibold hover:underline ">
              PZL Mielec
            </a>
            <p className="text-gray-600">1 review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLockheed;
