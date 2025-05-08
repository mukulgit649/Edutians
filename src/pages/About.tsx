import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  ShieldCheckIcon,
  StarIcon,
  TrophyIcon,
  UserCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// Simple stat card for About page
const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="bg-background-dark/80 rounded-xl p-8 flex flex-col items-center shadow-lg">
    <div className="mb-4">{icon}</div>
    <div className="text-3xl font-bold text-accent mb-2">{number}</div>
    <div className="text-gray-300 text-lg font-semibold">{label}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Edutians, we're revolutionizing education through cutting-edge technology and innovative learning approaches.
            Our mission is to empower learners worldwide with personalized, engaging, and effective educational experiences.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <StatCard
            icon={<StarIcon className="h-8 w-8 text-accent" />}
            number="100K+"
            label="Active Students"
          />
          <StatCard
            icon={<TrophyIcon className="h-8 w-8 text-accent" />}
            number="5000+"
            label="Course Completions"
          />
          <StatCard
            icon={<ChartBarIcon className="h-8 w-8 text-accent" />}
            number="98%"
            label="Success Rate"
          />
          <StatCard
            icon={<ShieldCheckIcon className="h-8 w-8 text-accent" />}
            number="24/7"
            label="Support Available"
          />
        </div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#151c2c]/80 rounded-2xl p-8 shadow-lg mb-20"
        >
          <div className="space-y-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <UserCircleIcon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Founder's Vision</h2>
                  <p className="text-gray-400">Mukul Thakur, Founder & CEO</p>
                </div>
              </div>
              <p className="text-lg text-gray-300">
                "Education is the most powerful tool to change the world. At Edutians, we believe in making quality learning accessible, engaging, and effective for everyone. Our journey began with a simple vision: to break down barriers in education and empower every learner, regardless of their background or location. We are committed to harnessing the latest advancements in AI and technology to create a platform that not only teaches, but inspires curiosity, creativity, and lifelong growth. 

                Every feature we build, every course we design, and every community we foster is driven by our passion to help you achieve your dreams. We understand the challenges faced by modern learners, and we are here to support you at every step—whether you're preparing for competitive exams, upskilling for your career, or simply exploring new knowledge. Together, let's shape a brighter, smarter future for all."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#151c2c]/80 rounded-2xl p-8 shadow-lg mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-accent">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Innovation in education through technology</li>
            <li>Accessibility and inclusivity for all learners</li>
            <li>Community-driven growth and support</li>
            <li>Continuous improvement and lifelong learning</li>
          </ul>
        </motion.div>

        {/* Meet the Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#151c2c]/80 rounded-2xl p-8 shadow-lg mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-accent">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <UserCircleIcon className="h-12 w-12 text-accent mb-2" />
              <h3 className="text-lg font-bold text-white">Mukul Thakur</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <LightBulbIcon className="h-12 w-12 text-accent mb-2" />
              <h3 className="text-lg font-bold text-white">Development Team</h3>
              <p className="text-gray-400">Building the platform and features</p>
            </div>
            <div className="flex flex-col items-center">
              <RocketLaunchIcon className="h-12 w-12 text-accent mb-2" />
              <h3 className="text-lg font-bold text-white">Design & Content Team</h3>
              <p className="text-gray-400">Crafting engaging experiences and resources</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 