import React from 'react';
import { motion } from 'framer-motion';
import type { Listing } from '../types';

const LockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

interface PlaceOfTheDayCardProps {
    listing: Listing;
    onViewDetails: (listing: Listing) => void;
}

const PlaceOfTheDayCard: React.FC<PlaceOfTheDayCardProps> = ({ listing, onViewDetails }) => {
    const handleClick = () => {
        onViewDetails(listing);
    };
    
    return (
        <motion.div 
            className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={handleClick}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" src={listing.image} alt={listing.name} />
                <div className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1.5">
                    <StarIcon className="w-3.5 h-3.5" />
                    <span>Featured Today</span>
                </div>
                {listing.isPremium && (
                    <div className="absolute top-3 right-3 bg-[#981E32] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                        <LockIcon className="w-3 h-3"/>
                        <span>Premium</span>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 truncate">{listing.name}</h3>
                <p className="text-gray-600 text-sm mt-1 truncate">{listing.description}</p>
            </div>
        </motion.div>
    );
}


interface PlaceOfTheDayProps {
  listings: Listing[];
  onViewDetails: (listing: Listing) => void;
}

const PlaceOfTheDay: React.FC<PlaceOfTheDayProps> = ({ listings, onViewDetails }) => {
  if (!listings.length) return null;

  return (
    <section className="py-12 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Today's Highlights in Rīga</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory">
            {listings.map((listing) => (
                <div key={listing.id} className="snap-center">
                    <PlaceOfTheDayCard listing={listing} onViewDetails={onViewDetails} />
                </div>
            ))}
             <div className="flex-shrink-0 w-1"></div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOfTheDay;