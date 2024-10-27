import React from "react";

const Reviews = () => {
  const reviews = [
    {
      user: "Firefighter/EMT in Fort Worth, TX",
      rating: 2.0,
      date: "October 15, 2024",
      title: "Bad experience",
      comment:
        "Poor management and terrible benefits. The PTO they give us is insulting. 6 hours per month and 48 hours of sick time is given at the beginning of the year.",
    },
    {
      user: "Software Engineer in Fort Worth, TX",
      rating: 4.0,
      date: "October 14, 2024",
      title: "Good benefits & Chill Work environment",
      comment:
        "8% 401k match, ok pay (not the best but not horrible), 3% annual raise/bonus. Each department can be super different so keep that in mind for my review. The benefits and PTO are good (4 weeks accrual plus holidays and a week for Christmas).",
    },
    {
      user: "Aeronautical Engineer II in Marietta, GA",
      rating: 4.0,
      date: "October 10, 2024",
      title: "Great overall, but slow.",
      comment:
        "Decent pay, excellent 401k, interesting work. Worst part is that opportunities for advancement and promotions are slow and arbitrary - they depend on your manager.",
    },
    {
      user: "System Safety Engineer in Sunnyvale, CA",
      rating: 4.0,
      date: "October 6, 2024",
      title: "Big Company First World Problems",
      comment:
        "The pros and cons are much like you'd expect from a large company. Leadership and company messaging is generally good, except where it isn't. Company strategy is good, and tools and processes are good if they're actually funded, used, and implemented. In some spots they're not.",
    },
    {
      user: "General Flightline Mechanic in Palmdale, CA",
      rating: 5.0,
      date: "October 4, 2024",
      title: "Great mid to high-level experience",
      comment:
        "What is the best part of working at the company? Work was steady, management wasn't all over us, and the pay was a bit above average. What is the most stressful part about working at the company? Dealing with conflicting directions. What is the work environment and culture like at the company? Relaxed environment and easy to do daily.",
    },
  ];

  return (
    <div className="px-14 py-6 w-8/12 ml-72">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            {/* Review details */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                {/* Fallback Profile Icon */}
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 448 512"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-slate-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0zM4.5 20.25a8.25 8.25 0 1115 0H4.5z"
                    />
                  </svg>
                </div>
                <span className="font-bold">{review.user}</span>
                <span className="text-pink-500 font-bold">{review.rating} ★</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">on {review.date}</p>
              <h3 className="text-lg font-semibold mb-1">{review.title}</h3>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">What would you say about your employer?</h3>
        <p className="text-gray-600 mb-4">
          Help fellow job seekers by sharing your unique experience.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Write a review
        </button>
      </div>
    </div>
  );
};

export default Reviews;