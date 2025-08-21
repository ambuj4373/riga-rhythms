import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import FilterBar from './components/FilterBar';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import SubscriptionModal from './components/SubscriptionModal';
import PlaceOfTheDay from './components/PlaceOfTheDay';
import ListingDetailModal from './components/ListingDetailModal';
import { LISTINGS, CATEGORIES, PLACES_OF_THE_DAY_IDS } from './constants';
import type { Listing, ListingCategory } from './types';

const App: React.FC = () => {
  const [filteredListings, setFilteredListings] = useState<Listing[]>(LISTINGS);
  const [activeCategory, setActiveCategory] = useState<ListingCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const placesOfTheDay = LISTINGS.filter(l => PLACES_OF_THE_DAY_IDS.includes(l.id));

  const filterListings = useCallback(() => {
    let listings = LISTINGS;

    if (activeCategory !== 'all') {
      listings = listings.filter(l => l.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      listings = listings.filter(l => 
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredListings(listings);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    filterListings();
  }, [filterListings]);
  
  const handleViewDetails = (listing: Listing) => {
    setSelectedListing(listing);
  };
  
  const handleCloseDetailModal = () => {
    setSelectedListing(null);
  };

  const handleSubscribeClick = () => {
    if (selectedListing) {
      handleCloseDetailModal();
    }
    setSubscriptionModalOpen(true);
  }

  return (
    <div className="bg-[#F8F7F5] min-h-screen text-gray-800">
      <Header onSubscribeClick={() => setSubscriptionModalOpen(true)} />
      <main>
        <Hero />
        <InfoBar />
        <PlaceOfTheDay listings={placesOfTheDay} onViewDetails={handleViewDetails} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Discover Rīga</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore the vibrant heart of Latvia. From world-class dining to captivating cultural events, your next adventure awaits.
          </p>
          
          <FilterBar
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredListings.map((listing, index) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onViewDetails={handleViewDetails}
                index={index}
              />
            ))}
          </div>
          {filteredListings.length === 0 && (
             <p className="text-center text-gray-500 mt-12 text-lg">No results found. Try adjusting your filters!</p>
          )}
        </div>
      </main>
      
      <AnimatePresence>
        {isSubscriptionModalOpen && (
          <SubscriptionModal onClose={() => setSubscriptionModalOpen(false)} />
        )}
        {selectedListing && (
          <ListingDetailModal 
            listing={selectedListing} 
            onClose={handleCloseDetailModal}
            onSubscribeClick={handleSubscribeClick}
          />
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;