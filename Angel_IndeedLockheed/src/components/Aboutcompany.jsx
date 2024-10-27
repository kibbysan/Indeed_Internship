import React from 'react';

const AboutCompany = () => {
  return (
    <div className="container mx-auto px-14 py-6 w-10/12">
      <h2 className="text-2xl font-bold mb-4 ml-20 text-center">About the company</h2>

      {/* Image and Information Grid */}
      <div className="flex justify-center mb-8">
        <div className="w-1/3 flex justify-center ml-40 w-72 h-96">
          {/* CEO Image */}
          <img
            src="https://d2q79iu7y748jz.cloudfront.net/s/_ceophoto/512x512/afb56f7adf00e345cad6f525eb2d3f84" // Replace with the actual image URL
            alt="CEO"
            className="rounded-lg"
          />
        </div>

        {/* Info Grid */}
        <div className="w-2/3 grid grid-cols-2 gap-4 p-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">CEO</p>
            <p>James D. Taiclet</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Founded</p>
            <p>1995</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Industry</p>
            <a href="#" className="text-blue-600 hover:underline">Aerospace & Defense</a>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Headquarters</p>
            <p>Bethesda, MD</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Company size</p>
            <p>More than 10,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Revenue</p>
            <p>More than $10B (USD)</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="font-semibold">Link</p>
            <a href="#" className="text-blue-600 hover:underline">
              Lockheed Martin website <span>&#8599;</span>
            </a>
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="text-left text-gray-800 mb-4 ml-40">
        <p className="mb-2">The F-35, PAC-3, and the GOES weather satellite...</p>
        <p className="mb-2">What do all of these technologies have in common, you might ask?</p>
        <p className="mb-4">Talented people, plus a company culture that isn't afraid to get things done.</p>
        <p className="mb-4">At Lockheed Martin, you'll be able to solve a broad range of issues, covering everything from national security to environmental protection, supported not only by our extensive resources, but also a long legacy of getting things done.
        </p>
        <p className="mb-4">
          Most importantly, you will work in an atmosphere that encourages you to...
        </p>
      </div>

      {/* Learn More Link */}
      <div className="text-left ml-40 mt-6">
        <a href="#" className="text-blue-600 hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default AboutCompany;
