import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
  onViewDetails: (listing: Listing) => void;
  index: number;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
};

const LockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const ListingCard: React.FC<ListingCardProps> = ({ listing, onViewDetails, index }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(listing);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" src={listing.image} alt={listing.name} />
        {listing.isPremium && (
          <div className="absolute top-3 right-3 bg-[#981E32] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
            <LockIcon className="w-3 h-3"/>
            <span>Premium</span>
          </div>
        )}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 p-4">
             <span className="text-white bg-black/40 px-2 py-1 text-xs rounded">
                {listing.category}
            </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{listing.name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{listing.description}</p>
        <button
            onClick={handleClick}
            className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-200 ${listing.isPremium ? 'bg-amber-400 text-amber-900 hover:bg-amber-500' : 'bg-[#981E32] text-white hover:bg-[#7a1828]'}`}
        >
            {listing.isPremium ? 'View Premium Details' : 'View Details'}
        </button>
      </div>
    </motion.div>
  );
};

export default ListingCard;