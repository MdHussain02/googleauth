// LogoContainer.jsx
import React from 'react';

// To use your SVG:
// 1. Import it at the top like this:
import logoImage from '../assets/foxcatlogo.png'

const LogoContainer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="">
        <img 
          src={logoImage} 
        //   src="/api/placeholder/200/200"
          alt="Fox and Cat Logo" 
          className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default LogoContainer;