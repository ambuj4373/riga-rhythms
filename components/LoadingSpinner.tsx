
import React from 'react';
import { motion } from 'framer-motion';

const AuseklisIcon: React.FC<{ className?: string }> = ({ className }) => (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 3,
      }}
    >
      <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
    </motion.svg>
);

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <AuseklisIcon className="h-12 w-12 text-[#981E32]" />
    </div>
  );
};

export default LoadingSpinner;