import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const SmartLearning: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Smart Learning System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of education with our AI-powered learning system that adapts to your unique needs and learning style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<AcademicCapIcon className="h-8 w-8" />}
            title="Personalized Learning Paths"
            description="Our AI analyzes your learning style, pace, and goals to create a customized learning journey just for you."
          />
          <FeatureCard
            icon={<ChartBarIcon className="h-8 w-8" />}
            title="Progress Tracking"
            description="Monitor your progress with detailed analytics and insights to help you stay on track with your learning goals."
          />
          <FeatureCard
            icon={<LightBulbIcon className="h-8 w-8" />}
            title="Smart Recommendations"
            description="Get intelligent content recommendations based on your interests and learning patterns."
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">How It Works</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              Our smart learning system uses advanced artificial intelligence to understand how you learn best.
              It analyzes your interaction patterns, learning speed, and areas of interest to create a
              personalized learning experience.
            </p>
            <p>
              As you progress through the courses, the system continuously adapts to your needs,
              adjusting the difficulty level and presentation style to optimize your learning experience.
              This ensures that you're always challenged but never overwhelmed.
            </p>
            <p>
              The platform also includes features like:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time performance analytics</li>
              <li>Adaptive quiz generation</li>
              <li>Interactive learning materials</li>
              <li>Progress milestone tracking</li>
              <li>Personalized study schedules</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="feature-card"
    >
      <div className="text-primary dark:text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default SmartLearning; 