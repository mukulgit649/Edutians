import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserProfile from './UserProfile';
import LoginModal from './LoginModal';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#151c2c]/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Edutians</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-gray-200 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link to="/community" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Community
            </Link>
            <Link to="/resources" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Resources
            </Link>
            <Link to="/competitive-exams" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Competitive Exams
            </Link>
            <Link to="/career-guidance" className="text-gray-200 hover:text-cyan-400 transition-colors">
              Career Guidance
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center space-x-2 text-gray-200 hover:text-cyan-400 transition-colors"
              >
                <img
                  src={user.photoURL || 'https://via.placeholder.com/32'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.displayName}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>

      {/* User Profile Modal */}
      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar; 