
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
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-cyclesync-peach bg-opacity-90 glass-effect shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-white text-2xl font-serif">
            <span className="sr-only">CycleSync AI</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/blog" className="text-white font-medium nav-link">
              Blog
            </Link>
            <Link to="/help" className="text-white font-medium nav-link">
              Help
            </Link>
            <Link to="/community" className="text-white font-medium nav-link">
              Community
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <Link to="/login">
            <Button variant="ghost" className="hover:bg-white hover:bg-opacity-20">
              Log In
            </Button>
          </Link>
        </div>

        {/* Mobile menu button - hidden on desktop */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
