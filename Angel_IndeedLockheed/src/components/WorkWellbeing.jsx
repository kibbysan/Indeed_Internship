import React from 'react';

const WorkWellbeing = () => {
  return (
    <div className="container mx-auto px-14 py-8 w-10/12">
      <h2 className="text-2xl font-bold mb-4 ml-40">Work wellbeing</h2>
      <p className="text-gray-600 mb-2 ml-40">
        Results based on 3,039 responses to Indeed's work wellbeing survey.{' '}
        <a href="#" className="text-blue-600 hover:underline">Learn more about work wellbeing.</a>
      </p>

      {/* Score and Status */}
      <div className="flex mb-6 ml-40 items-center">
        <span className="text-4xl font-bold text-dark-green">75</span>
        <span className="ml-2 bg-green-100 text-green-800 text-sm px-3 py-1 rounded">Above average</span>
      </div>

      <div className="flex mt-4">
        {/* Left Section */}
        <div className="w-1/2 p-2 border-l-4 border-yellow-400 ml-40">
          <div className="p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold">Happiness</h3>
            <p className="text-gray-600">How enjoyable people find their day-to-day life at work</p>
            <span className="inline-block mt-2 px-2 py-1 bg-yellow-300 text-yellow-800 rounded">High</span>
          </div>
          <div className="p-4 rounded-lg shadow">
            <h3 className="font-semibold">Satisfaction</h3>
            <p className="text-gray-600">How content people feel with the way things are at work</p>
            <span className="inline-block mt-2 px-2 py-1 bg-green-300 text-green-800 rounded">Above average</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-2 border-l-4 border-purple-400">
          <div className="p-4 rounded-lg shadow mb-4">
            <h3 className="font-semibold">Purpose</h3>
            <p className="text-gray-600">How meaningful people find their work</p>
            <span className="inline-block mt-2 px-2 py-1 bg-purple-300 text-purple-800 rounded">High</span>
          </div>
          <div className="p-4 rounded-lg shadow">
            <h3 className="font-semibold">Stress-free</h3>
            <p className="text-gray-600">How manageable people find their work stress</p>
            <span className="inline-block mt-2 px-2 py-1 bg-green-300 text-green-800 rounded">Above average</span>
          </div>
        </div>
      </div>

      {/* See All Results Button */}
      <div className="ml-40 mt-6">
        <a href="#" className="text-blue-600 hover:underline">See all results</a>
      </div>
    </div>
  );
};

export default WorkWellbeing;
