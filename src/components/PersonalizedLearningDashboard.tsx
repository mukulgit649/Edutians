import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  BookOpenIcon,
  LightBulbIcon,
  ClockIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface LearningPath {
  id: string;
  title: string;
  progress: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  topics: string[];
}

interface PerformanceMetrics {
  accuracy: number;
  speed: number;
  consistency: number;
  improvement: number;
}

const PersonalizedLearningDashboard: React.FC = () => {
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [performance, setPerformance] = useState<PerformanceMetrics>({
    accuracy: 0,
    speed: 0,
    consistency: 0,
    improvement: 0
  });
  const [recommendedContent, setRecommendedContent] = useState<any[]>([]);

  useEffect(() => {
    // Simulated data - replace with actual API calls
    setLearningPaths([
      {
        id: '1',
        title: 'Mathematics Fundamentals',
        progress: 75,
        difficulty: 'Intermediate',
        estimatedTime: '2 weeks',
        topics: ['Algebra', 'Calculus', 'Statistics']
      },
      {
        id: '2',
        title: 'Physics Concepts',
        progress: 45,
        difficulty: 'Advanced',
        estimatedTime: '3 weeks',
        topics: ['Mechanics', 'Electromagnetism', 'Thermodynamics']
      }
    ]);

    setPerformance({
      accuracy: 85,
      speed: 70,
      consistency: 90,
      improvement: 15
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#151c2c] p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Your Learning Dashboard</h1>
          <p className="text-gray-300">
            Personalized learning paths and recommendations based on your progress
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(performance).map(([key, value]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#232c43] rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold capitalize text-cyan-200">{key}</h3>
                <ChartBarIcon className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">
                {value}%
              </div>
              <div className="mt-2">
                <div className="w-full bg-[#1a2234] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 h-2 rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-200">Your Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#232c43] rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-200">{path.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    path.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-200' :
                    path.difficulty === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-200' :
                    'bg-red-900/50 text-red-200'
                  }`}>
                    {path.difficulty}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm font-semibold text-cyan-200">{path.progress}%</span>
                  </div>
                  <div className="w-full bg-[#1a2234] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 h-2 rounded-full"
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <ClockIcon className="h-4 w-4 mr-2 text-cyan-400" />
                    Estimated Time: {path.estimatedTime}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {path.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#1a2234] text-cyan-200 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Content */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-200">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#232c43] rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-700/20 p-3 rounded-full mr-4">
                    <LightBulbIcon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-200">
                    Recommended Topic {item}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Based on your learning patterns and performance, we recommend focusing on this topic next.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white py-2 rounded-xl hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                  Start Learning
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedLearningDashboard; 