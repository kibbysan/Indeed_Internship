import React from 'react';
import './App.css'; // Importing App.css for Tailwind CSS styles
import LockheedMartinHeader from './components/LockheedMartinHeader.jsx';
import WorkWellbeing from './components/WorkWellbeing.jsx';
import AboutCompany from './components/Aboutcompany.jsx';
import ExploreLockheed from './components/ExploreLockheed.jsx';
import JobListing from './components/JobListing.jsx';
import SalaryCards from './components/SalaryCard.jsx';
import RatingOverview from './components/RatingOverview.jsx';
import Reviews from './components/Reviews.jsx';
import FAQSection from './components/FAQSection.jsx';
import InterviewInsights from './components/InterviewInsights.jsx';
import FaqAccordion from './components/faqaccordion.jsx';
import JobLocationGrid from './components/JobLocationGrid.jsx';
import TopicsSection from './components/TopicsSection.jsx';
import CompaniesCarousel from './components/CompaniesCarousel.jsx';
import CompanySearch from './components/CompanySearch.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <LockheedMartinHeader />
      <WorkWellbeing />
      <AboutCompany />
      <ExploreLockheed />
      <JobListing />
      <SalaryCards />
      <RatingOverview />
      <Reviews />
      <FAQSection />
      <InterviewInsights />
      <FaqAccordion />
      <JobLocationGrid />
      <TopicsSection />
      <CompaniesCarousel />
      <CompanySearch />
      <Footer />
    </div>
  );
}

export default App;
