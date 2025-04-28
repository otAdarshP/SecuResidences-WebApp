// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="px-4 py-8 text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="mx-auto text-center max-w-7xl">
    
        <h2 className="mb-4 text-2xl font-bold text-purple-700 dark:text-indigo-400">SecuResidences</h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center mb-4 space-x-6">
        <a href="#home" className="hover:text-purple-700">Home</a>
        <a href="#about" className="hover:text-purple-700">About</a>
        <Link to="/contact" className="hover:text-purple-700">Contact</Link>
        <Link to="/survey" className="hover:text-purple-700">Survey</Link>
        <a href="#download" className="hover:text-purple-700">Download App</a>
        </div>

        <div className="mb-2">
          📍 Bengaluru, India
        </div>
        <div className="mb-4">
          📧 securesidences@gmail.com
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 SecuResidences. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
