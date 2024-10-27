import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import IndustryGrid from './Components/IndustryGrid';
import PopularCompanies from './Components/PopularCompanies';
import CompareSection from './Components/CompareSection';
import Footer from './Components/Footer'; // Import the Footer component

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);

  const companies = [
    { name: 'Barnes & Noble', logo: '/im1.png' },
    { name: 'UnitedHealth Group', logo: '/im2.png' },
    { name: 'Amazon Flex', logo: '/im3.png' },
    { name: "Raising Cane's", logo: '/im4.png' },
    { name: 'United States Postal Service', logo: '/im5.png' },
    { name: 'Allied Universal', logo: '/im6.png' },
    { name: 'Boeing', logo: '/im7.png' },
    { name: 'Indeed', logo: '/im8.png' },
    { name: 'Burlington Stores', logo: '/im9.png' },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );
      setAutoCompleteResults(filteredCompanies);
      setShowSuggestions(filteredCompanies.length > 0);
    } else {
      setShowSuggestions(false);
      setAutoCompleteResults([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
  };

  const handleFindCompanies = () => {
    console.log("Finding companies for:", searchQuery);
  };

  // User ratings state
  const [userRating, setUserRating] = useState(0);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <div>
      <Navbar />

      {/* Page Content */}
      <div className="py-20 px-10 mx-auto max-w-screen-lg">
        <h1 className="text-5xl font-bold text-gray-900 mb-7">
          Find great places to work
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Get access to millions of company reviews
        </p>

        {/* Search Filter Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex-grow mr-4 mb-4 md:mb-0">
            <label htmlFor="search" className="block text-gray-600 text-sm mb-2">
              Company name or Job title
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for a company..."
                className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-[700px]"
              />
              {showSuggestions && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                  {autoCompleteResults.map((company, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(company)}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-200 flex items-center"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {company.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Find Companies Button */}
          <button
            onClick={handleFindCompanies}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-[250px] mt-5"
          >
            Find Companies
          </button>
        </div>

        {/* Linkable Text */}
        <p className="text-lg text-blue-600 underline mt-4">
          Do you want to search for salaries?
        </p>

        <IndustryGrid />
        <PopularCompanies searchQuery={searchQuery} />

        {/* Compare Section */}
        <CompareSection />

        {/* Rate Your Recent Employer Section */}
        <div className="mt-12 bg-green-50 shadow-md p-8 flex flex-col sm:flex-row items-center">
          <div className="flex items-center">
            <img src="/r.jpg" alt="Rate your employer" className="w-10 h-10 mr-4" />
            <p className="text-xl font-semibold text-gray-700">Rate your recent employer:</p>
          </div>
          <div className="flex ml-auto mt-4 sm:mt-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 cursor-pointer ${star <= userRating ? 'text-blue-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => handleRatingClick(star)}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
