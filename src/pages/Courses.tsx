import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  BookOpenIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  GlobeAltIcon,
  CalendarIcon,
  BanknotesIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import CourseDetailsModal from '../components/CourseDetailsModal';
import { useAuth } from '../context/AuthContext';

interface Resource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'practice' | 'document';
  platform: string;
  duration?: string;
}

interface Module {
  title: string;
  duration: string;
  topics: string[];
  resources: Resource[];
  learningOutcomes: string[];
}

interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
}

interface Course {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  detailedDescription: string;
  thumbnail: string;
  modules: Module[];
  prerequisites: string[];
  instructor: Instructor;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  certification: {
    included: boolean;
    name?: string;
    description?: string;
  };
  startDate?: string;
  language: string;
  lastUpdated: string;
  projects: {
    title: string;
    description: string;
    technologies: string[];
    learningOutcomes: string[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }[];
}

const courses: Course[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: <CodeBracketIcon className="h-8 w-8" />,
    description: 'Master full-stack web development from basics to advanced concepts',
    detailedDescription: 'This course covers all the essential skills you need to become a proficient web developer. You will learn HTML, CSS, JavaScript, React, and backend development. This course is designed for beginners and will take you from the basics to advanced concepts.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: HTML & CSS Fundamentals',
        duration: '2 weeks',
        topics: [
          'HTML5 Structure and Semantics',
          'CSS3 Styling Basics',
          'Responsive Design',
          'Flexbox and Grid Essentials'
        ],
        resources: [
          {
            title: 'HTML & CSS Crash Course',
            url: 'https://www.youtube.com/watch?v=916GWv2Qs08',
            type: 'video',
            platform: 'YouTube - Traversy Media',
            duration: '2h 30m'
          },
          {
            title: 'MDN Web Docs - HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
            type: 'document',
            platform: 'MDN'
          },
          {
            title: 'CSS Grid Garden',
            url: 'https://cssgridgarden.com/',
            type: 'practice',
            platform: 'Interactive Game'
          }
        ],
        learningOutcomes: [
          'Understand HTML5 and CSS3 fundamentals',
          'Create responsive and accessible web pages',
          'Use Flexbox and CSS Grid for layout design'
        ]
      },
      {
        title: 'Module 2: JavaScript Essentials',
        duration: '3 weeks',
        topics: [
          'JavaScript Basics',
          'DOM Manipulation',
          'Basic Async Programming',
          'ES6 Fundamentals'
        ],
        resources: [
          {
            title: 'JavaScript Crash Course',
            url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '3h 15m'
          },
          {
            title: 'JavaScript.info',
            url: 'https://javascript.info/',
            type: 'document',
            platform: 'JavaScript.info'
          },
          {
            title: 'JavaScript30',
            url: 'https://javascript30.com/',
            type: 'practice',
            platform: 'Wes Bos'
          }
        ],
        learningOutcomes: [
          'Understand JavaScript fundamentals',
          'Manipulate the DOM with JavaScript',
          'Implement asynchronous programming'
        ]
      },
      {
        title: 'Module 3: React Basics',
        duration: '3 weeks',
        topics: [
          'React Fundamentals',
          'Basic Hooks',
          'Simple Routing',
          'API Basics'
        ],
        resources: [
          {
            title: 'React Crash Course',
            url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '4h'
          },
          {
            title: 'React Documentation',
            url: 'https://react.dev/',
            type: 'document',
            platform: 'React.dev'
          },
          {
            title: 'React Projects',
            url: 'https://github.com/facebook/create-react-app',
            type: 'practice',
            platform: 'GitHub'
          }
        ],
        learningOutcomes: [
          'Understand React fundamentals',
          'Use basic React hooks',
          'Implement simple routing and API calls'
        ]
      },
      {
        title: 'Module 4: Backend Basics',
        duration: '2 weeks',
        topics: [
          'Node.js Basics',
          'Simple API Creation',
          'Basic Database Operations',
          'Auth Fundamentals'
        ],
        resources: [
          {
            title: 'Node.js Crash Course',
            url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '2h 30m'
          },
          {
            title: 'Express.js Guide',
            url: 'https://expressjs.com/',
            type: 'document',
            platform: 'Express.js'
          },
          {
            title: 'MongoDB Basics',
            url: 'https://university.mongodb.com/',
            type: 'practice',
            platform: 'MongoDB'
          }
        ],
        learningOutcomes: [
          'Understand Node.js and Express.js',
          'Create simple APIs',
          'Perform basic database operations'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'John Doe',
      title: 'Senior Web Developer',
      image: 'https://example.com/john-doe.jpg',
      bio: 'John has been working in the web development industry for over 10 years. He specializes in full-stack development and has worked with various technologies.',
      expertise: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB']
    },
    rating: 4.5,
    reviews: 120,
    students: 1500,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Web Development Certificate',
      description: 'This certificate is awarded to students who successfully complete the Web Development course.'
    },
    startDate: '2024-01-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Build a responsive portfolio website showcasing your skills and projects using HTML, CSS, and JavaScript.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        learningOutcomes: [
          'Create responsive layouts',
          'Implement smooth animations',
          'Build interactive components',
          'Deploy a live website'
        ],
        difficulty: 'Beginner'
      },
      {
        title: 'E-commerce Platform',
        description: 'Develop a full-stack e-commerce platform with product listings, cart functionality, and user authentication.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
        learningOutcomes: [
          'Implement user authentication',
          'Create RESTful APIs',
          'Manage state with Redux',
          'Handle payments integration'
        ],
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: <ChartBarIcon className="h-8 w-8" />,
    description: 'Learn essential data analysis and machine learning concepts',
    detailedDescription: 'This course is designed for beginners who want to learn the fundamentals of data science and machine learning. You will learn Python, data analysis, and machine learning concepts.',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Python for Data Science',
        duration: '2 weeks',
        topics: [
          'Python Fundamentals',
          'Basic Data Analysis',
          'Simple Visualizations',
          'Pandas & Numpy Basics'
        ],
        resources: [
          {
            title: 'Python for Beginners - Programming with Mosh',
            url: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
            type: 'video',
            platform: 'YouTube - Programming with Mosh',
            duration: '6h'
          },
          {
            title: 'Data Analysis with Python - freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '4h'
          },
          {
            title: 'Pandas & Numpy Crash Course - Alex The Analyst',
            url: 'https://www.youtube.com/watch?v=vmEHCJofslg',
            type: 'video',
            platform: 'YouTube - Alex The Analyst',
            duration: '2h'
          },
          {
            title: 'Matplotlib Tutorial - Corey Schafer',
            url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4',
            type: 'video',
            platform: 'YouTube - Corey Schafer',
            duration: '1h 30m'
          }
        ],
        learningOutcomes: [
          'Understand Python fundamentals',
          'Perform basic data analysis',
          'Create simple visualizations',
          'Work with Pandas and Numpy'
        ]
      },
      {
        title: 'Module 2: Machine Learning',
        duration: '3 weeks',
        topics: [
          'Basic ML Concepts',
          'Simple Classification',
          'Basic Regression',
          'Model Evaluation'
        ],
        resources: [
          {
            title: 'Machine Learning with Scikit-learn - freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=pqNCD_5r0IU',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '3h'
          },
          {
            title: 'Deep Learning Course - fast.ai',
            url: 'https://www.youtube.com/watch?v=0oyCUWLL_fU',
            type: 'video',
            platform: 'YouTube - fast.ai',
            duration: '5h'
          }
        ],
        learningOutcomes: [
          'Understand basic ML concepts',
          'Implement simple classification and regression models',
          'Evaluate machine learning models',
          'Understand deep learning fundamentals'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Jane Smith',
      title: 'Data Science Specialist',
      image: 'https://example.com/jane-smith.jpg',
      bio: 'Jane has a PhD in data science and has been working in the industry for over 5 years. She specializes in machine learning and data analysis.',
      expertise: ['Python', 'Machine Learning', 'Data Analysis']
    },
    rating: 4.7,
    reviews: 80,
    students: 1200,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Data Science Certificate',
      description: 'This certificate is awarded to students who successfully complete the Data Science course.'
    },
    startDate: '2024-02-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Data Analysis Dashboard',
        description: 'Create an interactive dashboard to analyze and visualize a real-world dataset using Python and data visualization libraries.',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
        learningOutcomes: [
          'Clean and preprocess data',
          'Create meaningful visualizations',
          'Perform statistical analysis',
          'Present insights effectively'
        ],
        difficulty: 'Beginner'
      },
      {
        title: 'Machine Learning Model for Prediction',
        description: 'Build and deploy a machine learning model to predict outcomes based on historical data.',
        technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask', 'Docker'],
        learningOutcomes: [
          'Implement ML algorithms',
          'Optimize model performance',
          'Create API endpoints',
          'Deploy ML models'
        ],
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <MegaphoneIcon className="h-8 w-8" />,
    description: 'Learn essential digital marketing skills',
    detailedDescription: 'This course is designed to help you understand the fundamentals of digital marketing. You will learn about SEO, content marketing, social media, and more.',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Marketing Basics',
        duration: '2 weeks',
        topics: [
          'Digital Marketing Intro',
          'Basic SEO',
          'Content Marketing',
          'Social Media Basics'
        ],
        resources: [
          {
            title: 'Digital Marketing for Beginners - Simplilearn',
            url: 'https://www.youtube.com/watch?v=PHFbQ7XgCng',
            type: 'video',
            platform: 'YouTube - Simplilearn',
            duration: '2h'
          },
          {
            title: 'Google Ads & SEO Basics',
            url: 'https://www.youtube.com/watch?v=GxVp3zZhxq4',
            type: 'video',
            platform: 'YouTube - Google',
            duration: '1h 30m'
          },
          {
            title: 'SEO for Beginners - Ahrefs',
            url: 'https://www.youtube.com/watch?v=Ql1F6h8peEM',
            type: 'video',
            platform: 'YouTube - Ahrefs',
            duration: '2h'
          },
          {
            title: 'Social Media Strategy - HubSpot',
            url: 'https://www.youtube.com/watch?v=9mPw4T8IsP4',
            type: 'video',
            platform: 'YouTube - HubSpot',
            duration: '1h'
          }
        ],
        learningOutcomes: [
          'Understand the basics of digital marketing',
          'Implement basic SEO techniques',
          'Create content marketing strategies',
          'Develop social media strategies'
        ]
      },
      {
        title: 'Module 2: Advanced Marketing',
        duration: '2 weeks',
        topics: [
          'Google Analytics',
          'Performance Marketing',
          'Advanced SEO',
          'Marketing Analytics'
        ],
        resources: [
          {
            title: 'Google Analytics 4 Full Tutorial',
            url: 'https://www.youtube.com/watch?v=8C5U5XWQzRA',
            type: 'video',
            platform: 'YouTube - Google Analytics',
            duration: '2h'
          },
          {
            title: 'Performance Marketing - Meta Ads Guide',
            url: 'https://www.youtube.com/watch?v=UvxjnJhEdtM',
            type: 'video',
            platform: 'YouTube - Meta',
            duration: '1h 30m'
          }
        ],
        learningOutcomes: [
          'Use Google Analytics effectively',
          'Implement performance marketing strategies',
          'Analyze marketing data',
          'Optimize ad campaigns'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Michael Brown',
      title: 'Digital Marketing Expert',
      image: 'https://example.com/michael-brown.jpg',
      bio: 'Michael has been working in digital marketing for over 10 years. He specializes in social media and content marketing.',
      expertise: ['Digital Marketing', 'SEO', 'Social Media']
    },
    rating: 4.6,
    reviews: 100,
    students: 1000,
    duration: '4 weeks',
    certification: {
      included: true,
      name: 'Digital Marketing Certificate',
      description: 'This certificate is awarded to students who successfully complete the Digital Marketing course.'
    },
    startDate: '2024-03-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Social Media Campaign',
        description: 'Plan and execute a complete social media marketing campaign for a real or fictional business.',
        technologies: ['Social Media Platforms', 'Analytics Tools', 'Content Creation Tools'],
        learningOutcomes: [
          'Create content strategy',
          'Analyze campaign metrics',
          'Optimize for engagement',
          'Measure ROI'
        ],
        difficulty: 'Beginner'
      },
      {
        title: 'SEO Optimization Project',
        description: 'Optimize a website for search engines and track its performance over time.',
        technologies: ['SEO Tools', 'Google Analytics', 'Content Management Systems'],
        learningOutcomes: [
          'Conduct keyword research',
          'Implement on-page SEO',
          'Create backlink strategy',
          'Track and analyze results'
        ],
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: <PencilSquareIcon className="h-8 w-8" />,
    description: 'Master the art of creating beautiful and user-friendly digital experiences',
    detailedDescription: 'This course is designed to help you master the art of UI/UX design. You will learn about design principles, user research, and prototyping.',
    thumbnail: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Design Fundamentals',
        duration: '4 weeks',
        topics: [
          'Color Theory & Typography',
          'Layout & Composition',
          'Design Systems',
          'Visual Hierarchy'
        ],
        resources: [
          {
            title: 'Figma UI/UX Design for Beginners',
            url: 'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
            type: 'video',
            platform: 'YouTube - Figma',
            duration: '2h'
          },
          {
            title: 'What is UX Design? - AJ&Smart',
            url: 'https://www.youtube.com/watch?v=Ovj4hFxko7c',
            type: 'video',
            platform: 'YouTube - AJ&Smart',
            duration: '1h'
          },
          {
            title: '10 UI Tips - Refactoring UI',
            url: 'https://www.youtube.com/watch?v=7kVeCqQCxlk',
            type: 'video',
            platform: 'YouTube - Refactoring UI',
            duration: '30m'
          },
          {
            title: 'Designing in Figma - Web App UI',
            url: 'https://www.youtube.com/watch?v=KkzBtv3p7Aw',
            type: 'video',
            platform: 'YouTube - Figma',
            duration: '1h'
          }
        ],
        learningOutcomes: [
          'Understand design principles',
          'Apply color theory and typography',
          'Create visual hierarchy',
          'Design web app interfaces'
        ]
      },
      {
        title: 'Module 2: Advanced Design',
        duration: '6 weeks',
        topics: [
          'User Research Methods',
          'Wireframing & Prototyping',
          'Usability Testing',
          'Information Architecture'
        ],
        resources: [
          {
            title: 'UX Portfolio Case Study Walkthrough',
            url: 'https://www.youtube.com/watch?v=1wQqG0SJss8',
            type: 'video',
            platform: 'YouTube - AJ&Smart',
            duration: '1h'
          },
          {
            title: 'Design Systems in Figma',
            url: 'https://www.youtube.com/watch?v=El_U1h7rLx8',
            type: 'video',
            platform: 'YouTube - Figma',
            duration: '1h 30m'
          }
        ],
        learningOutcomes: [
          'Create UX case studies',
          'Build design systems',
          'Conduct user research',
          'Create high-fidelity prototypes'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Emily Wilson',
      title: 'UI/UX Designer',
      image: 'https://example.com/emily-wilson.jpg',
      bio: 'Emily has been working in UI/UX design for over 5 years. She specializes in user-centered design and prototyping.',
      expertise: ['UI/UX Design', 'User Research', 'Prototyping']
    },
    rating: 4.8,
    reviews: 150,
    students: 1800,
    duration: '10 weeks',
    certification: {
      included: true,
      name: 'UI/UX Design Certificate',
      description: 'This certificate is awarded to students who successfully complete the UI/UX Design course.'
    },
    startDate: '2024-04-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Mobile App Redesign',
        description: 'Redesign an existing mobile app to improve its user experience and visual appeal.',
        technologies: ['Figma', 'Adobe XD', 'Prototyping Tools'],
        learningOutcomes: [
          'Conduct user research',
          'Create wireframes',
          'Design high-fidelity mockups',
          'Build interactive prototypes'
        ],
        difficulty: 'Beginner'
      },
      {
        title: 'Design System Creation',
        description: 'Develop a comprehensive design system for a product or brand.',
        technologies: ['Figma', 'Design Systems', 'Component Libraries'],
        learningOutcomes: [
          'Create consistent design patterns',
          'Build reusable components',
          'Document design guidelines',
          'Implement accessibility standards'
        ],
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    description: 'Learn to protect systems, networks, and data from cyber threats',
    detailedDescription: 'This course is designed to help you understand the fundamentals of cybersecurity. You will learn about network security, cryptography, and ethical hacking.',
    thumbnail: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Security Fundamentals',
        duration: '6 weeks',
        topics: [
          'Network Security Basics',
          'Cryptography',
          'Security Protocols',
          'Risk Assessment'
        ],
        resources: [
          {
            title: 'Intro to Cybersecurity - Simplilearn',
            url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
            type: 'video',
            platform: 'YouTube - Simplilearn',
            duration: '2h'
          },
          {
            title: 'What is Ethical Hacking? - NetworkChuck',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - NetworkChuck',
            duration: '1h'
          },
          {
            title: 'TryHackMe Walkthrough - John Hammond',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - John Hammond',
            duration: '1h 30m'
          },
          {
            title: 'OverTheWire Wargames Tutorial',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - OverTheWire',
            duration: '2h'
          }
        ],
        learningOutcomes: [
          'Understand network security basics',
          'Implement cryptography',
          'Implement security protocols',
          'Solve security challenges'
        ]
      },
      {
        title: 'Module 2: Advanced Security',
        duration: '8 weeks',
        topics: [
          'Penetration Testing',
          'Vulnerability Assessment',
          'Web Application Security',
          'Malware Analysis'
        ],
        resources: [
          {
            title: 'Cybersecurity Lab Setup - Virtual Machines',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - NetworkChuck',
            duration: '1h'
          },
          {
            title: 'Penetration Testing Full Guide - David Bombal',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - David Bombal',
            duration: '2h'
          }
        ],
        learningOutcomes: [
          'Set up security labs',
          'Perform penetration testing',
          'Assess vulnerabilities',
          'Analyze malware'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Sarah Thompson',
      title: 'Cybersecurity Specialist',
      image: 'https://example.com/sarah-thompson.jpg',
      bio: 'Sarah has a Master\'s degree in cybersecurity and has been working in the industry for over 7 years. She specializes in network security and ethical hacking.',
      expertise: ['Network Security', 'Ethical Hacking', 'Cybersecurity']
    },
    rating: 4.9,
    reviews: 200,
    students: 2000,
    duration: '14 weeks',
    certification: {
      included: true,
      name: 'Cybersecurity Certificate',
      description: 'This certificate is awarded to students who successfully complete the Cybersecurity course.'
    },
    startDate: '2024-05-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Network Security Assessment',
        description: 'Conduct a comprehensive security assessment of a network infrastructure.',
        technologies: ['Wireshark', 'Nmap', 'Metasploit', 'Security Tools'],
        learningOutcomes: [
          'Identify vulnerabilities',
          'Perform penetration testing',
          'Implement security measures',
          'Create security reports'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Secure Web Application',
        description: 'Build a web application with security best practices and protection against common vulnerabilities.',
        technologies: ['OWASP', 'Security Frameworks', 'Web Development'],
        learningOutcomes: [
          'Implement secure coding practices',
          'Prevent common vulnerabilities',
          'Set up authentication systems',
          'Monitor security threats'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    description: 'Build native and cross-platform mobile applications',
    detailedDescription: 'This course is designed to help you build native and cross-platform mobile applications. You will learn about React Native, iOS development, and Android development.',
    thumbnail: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Cross-Platform Development',
        duration: '8 weeks',
        topics: [
          'Flutter Basics',
          'React Native Fundamentals',
          'Dart Programming',
          'Mobile UI/UX'
        ],
        resources: [
          {
            title: 'Flutter for Beginners - freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '5h'
          },
          {
            title: 'MIT App Inventor Tutorial',
            url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU',
            type: 'video',
            platform: 'YouTube - MIT',
            duration: '2h'
          },
          {
            title: 'React Native Full Course - freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '4h'
          },
          {
            title: 'Dart Crash Course - Traversy Media',
            url: 'https://www.youtube.com/watch?v=Ej_Pcr4uC2Q',
            type: 'video',
            platform: 'YouTube - Traversy Media',
            duration: '2h'
          }
        ],
        learningOutcomes: [
          'Build Flutter applications',
          'Create React Native apps',
          'Understand Dart programming',
          'Design mobile interfaces'
        ]
      },
      {
        title: 'Module 2: Advanced Mobile Development',
        duration: '10 weeks',
        topics: [
          'Advanced Flutter UI',
          'State Management',
          'Firebase Integration',
          'App Deployment'
        ],
        resources: [
          {
            title: 'Flutter Advanced UI - Parallax, Animations',
            url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU',
            type: 'video',
            platform: 'YouTube - Flutter',
            duration: '2h'
          },
          {
            title: 'React Native with Redux & Firebase',
            url: 'https://www.youtube.com/watch?v=1ukSR1GRtMU',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '3h'
          }
        ],
        learningOutcomes: [
          'Create advanced UI components',
          'Implement state management',
          'Integrate Firebase',
          'Deploy mobile apps'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Olivia Davis',
      title: 'Mobile Development Specialist',
      image: 'https://example.com/olivia-davis.jpg',
      bio: 'Olivia has been working in mobile development for over 7 years. She specializes in React Native and native development.',
      expertise: ['React Native', 'iOS Development', 'Android Development']
    },
    rating: 4.7,
    reviews: 120,
    students: 1500,
    duration: '18 weeks',
    certification: {
      included: true,
      name: 'Mobile Development Certificate',
      description: 'This certificate is awarded to students who successfully complete the Mobile Development course.'
    },
    startDate: '2024-06-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Cross-Platform Mobile App',
        description: 'Develop a mobile application that works on both iOS and Android using React Native.',
        technologies: ['React Native', 'JavaScript', 'Mobile UI/UX'],
        learningOutcomes: [
          'Build cross-platform apps',
          'Implement mobile UI',
          'Handle state management',
          'Deploy to app stores'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Native Mobile App',
        description: 'Create a native mobile application with advanced features and optimizations.',
        technologies: ['Swift/Kotlin', 'Native APIs', 'Mobile Architecture'],
        learningOutcomes: [
          'Develop native apps',
          'Optimize performance',
          'Implement advanced features',
          'Follow platform guidelines'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    description: 'Build a strong foundation in mathematics from basics to advanced topics',
    detailedDescription: 'This course is designed to help you build a strong foundation in mathematics from basics to advanced topics. You will learn about arithmetic, algebra, geometry, calculus, and more.',
    thumbnail: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Arithmetic & Algebra',
        duration: '2 weeks',
        topics: [
          'Number Operations',
          'Linear Equations',
          'Quadratic Equations',
          'Polynomials'
        ],
        resources: [
          {
            title: 'Khan Academy Algebra',
            url: 'https://www.khanacademy.org/math/algebra',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Algebra eBook',
            url: 'https://openstax.org/details/books/algebra-and-trigonometry',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand number operations',
          'Solve linear equations',
          'Solve quadratic equations'
        ]
      },
      {
        title: 'Module 2: Geometry & Trigonometry',
        duration: '2 weeks',
        topics: [
          'Triangles and Circles',
          'Coordinate Geometry',
          'Trigonometric Ratios',
          'Applications of Trigonometry'
        ],
        resources: [
          {
            title: 'Khan Academy Geometry',
            url: 'https://www.khanacademy.org/math/geometry',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Geometry eBook',
            url: 'https://openstax.org/details/books/geometry',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand geometric concepts',
          'Apply coordinate geometry',
          'Use trigonometric ratios'
        ]
      },
      {
        title: 'Module 3: Calculus Basics',
        duration: '3 weeks',
        topics: [
          'Limits and Continuity',
          'Derivatives',
          'Integrals',
          'Applications of Calculus'
        ],
        resources: [
          {
            title: 'MIT OCW Calculus',
            url: 'https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/',
            type: 'video',
            platform: 'MIT OCW'
          },
          {
            title: 'Khan Academy Calculus',
            url: 'https://www.khanacademy.org/math/calculus-1',
            type: 'video',
            platform: 'Khan Academy'
          }
        ],
        learningOutcomes: [
          'Understand calculus concepts',
          'Calculate limits and continuity',
          'Calculate derivatives and integrals'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Robert Johnson',
      title: 'Mathematics Professor',
      image: 'https://example.com/robert-johnson.jpg',
      bio: 'Robert has been teaching mathematics for over 15 years. He specializes in calculus and algebra.',
      expertise: ['Calculus', 'Algebra', 'Geometry']
    },
    rating: 4.8,
    reviews: 180,
    students: 2000,
    duration: '8 weeks',
    certification: {
      included: true,
      name: 'Mathematics Certificate',
      description: 'This certificate is awarded to students who successfully complete the Mathematics course.'
    },
    startDate: '2024-07-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Mathematical Modeling Project',
        description: 'Create mathematical models to solve real-world problems using calculus and statistics.',
        technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
        learningOutcomes: [
          'Apply mathematical concepts',
          'Create mathematical models',
          'Analyze data statistically',
          'Present findings visually'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Interactive Math Learning Platform',
        description: 'Develop an interactive platform to teach mathematical concepts.',
        technologies: ['Web Development', 'Interactive Graphics', 'Mathematics'],
        learningOutcomes: [
          'Create interactive lessons',
          'Implement mathematical visualizations',
          'Build assessment systems',
          'Track learning progress'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    icon: <BookOpenIcon className="h-8 w-8" />,
    description: 'Explore the wonders of physics, chemistry, and biology',
    detailedDescription: 'This course is designed to help you explore the wonders of physics, chemistry, and biology. You will learn about the fundamental concepts in each of these fields.',
    thumbnail: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Physics Fundamentals',
        duration: '2 weeks',
        topics: [
          'Motion and Forces',
          'Energy and Work',
          'Waves and Sound',
          'Electricity and Magnetism'
        ],
        resources: [
          {
            title: 'Khan Academy Physics',
            url: 'https://www.khanacademy.org/science/physics',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Physics eBook',
            url: 'https://openstax.org/details/books/college-physics',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand basic physics concepts',
          'Apply motion and forces',
          'Understand energy and work'
        ]
      },
      {
        title: 'Module 2: Chemistry Essentials',
        duration: '2 weeks',
        topics: [
          'Atoms and Molecules',
          'Chemical Reactions',
          'Acids and Bases',
          'Organic Chemistry Basics'
        ],
        resources: [
          {
            title: 'Khan Academy Chemistry',
            url: 'https://www.khanacademy.org/science/chemistry',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Chemistry eBook',
            url: 'https://openstax.org/details/books/chemistry',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand basic chemistry concepts',
          'Understand atoms and molecules',
          'Understand chemical reactions'
        ]
      },
      {
        title: 'Module 3: Biology Basics',
        duration: '2 weeks',
        topics: [
          'Cell Structure',
          'Genetics',
          'Evolution',
          'Human Body Systems'
        ],
        resources: [
          {
            title: 'Khan Academy Biology',
            url: 'https://www.khanacademy.org/science/biology',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Biology eBook',
            url: 'https://openstax.org/details/books/biology-2e',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand basic biology concepts',
          'Understand cell structure',
          'Understand genetics'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Emma Thompson',
      title: 'Biology Professor',
      image: 'https://example.com/emma-thompson.jpg',
      bio: 'Emma has been teaching biology for over 10 years. She specializes in human biology and genetics.',
      expertise: ['Human Biology', 'Genetics', 'Cell Biology']
    },
    rating: 4.7,
    reviews: 150,
    students: 1800,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Science Certificate',
      description: 'This certificate is awarded to students who successfully complete the Science course.'
    },
    startDate: '2024-08-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Scientific Research Project',
        description: 'Conduct a scientific investigation and present findings in a research paper.',
        technologies: ['Research Methods', 'Data Analysis', 'Scientific Writing'],
        learningOutcomes: [
          'Design experiments',
          'Collect and analyze data',
          'Write scientific papers',
          'Present research findings'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Interactive Science Education Platform',
        description: 'Create an interactive platform to teach scientific concepts through experiments and simulations.',
        technologies: ['Web Development', 'Interactive Simulations', 'Science Education'],
        learningOutcomes: [
          'Design interactive experiments',
          'Create scientific simulations',
          'Build assessment tools',
          'Track learning progress'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: <PencilSquareIcon className="h-8 w-8" />,
    description: 'Develop communication skills in English and other languages',
    detailedDescription: 'This course is designed to help you develop communication skills in English and other languages. You will learn about grammar, vocabulary, reading, and writing.',
    thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: English Fundamentals',
        duration: '2 weeks',
        topics: [
          'Grammar Basics',
          'Vocabulary Building',
          'Reading Comprehension',
          'Writing Skills'
        ],
        resources: [
          {
            title: 'British Council Learn English',
            url: 'https://learnenglish.britishcouncil.org/',
            type: 'document',
            platform: 'British Council'
          },
          {
            title: 'Duolingo English',
            url: 'https://www.duolingo.com/course/en/es/Learn-English',
            type: 'practice',
            platform: 'Duolingo'
          }
        ],
        learningOutcomes: [
          'Understand basic English grammar',
          'Build vocabulary',
          'Read and understand English texts'
        ]
      },
      {
        title: 'Module 2: Other Languages',
        duration: '2 weeks',
        topics: [
          'Spanish Basics',
          'French Basics',
          'German Basics',
          'Conversational Practice'
        ],
        resources: [
          {
            title: 'Duolingo Spanish',
            url: 'https://www.duolingo.com/course/es/en/Learn-Spanish',
            type: 'practice',
            platform: 'Duolingo'
          },
          {
            title: 'BBC Languages',
            url: 'http://www.bbc.co.uk/languages/',
            type: 'document',
            platform: 'BBC'
          }
        ],
        learningOutcomes: [
          'Understand basic Spanish, French, or German',
          'Practice conversational skills'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Michael Wilson',
      title: 'Language Specialist',
      image: 'https://example.com/michael-wilson.jpg',
      bio: 'Michael has been teaching languages for over 10 years. He specializes in English and Spanish.',
      expertise: ['English', 'Spanish', 'Language Learning']
    },
    rating: 4.6,
    reviews: 120,
    students: 1500,
    duration: '4 weeks',
    certification: {
      included: true,
      name: 'Language Certificate',
      description: 'This certificate is awarded to students who successfully complete the Languages course.'
    },
    startDate: '2024-09-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Language Learning App',
        description: 'Develop a language learning application with interactive lessons and progress tracking.',
        technologies: ['Web Development', 'Language Learning Tools', 'Database'],
        learningOutcomes: [
          'Create interactive lessons',
          'Implement progress tracking',
          'Build assessment systems',
          'Design user-friendly interface'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Language Exchange Platform',
        description: 'Build a platform connecting language learners for practice and cultural exchange.',
        technologies: ['Web Development', 'Real-time Communication', 'User Management'],
        learningOutcomes: [
          'Implement real-time chat',
          'Create user matching system',
          'Build community features',
          'Ensure platform security'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'competitive-exams',
    title: 'Competitive Exams',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    description: 'Prepare for major competitive exams with focused modules and practice',
    detailedDescription: 'This course is designed to help you prepare for major competitive exams. You will learn about the exam structure, topics, and practice strategies.',
    thumbnail: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Quantitative Aptitude',
        duration: '2 weeks',
        topics: [
          'Number Series',
          'Percentages',
          'Time & Work',
          'Data Interpretation'
        ],
        resources: [
          {
            title: 'Khan Academy Quantitative Aptitude',
            url: 'https://www.khanacademy.org/math/cc-sixth-grade-math',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'OpenStax Math eBook',
            url: 'https://openstax.org/subjects/math',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand number series',
          'Apply percentages',
          'Solve time and work problems'
        ]
      },
      {
        title: 'Module 2: Logical Reasoning',
        duration: '2 weeks',
        topics: [
          'Puzzles',
          'Syllogisms',
          'Seating Arrangement',
          'Blood Relations'
        ],
        resources: [
          {
            title: 'Khan Academy Logic',
            url: 'https://www.khanacademy.org/test-prep/lsat/lsat-lessons/logic',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'Open Logic Project',
            url: 'https://openlogicproject.org/',
            type: 'document',
            platform: 'Open Logic Project'
          }
        ],
        learningOutcomes: [
          'Understand logical reasoning',
          'Solve puzzles and syllogisms',
          'Arrange seating'
        ]
      },
      {
        title: 'Module 3: General Awareness',
        duration: '2 weeks',
        topics: [
          'Current Affairs',
          'Basic Science',
          'Indian Polity',
          'Geography'
        ],
        resources: [
          {
            title: 'BBC News - World',
            url: 'https://www.bbc.com/news/world',
            type: 'article',
            platform: 'BBC'
          },
          {
            title: 'OpenStax Science eBook',
            url: 'https://openstax.org/subjects/science',
            type: 'document',
            platform: 'OpenStax'
          }
        ],
        learningOutcomes: [
          'Understand current affairs',
          'Know basic science',
          'Know Indian polity'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Sarah Thompson',
      title: 'Competitive Exams Specialist',
      image: 'https://example.com/sarah-thompson.jpg',
      bio: 'Sarah has been teaching competitive exams for over 10 years. She specializes in quantitative aptitude and logical reasoning.',
      expertise: ['Quantitative Aptitude', 'Logical Reasoning', 'General Awareness']
    },
    rating: 4.9,
    reviews: 200,
    students: 2000,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Competitive Exams Certificate',
      description: 'This certificate is awarded to students who successfully complete the Competitive Exams course.'
    },
    startDate: '2024-10-01',
    language: 'English',
    lastUpdated: '2023-12-01',
    projects: [
      {
        title: 'Practice Test Platform',
        description: 'Create a platform for practice tests with detailed analytics and performance tracking.',
        technologies: ['Web Development', 'Database', 'Analytics'],
        learningOutcomes: [
          'Design test questions',
          'Implement scoring system',
          'Create performance analytics',
          'Build progress tracking'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Smart Study Planner',
        description: 'Develop an AI-powered study planner that adapts to individual learning patterns.',
        technologies: ['AI/ML', 'Web Development', 'Data Analysis'],
        learningOutcomes: [
          'Implement adaptive learning',
          'Create study schedules',
          'Track learning patterns',
          'Generate performance reports'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'ai-ml-generative-ai',
    title: 'AI, Machine Learning & Generative AI',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    description: 'Build intelligent systems that learn and create — from foundational AI to cutting-edge Generative AI like ChatGPT, Gemini & Stable Diffusion. Perfect for all levels.',
    detailedDescription: 'This course takes you from the basics of AI and machine learning to advanced generative AI models like ChatGPT, Gemini, and Stable Diffusion. You will learn foundational concepts, build real-world models, and explore creative applications of AI.',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'No Experience? Start Here',
        duration: '2 weeks',
        topics: [
          'What is AI?',
          'AI in Everyday Life',
          'Python for Data Science',
          'Intro to Machine Learning'
        ],
        resources: [
          {
            title: 'AI for Everyone (Andrew Ng – Coursera)',
            url: 'https://www.coursera.org/learn/ai-for-everyone',
            type: 'video',
            platform: 'Coursera',
            duration: '7h'
          },
          {
            title: 'AI For Everyone (YouTube)',
            url: 'https://www.youtube.com/watch?v=5qfq5V8R3pc',
            type: 'video',
            platform: 'YouTube',
            duration: '1h'
          },
          {
            title: 'Machine Learning Crash Course – Simplilearn',
            url: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
            type: 'video',
            platform: 'YouTube - Simplilearn',
            duration: '10h'
          },
          {
            title: 'Python for Data Science – Programming with Mosh',
            url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
            type: 'video',
            platform: 'YouTube - Mosh',
            duration: '6h'
          }
        ],
        learningOutcomes: [
          'Understand the basics of AI and machine learning',
          'Get started with Python for data science',
          'Recognize AI applications in daily life'
        ]
      },
      {
        title: 'Start Building AI Models',
        duration: '2 weeks',
        topics: [
          'Scikit-Learn Basics',
          'Building ML Models',
          'Hands-On Projects',
          'Model Evaluation'
        ],
        resources: [
          {
            title: 'Scikit-Learn Crash Course – FreeCodeCamp',
            url: 'https://www.youtube.com/watch?v=0Lt9w-BxKFQ',
            type: 'video',
            platform: 'YouTube - FreeCodeCamp',
            duration: '2h'
          },
          {
            title: 'Machine Learning with Python',
            url: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
            type: 'video',
            platform: 'YouTube - FreeCodeCamp',
            duration: '6h'
          },
          {
            title: 'Real-World ML Projects (Krish Naik)',
            url: 'https://www.youtube.com/watch?v=5gY7p7ixY0M',
            type: 'video',
            platform: 'YouTube - Krish Naik',
            duration: '3h'
          },
          {
            title: 'Grid Search & Cross-Validation',
            url: 'https://www.youtube.com/watch?v=9K6S1o0Oq7w',
            type: 'video',
            platform: 'YouTube',
            duration: '30m'
          }
        ],
        learningOutcomes: [
          'Build and evaluate machine learning models',
          'Work on real-world ML projects',
          'Understand model tuning and validation'
        ]
      },
      {
        title: 'Advanced Level – Deep Learning & Generative AI',
        duration: '3 weeks',
        topics: [
          'Neural Networks',
          'Deep Learning',
          'NLP with Transformers',
          'Generative AI & LLMs',
          'LangChain & OpenAI'
        ],
        resources: [
          {
            title: 'Neural Networks & Deep Learning (DeepLizard)',
            url: 'https://www.youtube.com/watch?v=aircAruvnKk',
            type: 'video',
            platform: 'YouTube - DeepLizard',
            duration: '2h'
          },
          {
            title: 'Neural Network From Scratch',
            url: 'https://www.youtube.com/watch?v=w8yWXqWQYmU',
            type: 'video',
            platform: 'YouTube',
            duration: '1h'
          },
          {
            title: 'NLP with Transformers – Hugging Face',
            url: 'https://www.youtube.com/watch?v=8rXD5-xhemo',
            type: 'video',
            platform: 'YouTube - Hugging Face',
            duration: '2h'
          },
          {
            title: 'How ChatGPT Works (Two-Minute Papers)',
            url: 'https://www.youtube.com/watch?v=2Ho1k1p5b9w',
            type: 'video',
            platform: 'YouTube - Two Minute Papers',
            duration: '10m'
          },
          {
            title: 'LangChain + OpenAI Tutorial',
            url: 'https://www.youtube.com/watch?v=2xxziIWmaSA',
            type: 'video',
            platform: 'YouTube',
            duration: '1h'
          }
        ],
        learningOutcomes: [
          'Understand deep learning and neural networks',
          'Work with NLP and transformers',
          'Explore generative AI and LLMs'
        ]
      },
      {
        title: 'Bonus: Generative AI for Creativity',
        duration: '1 week',
        topics: [
          'Stable Diffusion',
          'AI Art Generation',
          'AI Image Generators',
          'AI Chatbots'
        ],
        resources: [
          {
            title: 'Stable Diffusion AI Art Generation (Matt Wolfe)',
            url: 'https://www.youtube.com/watch?v=2U0A0Gm5jYQ',
            type: 'video',
            platform: 'YouTube - Matt Wolfe',
            duration: '45m'
          },
          {
            title: 'How to Make an AI Art Generator',
            url: 'https://www.youtube.com/watch?v=U5q6u1a1a6M',
            type: 'video',
            platform: 'YouTube',
            duration: '1h'
          },
          {
            title: 'Gemini API + React.js Full Tutorial',
            url: 'https://www.youtube.com/watch?v=6FzVQbF7Q2w',
            type: 'video',
            platform: 'YouTube',
            duration: '1h'
          }
        ],
        learningOutcomes: [
          'Create AI-generated art and images',
          'Build your own AI chatbot',
          'Apply generative AI for creative projects'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Alex Kim',
      title: 'AI Course Creator',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Alex is passionate about making AI accessible to everyone. He has designed this course to help learners of all backgrounds build real AI projects.',
      expertise: ['AI', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Python']
    },
    rating: 4.9,
    reviews: 250,
    students: 3200,
    duration: '8 weeks',
    certification: {
      included: true,
      name: 'AI & Generative AI Certificate',
      description: 'Awarded to students who complete the AI, Machine Learning & Generative AI course.'
    },
    startDate: '2024-08-01',
    language: 'English',
    lastUpdated: '2024-06-01',
    projects: [
      {
        title: 'AI Chatbot Development',
        description: 'Build an intelligent chatbot using natural language processing and machine learning.',
        technologies: ['Python', 'NLP', 'Machine Learning', 'API Development'],
        learningOutcomes: [
          'Implement NLP techniques',
          'Train ML models',
          'Create API endpoints',
          'Deploy AI solutions'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Generative AI Art Platform',
        description: 'Create a platform that generates art using AI models like Stable Diffusion.',
        technologies: ['Python', 'Deep Learning', 'Web Development', 'AI Models'],
        learningOutcomes: [
          'Work with AI models',
          'Implement image generation',
          'Create user interface',
          'Deploy AI applications'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'ai-prompt-engineering',
    title: 'AI & Prompt Engineering',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    description: 'Dive into the rapidly growing world of Artificial Intelligence and learn how to craft powerful prompts that get the best responses from AI models like ChatGPT, Gemini, and Claude.',
    detailedDescription: 'Master the art of prompt engineering and learn how to effectively interact with AI models. This course covers everything from basic prompt structures to advanced techniques for getting optimal responses from various AI models.',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: AI & LLMs Fundamentals',
        duration: '2 weeks',
        topics: [
          'Introduction to AI & LLMs',
          'Understanding Model Capabilities',
          'Basic Prompt Structures',
          'Common Use Cases'
        ],
        resources: [
          {
            title: 'Prompt Engineering for Beginners',
            url: 'https://www.youtube.com/playlist?list=prompt-engineering',
            type: 'video',
            platform: 'YouTube - Learn AI',
            duration: '3h'
          },
          {
            title: 'Prompt Engineering Guide',
            url: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
            type: 'document',
            platform: 'DAIR'
          },
          {
            title: 'ChatGPT Prompt Engineering - freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - freeCodeCamp',
            duration: '2h'
          },
          {
            title: 'Learn Prompting',
            url: 'https://learnprompting.org/',
            type: 'document',
            platform: 'Learn Prompting'
          }
        ],
        learningOutcomes: [
          'Understand AI and LLM basics',
          'Learn fundamental prompt structures',
          'Identify common use cases'
        ]
      },
      {
        title: 'Module 2: Advanced Prompt Engineering',
        duration: '2 weeks',
        topics: [
          'Prompt Tuning Techniques',
          'Context Management',
          'Output Control',
          'Error Handling'
        ],
        resources: [
          {
            title: 'FlowGPT Tutorial',
            url: 'https://flowgpt.com/tutorials',
            type: 'practice',
            platform: 'FlowGPT'
          },
          {
            title: 'PromptHero Examples',
            url: 'https://prompthero.com/examples',
            type: 'practice',
            platform: 'PromptHero'
          },
          {
            title: 'Advanced Prompt Engineering - Matt Wolfe',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - Matt Wolfe',
            duration: '1h'
          },
          {
            title: 'Prompt Engineering Patterns',
            url: 'https://github.com/promptslab/Promptify',
            type: 'practice',
            platform: 'GitHub'
          }
        ],
        learningOutcomes: [
          'Master advanced prompt techniques',
          'Control AI model outputs',
          'Handle common errors'
        ]
      },
      {
        title: 'Module 3: Real-world Applications',
        duration: '2 weeks',
        topics: [
          'Content Creation',
          'Code Generation',
          'Data Analysis',
          'Business Applications'
        ],
        resources: [
          {
            title: 'The Art of Prompt Engineering',
            url: 'https://github.com/prompt-engineering-book',
            type: 'document',
            platform: 'GitHub'
          },
          {
            title: 'Awesome Prompt Engineering',
            url: 'https://github.com/awesome-prompt-engineering',
            type: 'practice',
            platform: 'GitHub'
          }
        ],
        learningOutcomes: [
          'Apply prompts in real scenarios',
          'Create effective content',
          'Generate and analyze code'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Alex Chen',
      title: 'AI & Prompt Engineering Expert',
      image: 'https://example.com/alex-chen.jpg',
      bio: 'Alex has been working with AI models and prompt engineering for over 5 years. He specializes in optimizing AI interactions and creating effective prompts.',
      expertise: ['AI', 'Prompt Engineering', 'LLMs']
    },
    rating: 4.9,
    reviews: 150,
    students: 2000,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'AI & Prompt Engineering Certificate',
      description: 'This certificate is awarded to students who successfully complete the AI & Prompt Engineering course.'
    },
    startDate: '2024-04-01',
    language: 'English',
    lastUpdated: '2024-02-01',
    projects: [
      {
        title: 'Prompt Engineering Toolkit',
        description: 'Develop a toolkit for creating and testing effective prompts for various AI models.',
        technologies: ['Python', 'AI APIs', 'Web Development'],
        learningOutcomes: [
          'Design effective prompts',
          'Test prompt variations',
          'Analyze AI responses',
          'Create prompt templates'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'AI Content Generation Platform',
        description: 'Build a platform that uses AI to generate various types of content based on user requirements.',
        technologies: ['AI Models', 'Web Development', 'Content Management'],
        learningOutcomes: [
          'Implement AI content generation',
          'Create content templates',
          'Build quality control systems',
          'Deploy AI solutions'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'stock-market-trading',
    title: 'Stock Market & Trading',
    icon: <ChartBarIcon className="h-8 w-8" />,
    description: 'Master the foundational concepts of stock markets, technical & fundamental analysis, and trading psychology to make informed investing decisions.',
    detailedDescription: 'Learn everything you need to know about stock markets, from basic concepts to advanced trading strategies. This course covers technical analysis, fundamental analysis, and trading psychology.',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Market Basics',
        duration: '2 weeks',
        topics: [
          'Stock Market Fundamentals',
          'Market Terminology',
          'Risk Management',
          'Trading Psychology'
        ],
        resources: [
          {
            title: 'Stock Market for Beginners',
            url: 'https://www.youtube.com/playlist?list=neeraj-joshi',
            type: 'video',
            platform: 'YouTube - Neeraj Joshi',
            duration: '4h'
          },
          {
            title: 'The Intelligent Investor',
            url: 'https://www.investopedia.com/the-intelligent-investor',
            type: 'document',
            platform: 'Investopedia'
          },
          {
            title: 'Stock Market Basics - CA Rachana',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - CA Rachana',
            duration: '2h'
          },
          {
            title: 'Zerodha Varsity',
            url: 'https://zerodha.com/varsity/',
            type: 'document',
            platform: 'Zerodha'
          }
        ],
        learningOutcomes: [
          'Understand market basics',
          'Learn essential terminology',
          'Master risk management'
        ]
      },
      {
        title: 'Module 2: Technical Analysis',
        duration: '3 weeks',
        topics: [
          'Chart Patterns',
          'Technical Indicators',
          'TradingView Usage',
          'Screener.in Analysis'
        ],
        resources: [
          {
            title: 'Trading for a Living',
            url: 'https://www.investopedia.com/trading-for-a-living',
            type: 'document',
            platform: 'Investopedia'
          },
          {
            title: 'TradingView Tutorial',
            url: 'https://www.tradingview.com/learn',
            type: 'practice',
            platform: 'TradingView'
          }
        ],
        learningOutcomes: [
          'Analyze chart patterns',
          'Use technical indicators',
          'Master trading platforms'
        ]
      },
      {
        title: 'Module 3: Advanced Strategies',
        duration: '3 weeks',
        topics: [
          'Quantitative Trading',
          'Data Analysis',
          'Portfolio Management',
          'Risk Assessment'
        ],
        resources: [
          {
            title: 'QuantInsti Resources',
            url: 'https://www.quantinsti.com/resources',
            type: 'practice',
            platform: 'QuantInsti'
          },
          {
            title: 'GitHub Stock Analysis',
            url: 'https://github.com/topics/stock-analysis',
            type: 'practice',
            platform: 'GitHub'
          }
        ],
        learningOutcomes: [
          'Implement trading strategies',
          'Analyze market data',
          'Manage investment portfolios'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Rajesh Kumar',
      title: 'Stock Market Expert',
      image: 'https://example.com/rajesh-kumar.jpg',
      bio: 'Rajesh has over 15 years of experience in stock market trading and analysis. He specializes in technical analysis and quantitative trading strategies.',
      expertise: ['Technical Analysis', 'Trading Strategies', 'Risk Management']
    },
    rating: 4.8,
    reviews: 200,
    students: 2500,
    duration: '8 weeks',
    certification: {
      included: true,
      name: 'Stock Market & Trading Certificate',
      description: 'This certificate is awarded to students who successfully complete the Stock Market & Trading course.'
    },
    startDate: '2024-05-01',
    language: 'English',
    lastUpdated: '2024-02-01',
    projects: [
      {
        title: 'Trading Strategy Backtester',
        description: 'Develop a system to backtest trading strategies using historical market data.',
        technologies: ['Python', 'Data Analysis', 'Financial APIs'],
        learningOutcomes: [
          'Implement trading strategies',
          'Analyze historical data',
          'Calculate performance metrics',
          'Generate trading reports'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Real-time Market Analysis Platform',
        description: 'Create a platform for real-time market analysis and trading signals.',
        technologies: ['Real-time Data', 'Technical Analysis', 'Web Development'],
        learningOutcomes: [
          'Process real-time data',
          'Implement technical indicators',
          'Create trading signals',
          'Build user dashboard'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance & Wealth Building',
    icon: <BanknotesIcon className="h-8 w-8" />,
    description: 'Learn the skills that schools forgot to teach! Build your personal finance muscle and develop lifelong wealth habits.',
    detailedDescription: 'Master essential personal finance concepts including budgeting, investing, tax planning, and wealth creation. This course provides practical knowledge for financial success.',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Financial Fundamentals',
        duration: '1 week',
        topics: [
          'Budgeting Basics',
          'Saving Strategies',
          'Emergency Funds',
          'Financial Goals'
        ],
        resources: [
          {
            title: 'Personal Finance 101',
            url: 'https://www.youtube.com/playlist?list=ca-rachana',
            type: 'video',
            platform: 'YouTube - CA Rachana Phadke',
            duration: '3h'
          },
          {
            title: 'NPTEL Financial Literacy',
            url: 'https://nptel.ac.in/courses/finance',
            type: 'document',
            platform: 'NPTEL'
          },
          {
            title: 'Personal Finance - Khan Academy',
            url: 'https://www.khanacademy.org/college-careers-more/personal-finance',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'Money Management - CA Rachana',
            url: 'https://www.youtube.com/watch?v=2VSNO6Lp33M',
            type: 'video',
            platform: 'YouTube - CA Rachana',
            duration: '1h'
          }
        ],
        learningOutcomes: [
          'Create effective budgets',
          'Build emergency funds',
          'Set financial goals'
        ]
      },
      {
        title: 'Module 2: Investment Basics',
        duration: '1 week',
        topics: [
          'Mutual Funds',
          'SIP Investment',
          'Stock Market Basics',
          'Investment Strategies'
        ],
        resources: [
          {
            title: 'Khan Academy Personal Finance',
            url: 'https://www.khanacademy.org/finance',
            type: 'video',
            platform: 'Khan Academy'
          },
          {
            title: 'Rich Dad Poor Dad',
            url: 'https://www.richdad.com/book',
            type: 'document',
            platform: 'Rich Dad'
          }
        ],
        learningOutcomes: [
          'Understand investment options',
          'Start SIP investments',
          'Create investment strategies'
        ]
      },
      {
        title: 'Module 3: Advanced Finance',
        duration: '2 weeks',
        topics: [
          'Tax Planning',
          'Credit Score Management',
          'Wealth Creation',
          'Retirement Planning'
        ],
        resources: [
          {
            title: 'The Psychology of Money',
            url: 'https://www.morganhousel.com/book',
            type: 'document',
            platform: 'Morgan Housel'
          },
          {
            title: 'Zerodha Varsity',
            url: 'https://zerodha.com/varsity',
            type: 'document',
            platform: 'Zerodha'
          }
        ],
        learningOutcomes: [
          'Optimize tax planning',
          'Manage credit scores',
          'Plan for retirement'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Priya Sharma',
      title: 'Financial Advisor',
      image: 'https://example.com/priya-sharma.jpg',
      bio: 'Priya is a certified financial advisor with over 10 years of experience in personal finance and wealth management.',
      expertise: ['Personal Finance', 'Investment Planning', 'Tax Planning']
    },
    rating: 4.9,
    reviews: 180,
    students: 2200,
    duration: '4 weeks',
    certification: {
      included: true,
      name: 'Personal Finance Certificate',
      description: 'This certificate is awarded to students who successfully complete the Personal Finance & Wealth Building course.'
    },
    startDate: '2024-06-01',
    language: 'English',
    lastUpdated: '2024-02-01',
    projects: [
      {
        title: 'Personal Finance Tracker',
        description: 'Build an application to track personal finances, investments, and financial goals.',
        technologies: ['Web Development', 'Database', 'Financial APIs'],
        learningOutcomes: [
          'Track expenses and income',
          'Monitor investments',
          'Set financial goals',
          'Generate financial reports'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Investment Portfolio Manager',
        description: 'Create a comprehensive investment portfolio management system.',
        technologies: ['Financial Analysis', 'Web Development', 'Data Visualization'],
        learningOutcomes: [
          'Analyze investment options',
          'Track portfolio performance',
          'Implement risk assessment',
          'Generate investment reports'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & Startup Fundamentals',
    icon: <BuildingOfficeIcon className="h-8 w-8" />,
    description: 'Build your business from the ground up. Learn everything from ideation to growth hacking techniques.',
    detailedDescription: 'Master the essentials of entrepreneurship and startup development. This course covers ideation, market research, product development, and growth strategies.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Startup Basics',
        duration: '2 weeks',
        topics: [
          'Idea Validation',
          'Market Research',
          'Business Model Canvas',
          'MVP Development'
        ],
        resources: [
          {
            title: 'Startup India Learning Program',
            url: 'https://www.youtube.com/playlist?list=startup-india',
            type: 'video',
            platform: 'YouTube - Startup India',
            duration: '4h'
          },
          {
            title: 'Zero to One',
            url: 'https://www.peterthiel.com/book',
            type: 'document',
            platform: 'Peter Thiel'
          },
          {
            title: 'Startup School - Y Combinator',
            url: 'https://www.startupschool.org/',
            type: 'video',
            platform: 'Y Combinator'
          },
          {
            title: 'How to Start a Startup - Stanford',
            url: 'https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1',
            type: 'video',
            platform: 'YouTube - Stanford'
          }
        ],
        learningOutcomes: [
          'Validate business ideas',
          'Conduct market research',
          'Create business models'
        ]
      },
      {
        title: 'Module 2: Product Development',
        duration: '2 weeks',
        topics: [
          'Product Design',
          'User Research',
          'Prototyping',
          'Testing & Iteration'
        ],
        resources: [
          {
            title: 'The Lean Startup',
            url: 'https://www.leanstartup.com/book',
            type: 'document',
            platform: 'Eric Ries'
          },
          {
            title: 'Y Combinator Library',
            url: 'https://www.ycombinator.com/library',
            type: 'document',
            platform: 'Y Combinator'
          }
        ],
        learningOutcomes: [
          'Design products',
          'Conduct user research',
          'Create and test prototypes'
        ]
      },
      {
        title: 'Module 3: Growth & Marketing',
        duration: '2 weeks',
        topics: [
          'Growth Hacking',
          'Digital Marketing',
          'Brand Building',
          'Customer Acquisition'
        ],
        resources: [
          {
            title: 'First Round Review',
            url: 'https://firstround.com/review',
            type: 'document',
            platform: 'First Round'
          },
          {
            title: 'Startup MVP Templates',
            url: 'https://www.notion.so/templates',
            type: 'practice',
            platform: 'Notion'
          }
        ],
        learningOutcomes: [
          'Implement growth strategies',
          'Build brand presence',
          'Acquire customers'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Vikram Singh',
      title: 'Startup Mentor',
      image: 'https://example.com/vikram-singh.jpg',
      bio: 'Vikram has founded and mentored multiple successful startups. He specializes in product development and growth strategies.',
      expertise: ['Startup Development', 'Product Management', 'Growth Hacking']
    },
    rating: 4.8,
    reviews: 160,
    students: 1800,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Entrepreneurship Certificate',
      description: 'This certificate is awarded to students who successfully complete the Entrepreneurship & Startup Fundamentals course.'
    },
    startDate: '2024-07-01',
    language: 'English',
    lastUpdated: '2024-02-01',
    projects: [
      {
        title: 'Business Plan Development',
        description: 'Create a comprehensive business plan for a startup idea.',
        technologies: ['Business Planning', 'Market Research', 'Financial Modeling'],
        learningOutcomes: [
          'Conduct market research',
          'Create financial projections',
          'Develop marketing strategy',
          'Write business plan'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Startup Launch Platform',
        description: 'Develop a platform to help entrepreneurs launch and manage their startups.',
        technologies: ['Web Development', 'Project Management', 'Business Tools'],
        learningOutcomes: [
          'Create startup tools',
          'Implement project management',
          'Build resource library',
          'Develop community features'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    icon: <GlobeAltIcon className="h-8 w-8" />,
    description: 'Master cloud computing fundamentals and deployment on major platforms',
    detailedDescription: 'Understand the fundamentals of cloud computing and learn how to deploy scalable, secure, and high-performing applications on platforms like AWS, Azure, and Google Cloud. Perfect for beginners aiming for tech or product careers.',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Cloud Computing Fundamentals',
        duration: '1 week',
        topics: [
          'Introduction to Cloud Computing',
          'IaaS, PaaS, SaaS Models',
          'Cloud Service Providers Overview',
          'Cloud Architecture Basics'
        ],
        resources: [
          {
            title: 'Cloud Computing Full Course',
            url: 'https://www.youtube.com/watch?v=2LaAJq1lB1Q',
            type: 'video',
            platform: 'YouTube - Simplilearn',
            duration: '4h 30m'
          },
          {
            title: 'Google Cloud Fundamentals',
            url: 'https://www.coursera.org/learn/gcp-fundamentals',
            type: 'document',
            platform: 'Coursera'
          },
          {
            title: 'AWS Cloud Foundations',
            url: 'https://aws.amazon.com/education/awseducate/',
            type: 'practice',
            platform: 'AWS Educate'
          }
        ],
        learningOutcomes: [
          'Understand cloud computing concepts and models',
          'Compare different cloud service providers',
          'Identify appropriate cloud solutions for different scenarios'
        ]
      },
      {
        title: 'Module 2: AWS Fundamentals',
        duration: '2 weeks',
        topics: [
          'AWS Core Services',
          'EC2 and S3 Basics',
          'AWS Security Fundamentals',
          'AWS Networking Basics'
        ],
        resources: [
          {
            title: 'AWS Cloud Practitioner',
            url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
            type: 'document',
            platform: 'AWS'
          },
          {
            title: 'AWS Free Tier',
            url: 'https://aws.amazon.com/free/',
            type: 'practice',
            platform: 'AWS'
          }
        ],
        learningOutcomes: [
          'Deploy and manage EC2 instances',
          'Use S3 for storage solutions',
          'Implement basic AWS security measures'
        ]
      },
      {
        title: 'Module 3: Azure & GCP Basics',
        duration: '2 weeks',
        topics: [
          'Azure Core Services',
          'Google Cloud Platform Basics',
          'Multi-cloud Strategies',
          'Cloud Migration Basics'
        ],
        resources: [
          {
            title: 'Azure Fundamentals',
            url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/',
            type: 'document',
            platform: 'Microsoft Learn'
          },
          {
            title: 'GCP Fundamentals',
            url: 'https://cloud.google.com/certification/cloud-digital-leader',
            type: 'document',
            platform: 'Google Cloud'
          }
        ],
        learningOutcomes: [
          'Understand Azure and GCP core services',
          'Compare different cloud platforms',
          'Plan basic cloud migrations'
        ]
      },
      {
        title: 'Module 4: DevOps & CI/CD',
        duration: '1 week',
        topics: [
          'Introduction to DevOps',
          'CI/CD Pipeline Basics',
          'Container Basics',
          'Infrastructure as Code'
        ],
        resources: [
          {
            title: 'DevOps Roadmap',
            url: 'https://roadmap.sh/devops',
            type: 'document',
            platform: 'Roadmap.sh'
          },
          {
            title: 'Docker Basics',
            url: 'https://www.docker.com/101-tutorial',
            type: 'practice',
            platform: 'Docker'
          }
        ],
        learningOutcomes: [
          'Understand DevOps principles',
          'Set up basic CI/CD pipelines',
          'Work with containers and IaC'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Sarah Chen',
      title: 'Cloud Solutions Architect',
      image: 'https://example.com/sarah-chen.jpg',
      bio: 'Sarah has over 8 years of experience in cloud architecture and has worked with major cloud providers. She specializes in cloud migration and DevOps practices.',
      expertise: ['AWS', 'Azure', 'GCP', 'DevOps', 'Cloud Architecture', 'CI/CD']
    },
    rating: 4.7,
    reviews: 85,
    students: 1200,
    duration: '6 weeks',
    certification: {
      included: true,
      name: 'Cloud Computing Fundamentals Certificate',
      description: 'This certificate validates your understanding of cloud computing fundamentals and basic deployment skills.'
    },
    startDate: '2024-02-01',
    language: 'English',
    lastUpdated: '2023-12-15',
    projects: [
      {
        title: 'Cloud Infrastructure Setup',
        description: 'Set up and configure a complete cloud infrastructure using AWS, Azure, or GCP.',
        technologies: ['AWS/Azure/GCP', 'Infrastructure as Code', 'DevOps'],
        learningOutcomes: [
          'Configure cloud services',
          'Implement security measures',
          'Set up monitoring',
          'Deploy applications'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Multi-Cloud Application',
        description: 'Develop and deploy a scalable application across multiple cloud platforms.',
        technologies: ['Multiple Cloud Platforms', 'Containerization', 'CI/CD'],
        learningOutcomes: [
          'Work with multiple clouds',
          'Implement containerization',
          'Set up CI/CD pipelines',
          'Ensure high availability'
        ],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'product-management',
    title: 'Product Management',
    icon: <BuildingOfficeIcon className="h-8 w-8" />,
    description: 'Master product management from ideation to launch',
    detailedDescription: 'Master the art of building products people love. Learn key frameworks, market research, UX thinking, and how to work with engineering and design teams to bring ideas to life. Great for aspiring founders, managers, and team leaders.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    modules: [
      {
        title: 'Module 1: Product Management Fundamentals',
        duration: '1 week',
        topics: [
          'Product Management Basics',
          'Product Lifecycle',
          'Market Research Fundamentals',
          'User Research Methods'
        ],
        resources: [
          {
            title: 'Google Product Management Series',
            url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqJj8YJQ3Yl_8W7KYeqXJ5Hq',
            type: 'video',
            platform: 'YouTube - Google'
          },
          {
            title: 'Product School Free Course',
            url: 'https://productschool.com/free-product-management-course/',
            type: 'document',
            platform: 'Product School'
          }
        ],
        learningOutcomes: [
          'Understand product management fundamentals',
          'Conduct basic market research',
          'Apply user research methods'
        ]
      },
      {
        title: 'Module 2: Product Strategy & Roadmapping',
        duration: '1 week',
        topics: [
          'Product Strategy Development',
          'Roadmap Creation',
          'OKR Framework',
          'Prioritization Techniques'
        ],
        resources: [
          {
            title: 'Notion Product Roadmap Template',
            url: 'https://www.notion.so/templates/product-roadmap',
            type: 'document',
            platform: 'Notion'
          },
          {
            title: 'Reforge Frameworks',
            url: 'https://www.reforge.com/frameworks',
            type: 'document',
            platform: 'Reforge'
          }
        ],
        learningOutcomes: [
          'Create product strategies',
          'Develop product roadmaps',
          'Set and track OKRs'
        ]
      },
      {
        title: 'Module 3: UX & Design Thinking',
        duration: '1 week',
        topics: [
          'UX Fundamentals',
          'Design Thinking Process',
          'User Journey Mapping',
          'Prototyping Basics'
        ],
        resources: [
          {
            title: 'Figma for Product Managers',
            url: 'https://www.figma.com/education/',
            type: 'practice',
            platform: 'Figma'
          },
          {
            title: 'UX Design Basics',
            url: 'https://www.interaction-design.org/literature/topics/ux-design',
            type: 'document',
            platform: 'Interaction Design Foundation'
          }
        ],
        learningOutcomes: [
          'Apply design thinking principles',
          'Create user journey maps',
          'Build basic prototypes'
        ]
      },
      {
        title: 'Module 4: Go-to-Market & Analytics',
        duration: '2 weeks',
        topics: [
          'Go-to-Market Strategy',
          'Product Analytics',
          'Growth Metrics',
          'A/B Testing Basics'
        ],
        resources: [
          {
            title: 'Product Analytics Guide',
            url: 'https://amplitude.com/blog/product-analytics',
            type: 'document',
            platform: 'Amplitude'
          },
          {
            title: 'Growth Metrics Framework',
            url: 'https://www.reforge.com/growth-metrics',
            type: 'document',
            platform: 'Reforge'
          }
        ],
        learningOutcomes: [
          'Develop go-to-market strategies',
          'Track and analyze product metrics',
          'Implement basic A/B tests'
        ]
      }
    ],
    prerequisites: [],
    instructor: {
      name: 'Michael Rodriguez',
      title: 'Senior Product Manager',
      image: 'https://example.com/michael-rodriguez.jpg',
      bio: 'Michael has 10+ years of experience in product management, having worked with both startups and enterprise companies. He specializes in product strategy and go-to-market planning.',
      expertise: ['Product Strategy', 'UX Design', 'Market Research', 'Go-to-Market', 'Product Analytics']
    },
    rating: 4.8,
    reviews: 95,
    students: 1800,
    duration: '5 weeks',
    certification: {
      included: true,
      name: 'Product Management Professional Certificate',
      description: 'This certificate demonstrates your proficiency in product management fundamentals and practical skills.'
    },
    startDate: '2024-02-15',
    language: 'English',
    lastUpdated: '2023-12-20',
    projects: [
      {
        title: 'Product Strategy Development',
        description: 'Create a comprehensive product strategy and roadmap for a new product.',
        technologies: ['Product Management Tools', 'Market Research', 'Analytics'],
        learningOutcomes: [
          'Conduct market research',
          'Create product roadmap',
          'Define product metrics',
          'Develop go-to-market strategy'
        ],
        difficulty: 'Intermediate'
      },
      {
        title: 'Product Analytics Platform',
        description: 'Build a platform for tracking and analyzing product metrics and user behavior.',
        technologies: ['Analytics', 'Data Visualization', 'Web Development'],
        learningOutcomes: [
          'Implement analytics tracking',
          'Create data visualizations',
          'Build reporting systems',
          'Analyze user behavior'
        ],
        difficulty: 'Advanced'
      }
    ]
  }
];

const defaultCourseImage = '/default-course-thumbnail.png'; // Place a default image in your public folder

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [pendingCourseId, setPendingCourseId] = useState<string | null>(null);

  const handleCourseClick = (course: Course) => {
    if (!user) {
      setPendingCourseId(course.id);
      setLoginModalOpen(true);
    } else {
      navigate(`/course-details/${course.id}`);
    }
  };

  // When user logs in, redirect to the intended course
  React.useEffect(() => {
    if (user && pendingCourseId) {
      navigate(`/course-details/${pendingCourseId}`);
      setPendingCourseId(null);
      setLoginModalOpen(false);
    }
  }, [user, pendingCourseId, navigate]);

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

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Courses</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our expertly curated courses to boost your skills and career.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-0 md:p-0 lg:p-0">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#232c43]/80 rounded-2xl overflow-hidden shadow-lg cursor-pointer p-6 mb-6"
              onClick={() => handleCourseClick(course)}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#1a2133] flex items-center justify-center">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultCourseImage;
                  }}
                />
              </div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/10 text-blue-400 shadow mr-3">
                  {course.icon}
                </span>
                <h2 className="text-2xl font-bold text-white">{course.title}</h2>
              </div>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="flex items-center mb-2">
                <StarRating rating={course.rating} />
                <span className="ml-2 text-sm text-gray-400">
                  ({course.reviews} reviews)
                </span>
              </div>
              <span className="text-sm text-gray-400 block mb-2">
                {course.students} students
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {course.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
};

export type { Resource, Module, Instructor, Course };
export { courses };
export default Courses; 