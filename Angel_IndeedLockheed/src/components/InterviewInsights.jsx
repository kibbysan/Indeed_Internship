import React from 'react';

const InterviewInsights = () => {
  return (
    <div className="px-14 py-6 w-8/12 ml-72">
      <h2 className="text-2xl font-bold mb-6">Interview insights</h2>
      <p className="mb-4">Insights from 2.5K Indeed users who have interviewed with Lockheed Martin within the last 5 years.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-100 p-4 flex flex-col items-center text-center">
          <span className="text-green-600 text-2xl mb-2">👍</span>
          <p>Favorable experience</p>
        </div>
        <div className="bg-gray-100 p-4 flex flex-col items-center text-center">
          <span className="text-orange-600 text-2xl mb-2">📊</span>
          <p>Interview is average</p>
        </div>
        <div className="bg-gray-100 p-4 flex flex-col items-center text-center">
          <span className="text-red-600 text-2xl mb-2">📅</span>
          <p>Process takes more than one month</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Interview Questions</h3>
        <div className="mb-4">
          <p>
            They asked lots of technical q...
            <span className="text-blue-600"> Show more</span>
          </p>
          <p className="text-sm text-gray-500">Shared on April 4, 2023</p>
        </div>
        <div className="mb-4">
          <p>
            Why are you fit for the role?...
            <span className="text-blue-600"> Show more</span>
          </p>
          <p className="text-sm text-gray-500">Shared on June 7, 2022</p>
        </div>
        <div className="mb-4">
          <p>
            My experience, why do I want t...
            <span className="text-blue-600"> Show more</span>
          </p>
          <p className="text-sm text-gray-500">Shared on February 25, 2022</p>
        </div>
      </div>

      <a href="#" className="text-blue-600">Explore interviews</a>
    </div>
  );
}

export default InterviewInsights;
