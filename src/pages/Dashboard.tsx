import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const motivationalQuotes = [
  "Learning never exhausts the mind.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The beautiful thing about learning is that no one can take it away from you.",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  "The expert in anything was once a beginner."
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userName = 'Student'; // Placeholder, replace with real user data
  const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  // Placeholder for next recommended course/topic
  const nextCourseLink = '/courses';

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      {/* Header */}
      <div className="bg-[#20273a] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Welcome back, {userName}!</h1>
              <p className="text-gray-300 mt-2 flex items-center">
                <SparklesIcon className="h-5 w-5 mr-2 text-cyan-400" />
                <span className="italic">{quote}</span>
              </p>
            </div>
            {/* Quick Actions */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={() => navigate(nextCourseLink)}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white rounded-xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Go to Courses
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#232c43] rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Your Progress</h2>
          <p className="text-gray-300 mb-6">
            Track your learning journey, achievements, and upcoming goals here.
          </p>
          {/* Placeholder for progress tracking, achievements, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2234] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">Current Course</h3>
              <p className="text-gray-300">You are currently enrolled in <span className="font-bold">Full Stack Web Development</span>.</p>
            </div>
            <div className="bg-[#1a2234] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-cyan-200">Next Goal</h3>
              <p className="text-gray-300">Complete Module 3: React & Redux by next week.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 