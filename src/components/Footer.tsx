import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151c2c] border-t border-gray-700 relative z-20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-4 md:mb-0">
            Edutians
          </Link>
          <p className="text-gray-400 text-center md:text-left text-sm">
            Empowering learners with AI-powered education. Explore courses, features, and community to boost your skills and career.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Edutians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 