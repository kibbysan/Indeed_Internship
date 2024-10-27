import React from 'react';

const CompareSection = () => {
  const companies = [
    { name: 'Marshalls', logo: '/c1.png', rating: 3.6, reviews: '12.3K', vs: 'TJ Maxx', vsLogo: '/c2.png', vsRating: 3.6, vsReviews: '12.8K' },
    { name: 'Apple', logo: '/c3.png', rating: 4.1, reviews: '13.3K', vs: 'Google', vsLogo: '/c4.png', vsRating: 4.3, vsReviews: '5.7K' },
    { name: 'Domino\'s', logo: '/c5.png', rating: 3.4, reviews: '37.7K', vs: 'Pizza Hut', vsLogo: '/c6.png', vsRating: 3.5, vsReviews: '38K' },
    { name: 'Bank of America', logo: '/c7.png', rating: 3.8, reviews: '32.5K', vs: 'Wells Fargo', vsLogo: '/c8.png', vsRating: 3.7, vsReviews: '46.6K' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Compare working at</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <img src={company.logo} alt={company.name} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-bold text-gray-700">{company.name}</p>
                  <p className="text-sm text-gray-600">{company.rating} <span className="text-purple-500">★</span> {company.reviews} reviews</p>
                </div>
              </div>
              <span className="text-xl font-semibold text-gray-500 mx-4">VS</span>
              <div className="flex items-center">
                <img src={company.vsLogo} alt={company.vs} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-bold text-gray-700">{company.vs}</p>
                  <p className="text-sm text-gray-600">{company.vsRating} <span className="text-purple-500">★</span> {company.vsReviews} reviews</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
