import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  CalendarIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
  BeakerIcon,
  CalculatorIcon,
  ComputerDesktopIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface Resource {
  title: string;
  url: string;
  type: 'video' | 'notes' | 'practice' | 'document';
  platform: string;
  duration?: string;
}

interface Topic {
  name: string;
  importance: 'High' | 'Medium' | 'Low';
  estimatedTime: string;
  resources: Resource[];
  prerequisites?: string[];
  dpp?: string[];
  pyq?: string;
}

interface Subject {
  name: string;
  weightage: string;
  totalTopics: number;
  completedTopics: number;
  topics: Topic[];
}

interface WeeklySchedule {
  day: string;
  subjects: {
    name: string;
    topics: Topic[];
    duration: number;
    resources: Resource[];
  }[];
  totalHours: number;
}

interface ExamPhase {
  title: string;
  duration: string;
  description: string;
  subjects: Subject[];
}

interface ExamDetails {
  id: string;
  title: string;
  description: string;
  examDate: string;
  eligibility: string;
  preparationTime: string;
  phases: ExamPhase[];
  recommendedBooks: Resource[];
  studyTips: string[];
}

interface StudentStatus {
  class: '11' | '12' | 'dropper';
  startDate: string;
}

const ExamDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { examId } = useParams();
  let { studentStatus, examDetails } = location.state || {};
  const [currentPhase, setCurrentPhase] = useState(0);
  const [daysUntilExam, setDaysUntilExam] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [weeklySchedule, setWeeklySchedule] = useState<WeeklySchedule[]>([]);

  // Fallback: Load from localStorage if not present in location.state
  if (!studentStatus || !examDetails) {
    try {
      const storedExamDetails = localStorage.getItem('edutians_examDetails');
      const storedStudentStatus = localStorage.getItem('edutians_studentStatus');
      if (storedExamDetails && storedStudentStatus) {
        examDetails = JSON.parse(storedExamDetails);
        studentStatus = JSON.parse(storedStudentStatus);
      }
    } catch (e) {
      // Ignore JSON parse errors
    }
  }

  // Get the appropriate icon based on exam ID
  const getExamIcon = (id: string) => {
    switch (id) {
      case 'jee-main-advanced':
        return <CalculatorIcon className="h-8 w-8" />;
      case 'neet':
        return <BeakerIcon className="h-8 w-8" />;
      case 'gate':
        return <ComputerDesktopIcon className="h-8 w-8" />;
      case 'upsc':
        return <AcademicCapIcon className="h-8 w-8" />;
      case 'cat':
        return <ChartBarIcon className="h-8 w-8" />;
      default:
        return <AcademicCapIcon className="h-8 w-8" />;
    }
  };

  useEffect(() => {
    if (!examDetails || !studentStatus) {
      navigate('/competitive-exams');
      return;
    }

    try {
      // Calculate days until exam
      const examDateStr = examDetails.examDate;
      let examDate = new Date();
      
      // Handle different date formats
      if (examDateStr.includes(',')) {
        const firstDate = examDateStr.split(',')[0];
        if (firstDate.includes(':')) {
          const dateValue = firstDate.split(':')[1].trim();
          examDate = new Date(dateValue + ', ' + new Date().getFullYear());
        } else {
          examDate = new Date(firstDate + ', ' + new Date().getFullYear());
        }
      } else if (examDateStr.includes(':')) {
        const dateValue = examDateStr.split(':')[1].trim();
        examDate = new Date(dateValue + ', ' + new Date().getFullYear());
      } else {
        examDate = new Date(examDateStr + ', ' + new Date().getFullYear());
      }

      if (isNaN(examDate.getTime())) {
        throw new Error('Invalid exam date format');
      }

      // If the calculated date is in the past, add a year
      if (examDate < new Date()) {
        examDate.setFullYear(examDate.getFullYear() + 1);
      }

      const today = new Date();
      const diffTime = examDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysUntilExam(Math.max(diffDays, 0));

      // Set current phase
      if (diffDays > 180) {
        setCurrentPhase(0);
      } else if (diffDays > 90) {
        setCurrentPhase(Math.min(1, examDetails.phases.length - 1));
      } else {
        setCurrentPhase(Math.min(2, examDetails.phases.length - 1));
      }
    } catch (err) {
      console.error('Error calculating exam date:', err);
      navigate('/competitive-exams');
    }
  }, [examDetails, studentStatus, navigate]);

  useEffect(() => {
    if (examDetails && examDetails.phases) {
      // Generate weekly schedule based on exam phases and subjects
      const schedule: WeeklySchedule[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
        const subjects = examDetails.phases[currentPhase].subjects.map((subject: Subject) => {
          const subjectTopics = subject.topics;
          return {
            name: subject.name,
            topics: subjectTopics,
            duration: subjectTopics.reduce((acc: number, topic: Topic) => 
              acc + (parseInt(topic.estimatedTime) || 2), 0),
            resources: subjectTopics.flatMap(topic => topic.resources)
          };
        });

        // Distribute study hours across subjects
        const totalHours = subjects.reduce((acc: number, subject: { duration: number }) => 
          acc + subject.duration, 0);
        
        return {
          day,
          subjects,
          totalHours: Math.min(totalHours, 8) // Cap at 8 hours per day
        };
      });

      setWeeklySchedule(schedule);
    }
  }, [examDetails, currentPhase]);

  const ResourceIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'video':
        return <PlayCircleIcon className="h-5 w-5" />;
      case 'notes':
        return <DocumentTextIcon className="h-5 w-5" />;
      case 'practice':
        return <BookOpenIcon className="h-5 w-5" />;
      default:
        return <AcademicCapIcon className="h-5 w-5" />;
    }
  };

  const calculateDailyStudyHours = () => {
    const totalTopics = examDetails.phases.reduce((acc: number, phase: ExamPhase) => 
      acc + phase.subjects.reduce((subAcc: number, subject: Subject) => 
        subAcc + subject.topics.length, 0), 0);
    
    const avgTopicHours = 8;
    const totalHours = totalTopics * avgTopicHours;
    
    return Math.ceil(totalHours / daysUntilExam);
  };

  if (!examDetails || !studentStatus) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#151c2c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-4"
        >
          <button
            className="p-2 rounded-full bg-[#232c43] hover:bg-[#28304a] border border-[#232c43] hover:border-cyan-400 transition-colors"
            onClick={() => navigate('/competitive-exams')}
          >
            <ArrowLeftIcon className="h-6 w-6 text-cyan-400" />
          </button>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-700/30 text-cyan-400 shadow">
              {getExamIcon(examId || '')}
            </span>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-0">{examDetails.title}</h1>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="text-gray-100 mb-6 text-lg">{examDetails.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-700/30 text-blue-200 text-sm font-semibold">
                <CalendarIcon className="h-5 w-5 mr-2" /> {examDetails.examDate}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700/30 text-green-200 text-sm font-semibold">
                <CheckCircleIcon className="h-5 w-5 mr-2" /> {examDetails.eligibility}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-700/30 text-cyan-200 text-sm font-semibold">
                <ClockIcon className="h-5 w-5 mr-2" /> {examDetails.preparationTime}
              </span>
            </div>
            {/* Add more details here as needed, e.g., phases, tips, etc. */}
          </div>
        </div>
        {/* Add more sections/cards as needed, using the same dark style */}
      </div>
    </div>
  );
};

export default ExamDetails; 