
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
            {/* Subtle background pattern */}
            <div 
                className="absolute inset-0 opacity-[3%]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), 
                        repeating-linear-gradient(-45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}
            />
            <div className="relative text-center">
                <p>&copy; {new Date().getFullYear()} Rīga Rhythms. All rights reserved.</p>
                <p className="text-sm text-gray-400 mt-1">Made with love in Latvia.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
