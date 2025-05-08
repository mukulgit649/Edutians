import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  DocumentTextIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  BeakerIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  AcademicCapIcon,
  UserGroupIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#232c43] p-6 rounded-2xl shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
    >
      <div className="text-cyan-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-cyan-200">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

// Modal component for feature details
const FeatureModal: React.FC<{
  open: boolean;
  onClose: () => void;
  feature: { icon: React.ReactNode; title: string; description: string; details?: string } | null;
}> = ({ open, onClose, feature }) => {
  if (!open || !feature) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#232c43] rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-cyan-400">{feature.icon}</div>
          <h3 className="text-2xl font-bold mb-2 text-cyan-200">{feature.title}</h3>
          <p className="text-gray-300 mb-4">{feature.description}</p>
          {feature.details && (
            <div className="text-gray-400 text-sm border-t border-gray-700 pt-4 mt-2">{feature.details}</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const AIFeatures: React.FC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<null | {
    icon: React.ReactNode;
    title: string;
    description: string;
    details?: string;
    route: string;
  }>(null);

  const features = [
    {
      icon: <DocumentTextIcon className="h-8 w-8" />,
      title: "Smart Note Taking",
      description: "AI-powered note-taking that automatically organizes, summarizes, and highlights key concepts from lectures and readings.",
      route: "/features/smart-note-taking"
    },
    {
      icon: <MicrophoneIcon className="h-8 w-8" />,
      title: "Lecture Summarizer",
      description: "Automatically generates concise summaries of lectures with key points, important concepts, and follow-up questions.",
      route: "/features/lecture-summarizer"
    },
    {
      icon: <VideoCameraIcon className="h-8 w-8" />,
      title: "Video Content Analysis",
      description: "AI analyzes video content to create interactive transcripts, highlight key moments, and generate study guides.",
      route: "/features/video-content-analysis"
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Personalized Learning Paths",
      description: "Adaptive learning algorithms create customized study plans based on your progress, strengths, and areas for improvement.",
      route: "/features/personalized-learning-paths"
    },
    {
      icon: <BeakerIcon className="h-8 w-8" />,
      title: "Smart Practice Questions",
      description: "AI generates personalized practice questions and quizzes based on your learning progress and areas of difficulty.",
      route: "/features/smart-practice-questions"
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8" />,
      title: "Spaced Repetition",
      description: "Intelligent scheduling of review sessions to optimize memory retention and long-term learning.",
      route: "/features/spaced-repetition"
    }
  ];

  const advancedFeatures = [
    {
      icon: <QuestionMarkCircleIcon className="h-8 w-8" />,
      title: "AI Tutor Assistant",
      description: "24/7 access to an AI tutor that can answer questions, explain concepts, and provide personalized guidance."
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Progress Analytics",
      description: "Comprehensive analytics and insights to track your learning progress and identify areas for improvement."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Multilingual Support",
      description: "AI-powered translation and language support for learners worldwide."
    },
    {
      icon: <PuzzlePieceIcon className="h-8 w-8" />,
      title: "Skill Gap Analysis",
      description: "Identifies knowledge gaps and recommends targeted learning resources to fill them."
    }
  ];

  const experienceFeatures = [
    {
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: "Accelerated Learning",
      description: "AI-powered tools help you learn faster and retain information more effectively."
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Collaborative Learning",
      description: "Connect with peers and experts through AI-facilitated study groups and discussions."
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Access to AI-curated resources and expert insights tailored to your learning goals."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            AI-Powered Learning Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of education with our cutting-edge AI features designed to enhance
            your learning journey and maximize your potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onClick={() => navigate(feature.route)}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={`Go to ${feature.title}`}
              onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') { navigate(feature.route); } }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
        <FeatureModal open={modalOpen} onClose={() => setModalOpen(false)} feature={selectedFeature} />

        {/* Advanced Features */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold mb-8 dark:text-gray-200 text-center">
            Advanced AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Learning Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIFeatures; 