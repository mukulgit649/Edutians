import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  category: 'learning' | 'tools' | 'reference' | 'community';
  items: {
    title: string;
    url: string;
    type: 'video' | 'article' | 'course' | 'tool';
    platform: string;
    description: string;
  }[];
}

const resources: Resource[] = [
  {
    id: 'learning-platforms',
    title: 'Learning Platforms',
    description: 'Top platforms for online learning and skill development',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    category: 'learning',
    items: [
      {
        title: 'Coursera',
        url: 'https://www.coursera.org',
        type: 'course',
        platform: 'Coursera',
        description: 'Access courses from top universities and companies'
      },
      {
        title: 'edX',
        url: 'https://www.edx.org',
        type: 'course',
        platform: 'edX',
        description: 'Free courses from leading institutions'
      },
      {
        title: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        type: 'course',
        platform: 'Khan Academy',
        description: 'Free educational videos and exercises'
      }
    ]
  },
  {
    id: 'coding-resources',
    title: 'Coding Resources',
    description: 'Tools and platforms for learning programming',
    icon: <CodeBracketIcon className="h-8 w-8" />,
    category: 'tools',
    items: [
      {
        title: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org',
        type: 'course',
        platform: 'freeCodeCamp',
        description: 'Free coding tutorials and projects'
      },
      {
        title: 'LeetCode',
        url: 'https://leetcode.com',
        type: 'tool',
        platform: 'LeetCode',
        description: 'Practice coding problems and prepare for interviews'
      },
      {
        title: 'GitHub Learning Lab',
        url: 'https://lab.github.com',
        type: 'course',
        platform: 'GitHub',
        description: 'Learn Git and GitHub through interactive courses'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science Tools',
    description: 'Resources for data analysis and machine learning',
    icon: <PresentationChartLineIcon className="h-8 w-8" />,
    category: 'tools',
    items: [
      {
        title: 'Kaggle',
        url: 'https://www.kaggle.com',
        type: 'tool',
        platform: 'Kaggle',
        description: 'Data science competitions and datasets'
      },
      {
        title: 'Google Colab',
        url: 'https://colab.research.google.com',
        type: 'tool',
        platform: 'Google',
        description: 'Free Jupyter notebook environment'
      },
      {
        title: 'DataCamp',
        url: 'https://www.datacamp.com',
        type: 'course',
        platform: 'DataCamp',
        description: 'Interactive data science courses'
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Official documentation and guides',
    icon: <DocumentTextIcon className="h-8 w-8" />,
    category: 'reference',
    items: [
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        type: 'article',
        platform: 'Mozilla',
        description: 'Web development documentation'
      },
      {
        title: 'React Documentation',
        url: 'https://reactjs.org/docs',
        type: 'article',
        platform: 'React',
        description: 'Official React documentation'
      },
      {
        title: 'Python Documentation',
        url: 'https://docs.python.org',
        type: 'article',
        platform: 'Python',
        description: 'Official Python documentation'
      }
    ]
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials',
    description: 'Video-based learning resources',
    icon: <VideoCameraIcon className="h-8 w-8" />,
    category: 'learning',
    items: [
      {
        title: 'Traversy Media',
        url: 'https://www.youtube.com/c/TraversyMedia',
        type: 'video',
        platform: 'YouTube',
        description: 'Web development tutorials'
      },
      {
        title: 'Sentdex',
        url: 'https://www.youtube.com/c/sentdex',
        type: 'video',
        platform: 'YouTube',
        description: 'Python and machine learning tutorials'
      },
      {
        title: 'The Net Ninja',
        url: 'https://www.youtube.com/c/TheNetNinja',
        type: 'video',
        platform: 'YouTube',
        description: 'Web development and programming tutorials'
      }
    ]
  },
  {
    id: 'communities',
    title: 'Learning Communities',
    description: 'Join communities for support and networking',
    icon: <GlobeAltIcon className="h-8 w-8" />,
    category: 'community',
    items: [
      {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        type: 'tool',
        platform: 'Stack Overflow',
        description: 'Q&A platform for programmers'
      },
      {
        title: 'Dev.to',
        url: 'https://dev.to',
        type: 'article',
        platform: 'Dev.to',
        description: 'Community of software developers'
      },
      {
        title: 'Discord Learning Servers',
        url: 'https://discord.com/servers',
        type: 'tool',
        platform: 'Discord',
        description: 'Join learning communities on Discord'
      }
    ]
  }
];

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Resources</h1>
          <p className="text-gray-200 mt-2 text-lg">Curated resources to help you learn, practice, and grow</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#151c2c]/80 rounded-2xl shadow-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-700/30 text-cyan-400 shadow mr-4">
                  {resource.icon}
                </span>
                <h2 className="text-2xl font-extrabold text-cyan-200">{resource.title}</h2>
              </div>

              <p className="text-gray-200 mb-6">{resource.description}</p>

              <div className="space-y-4">
                {resource.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-200 font-semibold transition-colors"
                    >
                      {item.title}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{item.platform}</p>
                    <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 