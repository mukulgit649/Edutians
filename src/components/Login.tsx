import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const { signInWithGoogle, user } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  if (user) {
    return null; // Don't show login button if user is already logged in
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#151c2c] p-4"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-[#232c43] rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to Edutians</h1>
          <p className="text-gray-400">Sign in to access your courses</p>
        </div>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </motion.div>
  );
};

export default Login; 