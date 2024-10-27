import React from 'react';

const topics = [
    {
        title: "Professional development",
        description: "Explore skills and training, pay raises and promotions and management and culture.",
    },
    {
        title: "Mission and values",
        description: "Explore company values, community, the relevance of the mission and moving on.",
    },
    {
        title: "PTO and work-life balance",
        description: "Explore PTO allowances, work-life balance and flexibility and parental leave.",
    },
    {
        title: "Work from home",
        description: "Explore work from home during COVID-19, remote work support and work-life balance.",
    },
    {
        title: "Parents and caregivers",
        description: "Explore parental leave policies and other benefits, company culture and general support.",
    },
    {
        title: "Internships and graduate programs",
        description: "Explore support and satisfaction with programs for new and emerging graduates.",
    },
    {
        title: "COVID-19 response",
        description: "Explore leadership during COVID-19, working conditions and WFH support.",
    },
    {
        title: "Accessibility, Disability and Accommodation",
        description: "Explore employer support and available accommodations for people with disabilities.",
    },
    {
        title: "What’s it like working at Lockheed Martin?",
        description: "Published on May 24, 2021",
        type: "article",
    },
];

const TopicCard = ({ title, description, type }) => (
    <div className="bg-white border-2 border-gray-300 shadow-md p-4 rounded-lg">
        {type === "article" && (
            <div className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-sm mb-2 inline-block">
                {type}
            </div>
        )}
        <h3 className="text-blue-800 font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const TopicsSection = () => (
    <div className="px-14 py-6 w-8/12 ml-72">
        <h2 className="text-2xl font-semibold mb-2">What's being discussed at Lockheed Martin?</h2>
        <p className="text-gray-500 mb-6">Select a topic to see what people are saying about different issues</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
                <TopicCard
                    key={index}
                    title={topic.title}
                    description={topic.description}
                    type={topic.type}
                />
            ))}
        </div>
    </div>
);

export default TopicsSection;
