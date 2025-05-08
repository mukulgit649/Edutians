import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#232c43] rounded-xl p-6 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={user?.photoURL || 'https://via.placeholder.com/64'}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{user?.displayName}</h3>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Account Details</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white">Email:</span> {user?.email}
              </p>
              <p className="text-gray-400">
                <span className="text-white">Account Created:</span>{' '}
                {user?.metadata.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <button
              onClick={logout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile; 