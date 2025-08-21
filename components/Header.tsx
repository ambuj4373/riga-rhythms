
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// A simple SVG for the Latvian Auseklis symbol
const AuseklisIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
  </svg>
);

interface HeaderProps {
  onSubscribeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSubscribeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <AuseklisIcon className="h-8 w-8 text-[#981E32]" />
              <h1 className="text-2xl font-bold text-gray-800">Rīga Rhythms</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#981E32] transition-colors">Restaurants</a>
              <a href="#" className="text-gray-600 hover:text-[#981E32] transition-colors">Culture</a>
              <a href="#" className="text-gray-600 hover:text-[#981E32] transition-colors">Events</a>
            </nav>
            <button
              onClick={onSubscribeClick}
              className="px-5 py-2 bg-[#981E32] text-white font-semibold rounded-full shadow-sm hover:bg-[#7a1828] transition-transform duration-200 ease-in-out hover:scale-105"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
