import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CodeBracketIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  BeakerIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

interface CareerPath {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  skills: string[];
  resources: {
    title: string;
    url: string;
    type: 'video' | 'article' | 'course' | 'practice';
    platform: string;
  }[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  growth: string;
}

const careerPaths: CareerPath[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    icon: <CodeBracketIcon className="h-8 w-8" />,
    description: 'Build and maintain software applications, websites, and systems. Work on cutting-edge technologies and solve complex problems.',
    skills: [
      'Programming Languages (Python, JavaScript, Java)',
      'Web Development (React, Node.js)',
      'Database Management',
      'System Design',
      'Problem Solving'
    ],
    resources: [
      {
        title: 'Web Development Roadmap',
        url: 'https://roadmap.sh/frontend',
        type: 'article',
        platform: 'Roadmap.sh'
      },
      {
        title: 'CS50: Introduction to Computer Science',
        url: 'https://www.edx.org/course/cs50s-introduction-to-computer-science',
        type: 'course',
        platform: 'Harvard/edX'
      },
      {
        title: 'System Design for Beginners',
        url: 'https://www.youtube.com/watch?v=quLrc3PbuIw',
        type: 'video',
        platform: 'YouTube'
      }
    ],
    salary: {
      entry: '₹4-8 LPA',
      mid: '₹12-20 LPA',
      senior: '₹25-40 LPA'
    },
    growth: 'High demand with 22% growth rate'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: <ChartBarIcon className="h-8 w-8" />,
    description: 'Analyze complex data sets to help guide business decisions. Work with machine learning, statistics, and programming.',
    skills: [
      'Python/R Programming',
      'Machine Learning',
      'Statistics',
      'Data Visualization',
      'SQL'
    ],
    resources: [
      {
        title: 'Data Science Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'Machine Learning Specialization',
        url: 'https://www.coursera.org/specializations/machine-learning-introduction',
        type: 'course',
        platform: 'Coursera'
      },
      {
        title: 'Data Science Projects',
        url: 'https://www.kaggle.com/datasets',
        type: 'practice',
        platform: 'Kaggle'
      }
    ],
    salary: {
      entry: '₹6-10 LPA',
      mid: '₹15-25 LPA',
      senior: '₹30-50 LPA'
    },
    growth: 'High demand with 30% growth rate'
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    icon: <BanknotesIcon className="h-8 w-8" />,
    description: 'Work in banking, investment, or financial analysis. Help businesses and individuals make financial decisions.',
    skills: [
      'Financial Analysis',
      'Investment Management',
      'Risk Assessment',
      'Financial Modeling',
      'Market Analysis'
    ],
    resources: [
      {
        title: 'Financial Markets',
        url: 'https://www.coursera.org/learn/financial-markets-global',
        type: 'course',
        platform: 'Coursera'
      },
      {
        title: 'Investment Banking Guide',
        url: 'https://www.investopedia.com/investment-banking-4689814',
        type: 'article',
        platform: 'Investopedia'
      }
    ],
    salary: {
      entry: '₹5-8 LPA',
      mid: '₹12-20 LPA',
      senior: '₹25-45 LPA'
    },
    growth: 'Stable with 15% growth rate'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    icon: <BuildingOfficeIcon className="h-8 w-8" />,
    description: 'Start and grow your own business. Learn about business development, marketing, and management.',
    skills: [
      'Business Planning',
      'Marketing',
      'Financial Management',
      'Leadership',
      'Problem Solving'
    ],
    resources: [
      {
        title: 'How to Start a Startup',
        url: 'https://www.startupschool.org/',
        type: 'course',
        platform: 'Y Combinator'
      },
      {
        title: 'Entrepreneurship Guide',
        url: 'https://www.sba.gov/business-guide',
        type: 'article',
        platform: 'SBA'
      }
    ],
    salary: {
      entry: 'Variable',
      mid: 'Variable',
      senior: 'Variable'
    },
    growth: 'High potential with variable returns'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: <GlobeAltIcon className="h-8 w-8" />,
    description: 'Design user interfaces and experiences for digital products. Focus on usability, aesthetics, and user satisfaction.',
    skills: [
      'Wireframing',
      'Prototyping',
      'User Research',
      'Visual Design',
      'Interaction Design'
    ],
    resources: [
      {
        title: 'UI/UX Design Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'Figma for Beginners',
        url: 'https://www.figma.com/resources/learn-design/',
        type: 'course',
        platform: 'Figma'
      }
    ],
    salary: {
      entry: '₹5-8 LPA',
      mid: '₹12-20 LPA',
      senior: '₹25-40 LPA'
    },
    growth: 'High demand with 20% growth rate'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    icon: <BeakerIcon className="h-8 w-8" />,
    description: 'Build and maintain data pipelines and infrastructure. Work with big data technologies and ensure data quality.',
    skills: [
      'Python/Java',
      'SQL',
      'Big Data Technologies (Hadoop, Spark)',
      'ETL Processes',
      'Data Warehousing'
    ],
    resources: [
      {
        title: 'Data Engineering Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'Apache Spark for Beginners',
        url: 'https://www.coursera.org/learn/apache-spark',
        type: 'course',
        platform: 'Coursera'
      }
    ],
    salary: {
      entry: '₹6-10 LPA',
      mid: '₹15-25 LPA',
      senior: '₹30-50 LPA'
    },
    growth: 'High demand with 25% growth rate'
  },
  {
    id: 'product-management',
    title: 'Product Management',
    icon: <BriefcaseIcon className="h-8 w-8" />,
    description: 'Lead product development and strategy. Work with cross-functional teams to deliver successful products.',
    skills: [
      'Product Strategy',
      'User Research',
      'Agile Methodologies',
      'Data Analysis',
      'Communication'
    ],
    resources: [
      {
        title: 'Product Management Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'Product Management Course',
        url: 'https://www.coursera.org/learn/product-management',
        type: 'course',
        platform: 'Coursera'
      }
    ],
    salary: {
      entry: '₹7-12 LPA',
      mid: '₹15-25 LPA',
      senior: '₹30-50 LPA'
    },
    growth: 'High demand with 18% growth rate'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    description: 'Protect systems and networks from cyber threats. Work on security protocols, risk assessment, and incident response.',
    skills: [
      'Network Security',
      'Ethical Hacking',
      'Risk Management',
      'Security Tools',
      'Incident Response'
    ],
    resources: [
      {
        title: 'Cybersecurity Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'Ethical Hacking Course',
        url: 'https://www.coursera.org/learn/ethical-hacking',
        type: 'course',
        platform: 'Coursera'
      }
    ],
    salary: {
      entry: '₹6-10 LPA',
      mid: '₹15-25 LPA',
      senior: '₹30-50 LPA'
    },
    growth: 'High demand with 28% growth rate'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    icon: <CloudIcon className="h-8 w-8" />,
    description: 'Design and manage cloud infrastructure. Work with AWS, Azure, or Google Cloud to deploy scalable applications.',
    skills: [
      'Cloud Platforms (AWS, Azure, GCP)',
      'DevOps',
      'Infrastructure as Code',
      'Networking',
      'Security'
    ],
    resources: [
      {
        title: 'Cloud Computing Roadmap',
        url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
        type: 'video',
        platform: 'YouTube'
      },
      {
        title: 'AWS Certified Solutions Architect',
        url: 'https://www.coursera.org/learn/aws-certified-solutions-architect',
        type: 'course',
        platform: 'Coursera'
      }
    ],
    salary: {
      entry: '₹7-12 LPA',
      mid: '₹15-25 LPA',
      senior: '₹30-50 LPA'
    },
    growth: 'High demand with 22% growth rate'
  },
  {
    id: 'ai-ml-genai',
    title: 'AI, ML & Generative AI',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    description: 'Work on artificial intelligence, machine learning, and generative AI models. Build intelligent systems, automate tasks, and create innovative solutions using deep learning and large language models.',
    skills: [
      'Python Programming',
      'Machine Learning Algorithms',
      'Deep Learning (Neural Networks)',
      'Natural Language Processing',
      'Generative AI (LLMs, GANs)',
      'Data Preprocessing & Analysis',
      'Model Deployment'
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.coursera.org/specializations/deep-learning',
        type: 'course',
        platform: 'Coursera'
      },
      {
        title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
        type: 'article',
        platform: "O'Reilly"
      },
      {
        title: 'Generative AI with LLMs',
        url: 'https://www.deeplearning.ai/short-courses/generative-ai-with-llms/',
        type: 'course',
        platform: 'DeepLearning.AI'
      }
    ],
    salary: {
      entry: '₹8-15 LPA',
      mid: '₹20-35 LPA',
      senior: '₹40-80 LPA'
    },
    growth: 'Explosive growth with high demand in tech and research sectors'
  }
];

const CareerGuidance: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Career Guidance</h1>
          <p className="text-gray-200 mt-2 text-lg">Explore career paths and find your perfect fit</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerPaths.map((career) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#151c2c]/80 rounded-2xl shadow-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-700/30 text-cyan-400 shadow mr-4">
                  {career.icon}
                </span>
                <h2 className="text-2xl font-extrabold text-cyan-200">{career.title}</h2>
              </div>

              <p className="text-gray-200 mb-4">{career.description}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-200">Required Skills</h3>
                <ul className="list-disc list-inside text-gray-200">
                  {career.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-200">Learning Resources</h3>
                <ul className="space-y-2">
                  {career.resources.map((resource, index) => (
                    <li key={index} className="text-gray-200">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-200"
                      >
                        {resource.title}
                      </a>
                      <span className="text-sm text-gray-500 ml-2">({resource.platform})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-200">Salary Range</h3>
                  <div className="text-gray-200">
                    <p>Entry: {career.salary.entry}</p>
                    <p>Mid: {career.salary.mid}</p>
                    <p>Senior: {career.salary.senior}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-200">Growth Potential</h3>
                  <p className="text-gray-200">{career.growth}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance; 