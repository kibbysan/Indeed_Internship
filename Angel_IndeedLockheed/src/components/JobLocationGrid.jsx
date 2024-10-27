import React from 'react';

const jobs = [
  { title: "System Engineer", rating: 4.0 },
  { title: "Software Engineer", rating: 3.7 },
  { title: "Assembler", rating: 3.7 },
  { title: "Administrative Assistant", rating: 4.3 },
  { title: "Mechanic", rating: 4.1 },
  { title: "Security Officer", rating: 4.0 },
];

const locations = [
  { title: "Fort Worth, TX", rating: 3.9 },
  { title: "Marietta, GA", rating: 4.0 },
  { title: "Littleton, CO", rating: 3.8 },
  { title: "Orlando, FL", rating: 3.9 },
  { title: "Sunnyvale, CA", rating: 4.0 },
  { title: "Moorestown, NJ", rating: 3.9 },
];

const RatingCard = ({ title, rating }) => (
  <div className="flex justify-between items-center border rounded-md px-14 py-6 w-10/12 ml-16">
    <span className="text-lg font-medium">{title}</span>
    <div className="flex items-center">
      <span className="text-lg font-semibold">{rating}</span>
      <span className="text-purple-600 text-xl ml-1">★</span>
    </div>
  </div>
);

const JobLocationGrid = () => {
  return (
    <div className="ml-72 mx-auto px-14 py-6 w-8/12">
      {/* Working at Lockheed Martin Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Working at Lockheed Martin</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <RatingCard key={index} title={job.title} rating={job.rating} />
          ))}
        </div>
        <a href="/" className="text-blue-600 mt-4 block">Show all job titles</a>
      </section>

      {/* Lockheed Martin Locations Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Lockheed Martin locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <RatingCard key={index} title={location.title} rating={location.rating} />
          ))}
        </div>
        <a href="/" className="text-blue-600 mt-4 block">Show all locations</a>
      </section>
    </div>
  );
};

export default JobLocationGrid;
