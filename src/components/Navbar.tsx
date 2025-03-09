
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 transition-all duration-300 ${
        scrolled ? 'bg-cyclesync-peach bg-opacity-90 glass-effect shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1"></div> {/* Empty space for centering */}
        
        <div className="flex space-x-10 items-center justify-center">
          <Link to="/blog" className="text-white text-lg font-medium nav-link animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Blog
          </Link>
          <Link to="/help" className="text-white text-lg font-medium nav-link animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Help
          </Link>
          <Link to="/community" className="text-white text-lg font-medium nav-link animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Community
          </Link>
        </div>
        
        <div className="flex-1 flex justify-end">
          <Link to="/login" className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button variant="ghost" className="text-lg hover:bg-white hover:bg-opacity-20">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
