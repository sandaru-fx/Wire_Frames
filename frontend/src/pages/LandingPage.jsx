import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryPreview from '../components/CategoryPreview';
import ValueProposition from '../components/ValueProposition';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategoryPreview />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
