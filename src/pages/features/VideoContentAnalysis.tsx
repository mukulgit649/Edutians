import React, { useState } from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/outline';

const VideoContentAnalysis: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [analysis, setAnalysis] = useState('');
  const handleAnalyze = () => {
    if (videoUrl.trim().length === 0) {
      setAnalysis('Please enter a video link to analyze.');
    } else {
      setAnalysis('Transcript: [Mock transcript for ' + videoUrl + ']\n\nHighlights: Key moments auto-detected.\n\nStudy Guide: Main topics summarized.');
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <VideoCameraIcon className="h-8 w-8 text-primary dark:text-accent" />
          <h1 className="text-3xl font-bold dark:text-gray-100">Video Content Analysis</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          AI analyzes video content to create interactive transcripts, highlight key moments, and generate study guides.
        </p>
        <div className="mb-6">
          <input
            className="w-full rounded-lg border border-primary/30 dark:border-accent/30 bg-gray-50 dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            placeholder="Paste a video link (YouTube, etc.)..."
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
          />
        </div>
        <button
          className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg font-semibold hover:bg-primary/80 dark:hover:bg-accent/80 transition-colors mb-4"
          onClick={handleAnalyze}
        >
          Analyze
        </button>
        {analysis && (
          <div className="mt-4 p-4 bg-primary/10 dark:bg-accent/10 rounded-lg text-gray-800 dark:text-gray-100 whitespace-pre-line">
            {analysis}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoContentAnalysis; 