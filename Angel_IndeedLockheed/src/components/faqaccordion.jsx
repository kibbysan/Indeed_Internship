import React, { useState } from 'react';

const faqs = [
  "Is Lockheed Martin hiring now?",
  "Is it hard to get a job at Lockheed Martin?",
  "What is the hiring process at Lockheed Martin?",
  "Who is the CEO of Lockheed Martin?",
  "How many employees does Lockheed Martin have?",
  "Where are Lockheed Martin headquarters?",
  "How has Lockheed Martin responded to COVID-19?"
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-14 py-6 w-8/12 ml-72">
      <h2 className="text-2xl font-bold mb-6">Common questions about Lockheed Martin</h2>
      
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-gray-300">
          <button
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg">{faq}</span>
            <span className="text-2xl">{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-gray-600">
              <p>This is where the detailed answer would go for: {faq}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
