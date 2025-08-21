import React from 'react';
import WeatherWidget from './WeatherWidget';
import DailyInfo from './DailyInfo';

const InfoBar: React.FC = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm -mt-10 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <WeatherWidget />
            <DailyInfo />
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
