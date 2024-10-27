import React from 'react';

const SalaryCards = () => {
  return (
    <div className="container mx-auto px-14 py-6 w-8/12 ml-72">
      
      {/* Link to view all jobs */}
      <div className="mb-8 ">
        <a href="#" className="text-blue-600 font-medium hover:underline">
          See all available jobs &rarr;
        </a>
      </div>

      {/* Title and Subtitle */}
      <h2 className="text-2xl font-bold mb-2">Salaries</h2>
      <p className="text-gray-600 mb-4">
        Salary estimated from 36.6K employees, users, and past and present job advertisements on Indeed.
      </p>

      {/* Popular Roles Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Popular Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Salary Cards */}
          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Software Engineer</h4>
            <p className="text-2xl font-semibold">$99,582</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">288 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">System Engineer</h4>
            <p className="text-2xl font-semibold">$102,865</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">183 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Plan Manager</h4>
            <p className="text-2xl font-semibold">$198,986</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">11 salaries reported</p>
          </div>
        </div>
      </div>

      {/* Software Development Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Software Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Salary Cards */}
          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Senior Software Engineer</h4>
            <p className="text-2xl font-semibold">$126,450</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">63 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Systems Integration Engineer</h4>
            <p className="text-2xl font-semibold">$103,039</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">21 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Software Architect</h4>
            <p className="text-2xl font-semibold">$141,852</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">25 salaries reported</p>
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Salary Cards */}
          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Contract Manager</h4>
            <p className="text-2xl font-semibold">$102,527</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">25 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Safety Engineer</h4>
            <p className="text-2xl font-semibold">$125,666</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">14 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Manufacturing Specialist</h4>
            <p className="text-2xl font-semibold">$83,654</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">6 salaries reported</p>
          </div>
        </div>
      </div>

      {/* Industrial Engineering Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Industrial Engineering</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Salary Cards */}
          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Senior Software Engineer</h4>
            <p className="text-2xl font-semibold">$118,779</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">39 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Manufacturing Engineer</h4>
            <p className="text-2xl font-semibold">$93,628</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">24 salaries reported</p>
          </div>

          <div className="p-4 border-2 rounded-lg border-gray-300 hover:shadow-md">
            <h4 className="text-blue-600 font-medium">Quality Engineer</h4>
            <p className="text-2xl font-semibold">$95,530</p>
            <p className="text-gray-600 text-sm">per year</p>
            <p className="text-gray-500 text-sm">16 salaries reported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCards;
