
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { generateItinerary } from '../services/geminiService';
import { LISTINGS } from '../constants';
import LoadingSpinner from './LoadingSpinner';

interface GeminiPlannerProps {
  onClose: () => void;
}

const panelVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.4 } },
  exit: { x: "100%", transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
};

const GeminiPlanner: React.FC<GeminiPlannerProps> = ({ onClose }) => {
  const [preferences, setPreferences] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!preferences.trim()) {
      setError('Please tell me what you would like to do!');
      return;
    }
    setError('');
    setIsLoading(true);
    setItinerary('');

    try {
      const result = await generateItinerary(preferences, LISTINGS);
      setItinerary(result);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // A simple markdown-to-HTML converter
   const renderMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line.substring(3)}</h2>;
        }
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold mt-4 mb-2">{line.substring(2)}</h1>;
        }
        if (line.startsWith('* ') || line.startsWith('- ')) {
          return <li key={index} className="ml-4 list-disc">{line.substring(2)}</li>;
        }
        return <p key={index} className="my-1">{line}</p>;
      });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/30 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute top-0 right-0 h-full w-full max-w-lg bg-[#F8F7F5] shadow-2xl flex flex-col"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex-shrink-0 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">AI Itinerary Planner</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <LoadingSpinner />
              <p className="mt-4 text-gray-600 animate-pulse">Crafting your perfect day...</p>
            </div>
          ) : itinerary ? (
            <div className="prose prose-sm max-w-none">
              {renderMarkdown(itinerary)}
            </div>
          ) : (
             <div className="text-center text-gray-500 h-full flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                <p className="mt-4">Let me know your interests, and I'll create a personalized plan for you!</p>
                <p className="text-xs mt-2">e.g., "A relaxing day with great coffee and modern art."</p>
             </div>
          )}
        </div>
        
        <div className="p-6 flex-shrink-0 border-t border-gray-200 bg-white">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <textarea
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="Tell me about your ideal day in Riga..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#981E32]/50 focus:border-[#981E32] outline-none transition-shadow resize-none"
            rows={3}
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="mt-2 w-full bg-[#981E32] text-white py-3 rounded-lg font-semibold hover:bg-[#7a1828] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? "Planning..." : "Generate Plan"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GeminiPlanner;