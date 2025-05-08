import React, { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';

const mockQuestions: Record<string, string[]> = {
  Mathematics: [
    'What is the derivative of x^2?',
    'Solve for x: 2x + 3 = 7.',
    'What is the area of a circle with radius r?'
  ],
  Science: [
    'What is the chemical symbol for water?',
    "Explain Newton's Second Law.",
    'What is photosynthesis?'
  ],
  Programming: [
    'What does HTML stand for?',
    'Explain the concept of a function in programming.',
    'What is a variable?'
  ],
  'Competitive Exams': [
    'What is the capital of France?',
    'Who wrote the Indian Constitution?',
    'What is the formula for speed?'
  ]
};

const SmartPracticeQuestions: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const handleGenerate = () => {
    if (!topic) {
      setQuestions(['Please select a topic.']);
    } else {
      setQuestions(mockQuestions[topic] || ['No questions available for this topic.']);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <BeakerIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Smart Practice Questions</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          AI generates personalized practice questions and quizzes based on your learning progress and areas of difficulty.
        </p>
        <div className="mb-6">
          <select
            className="w-full rounded-lg border border-primary/30 dark:border-accent/30 bg-gray-50 dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            <option value="">Select a topic...</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Programming">Programming</option>
            <option value="Competitive Exams">Competitive Exams</option>
          </select>
        </div>
        <button
          className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg font-semibold hover:bg-primary/80 dark:hover:bg-accent/80 transition-colors mb-4"
          onClick={handleGenerate}
        >
          Generate Questions
        </button>
        {questions.length > 0 && (
          <div className="mt-4 p-4 bg-primary/10 dark:bg-accent/10 rounded-lg text-gray-800 dark:text-gray-100">
            <ul className="list-disc pl-5 space-y-2">
              {questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartPracticeQuestions; 