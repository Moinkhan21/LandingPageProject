/* eslint-disable no-unused-vars */
import React from 'react'  // Importing React to be able to use JSX
import Navbar from './components/Navbar'  // Importing Navbar component
import HeroSection from './components/HeroSection'  // Importing HeroSection component
import FeatureSection from './components/FeatureSection'  // Importing FeatureSection component
import Workflow from './components/Workflow'  // Importing Workflow component
import Pricing from './components/Pricing'  // Importing Pricing component
import Testimonials from './components/Testimonials'  // Importing Testimonials component
import Footer from './components/Footer'  // Importing Footer component

// The main App component which renders other components to form the page layout
const App = () => {
  return (
    <>
      {/* Navbar component rendered at the top of the page */}
      <Navbar />
      
      {/* Wrapper div for all page sections with padding and max-width */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* HeroSection component which might contain a hero image or introductory section */}
        <HeroSection />
        
        {/* FeatureSection component which likely highlights key features */}
        <FeatureSection />
        
        {/* Workflow component to display how things work */}
        <Workflow />
        
        {/* Pricing component to showcase pricing details */}
        <Pricing />
        
        {/* Testimonials component for customer feedback */}
        <Testimonials />
        
        {/* Footer component rendered at the bottom of the page */}
        <Footer />
      </div>
    </>
  )
}

export default App  // Exporting the App component to be used in other files
