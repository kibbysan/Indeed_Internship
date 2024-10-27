import React from 'react';

// JobCard Component
const JobCard = ({ jobType, jobTitle, location, datePosted }) => {
  return (
    <div className="bg-white shadow-lg border rounded-lg p-4 min-w-[250px]">
      <p className="text-gray-500 mb-1">{jobType}</p>
      <h3 className="text-lg mb-1">{jobTitle}</h3>
      <p className="text-gray-600 mb-1">{location}</p>
      <p className="text-gray-400 mb-4">{datePosted}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        View job
      </button>
    </div>
  );
};

// JobCategory Component
const JobCategory = ({ title, jobCount }) => {
  return (
    <div className="bg-white p-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600">{jobCount} jobs</p>
    </div>
  );
};

// LocationCard Component
const LocationCard = ({ location, jobCount }) => {
  return (
    <div className="bg-white p-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
      <p className="font-semibold">{location}</p>
      <p className="text-gray-600">{jobCount} jobs</p>
    </div>
  );
};

// Main JobListing Component
const JobListing = () => {
  // Sample data for jobs, categories, and locations
  const jobs = [
    { jobType: 'Full-time', jobTitle: 'Production Service...', location: 'Meridian, MS', datePosted: '5 days ago' },
    { jobType: 'Full-time', jobTitle: 'Artificial Intelligence (AI...', location: 'Manassas, VA', datePosted: '24 days ago' },
    { jobType: 'Full-time', jobTitle: 'Assembler/Rivete A', location: 'Bridgeport, CT', datePosted: '23 hours ago' },
  ];

  const categories = [
    { title: 'System Engineer', jobCount: 88 },
    { title: 'Software Engineer', jobCount: 81 },
    { title: 'Security Officer', jobCount: 48 },
    { title: 'Assembler', jobCount: 41 },
    { title: 'Quality Engineer', jobCount: 36},
    { title: 'Show more job titles'},
  ];

  const locations = [
    { location: 'Fort Worth, TX', jobCount: 266},
    { location: 'Orlando, FL', jobCount: 132 },
    { location: 'Littleton, CO', jobCount: 98 },
    { location: 'Grand Prairie, TX', jobCount: 85 },
    { location: 'Liverpool, NY', jobCount: 71 },
  ];

  return (
    <div className="container mx-auto px-14 py-6 w-8/12 ml-72">
      <h2 className="text-2xl font-bold mb-2">Jobs</h2>
      <p className="text-gray-600 mb-6">
        We were not able to detect your location. You can browse through all 1,916 jobs Lockheed Martin has to offer.
      </p>

      {/* Job Cards Carousel */}
      <div className="relative flex items-center mb-8">
        {/* Left Arrow */}
        <button className="absolute left-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow">
          <span className="material-icons"></span>
        </button>

        {/* Dynamic Job Cards */}
        <div className="flex overflow-x-auto space-x-4 pl-12 pr-12">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              jobType={job.jobType}
              jobTitle={job.jobTitle}
              location={job.location}
              datePosted={job.datePosted}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow">
          <span className="material-icons"></span>
        </button>
      </div>

      {/* Browse Jobs by Job Title */}
      <h3 className="text-2xl font-bold mb-2">Browse jobs by job title</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <JobCategory
            key={index}
            title={category.title}
            jobCount={category.jobCount}
          />
        ))}
      </div>

      {/* Browse Jobs by Locations */}
      <h3 className="text-2xl font-bold mb-2 mt-8">Browse jobs by locations</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            location={location.location}
            jobCount={location.jobCount}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListing;
