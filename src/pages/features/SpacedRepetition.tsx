import React, { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const mockFlashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is the boiling point of water?', answer: '100°C (212°F)' }
];

const SpacedRepetition: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % mockFlashcards.length);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <ArrowPathIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Spaced Repetition</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Intelligent scheduling of review sessions to optimize memory retention and long-term learning.
        </p>
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="w-full bg-primary/10 dark:bg-accent/10 rounded-lg p-6 mb-4 text-lg text-gray-800 dark:text-gray-100 text-center min-h-[80px] flex items-center justify-center">
            {mockFlashcards[index].question}
          </div>
          {showAnswer && (
            <div className="w-full bg-green-100 dark:bg-green-900 rounded-lg p-4 mb-4 text-gray-900 dark:text-green-200 text-center">
              {mockFlashcards[index].answer}
            </div>
          )}
          <div className="flex gap-4">
            {!showAnswer && (
              <button
                className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg font-semibold hover:bg-primary/80 dark:hover:bg-accent/80 transition-colors"
                onClick={() => setShowAnswer(true)}
              >
                Show Answer
              </button>
            )}
            <button
              className="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
              onClick={nextCard}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacedRepetition; 