import React, { useState } from 'react';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

const LectureSummarizer: React.FC = () => {
  const [lecture, setLecture] = useState('');
  const [summary, setSummary] = useState('');
  const handleSummarize = () => {
    if (lecture.trim().length === 0) {
      setSummary('Please enter lecture text to summarize.');
    } else {
      setSummary('Summary: ' + lecture.split('.').slice(0, 2).join('.') + (lecture.includes('.') ? '.' : ''));
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <MicrophoneIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Lecture Summarizer</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Automatically generates concise summaries of lectures with key points, important concepts, and follow-up questions.
        </p>
        <div className="mb-6">
          <textarea
            className="w-full min-h-[120px] rounded-lg border border-primary/30 dark:border-accent/30 bg-gray-50 dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent resize-vertical"
            placeholder="Paste or type your lecture transcript here..."
            value={lecture}
            onChange={e => setLecture(e.target.value)}
          />
        </div>
        <button
          className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg font-semibold hover:bg-primary/80 dark:hover:bg-accent/80 transition-colors mb-4"
          onClick={handleSummarize}
        >
          Summarize
        </button>
        {summary && (
          <div className="mt-4 p-4 bg-primary/10 dark:bg-accent/10 rounded-lg text-gray-800 dark:text-gray-100">
            {summary}
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureSummarizer; 