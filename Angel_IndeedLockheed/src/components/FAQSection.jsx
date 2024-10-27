import React, { useState } from 'react';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const tabs = ['Popular questions', 'Salaries', 'Hiring Process', 'Benefits'];
  const questions = [
    { question: 'How often do you get a raise at Lockheed Martin?', answer: 'Raises are typically annual, based on performance.' },
    { question: 'What is the promotion process like at Lockheed Martin?', answer: 'Promotions are based on performance reviews and availability of roles.' },
    { question: 'How is feedback from management delivered at Lockheed Martin?', answer: 'Feedback is usually delivered during annual reviews, but there are also frequent informal feedback sessions.' },
  ];

  const tags = ['Salaries', 'Hiring Process', 'Benefits', 'Interviews', 'Job Opportunities', 'Background Check', 'Drug Test', 'Working Hours', 'Shifts', 'Dress Code', 'Office Locations', 'Working Environment', 'Hiring Age', 'Promotion', 'Attire'];

  return (
    <div className="px-14 py-6 w-8/12 ml-72">
      {/* Section Title */}
      <h2 className="font-bold text-2xl">Questions and answers</h2>
      <p className="text-gray-600 mt-2">
        People have asked 446 questions about working at Lockheed Martin. See the answers, explore popular topics, and discover unique insights from Lockheed Martin employees.
      </p>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 ${activeTab === tab ? 'border-black' : 'border-transparent'} focus:outline-none`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Questions Accordion in One Box */}
      <div className="mt-4 border rounded-lg p-4">
        <h3 className="font-bold text-xl">Popular questions</h3>
        <div className="space-y-2">
          {questions.map((item, index) => (
            <div key={index} className="border-b py-2 cursor-pointer" onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.question}</p>
                <span className="text-xl">{expandedQuestion === index ? '-' : '+'}</span>
              </div>
              {expandedQuestion === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-8">
        <h4 className="font-semibold text-lg mb-2">See questions about:</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* See All Q&A */}
      <div className="mt-6">
        <button className="text-blue-600 font-semibold">
          See all Q&A &rarr;
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
