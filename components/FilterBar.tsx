
import React from 'react';
import type { ListingCategory } from '../types';

interface FilterBarProps {
  categories: { name: string; value: ListingCategory | 'all' }[];
  activeCategory: ListingCategory | 'all';
  onCategoryChange: (category: ListingCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md sticky top-24 z-40 flex flex-col md:flex-row items-center gap-4">
      <div className="flex-grow w-full md:w-auto">
        <div className="relative">
            <input
            type="text"
            placeholder="Search for an experience..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-[#981E32]/50 focus:border-[#981E32] outline-none transition-shadow"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mb-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-200 ${
              activeCategory === category.value
                ? 'bg-[#981E32] text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
