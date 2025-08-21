import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Listing } from '../types';

interface ListingDetailModalProps {
  listing: Listing;
  onClose: () => void;
  onSubscribeClick: () => void;
}

const modalBackdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContainer: Variants = {
  hidden: { y: "50px", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { y: "50px", opacity: 0, transition: { duration: 0.3 } },
};

const LockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const TipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const OfferIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);

const AudioIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 10v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path><path d="M7 10v4"></path><path d="M21 10v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"></path><path d="M17 10v4"></path></svg>
);


const ListingDetailModal: React.FC<ListingDetailModalProps> = ({ listing, onClose, onSubscribeClick }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#F8F7F5] rounded-2xl shadow-2xl w-full max-w-2xl h-full max-h-[90vh] flex flex-col overflow-hidden"
        variants={modalContainer}
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 relative">
          <img src={listing.image} alt={listing.name} className="w-full h-64 object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
           </button>
           <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white bg-black/40 px-3 py-1 text-sm rounded-md mb-2 inline-block">
                    {listing.category}
                </span>
               <h2 className="text-3xl font-bold text-white shadow-lg">{listing.name}</h2>
           </div>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed pb-4">
              {listing.longDescription}
          </p>

          {listing.isPremium && (
            <div className="mt-4 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Premium Insider Access</h3>
                
                {/* Locked Insider Tip */}
                {listing.insiderTip && (
                  <div className="bg-white/80 p-4 rounded-lg border border-amber-200 relative overflow-hidden">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 bg-amber-100 text-amber-600 rounded-full p-2">
                        <TipIcon className="w-6 h-6"/>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Insider Tip</h4>
                        <p className="text-gray-600 text-sm mt-1">Unlock a valuable tip that only locals know about this place.</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/90 flex items-center justify-end pr-4">
                        <button onClick={onSubscribeClick} className="bg-amber-400 text-amber-900 font-semibold px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-amber-500 transition-colors">
                            <LockIcon className="w-4 h-4" />
                            <span>Unlock</span>
                        </button>
                    </div>
                  </div>
                )}

                {/* Locked Offer */}
                {listing.offer && (
                    <div className="bg-white/80 p-4 rounded-lg border border-green-200 relative overflow-hidden">
                        <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-2">
                            <OfferIcon className="w-6 h-6"/>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Exclusive Member Offer</h4>
                            <p className="text-gray-600 text-sm mt-1">Subscribe to get access to a special offer at this location.</p>
                        </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/90 flex items-center justify-end pr-4">
                            <button onClick={onSubscribeClick} className="bg-green-400 text-green-900 font-semibold px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-green-500 transition-colors">
                                <LockIcon className="w-4 h-4" />
                                <span>Unlock</span>
                            </button>
                        </div>
                    </div>
                )}
                
                 {/* Locked Audio Guide */}
                {listing.audioGuideUrl && (
                    <div className="bg-white/80 p-4 rounded-lg border border-blue-200 relative overflow-hidden">
                        <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2">
                            <AudioIcon className="w-6 h-6"/>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">Curated Audio Guide</h4>
                            <p className="text-gray-600 text-sm mt-1">Listen to a short, professionally narrated guide for this location.</p>
                        </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/90 flex items-center justify-end pr-4">
                            <button onClick={onSubscribeClick} className="bg-blue-400 text-blue-900 font-semibold px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-blue-500 transition-colors">
                                <LockIcon className="w-4 h-4" />
                                <span>Unlock</span>
                            </button>
                        </div>
                    </div>
                )}

                 <div className="pt-4">
                    <button
                        onClick={onSubscribeClick}
                        className="w-full bg-[#981E32] text-white py-3 rounded-lg font-semibold hover:bg-[#7a1828] transition-transform transform hover:scale-[1.02] duration-200"
                    >
                        Subscribe to Unlock All Features
                    </button>
                </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ListingDetailModal;