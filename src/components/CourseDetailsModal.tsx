import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../pages/Courses';

interface CourseDetailsModalProps {
  course: Course;
  onClose: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#232c43] rounded-xl p-6 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{course.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Course Details</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white">Duration:</span> {course.duration}
              </p>
              <p className="text-gray-400">
                <span className="text-white">Language:</span> {course.language}
              </p>
              <p className="text-gray-400">
                <span className="text-white">Last Updated:</span> {course.lastUpdated}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Modules</h4>
            <div className="space-y-2">
              {course.modules.map((module, index) => (
                <div key={index} className="text-gray-400">
                  <p className="font-medium text-white">{module.title}</p>
                  <p>Duration: {module.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Prerequisites</h4>
            <ul className="list-disc list-inside text-gray-400">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Instructor</h4>
            <div className="flex items-center space-x-3">
              <img
                src={course.instructor.image}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{course.instructor.name}</p>
                <p className="text-gray-400">{course.instructor.title}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetailsModal; 