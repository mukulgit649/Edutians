import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdaptiveQuiz from '../components/AdaptiveQuiz';
import {
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  TrophyIcon,
  BookOpenIcon,
  LightBulbIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

// Data structure for subjects, chapters, and questions
const quizData = {
  Mathematics: {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    chapters: [
      'Algebra',
      'Calculus',
      'Statistics'
    ]
  },
  Physics: {
    icon: <LightBulbIcon className="h-6 w-6" />,
    chapters: [
      'Mechanics',
      'Electromagnetism',
      'Thermodynamics'
    ]
  },
  Chemistry: {
    icon: <BeakerIcon className="h-6 w-6" />,
    chapters: [
      'Organic Chemistry',
      'Inorganic Chemistry',
      'Physical Chemistry'
    ]
  },
  Biology: {
    icon: <BookOpenIcon className="h-6 w-6" />,
    chapters: [
      'Cell Biology',
      'Genetics',
      'Ecology'
    ]
  }
};

const Quizzes: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  // Reset chapter if subject changes
  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold gradient-text">Interactive Quizzes</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Test your knowledge with adaptive quizzes
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <TrophyIcon className="h-6 w-6" />, label: 'Highest Score', value: '95%' },
            { icon: <ChartBarIcon className="h-6 w-6" />, label: 'Average Score', value: '78%' },
            { icon: <ClockIcon className="h-6 w-6" />, label: 'Time Spent', value: '2h 30m' },
            { icon: <BookOpenIcon className="h-6 w-6" />, label: 'Quizzes Taken', value: '24' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center">
                <div className="bg-primary/10 dark:bg-accent/10 p-3 rounded-full mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary dark:text-accent">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subject Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Select Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(quizData).map(([subject, data]) => (
              <button
                key={subject}
                onClick={() => handleSubjectSelect(subject)}
                className={`p-4 rounded-lg flex items-center justify-center transition-colors ${
                  selectedSubject === subject
                    ? 'bg-primary dark:bg-accent text-white'
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <div className={`mr-3 ${
                    selectedSubject === subject ? 'text-white' : 'text-primary dark:text-accent'
                  }`}>
                    {data.icon}
                  </div>
                  <span className={selectedSubject === subject ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                    {subject}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter Selection */}
      {selectedSubject && (selectedSubject in quizData) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Select Chapter</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(quizData as Record<string, { chapters: string[] }>)[selectedSubject].chapters.map((chapter: string) => (
                <button
                  key={chapter}
                  onClick={() => setSelectedChapter(chapter)}
                  className={`p-4 rounded-lg flex items-center justify-center transition-colors ${
                    selectedChapter === chapter
                      ? 'bg-primary dark:bg-accent text-white'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className={selectedChapter === chapter ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                    {chapter}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Component */}
      {selectedSubject && selectedChapter && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdaptiveQuiz subject={selectedSubject} chapter={selectedChapter} />
        </div>
      )}
    </div>
  );
};

export default Quizzes;