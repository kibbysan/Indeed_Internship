import React, { useState } from 'react';

const CompanySearch = () => {
  const [companyName, setCompanyName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', companyName);
    // Add search logic here
  };

  return (
    <div className="bg-gray-100 rounded-sm px-6 py-3 w-8/12 ml-80">
      <nav className="text-sm text-gray-500 mb-4">
        <a href="#" className="text-blue-600">Companies</a> &nbsp;&gt;&nbsp;
        <a href="#" className="text-blue-600">Aerospace & Defense</a> &nbsp;&gt;&nbsp;
        <span>Lockheed Martin</span>
      </nav>

      <div className="bg-gray-100 p-4 border-t border-b border-gray-200">
        <form onSubmit={handleSearch} className="flex">
          <input 
            type="text" 
            placeholder="Company name" 
            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button 
            type="submit" 
            className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanySearch;
