import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-auto py-8 px-6 border-t border-gray-800">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-center">
          <p className="text-gray-600 font-glitch tracking-wider text-2xl">
            <span className="text-gray-400">glitch</span> [house]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
