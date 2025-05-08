import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses, Resource, Course, Module } from './Courses';
import { AcademicCapIcon, ClockIcon, GlobeAltIcon, CalendarIcon, PlayCircleIcon, DocumentTextIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const ResourceIcon = ({ type }: { type: Resource['type'] }) => {
  switch (type) {
    case 'video':
      return <PlayCircleIcon className="h-5 w-5" />;
    case 'document':
      return <DocumentTextIcon className="h-5 w-5" />;
    case 'practice':
      return <BookOpenIcon className="h-5 w-5" />;
    default:
      return <AcademicCapIcon className="h-5 w-5" />;
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = courses.find((c: Course) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <button className="btn-primary mt-4" onClick={() => navigate('/courses')}>Back to Courses</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151c2c] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <button
          className="mb-8 flex items-center text-cyan-400 font-semibold hover:underline focus:outline-none"
          onClick={() => navigate('/courses')}
        >
          <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </button>
        <div className="bg-[#20273a] rounded-2xl shadow-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">{course.title}</h2>
              <p className="text-gray-100 text-lg mb-6">{course.detailedDescription}</p>
              <div className="flex items-center mb-6">
                <StarRating rating={course.rating} />
                <span className="ml-2 text-gray-200 text-lg">
                  {course.rating} <span className="text-gray-400">({course.reviews} reviews)</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-200">{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-200">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-200">{course.language}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-gray-200">Last updated {course.lastUpdated}</span>
                </div>
              </div>
              {course.certification.included && (
                <div className="bg-gradient-to-r from-blue-900 via-cyan-900 to-green-900 p-5 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-2 text-white">Certificate</h3>
                  <p className="text-gray-200">
                    {course.certification.description}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-[#232c43] p-8 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="flex items-center mb-6 w-full">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{course.instructor.name}</h3>
                  <p className="text-cyan-400 font-semibold">Course Creator</p>
                </div>
              </div>
              <p className="text-gray-100 mb-4 text-center">This course was created by {course.instructor.name}. {course.instructor.bio}</p>
              <div className="mb-6 w-full">
                <h4 className="text-sm font-bold mb-2 text-white">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {course.instructor.expertise.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-700/30 text-cyan-200 rounded-full text-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center w-full">
                <button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-bold py-2 px-4 rounded-xl transition-colors shadow-lg" onClick={() => alert('Enrollment coming soon!')}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-14">
            {course.modules.map((module: Module, moduleIndex: number) => (
              <div key={moduleIndex} className="border-l-4 border-cyan-400 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">{module.title}</h3>
                <p className="text-gray-200 mb-4 font-semibold">Duration: {module.duration}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Topics Covered:</h4>
                    <ul className="list-disc list-inside mb-6 text-gray-100">
                      {module.topics.map((topic: string, topicIndex: number) => (
                        <li key={topicIndex} className="mb-1">
                          <span className="ml-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Learning Outcomes:</h4>
                    <ul className="list-disc list-inside mb-6 text-gray-100">
                      {module.learningOutcomes.map((outcome: string, outcomeIndex: number) => (
                        <li key={outcomeIndex} className="mb-1">
                          <span className="ml-2">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-4 text-white">Learning Resources:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {module.resources.map((resource: Resource, resourceIndex: number) => (
                    <a
                      key={resourceIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-5 rounded-xl bg-[#232c43] hover:bg-[#28304a] transition-colors shadow"
                    >
                      <div className="text-cyan-400 mr-3">
                        <ResourceIcon type={resource.type} />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1 text-white">{resource.title}</h5>
                        <p className="text-sm text-cyan-200">{resource.platform}</p>
                        {resource.duration && (
                          <p className="text-sm text-cyan-300 mt-1">
                            Duration: {resource.duration}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Projects Section */}
          <div className="mt-14">
            <h2 className="text-3xl font-extrabold mb-8 text-cyan-300">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(() => {
                switch (course.id) {
                  case 'web-development':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Simple Portfolio Website</h4>
                          <p className="text-gray-200 mb-4">Build a personal portfolio website to showcase your skills and projects. Learn HTML, CSS, and basic JavaScript or React.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Blog Platform</h4>
                          <p className="text-gray-200 mb-4">Create a blog platform with user authentication, CRUD operations, and responsive design. Use React and a backend like Node.js or Firebase.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">E-commerce Web App</h4>
                          <p className="text-gray-200 mb-4">Develop a full-featured e-commerce web application with product listings, cart, checkout, and payment integration. Use advanced React, backend, and database skills.</p>
                        </div>
                      </>
                    );
                  case 'data-science':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Data Analysis Dashboard</h4>
                          <p className="text-gray-200 mb-4">Create a data analysis dashboard using Python, Pandas, and Matplotlib to visualize and analyze a dataset.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Machine Learning Model</h4>
                          <p className="text-gray-200 mb-4">Build a machine learning model to predict outcomes using Scikit-learn. Implement data preprocessing, model training, and evaluation.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Deep Learning Project</h4>
                          <p className="text-gray-200 mb-4">Develop a deep learning project using TensorFlow or PyTorch, such as image classification or natural language processing.</p>
                        </div>
                      </>
                    );
                  case 'digital-marketing':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Social Media Campaign</h4>
                          <p className="text-gray-200 mb-4">Design and execute a social media marketing campaign for a small business or product.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">SEO Optimization</h4>
                          <p className="text-gray-200 mb-4">Optimize a website for search engines by implementing on-page and off-page SEO techniques.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Digital Marketing Strategy</h4>
                          <p className="text-gray-200 mb-4">Develop a comprehensive digital marketing strategy for a brand, including content marketing, email marketing, and analytics.</p>
                        </div>
                      </>
                    );
                  case 'ui-ux-design':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Wireframe Design</h4>
                          <p className="text-gray-200 mb-4">Create wireframes for a mobile app or website using tools like Figma or Adobe XD.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">User Research & Prototyping</h4>
                          <p className="text-gray-200 mb-4">Conduct user research and create interactive prototypes for a product, focusing on user experience.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Design System</h4>
                          <p className="text-gray-200 mb-4">Develop a comprehensive design system for a brand, including components, typography, and color schemes.</p>
                        </div>
                      </>
                    );
                  case 'mathematics':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Math Problem Solver</h4>
                          <p className="text-gray-200 mb-4">Create a simple application that solves basic math problems, such as arithmetic and algebra.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Statistical Analysis Tool</h4>
                          <p className="text-gray-200 mb-4">Develop a tool for statistical analysis, including mean, median, mode, and standard deviation calculations.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Mathematical Modeling</h4>
                          <p className="text-gray-200 mb-4">Create a mathematical model for a real-world problem, such as population growth or financial forecasting.</p>
                        </div>
                      </>
                    );
                  case 'physics':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Physics Simulation</h4>
                          <p className="text-gray-200 mb-4">Build a simple physics simulation, such as a pendulum or projectile motion, using JavaScript or Python.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Wave Analysis Tool</h4>
                          <p className="text-gray-200 mb-4">Develop a tool to analyze wave properties, such as frequency, wavelength, and amplitude.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Quantum Mechanics Simulation</h4>
                          <p className="text-gray-200 mb-4">Create a simulation of quantum mechanics phenomena, such as particle behavior or wave functions.</p>
                        </div>
                      </>
                    );
                  case 'languages':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Language Learning App</h4>
                          <p className="text-gray-200 mb-4">Develop a simple language learning app with flashcards and quizzes for vocabulary and grammar.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Translation Tool</h4>
                          <p className="text-gray-200 mb-4">Create a translation tool that supports multiple languages and provides context-aware translations.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Language Processing API</h4>
                          <p className="text-gray-200 mb-4">Develop an API for natural language processing tasks, such as sentiment analysis or language detection.</p>
                        </div>
                      </>
                    );
                  case 'logical-reasoning':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Logic Puzzle Solver</h4>
                          <p className="text-gray-200 mb-4">Create a tool to solve basic logic puzzles, such as Sudoku or crosswords.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Decision Tree Generator</h4>
                          <p className="text-gray-200 mb-4">Develop a decision tree generator for problem-solving and decision-making scenarios.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">AI Logic Game</h4>
                          <p className="text-gray-200 mb-4">Create an AI-powered logic game that challenges players with complex puzzles and scenarios.</p>
                        </div>
                      </>
                    );
                  case 'ai-llm':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Chatbot Development</h4>
                          <p className="text-gray-200 mb-4">Build a simple chatbot using natural language processing techniques and a basic AI model.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Text Classification Model</h4>
                          <p className="text-gray-200 mb-4">Develop a text classification model to categorize text data into predefined categories.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Advanced AI Application</h4>
                          <p className="text-gray-200 mb-4">Create an advanced AI application, such as a recommendation system or a generative AI model.</p>
                        </div>
                      </>
                    );
                  case 'stock-market':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Stock Price Tracker</h4>
                          <p className="text-gray-200 mb-4">Develop a simple application to track stock prices and display basic market data.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Portfolio Analyzer</h4>
                          <p className="text-gray-200 mb-4">Create a portfolio analyzer that evaluates investment performance and provides insights.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Algorithmic Trading Bot</h4>
                          <p className="text-gray-200 mb-4">Develop an algorithmic trading bot that executes trades based on predefined strategies and market conditions.</p>
                        </div>
                      </>
                    );
                  case 'personal-finance':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Budget Tracker</h4>
                          <p className="text-gray-200 mb-4">Create a budget tracking application to manage personal finances and expenses.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Investment Planner</h4>
                          <p className="text-gray-200 mb-4">Develop an investment planning tool that helps users set financial goals and track progress.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Financial Dashboard</h4>
                          <p className="text-gray-200 mb-4">Create a comprehensive financial dashboard that integrates budgeting, investing, and financial analytics.</p>
                        </div>
                      </>
                    );
                  case 'startup-entrepreneurship':
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Business Plan Generator</h4>
                          <p className="text-gray-200 mb-4">Develop a tool to help entrepreneurs create and refine their business plans.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Market Research Tool</h4>
                          <p className="text-gray-200 mb-4">Create a market research tool that analyzes industry trends and competitor data.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Startup Growth Strategy</h4>
                          <p className="text-gray-200 mb-4">Develop a comprehensive growth strategy for a startup, including marketing, funding, and scaling plans.</p>
                        </div>
                      </>
                    );
                  default:
                    return (
                      <>
                        {/* Beginner Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-green-300">Beginner</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Course-Specific Beginner Project</h4>
                          <p className="text-gray-200 mb-4">A beginner project tailored to this course.</p>
                        </div>
                        {/* Intermediate Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-yellow-300">Intermediate</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Course-Specific Intermediate Project</h4>
                          <p className="text-gray-200 mb-4">An intermediate project tailored to this course.</p>
                        </div>
                        {/* Pro Project */}
                        <div className="bg-[#232c43] rounded-2xl shadow-lg p-8 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 text-red-300">Pro</h3>
                          <h4 className="text-lg font-semibold mb-2 text-white">Course-Specific Pro Project</h4>
                          <p className="text-gray-200 mb-4">A pro project tailored to this course.</p>
                        </div>
                      </>
                    );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 