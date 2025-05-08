import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const ProgressTracking: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <ChartBarIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Progress Tracking</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Monitor your growth with detailed analytics and insights.
        </p>
        <div className="border-2 border-dashed border-primary/30 dark:border-accent/30 rounded-lg p-8 text-center text-gray-400 dark:text-gray-500">
          [Progress Analytics Coming Soon]
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking; 