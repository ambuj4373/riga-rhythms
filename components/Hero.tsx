
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(https://picsum.photos/seed/riga/1600/900)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold !font-lora"
          variants={itemVariants}
        >
          Experience the Soul of Rīga
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
          variants={itemVariants}
        >
          Your curated guide to the finest tastes and cultural treasures of Latvia's capital.
        </motion.p>
      </motion.div>
       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F8F7F5] to-transparent"></div>
    </div>
  );
};

export default Hero;