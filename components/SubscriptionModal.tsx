import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SubscriptionModalProps {
  onClose: () => void;
}

const modalBackdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContainer: Variants = {
  hidden: { y: "-50px", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { y: "50px", opacity: 0, transition: { duration: 0.3 } },
};

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);


const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose }) => {
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        variants={modalContainer}
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#981E32]/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#981E32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Become a Rīga Insider</h2>
          <p className="mt-2 text-gray-600">
            Join Rīga Rhythms Premium to unlock exclusive content and experience the city like a local.
          </p>
          
          <ul className="text-left my-6 space-y-3">
            <li className="flex items-center">
                <div className="bg-green-100 rounded-full p-1 mr-3"><CheckIcon className="w-4 h-4 text-green-600"/></div>
                Unlock invaluable Insider Tips
            </li>
             <li className="flex items-center">
                <div className="bg-green-100 rounded-full p-1 mr-3"><CheckIcon className="w-4 h-4 text-green-600"/></div>
                Access Exclusive Member Offers
            </li>
             <li className="flex items-center">
                <div className="bg-green-100 rounded-full p-1 mr-3"><CheckIcon className="w-4 h-4 text-green-600"/></div>
                Listen to curated Audio Guides
            </li>
             <li className="flex items-center">
                <div className="bg-green-100 rounded-full p-1 mr-3"><CheckIcon className="w-4 h-4 text-green-600"/></div>
                Full access to all premium listings
            </li>
          </ul>

          <button className="w-full bg-[#981E32] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#7a1828] transition-transform transform hover:scale-105 duration-200">
            Subscribe Now - €4.99/month
          </button>
          <button onClick={onClose} className="mt-3 text-sm text-gray-500 hover:text-gray-700">
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubscriptionModal;