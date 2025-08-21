import React from 'react';

const SunCloudIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
        <path d="M12 2v2"/><path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/><path d="M20 12h2"/>
        <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        <path d="M18 10h-1.26A6.995 6.995 0 0 0 12 6c-3.14 0-5.8 2.06-6.74 4.9L5 11H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"/>
    </svg>
);


const WeatherWidget: React.FC = () => {
  // Mock data, in a real app this would come from an API
  const weather = {
    temp: 18,
    description: "Sunny with clouds",
  };

  return (
    <div className="p-4 flex items-center space-x-4">
      <div className="text-[#981E32]">
        <SunCloudIcon className="w-10 h-10" />
      </div>
      <div>
        <p className="text-xl font-bold text-gray-800">{weather.temp}°C in Rīga</p>
        <p className="text-sm text-gray-600">{weather.description}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
