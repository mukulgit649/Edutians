import React from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  CalendarIcon,
  BookOpenIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface CommunityFeature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  status: 'active' | 'coming-soon';
  features: {
    title: string;
    description: string;
  }[];
}

const communityFeatures: CommunityFeature[] = [
  {
    id: 'study-groups',
    title: 'Study Groups',
    description: 'Join or create study groups for collaborative learning',
    icon: <UserGroupIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Group Formation',
        description: 'Create or join study groups based on subjects and goals'
      },
      {
        title: 'Scheduled Sessions',
        description: 'Plan and organize study sessions with group members'
      },
      {
        title: 'Progress Tracking',
        description: 'Monitor group progress and achievements'
      }
    ]
  },
  {
    id: 'discussion-forums',
    title: 'Discussion Forums',
    description: 'Engage in meaningful discussions about various topics',
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Subject Forums',
        description: 'Topic-specific discussion boards'
      },
      {
        title: 'Q&A Section',
        description: 'Ask questions and get answers from the community'
      },
      {
        title: 'Resource Sharing',
        description: 'Share and discover learning resources'
      }
    ]
  },
  {
    id: 'mentorship',
    title: 'Mentorship Program',
    description: 'Connect with experienced mentors for guidance',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Mentor Matching',
        description: 'Find mentors based on your goals and interests'
      },
      {
        title: 'Structured Sessions',
        description: 'Regular mentoring sessions with progress tracking'
      },
      {
        title: 'Success Stories',
        description: 'Learn from others\' experiences and achievements'
      }
    ]
  },
  {
    id: 'events',
    title: 'Community Events',
    description: 'Participate in workshops, webinars, and meetups',
    icon: <CalendarIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Workshops',
        description: 'Interactive learning sessions on various topics'
      },
      {
        title: 'Webinars',
        description: 'Expert-led online seminars and discussions'
      },
      {
        title: 'Meetups',
        description: 'Local community gatherings and networking events'
      }
    ]
  },
  {
    id: 'resource-sharing',
    title: 'Resource Sharing',
    description: 'Share and discover learning materials',
    icon: <BookOpenIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Study Materials',
        description: 'Share notes, summaries, and study guides'
      },
      {
        title: 'Practice Questions',
        description: 'Create and share practice questions'
      },
      {
        title: 'Learning Paths',
        description: 'Curated learning paths for different subjects'
      }
    ]
  },
  {
    id: 'project-collaboration',
    title: 'Project Collaboration',
    description: 'Work on projects with other community members',
    icon: <LightBulbIcon className="h-8 w-8" />,
    status: 'coming-soon',
    features: [
      {
        title: 'Project Matching',
        description: 'Find collaborators for your projects'
      },
      {
        title: 'Skill Development',
        description: 'Learn through hands-on project work'
      },
      {
        title: 'Portfolio Building',
        description: 'Showcase your collaborative projects'
      }
    ]
  }
];

const Community: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Learning Community</h1>
          <p className="text-gray-200 mt-2 text-lg">Connect, collaborate, and grow with fellow learners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#151c2c]/80 rounded-2xl shadow-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-700/30 text-cyan-400 shadow mr-4">
                  {feature.icon}
                </span>
                <div>
                  <h2 className="text-2xl font-extrabold text-cyan-200">{feature.title}</h2>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    feature.status === 'active' 
                      ? 'bg-green-700/30 text-green-200'
                      : 'bg-yellow-700/30 text-yellow-200'
                  }`}>
                    {feature.status === 'active' ? 'Active' : 'Coming Soon'}
                  </span>
                </div>
              </div>

              <p className="text-gray-200 mb-6">{feature.description}</p>

              <div className="space-y-4">
                {feature.features.map((item, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                    <h3 className="font-semibold text-cyan-200">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>

              <button
                className={`mt-6 w-full py-2 px-4 rounded-xl font-semibold ${
                  feature.status === 'active'
                    ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white shadow-lg transition-all duration-300 hover:shadow-xl'
                    : 'bg-[#1a2234] text-gray-400 cursor-not-allowed'
                }`}
                disabled={feature.status === 'coming-soon'}
              >
                {feature.status === 'active' ? 'Get Started' : 'Coming Soon'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community; 