import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

// Registering necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// RatingCard Component for each category
const RatingCard = ({ category, rating }) => (
  <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
    <div>
      <h4 className="text-lg font-semibold">{category}</h4>
      <p className="text-pink-600 text-lg font-bold">{rating} ★</p>
    </div>
    <span className="text-gray-400 text-2xl">&gt;</span>
  </div>
);

// Main RatingOverview Component
const RatingOverview = () => {
  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Rating',
        data: [3.94, 3.71, 3.68, 3.86, 3.87],
        borderColor: '#EC4899', // Pink color for the line
        backgroundColor: 'rgba(236, 72, 153, 0.2)', // Light pink area
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#EC4899',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { min: 3.5, max: 4 },
    },
  };

  return (
    <div className="container mx-auto px-6 py-4 w-8/12 ml-80">
      <h2 className="text-2xl font-bold mb-2">Rating overview</h2>
      <p className="text-gray-600 mb-6">
        Rating is calculated based on 9.7K reviews and is evolving.
      </p>

      {/* Line Chart */}
      <div className="bg-pink-100 p-4 rounded-lg mb-6">
        <Line data={data} options={options} />
      </div>

      {/* Explore reviews by category */}
      <h3 className="text-xl font-bold mb-4">Explore reviews by category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <RatingCard category="Work & Life Balance" rating={3.9} />
        <RatingCard category="Compensation & Benefits" rating={4.0} />
        <RatingCard category="Job Security & Advancement" rating={3.5} />
        <RatingCard category="Management" rating={3.5} />
        <RatingCard category="Culture" rating={3.7} />
      </div>
    </div>
  );
};

export default RatingOverview;
