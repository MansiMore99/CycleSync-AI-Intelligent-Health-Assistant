
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <TeamSection />
      
      {/* We could add more sections here in the future */}
    </div>
  );
};

export default Index;
