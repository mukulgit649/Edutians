import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserProfile from './UserProfile';
import LoginModal from './LoginModal';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#151c2c]/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Edutians</span>
          </Link>

          {/* Navigation Links - Desktop */}
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
                <span className="hidden md:inline">{user.displayName}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-200 hover:text-cyan-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#151c2c]/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/courses"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Features
          </Link>
          <Link
            to="/community"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Community
          </Link>
          <Link
            to="/resources"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Resources
          </Link>
          <Link
            to="/competitive-exams"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Competitive Exams
          </Link>
          <Link
            to="/career-guidance"
            className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
            onClick={closeMobileMenu}
          >
            Career Guidance
          </Link>
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