import React, { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const PersonalizedLearningPaths: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [skill, setSkill] = useState('beginner');
  const [path, setPath] = useState('');
  const handleGenerate = () => {
    if (!goal) {
      setPath('Please select a learning goal.');
    } else {
      setPath(`Your personalized path for "${goal}" (${skill}):\n1. Start with fundamentals\n2. Practice with quizzes\n3. Review with spaced repetition\n4. Track your progress!`);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <SparklesIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Personalized Learning Paths</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Adaptive learning algorithms create customized study plans based on your progress, strengths, and areas for improvement.
        </p>
        <div className="mb-6 space-y-4">
          <select
            className="w-full rounded-lg border border-primary/30 dark:border-accent/30 bg-gray-50 dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            value={goal}
            onChange={e => setGoal(e.target.value)}
          >
            <option value="">Select your learning goal...</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Programming">Programming</option>
            <option value="Competitive Exams">Competitive Exams</option>
          </select>
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Current Skill Level:</label>
            <select
              className="w-full rounded-lg border border-primary/30 dark:border-accent/30 bg-gray-50 dark:bg-gray-800 p-2 text-gray-800 dark:text-gray-100"
              value={skill}
              onChange={e => setSkill(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
        <button
          className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg font-semibold hover:bg-primary/80 dark:hover:bg-accent/80 transition-colors mb-4"
          onClick={handleGenerate}
        >
          Generate Path
        </button>
        {path && (
          <div className="mt-4 p-4 bg-primary/10 dark:bg-accent/10 rounded-lg text-gray-800 dark:text-gray-100 whitespace-pre-line">
            {path}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalizedLearningPaths; 