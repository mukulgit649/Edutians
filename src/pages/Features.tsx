import React from 'react';
import { motion } from 'framer-motion';
import AIFeatures from '../components/AIFeatures';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  BeakerIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          AI-Powered Learning Features
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience the future of education with our cutting-edge AI features designed to enhance
          your learning journey and maximize your potential.
        </p>
      </motion.div>

      {/* AI Features Section */}
      <AIFeatures />

      {/* Future Features Preview */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#151c2c]/80">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're constantly innovating to bring you the most advanced learning tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#232c43]/80 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">Virtual Study Groups</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered virtual study rooms with real-time collaboration and knowledge sharing.
                Features include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Real-time collaborative note-taking</li>
                <li>• AI-facilitated group discussions</li>
                <li>• Smart resource sharing</li>
                <li>• Progress tracking for group members</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#232c43]/80 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">Career Path Predictor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI analysis of your skills and interests to suggest optimal career paths and required learning.
                Features include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Skill assessment and mapping</li>
                <li>• Career trajectory simulation</li>
                <li>• Personalized learning roadmap</li>
                <li>• Industry trend analysis</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 