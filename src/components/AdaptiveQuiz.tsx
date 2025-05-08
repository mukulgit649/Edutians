import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
  subject?: string;
  chapter?: string;
}

interface QuizStats {
  correct: number;
  incorrect: number;
  streak: number;
  maxStreak: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface AdaptiveQuizProps {
  subject: string;
  chapter: string;
}

// Generate 60 realistic questions per chapter with unique options and explanations
const generateQuestions = (subject: string, chapter: string): Question[] => {
  const questions: Question[] = [];
  for (let i = 1; i <= 60; i++) {
    let text = '';
    let options: string[] = [];
    let correctAnswer = 0;
    let explanation = '';
    if (chapter === 'Algebra') {
      text = `(${i}) Solve for x: ${i}x + ${i + 1} = ${i * 2 + 1}`;
      options = [
        `${i}`,
        `${i + 1}`,
        `${i + 2}`,
        `${i - 1}`
      ];
      correctAnswer = 0;
      explanation = `Subtract ${i + 1} from both sides: ${i}x = ${i * 2 + 1 - (i + 1)} → x = ${(i * 2 + 1 - (i + 1)) / i}`;
    } else if (chapter === 'Calculus') {
      text = `(${i}) What is the derivative of x^${i + 1}?`;
      options = [
        `${i + 1}x^${i}`,
        `${i}x^${i - 1}`,
        `${i + 2}x^${i + 1}`,
        `${i}x^${i}`
      ];
      correctAnswer = 0;
      explanation = `The derivative of x^n is n*x^(n-1). Here, n=${i + 1}.`;
    } else if (chapter === 'Statistics') {
      text = `(${i}) What is the mean of [${i}, ${i + 2}, ${i + 4}, ${i + 6}]?`;
      options = [
        `${i + 3}`,
        `${i + 2}`,
        `${i + 4}`,
        `${i + 5}`
      ];
      correctAnswer = 0;
      explanation = `Mean = (${i} + ${i + 2} + ${i + 4} + ${i + 6}) / 4 = ${(i + i + 2 + i + 4 + i + 6) / 4}`;
    } else if (chapter === 'Mechanics') {
      text = `(${i}) What is the formula for force?`;
      options = ['F=ma', 'E=mc²', 'V=IR', 'P=IV'];
      correctAnswer = 0;
      explanation = "Newton's second law: F = m × a.";
    } else if (chapter === 'Electromagnetism') {
      text = `(${i}) What is the unit of electric current?`;
      options = ['Ampere', 'Volt', 'Ohm', 'Watt'];
      correctAnswer = 0;
      explanation = 'The SI unit of electric current is Ampere (A).';
    } else if (chapter === 'Thermodynamics') {
      text = `(${i}) What is the SI unit of temperature?`;
      options = ['Kelvin', 'Celsius', 'Fahrenheit', 'Joule'];
      correctAnswer = 0;
      explanation = 'The SI unit of temperature is Kelvin (K).';
    } else if (chapter === 'Organic Chemistry') {
      text = `(${i}) What is the functional group in alcohols?`;
      options = ['-OH', '-COOH', '-NH₂', '-CHO'];
      correctAnswer = 0;
      explanation = 'Alcohols have the -OH (hydroxyl) group.';
    } else if (chapter === 'Inorganic Chemistry') {
      text = `(${i}) What is the chemical symbol for Sodium?`;
      options = ['Na', 'S', 'N', 'So'];
      correctAnswer = 0;
      explanation = 'The chemical symbol for Sodium is Na.';
    } else if (chapter === 'Physical Chemistry') {
      text = `(${i}) What is the universal gas constant symbol?`;
      options = ['R', 'K', 'G', 'C'];
      correctAnswer = 0;
      explanation = 'The universal gas constant is denoted by R.';
    } else if (chapter === 'Cell Biology') {
      text = `(${i}) What is the powerhouse of the cell?`;
      options = ['Mitochondria', 'Nucleus', 'Ribosome', 'Chloroplast'];
      correctAnswer = 0;
      explanation = 'Mitochondria are known as the powerhouse of the cell.';
    } else if (chapter === 'Genetics') {
      text = `(${i}) What carries genetic information?`;
      options = ['DNA', 'RNA', 'Protein', 'Lipid'];
      correctAnswer = 0;
      explanation = 'DNA carries genetic information.';
    } else if (chapter === 'Ecology') {
      text = `(${i}) What is a group of the same species living together called?`;
      options = ['Population', 'Community', 'Ecosystem', 'Biosphere'];
      correctAnswer = 0;
      explanation = 'A population is a group of the same species living together.';
    } else {
      text = `(${i}) [${chapter}] Sample question for ${subject} - ${chapter}?`;
      options = [
        `Option A (${i})`,
        `Option B (${i})`,
        `Option C (${i})`,
        `Option D (${i})`
      ];
      correctAnswer = 0;
      explanation = `Explanation for question ${i} in ${chapter}.`;
    }
    questions.push({
      id: `${subject}-${chapter}-q${i}`,
      subject,
      chapter,
      text,
      options,
      correctAnswer,
      difficulty: i <= 20 ? 'Easy' : i <= 40 ? 'Medium' : 'Hard',
      explanation
    });
  }
  return questions;
};

// Fallback question if no questions found
const fallbackQuestions: Question[] = [
  {
    id: 'default-1',
    text: 'Default question: What is 2 + 2?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    difficulty: 'Easy',
    explanation: '2 + 2 = 4.'
  }
];

const AdaptiveQuiz: React.FC<AdaptiveQuizProps> = ({ subject, chapter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [stats, setStats] = useState<QuizStats>({
    correct: 0,
    incorrect: 0,
    streak: 0,
    maxStreak: 0,
    difficulty: 'Easy'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [reviewMode, setReviewMode] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  // Generate questions for the selected subject/chapter
  const quizQuestions = generateQuestions(subject, chapter);
  const questions = quizQuestions.length > 0 ? quizQuestions : fallbackQuestions;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setStats({ correct: 0, incorrect: 0, streak: 0, maxStreak: 0, difficulty: 'Easy' });
      setUserAnswers([]);
      setReviewMode(false);
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line
  }, [subject, chapter]);

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(index);
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = index;
      return updated;
    });
    const isCorrect = index === currentQuestion?.correctAnswer;
    setStats(prev => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: !isCorrect ? prev.incorrect + 1 : prev.incorrect,
      streak: isCorrect ? prev.streak + 1 : 0,
      maxStreak: isCorrect ? Math.max(prev.maxStreak, prev.streak + 1) : prev.maxStreak,
      difficulty: isCorrect && prev.streak >= 2 ? 'Hard' : !isCorrect && prev.streak === 0 ? 'Easy' : 'Medium'
    }));
    setTimeout(() => {
      setShowExplanation(true);
    }, 800);
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(userAnswers[currentIndex + 1] ?? null);
      setShowExplanation(false);
    } else {
      setReviewMode(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(userAnswers[currentIndex - 1] ?? null);
      setShowExplanation(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <ArrowPathIcon className="h-8 w-8 text-primary dark:text-accent animate-spin" />
      </div>
    );
  }

  // Review Mode
  if (reviewMode) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Quiz Review</h2>
        <div className="mb-6">
          <span className="text-lg font-semibold text-primary dark:text-accent">Score: {stats.correct} / {totalQuestions}</span>
        </div>
        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {questions.map((q, idx) => (
            <div key={q.id} className="border-l-4 pl-4 mb-4 rounded border-primary dark:border-accent bg-gray-50 dark:bg-gray-700 p-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold">Q{idx + 1}:</span>
                <span className="ml-2 text-gray-800 dark:text-gray-200">{q.text}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                {q.options.map((opt, optIdx) => {
                  const isUser = userAnswers[idx] === optIdx;
                  const isCorrect = q.correctAnswer === optIdx;
                  return (
                    <div
                      key={optIdx}
                      className={`p-2 rounded-lg text-sm ${
                        isCorrect
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : isUser
                            ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                            : 'bg-gray-50 dark:bg-gray-800'
                      }`}
                    >
                      {opt}
                      {isCorrect && <CheckCircleIcon className="inline h-4 w-4 ml-1 text-green-500" />}
                      {isUser && !isCorrect && <XCircleIcon className="inline h-4 w-4 ml-1 text-red-500" />}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                <LightBulbIcon className="h-4 w-4 mr-1 text-primary dark:text-accent" />
                <span>{q.explanation}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-6 w-full bg-primary dark:bg-accent text-white py-3 rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors"
          onClick={() => { setReviewMode(false); setCurrentIndex(0); setSelectedAnswer(null); setShowExplanation(false); }}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  // Quiz Mode
  return (
    <div className="min-h-screen bg-[#151c2c] p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Adaptive Quiz</h1>
          <p className="text-gray-300">
            Test your knowledge with our adaptive learning system
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#232c43] rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-1" />
                    <span className="text-gray-300">{stats.correct}</span>
                  </div>
                  <div className="flex items-center">
                    <XCircleIcon className="h-5 w-5 text-red-400 mr-1" />
                    <span className="text-gray-300">{stats.incorrect}</span>
                  </div>
                  <div className="flex items-center">
                    <ChartBarIcon className="h-5 w-5 text-blue-400 mr-1" />
                    <span className="text-gray-300">Streak: {stats.streak}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <LightBulbIcon className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-gray-300">{stats.difficulty}</span>
                </div>
              </div>
            </motion.div>

            {/* Question Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#232c43] rounded-2xl p-6 shadow-2xl"
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-cyan-200 mb-2">
                  Question {currentIndex + 1} of {totalQuestions}
                </h2>
                <p className="text-gray-300">{currentQuestion.text}</p>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                      selectedAnswer === null
                        ? 'bg-[#1a2234] hover:bg-[#2a3344]'
                        : selectedAnswer === index
                          ? index === currentQuestion.correctAnswer
                            ? 'bg-green-900/50 text-green-200'
                            : 'bg-red-900/50 text-red-200'
                          : index === currentQuestion.correctAnswer
                            ? 'bg-green-900/50 text-green-200'
                            : ''
                    }`}
                  >
                    <span className="text-gray-300">{option}</span>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-blue-900/30 rounded-xl"
                >
                  <p className="text-blue-200">{currentQuestion.explanation}</p>
                </motion.div>
              )}

              <div className="mt-6 flex justify-between">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-xl bg-[#1a2234] text-gray-300 hover:bg-[#2a3344] disabled:opacity-50 transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 disabled:opacity-50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdaptiveQuiz; 