import React, { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const companies = [
    {
        logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/840ef038663bcfde1befff5745fded3e',
        name: 'Northrop Grumman',
        rating: 4.0,
        reviews: '7.3K reviews',
        jobs: '2.3K jobs',
        industry: 'Aerospace & Defense',
    },
    {
        logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/9d37779ba08862de15d9853b90c89b0c',
        name: 'Raytheon',
        rating: 3.9,
        reviews: '5.1K reviews',
        jobs: '1.4K jobs',
        industry: 'Aerospace & Defense',
    },
    {
        logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/d756d2fff42aa9586c0905e5281a25f9',
        name: 'Boeing',
        rating: 3.9,
        reviews: '9.9K reviews',
        jobs: '208 jobs',
        industry: 'Aerospace & Defense',
    },
    {
        logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/6a6c9f075b48a5898354e5f275c43a33',
        name: 'L3Harris',
        rating: 4.0,
        reviews: '6.1K reviews',
        jobs: '1.6K jobs',
        industry: 'Aerospace & Defense',
    },
];

const CompanyCard = ({ logo, name, rating, reviews, jobs, industry }) => (
    <div className="bg-white border-2 border-gray-300 shadow-md p-4 rounded-lg w-64">
        <div className="text-sm text-gray-500 mb-2">{industry}</div>
        <img src={logo} alt={name} className="h-12 w-12 mb-4 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center text-purple-600 my-2">
            <span className="mr-2">{rating}</span>
            <span className="text-yellow-400">⭐⭐⭐⭐</span>
        </div>
        <div className="text-sm text-gray-500">{reviews} | {jobs}</div>
        <button className="bg-blue-100 text-blue-600 mt-4 py-1 px-3 rounded-full w-full">
            View company
        </button>
        <a href="#" className="block text-center text-blue-600 mt-2 text-sm">Compare</a>
    </div>
);

const CompaniesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? companies.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === companies.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative px-5 py-4 w-10/12 ml-52">
            <h2 className="text-2xl font-semibold mb-4 ml-28">People also viewed</h2>
            <div className="flex justify-center items-center">
                <button onClick={handlePrevClick} className="absolute left-0 transform -translate-y-1/2">
                    <FaArrowLeft className="text-gray-600 text-2xl hover:text-blue-600" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden ml-8">
                    {companies.map((company, index) => (
                        <CompanyCard key={index} {...company} />
                    ))}
                </div>
                <button onClick={handleNextClick} className="absolute right-0 transform -translate-y-1/2">
                    <FaArrowRight className="text-gray-600 text-2xl hover:text-blue-600" />
                </button>
            </div>
        </div>
    );
};

export default CompaniesCarousel;
