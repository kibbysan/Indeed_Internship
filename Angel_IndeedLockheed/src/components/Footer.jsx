import React from 'react';

const Footer = () => {
  return (
    <footer className="px-14 py-6 w-11/12">
      <div className="container mx-auto">
        {/* Upper Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">Hiring Lab</a>
          <a href="#" className="hover:underline">Career Advice</a>
          <a href="#" className="hover:underline">Browse Jobs</a>
          <a href="#" className="hover:underline">Browse Companies</a>
          <a href="#" className="hover:underline">Resume Help</a>
          <a href="#" className="hover:underline">Salaries</a>
          <a href="#" className="hover:underline">Indeed Events</a>
          <a href="#" className="hover:underline">Work at Indeed</a>
          <a href="#" className="hover:underline">Countries</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">ESG at Indeed</a>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-xs text-gray-500 flex justify-between items-center border-t pt-4">
          <span>© 2024 Indeed</span>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Your Privacy Choices</a>
            <a href="#" className="hover:underline">Accessibility at Indeed</a>
            <a href="#" className="hover:underline">Privacy Center and Ad Choices</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
