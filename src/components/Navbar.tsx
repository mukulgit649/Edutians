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

      {/* Mobile Sidebar Menu */}
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'bg-black/60 pointer-events-auto opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      {/* Sidebar */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#151c2c] shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ minWidth: '240px' }}
      >
        <div className="flex flex-col space-y-2 pt-8 px-6">
          <button
            className="self-end mb-6 text-gray-400 hover:text-cyan-400 focus:outline-none"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link to="/" className="text-gray-200 hover:text-cyan-400 text-lg font-semibold py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Home</Link>
          <Link to="/courses" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Courses</Link>
          <Link to="/features" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Features</Link>
          <Link to="/about" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>About</Link>
          <Link to="/community" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Community</Link>
          <Link to="/resources" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Resources</Link>
          <Link to="/competitive-exams" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Competitive Exams</Link>
          <Link to="/career-guidance" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Career Guidance</Link>
          <Link to="/motivation" className="text-gray-200 hover:text-cyan-400 text-lg py-2 px-2 rounded transition-colors" onClick={closeMobileMenu}>Motivation</Link>
        </div>
        <div className="p-6 border-t border-gray-700">
          {user ? (
            <button
              onClick={() => { setIsProfileOpen(true); closeMobileMenu(); }}
              className="flex items-center space-x-3 w-full text-left text-gray-200 hover:text-cyan-400 transition-colors"
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
              onClick={() => { setIsLoginModalOpen(true); closeMobileMenu(); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </button>
          )}
        </div>
      </aside>

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