import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { RIGA_FACTS, RIGA_MOODS } from '../constants';

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    transition: {
        when: "afterChildren"
    }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
    }
  },
};

const DailyInfo: React.FC = () => {
  const [dayOfYear, setDayOfYear] = useState(0);
  
  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    setDayOfYear(Math.floor(diff / oneDay));
  }, []);

  const fact = RIGA_FACTS[dayOfYear % RIGA_FACTS.length];
  const mood = RIGA_MOODS[dayOfYear % RIGA_MOODS.length];

  const factWords = fact.split(" ");

  return (
    <div className="col-span-1 md:col-span-2 p-4 flex flex-col md:flex-row md:items-center md:space-x-6">
        {mood && (
             <div className="flex-shrink-0 flex items-center mb-4 md:mb-0">
                <span className={`text-4xl ${mood.color}`}>{mood.icon}</span>
                <div className="ml-3">
                    <p className="font-bold text-gray-800">Mood of Rīga</p>
                    <p className="text-sm text-gray-600">{mood.mood}</p>
                </div>
            </div>
        )}
       
        <div className="flex-grow md:border-l md:pl-6 border-gray-200 min-h-[50px]">
             <p className="font-bold text-gray-800 text-sm mb-1">Fact of the Day</p>
             <AnimatePresence mode="wait">
                <motion.p
                    key={dayOfYear}
                    className="text-sm text-gray-600"
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                   {factWords.map((word, index) => (
                       <motion.span key={`${word}-${index}`} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                           {word}
                       </motion.span>
                   ))}
                </motion.p>
             </AnimatePresence>
        </div>
    </div>
  );
};

export default DailyInfo;