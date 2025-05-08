// @ts-ignore
import { saveAs } from 'file-saver';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  ClockIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CalendarIcon,
  UserIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface StudentStatus {
  class: '11' | '12' | 'dropper';
  startDate: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'video' | 'notes' | 'practice' | 'document';
  platform: string;
  description?: string;
  duration?: string;
}

interface Topic {
  name: string;
  importance: 'High' | 'Medium' | 'Low';
  resources: Resource[];
  estimatedTime: string;
  prerequisites?: string[];
  dpp: string[];
  pyq: string;
}

interface Subject {
  name: string;
  topics: Topic[];
  weightage: string;
  totalTopics: number;
  completedTopics: number;
}

interface ExamPhase {
  title: string;
  duration: string;
  description: string;
  subjects: Subject[];
  resources: Resource[];
  milestones: {
    title: string;
    date: string;
    description: string;
  }[];
}

interface CompetitiveExam {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  eligibility: string;
  examDate: string;
  preparationTime: string;
  phases: ExamPhase[];
  recommendedBooks: Resource[];
  previousYearPapers: Resource[];
  mockTests: Resource[];
  studyTips: string[];
  studyPlan?: { day: string; subject: string; lesson: string; dpp: string[]; pyq: string }[];
}

const competitiveExams: CompetitiveExam[] = [
  {
    id: 'jee-main-advanced',
    title: 'JEE (Main + Advanced)',
    icon: <CalculatorIcon className="h-8 w-8" />,
    description: 'Joint Entrance Examination for admission to premier engineering institutions like IITs and NITs',
    eligibility: 'Class 12 pass with PCM',
    examDate: 'Multiple sessions (Main) & June (Advanced)',
    preparationTime: '2 years recommended',
    phases: [
      {
        title: 'Foundation Phase (Class 11)',
        duration: '12 months',
        description: 'Build strong fundamentals in PCM',
        subjects: [
          {
            name: 'Physics',
            weightage: '33%',
            totalTopics: 20,
            completedTopics: 0,
            topics: [
              {
                name: 'Mechanics',
                importance: 'High',
                estimatedTime: '40 hours',
                prerequisites: ['Basic Mathematics', 'Vectors'],
                resources: [
                  {
                    title: 'HC Verma Physics Part 1',
                    url: 'https://www.youtube.com/playlist?list=PLbu_fGT0MPsvJkPTpQr1sGj0Q_9zrKbXS',
                    type: 'video',
                    platform: 'YouTube - Physics Galaxy',
                    duration: '30 hours'
                  },
                  {
                    title: 'Mechanics Notes',
                    url: 'https://drive.google.com/file/physics-notes',
                    type: 'notes',
                    platform: 'Physics Galaxy Notes'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Waves & Thermodynamics',
                importance: 'High',
                estimatedTime: '35 hours',
                prerequisites: ['Basic Mechanics', 'Oscillations'],
                resources: [
                  {
                    title: 'Waves Complete Course',
                    url: 'https://www.youtube.com/playlist?list=waves',
                    type: 'video',
                    platform: 'YouTube - Unacademy JEE',
                    duration: '25 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          },
          {
            name: 'Chemistry',
            weightage: '33%',
            totalTopics: 15,
            completedTopics: 0,
            topics: [
              {
                name: 'Physical Chemistry',
                importance: 'High',
                estimatedTime: '45 hours',
                prerequisites: ['Basic Mathematics', 'Atomic Structure'],
                resources: [
                  {
                    title: 'N Awasthi Physical Chemistry',
                    url: 'https://www.youtube.com/playlist?list=physical-chem',
                    type: 'video',
                    platform: 'YouTube - Vedantu JEE',
                    duration: '35 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          },
          {
            name: 'Mathematics',
            weightage: '34%',
            totalTopics: 25,
            completedTopics: 0,
            topics: [
              {
                name: 'Calculus',
                importance: 'High',
                estimatedTime: '50 hours',
                prerequisites: ['Functions', 'Trigonometry'],
                resources: [
                  {
                    title: 'Cengage Mathematics',
                    url: 'https://www.youtube.com/playlist?list=calculus',
                    type: 'video',
                    platform: 'YouTube - MathonGo',
                    duration: '40 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'Complete JEE Main Pattern Analysis',
            url: 'https://www.youtube.com/watch?v=pattern',
            type: 'video',
            platform: 'YouTube - Unacademy JEE',
            duration: '2 hours'
          }
        ],
        milestones: [
          {
            title: 'Basic Concepts Mastery',
            date: '3 months from start',
            description: 'Complete all basic concepts and start problem-solving'
          },
          {
            title: 'First Mock Test',
            date: '6 months from start',
            description: 'Take first full-length mock test to assess progress'
          }
        ]
      },
      {
        title: 'Advanced Preparation (Class 12)',
        duration: '12 months',
        description: 'Focus on advanced concepts and problem-solving',
        subjects: [
          {
            name: 'Physics',
            weightage: '33%',
            totalTopics: 15,
            completedTopics: 0,
            topics: [
              {
                name: 'Modern Physics',
                importance: 'High',
                estimatedTime: '30 hours',
                prerequisites: ['Basic Physics', 'Electromagnetism'],
                resources: [
                  {
                    title: 'Advanced Physics',
                    url: 'https://www.youtube.com/playlist?list=advanced-physics',
                    type: 'video',
                    platform: 'YouTube - Physics Galaxy',
                    duration: '25 hours'
                  }
                ],
                dpp: [
                  'Photoelectric effect problems',
                  'Nuclear fission vs fusion',
                  'Dual nature of matter MCQs'
                ],
                pyq: 'JEE 2022: Calculate the energy of a photon with wavelength 500nm.'
              },
              {
                name: 'Electromagnetism',
                importance: 'High',
                estimatedTime: '28 hours',
                prerequisites: ['Basic Physics'],
                resources: [
                  {
                    title: 'Electromagnetism Crash Course',
                    url: 'https://www.youtube.com/playlist?list=em-jee',
                    type: 'video',
                    platform: 'YouTube - Unacademy JEE',
                    duration: '20 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Optics',
                importance: 'Medium',
                estimatedTime: '20 hours',
                prerequisites: ['Waves'],
                resources: [
                  {
                    title: 'Optics for JEE',
                    url: 'https://www.youtube.com/playlist?list=optics',
                    type: 'video',
                    platform: 'YouTube - Physics Wallah',
                    duration: '15 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Thermodynamics',
                importance: 'Medium',
                estimatedTime: '18 hours',
                prerequisites: ['Basic Physics'],
                resources: [
                  {
                    title: 'Thermodynamics JEE',
                    url: 'https://www.youtube.com/playlist?list=thermo',
                    type: 'video',
                    platform: 'YouTube - Vedantu JEE',
                    duration: '12 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Waves',
                importance: 'Low',
                estimatedTime: '10 hours',
                prerequisites: ['Oscillations'],
                resources: [
                  {
                    title: 'Waves for JEE',
                    url: 'https://www.youtube.com/playlist?list=waves',
                    type: 'video',
                    platform: 'YouTube - Unacademy JEE',
                    duration: '8 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          },
          {
            name: 'Chemistry',
            weightage: '33%',
            totalTopics: 15,
            completedTopics: 0,
            topics: [
              {
                name: 'Organic Chemistry',
                importance: 'High',
                estimatedTime: '32 hours',
                prerequisites: ['Basic Chemistry'],
                resources: [
                  {
                    title: 'Organic Chemistry Masterclass',
                    url: 'https://www.youtube.com/playlist?list=organic',
                    type: 'video',
                    platform: 'YouTube - Vedantu JEE',
                    duration: '25 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Inorganic Chemistry',
                importance: 'Medium',
                estimatedTime: '20 hours',
                prerequisites: ['Basic Chemistry'],
                resources: [
                  {
                    title: 'Inorganic Chemistry JEE',
                    url: 'https://www.youtube.com/playlist?list=inorganic',
                    type: 'video',
                    platform: 'YouTube - Unacademy JEE',
                    duration: '15 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Physical Chemistry',
                importance: 'High',
                estimatedTime: '28 hours',
                prerequisites: ['Basic Chemistry'],
                resources: [
                  {
                    title: 'Physical Chemistry JEE',
                    url: 'https://www.youtube.com/playlist?list=physical',
                    type: 'video',
                    platform: 'YouTube - Physics Wallah',
                    duration: '20 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Chemical Kinetics',
                importance: 'Low',
                estimatedTime: '10 hours',
                prerequisites: ['Physical Chemistry'],
                resources: [
                  {
                    title: 'Chemical Kinetics',
                    url: 'https://www.youtube.com/playlist?list=kinetics',
                    type: 'video',
                    platform: 'YouTube - Vedantu JEE',
                    duration: '8 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          },
          {
            name: 'Mathematics',
            weightage: '34%',
            totalTopics: 20,
            completedTopics: 0,
            topics: [
              {
                name: 'Calculus',
                importance: 'High',
                estimatedTime: '30 hours',
                prerequisites: ['Functions', 'Trigonometry'],
                resources: [
                  {
                    title: 'Cengage Mathematics',
                    url: 'https://www.youtube.com/playlist?list=calculus',
                    type: 'video',
                    platform: 'YouTube - MathonGo',
                    duration: '25 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Algebra',
                importance: 'High',
                estimatedTime: '28 hours',
                prerequisites: ['Basic Mathematics'],
                resources: [
                  {
                    title: 'Algebra for JEE',
                    url: 'https://www.youtube.com/playlist?list=algebra',
                    type: 'video',
                    platform: 'YouTube - Unacademy JEE',
                    duration: '20 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Coordinate Geometry',
                importance: 'Medium',
                estimatedTime: '18 hours',
                prerequisites: ['Algebra'],
                resources: [
                  {
                    title: 'Coordinate Geometry',
                    url: 'https://www.youtube.com/playlist?list=coordinate',
                    type: 'video',
                    platform: 'YouTube - Vedantu JEE',
                    duration: '15 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              },
              {
                name: 'Probability',
                importance: 'Low',
                estimatedTime: '10 hours',
                prerequisites: ['Basic Mathematics'],
                resources: [
                  {
                    title: 'Probability for JEE',
                    url: 'https://www.youtube.com/playlist?list=probability',
                    type: 'video',
                    platform: 'YouTube - MathonGo',
                    duration: '8 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'Previous Year Papers Analysis',
            url: 'https://www.youtube.com/watch?v=analysis',
            type: 'video',
            platform: 'YouTube - Unacademy JEE',
            duration: '3 hours'
          }
        ],
        milestones: [
          {
            title: 'Advanced Concepts Completion',
            date: '6 months from start',
            description: 'Complete all advanced topics and start revision'
          },
          {
            title: 'Mock Test Series',
            date: '3 months before exam',
            description: 'Start full-length mock test series'
          }
        ]
      }
    ],
    recommendedBooks: [
      {
        title: 'Concepts of Physics - HC Verma',
        url: 'https://amazon.com/hc-verma',
        type: 'document',
        platform: 'Amazon'
      },
      {
        title: 'Problems in Calculus - I.A. Maron',
        url: 'https://amazon.com/calculus-maron',
        type: 'document',
        platform: 'Amazon'
      }
    ],
    previousYearPapers: [
      {
        title: 'JEE Main 2023 Papers',
        url: 'https://jeemain.nic.in/papers',
        type: 'document',
        platform: 'NTA Official'
      }
    ],
    mockTests: [
      {
        title: 'JEE Main Mock Test Series',
        url: 'https://unacademy.com/mock-tests',
        type: 'practice',
        platform: 'Unacademy'
      }
    ],
    studyTips: [
      'Focus on understanding concepts rather than memorizing formulas',
      'Practice at least 50 problems daily',
      'Maintain a formula notebook for quick revision',
      'Take regular mock tests to assess progress',
      'Join study groups for peer learning'
    ],
    studyPlan: [
      { day: 'Day 1', subject: 'Physics', lesson: 'Modern Physics (High)', dpp: [
        'Photoelectric effect problems',
        'Nuclear fission vs fusion',
        'Dual nature of matter MCQs'
      ], pyq: 'JEE 2022: Calculate the energy of a photon with wavelength 500nm.' },
      { day: 'Day 2', subject: 'Chemistry', lesson: 'Organic Chemistry (High)', dpp: [
        'IUPAC nomenclature practice',
        'Reaction mechanism short notes',
        'Aromatic compounds MCQs'
      ], pyq: 'JEE 2021: Predict the product of a given organic reaction.' },
      { day: 'Day 3', subject: 'Mathematics', lesson: 'Calculus (High)', dpp: [
        'Limits and continuity problems',
        'Differentiation practice',
        'Integration by parts MCQs'
      ], pyq: 'JEE 2020: Evaluate the definite integral from 0 to 1 of x^2 dx.' },
      { day: 'Day 4', subject: 'Physics', lesson: 'Optics (Medium)', dpp: [
        'Ray diagrams for lenses',
        'Mirror formula numericals',
        'Wave optics conceptual questions'
      ], pyq: 'JEE 2019: Find the focal length of a convex lens given object and image distances.' },
      { day: 'Day 5', subject: 'Chemistry', lesson: 'Inorganic Chemistry (Medium)', dpp: [
        'Periodic table trends',
        'Chemical bonding MCQs',
        'Coordination compounds short notes'
      ], pyq: 'JEE 2018: Explain the trend in ionization energy across a period.' },
      { day: 'Day 6', subject: 'Mathematics', lesson: 'Coordinate Geometry (Medium)', dpp: [
        'Equation of a circle problems',
        'Straight line MCQs',
        'Parabola conceptual questions'
      ], pyq: 'JEE 2017: Find the equation of a circle passing through three points.' },
      { day: 'Day 7', subject: 'Physics', lesson: 'Waves (Low)', dpp: [
        'Standing waves numericals',
        'Sound speed calculation',
        'Wave equation MCQs'
      ], pyq: 'JEE 2016: Calculate the frequency of the second harmonic in a closed pipe.' },
      { day: 'Day 8', subject: 'Revision', lesson: 'Mixed (All Subjects)', dpp: [
        'Revise all formulas from the week.',
        'Solve 2 problems from each subject.',
        'Attempt a mini mock test (Physics, Chemistry, Math).'
      ], pyq: 'JEE 2015: Mixed subject mock question.' }
    ]
  },
  {
    id: 'neet',
    title: 'NEET-UG',
    icon: <BeakerIcon className="h-8 w-8" />,
    description: 'National Eligibility cum Entrance Test for medical college admissions',
    eligibility: 'Class 12 pass with PCB',
    examDate: 'May/June annually',
    preparationTime: '2 years recommended',
    phases: [
      {
        title: 'Foundation Phase',
        duration: '12 months',
        description: 'Build strong fundamentals in PCB',
        subjects: [
          {
            name: 'Biology',
            weightage: '50%',
            totalTopics: 20,
            completedTopics: 0,
            topics: [
              {
                name: 'NCERT Biology',
                importance: 'High',
                estimatedTime: '60 hours',
                prerequisites: ['Basic Biology'],
                resources: [
                  {
                    title: 'Complete Biology NCERT',
                    url: 'https://www.youtube.com/playlist?list=biology',
                    type: 'video',
                    platform: 'YouTube - Vedantu NEET',
                    duration: '45 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'NEET Preparation Strategy',
            url: 'https://www.youtube.com/watch?v=strategy',
            type: 'video',
            platform: 'YouTube - Unacademy NEET',
            duration: '2 hours'
          }
        ],
        milestones: [
          {
            title: 'Basic Concepts Mastery',
            date: '4 months from start',
            description: 'Complete NCERT Biology thoroughly'
          }
        ]
      }
    ],
    recommendedBooks: [
      {
        title: 'NCERT Biology Class 11 & 12',
        url: 'https://ncert.nic.in/textbook.php',
        type: 'document',
        platform: 'NCERT Official'
      }
    ],
    previousYearPapers: [
      {
        title: 'NEET 2023 Papers',
        url: 'https://neet.nta.nic.in/papers',
        type: 'document',
        platform: 'NTA Official'
      }
    ],
    mockTests: [
      {
        title: 'NEET Mock Test Series',
        url: 'https://unacademy.com/neet-mock-tests',
        type: 'practice',
        platform: 'Unacademy'
      }
    ],
    studyTips: [
      'Focus on NCERT Biology thoroughly',
      'Practice diagrams regularly',
      'Maintain a biology notebook',
      'Take regular mock tests',
      'Join study groups for discussion'
    ],
    studyPlan: [
      { day: 'Day 1', subject: 'Biology', lesson: 'Cell Structure (High)', dpp: [
        'Draw and label a plant cell.',
        'List functions of cell organelles.',
        'MCQs on prokaryotic vs eukaryotic cells.'
      ], pyq: 'NEET 2022: Which organelle is known as the powerhouse of the cell?' },
      { day: 'Day 2', subject: 'Chemistry', lesson: 'Basic Concepts of Chemistry (High)', dpp: [
        'Define mole concept.',
        'Numericals on molarity and normality.',
        'MCQs on atomic structure.'
      ], pyq: 'NEET 2021: Calculate the number of moles in 22g of CO2.' },
      { day: 'Day 3', subject: 'Physics', lesson: 'Motion in a Straight Line (High)', dpp: [
        'Derive equations of motion.',
        'Numericals on velocity and acceleration.',
        'Graph-based MCQs.'
      ], pyq: 'NEET 2020: A body starts from rest and accelerates uniformly. Find its velocity after 5s.' },
      { day: 'Day 4', subject: 'Biology', lesson: 'Genetics (Medium)', dpp: [
        'Mendel\'s laws summary.',
        'Punnett square problems.',
        'MCQs on monohybrid and dihybrid crosses.'
      ], pyq: 'NEET 2019: What is the phenotypic ratio in a dihybrid cross?' },
      { day: 'Day 5', subject: 'Chemistry', lesson: 'Chemical Bonding (Medium)', dpp: [
        'Draw Lewis structures.',
        'Explain VSEPR theory.',
        'MCQs on hybridization.'
      ], pyq: 'NEET 2018: Which molecule has sp3 hybridization?' },
      { day: 'Day 6', subject: 'Physics', lesson: 'Work, Energy & Power (Medium)', dpp: [
        'Define work and energy.',
        'Numericals on kinetic and potential energy.',
        'MCQs on conservation of energy.'
      ], pyq: 'NEET 2017: Calculate the work done by a force of 10N over 5m.' },
      { day: 'Day 7', subject: 'Biology', lesson: 'Human Physiology (Low)', dpp: [
        'Diagram of human digestive system.',
        'Short notes on enzymes.',
        'MCQs on absorption of nutrients.'
      ], pyq: 'NEET 2016: Which enzyme is secreted by the stomach?' },
      { day: 'Day 8', subject: 'Revision', lesson: 'Mixed (All Subjects)', dpp: [
        'Revise all formulas and diagrams.',
        'Solve 2 problems from each subject.',
        'Attempt a mini mock test (Bio, Chem, Physics).'
      ], pyq: 'NEET 2015: Mixed subject mock question.' }
    ]
  },
  {
    id: 'gate',
    title: 'GATE',
    icon: <ComputerDesktopIcon className="h-8 w-8" />,
    description: 'Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs',
    eligibility: 'Engineering graduates',
    examDate: 'February annually',
    preparationTime: '8-12 months',
    phases: [
      {
        title: 'Core Preparation',
        duration: '6 months',
        description: 'Focus on core engineering subjects',
        subjects: [
          {
            name: 'Engineering Mathematics',
            weightage: '15%',
            totalTopics: 10,
            completedTopics: 0,
            topics: [
              {
                name: 'Linear Algebra',
                importance: 'High',
                estimatedTime: '25 hours',
                prerequisites: ['Basic Mathematics'],
                resources: [
                  {
                    title: 'Mathematics for GATE',
                    url: 'https://www.youtube.com/playlist?list=gate-math',
                    type: 'video',
                    platform: 'YouTube - GATE Academy',
                    duration: '20 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'GATE Preparation Strategy',
            url: 'https://www.youtube.com/watch?v=gate-strategy',
            type: 'video',
            platform: 'YouTube - Made Easy',
            duration: '2 hours'
          }
        ],
        milestones: [
          {
            title: 'Core Subjects Completion',
            date: '4 months from start',
            description: 'Complete all core subjects'
          }
        ]
      }
    ],
    recommendedBooks: [
      {
        title: 'GATE Engineering Mathematics',
        url: 'https://amazon.com/gate-math',
        type: 'document',
        platform: 'Amazon'
      }
    ],
    previousYearPapers: [
      {
        title: 'GATE 2023 Papers',
        url: 'https://gate.iitk.ac.in/papers',
        type: 'document',
        platform: 'IIT Kanpur'
      }
    ],
    mockTests: [
      {
        title: 'GATE Mock Test Series',
        url: 'https://madeeasy.in/mock-tests',
        type: 'practice',
        platform: 'Made Easy'
      }
    ],
    studyTips: [
      'Focus on core subjects first',
      'Practice previous year papers',
      'Maintain formula sheets',
      'Take regular mock tests',
      'Join online study groups'
    ],
    studyPlan: [
      { day: 'Day 1', subject: 'Engineering Mathematics', lesson: 'Linear Algebra (High)', dpp: [
        'Matrix operations practice.',
        'Eigenvalues and eigenvectors problems.',
        'MCQs on rank and determinant.'
      ], pyq: 'GATE 2022: Find the eigenvalues of a given matrix.' },
      { day: 'Day 2', subject: 'Core Subject', lesson: 'Digital Logic (High)', dpp: [
        'Boolean algebra simplification.',
        'K-map problems.',
        'MCQs on logic gates.'
      ], pyq: 'GATE 2021: Minimize a Boolean function using K-map.' },
      { day: 'Day 3', subject: 'Engineering Mathematics', lesson: 'Calculus (Medium)', dpp: [
        'Limits and continuity problems.',
        'Differentiation and integration practice.',
        'MCQs on maxima and minima.'
      ], pyq: 'GATE 2020: Evaluate a definite integral.' },
      { day: 'Day 4', subject: 'Core Subject', lesson: 'Computer Networks (Medium)', dpp: [
        'OSI model summary.',
        'Numericals on bandwidth and latency.',
        'MCQs on protocols.'
      ], pyq: 'GATE 2019: Explain the function of the transport layer.' },
      { day: 'Day 5', subject: 'Engineering Mathematics', lesson: 'Probability & Statistics (Medium)', dpp: [
        'Probability distribution problems.',
        'Mean and variance calculations.',
        'MCQs on Bayes theorem.'
      ], pyq: 'GATE 2018: Find the probability of a given event.' },
      { day: 'Day 6', subject: 'Core Subject', lesson: 'Operating Systems (Low)', dpp: [
        'Process scheduling problems.',
        'Deadlock detection practice.',
        'MCQs on memory management.'
      ], pyq: 'GATE 2017: Explain round-robin scheduling.' },
      { day: 'Day 7', subject: 'Core Subject', lesson: 'Databases (Low)', dpp: [
        'Normalization problems.',
        'SQL query practice.',
        'MCQs on transactions.'
      ], pyq: 'GATE 2016: Write an SQL query for a given scenario.' },
      { day: 'Day 8', subject: 'Revision', lesson: 'Mixed (All Subjects)', dpp: [
        'Revise all formulas and key concepts.',
        'Solve 2 problems from each subject.',
        'Attempt a mini mock test (Maths, Core Subjects).'
      ], pyq: 'GATE 2015: Mixed subject mock question.' }
    ]
  },
  {
    id: 'upsc',
    title: 'UPSC Civil Services',
    icon: <AcademicCapIcon className="h-8 w-8" />,
    description: 'Union Public Service Commission examination for civil services',
    eligibility: 'Graduate in any discipline',
    examDate: 'Prelims: June, Mains: September',
    preparationTime: '1-2 years recommended',
    phases: [
      {
        title: 'Preliminary Preparation',
        duration: '6 months',
        description: 'Focus on general studies and CSAT',
        subjects: [
          {
            name: 'General Studies',
            weightage: '80%',
            totalTopics: 15,
            completedTopics: 0,
            topics: [
              {
                name: 'Indian Polity',
                importance: 'High',
                estimatedTime: '40 hours',
                prerequisites: ['Basic Civics'],
                resources: [
                  {
                    title: 'Laxmikant Polity',
                    url: 'https://www.youtube.com/playlist?list=polity',
                    type: 'video',
                    platform: 'YouTube - Unacademy UPSC',
                    duration: '30 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'UPSC Preparation Strategy',
            url: 'https://www.youtube.com/watch?v=upsc-strategy',
            type: 'video',
            platform: 'YouTube - Unacademy UPSC',
            duration: '2 hours'
          }
        ],
        milestones: [
          {
            title: 'Basic Concepts Mastery',
            date: '3 months from start',
            description: 'Complete basic polity and history'
          }
        ]
      }
    ],
    recommendedBooks: [
      {
        title: 'Indian Polity by Laxmikant',
        url: 'https://amazon.com/laxmikant',
        type: 'document',
        platform: 'Amazon'
      }
    ],
    previousYearPapers: [
      {
        title: 'UPSC 2023 Papers',
        url: 'https://upsc.gov.in/papers',
        type: 'document',
        platform: 'UPSC Official'
      }
    ],
    mockTests: [
      {
        title: 'UPSC Mock Test Series',
        url: 'https://unacademy.com/upsc-mock-tests',
        type: 'practice',
        platform: 'Unacademy'
      }
    ],
    studyTips: [
      'Focus on NCERT books first',
      'Read newspapers daily',
      'Maintain current affairs notes',
      'Practice answer writing',
      'Join test series'
    ],
    studyPlan: [
      { day: 'Day 1', subject: 'General Studies', lesson: 'Indian Polity (High)', dpp: [
        'List features of the Indian Constitution.',
        'Short notes on Fundamental Rights.',
        'MCQs on Parliament structure.'
      ], pyq: 'UPSC 2022: Discuss the significance of the Preamble.' },
      { day: 'Day 2', subject: 'General Studies', lesson: 'Modern History (High)', dpp: [
        'Timeline of Indian freedom movement.',
        'Short notes on key leaders.',
        'MCQs on important events.'
      ], pyq: 'UPSC 2021: Explain the impact of the Non-Cooperation Movement.' },
      { day: 'Day 3', subject: 'General Studies', lesson: 'Geography (Medium)', dpp: [
        'Draw a map of India.',
        'Short notes on monsoon system.',
        'MCQs on physical features.'
      ], pyq: 'UPSC 2020: Describe the causes of monsoon in India.' },
      { day: 'Day 4', subject: 'General Studies', lesson: 'Economics (Medium)', dpp: [
        'Short notes on GDP and GNP.',
        'MCQs on economic reforms.',
        'Numericals on inflation.'
      ], pyq: 'UPSC 2019: What is the difference between GDP and GNP?' },
      { day: 'Day 5', subject: 'General Studies', lesson: 'Environment (Medium)', dpp: [
        'List major environmental issues.',
        'Short notes on biodiversity.',
        'MCQs on climate change.'
      ], pyq: 'UPSC 2018: Discuss the impact of climate change on agriculture.' },
      { day: 'Day 6', subject: 'CSAT', lesson: 'Quantitative Aptitude (Low)', dpp: [
        'Practice percentage problems.',
        'Ratio and proportion MCQs.',
        'Short notes on averages.'
      ], pyq: 'UPSC 2017: Solve a CSAT quantitative aptitude question.' },
      { day: 'Day 7', subject: 'CSAT', lesson: 'Logical Reasoning (Low)', dpp: [
        'Practice syllogism questions.',
        'MCQs on blood relations.',
        'Short notes on coding-decoding.'
      ], pyq: 'UPSC 2016: Solve a logical reasoning question.' },
      { day: 'Day 8', subject: 'Revision', lesson: 'Mixed (All Subjects)', dpp: [
        'Revise all notes and key facts.',
        'Solve 2 problems from each subject.',
        'Attempt a mini mock test (GS, CSAT).'
      ], pyq: 'UPSC 2015: Mixed subject mock question.' }
    ]
  },
  {
    id: 'cat',
    title: 'CAT',
    icon: <ChartBarIcon className="h-8 w-8" />,
    description: 'Common Admission Test for IIMs and other top B-schools',
    eligibility: 'Graduate with 50% marks',
    examDate: 'November annually',
    preparationTime: '6-12 months',
    phases: [
      {
        title: 'Quantitative Aptitude',
        duration: '3 months',
        description: 'Focus on mathematical concepts and problem-solving',
        subjects: [
          {
            name: 'Quantitative Ability',
            weightage: '34%',
            totalTopics: 12,
            completedTopics: 0,
            topics: [
              {
                name: 'Arithmetic',
                importance: 'High',
                estimatedTime: '35 hours',
                prerequisites: ['Basic Mathematics'],
                resources: [
                  {
                    title: 'CAT Quant Preparation',
                    url: 'https://www.youtube.com/playlist?list=cat-quant',
                    type: 'video',
                    platform: 'YouTube - Rodha',
                    duration: '25 hours'
                  }
                ],
                dpp: [],
                pyq: ''
              }
            ]
          }
        ],
        resources: [
          {
            title: 'CAT Preparation Strategy',
            url: 'https://www.youtube.com/watch?v=cat-strategy',
            type: 'video',
            platform: 'YouTube - Unacademy CAT',
            duration: '2 hours'
          }
        ],
        milestones: [
          {
            title: 'Basic Concepts Mastery',
            date: '2 months from start',
            description: 'Complete arithmetic and algebra'
          }
        ]
      }
    ],
    recommendedBooks: [
      {
        title: 'Quantitative Aptitude for CAT',
        url: 'https://amazon.com/cat-quant',
        type: 'document',
        platform: 'Amazon'
      }
    ],
    previousYearPapers: [
      {
        title: 'CAT 2023 Papers',
        url: 'https://iimcat.ac.in/papers',
        type: 'document',
        platform: 'IIM Official'
      }
    ],
    mockTests: [
      {
        title: 'CAT Mock Test Series',
        url: 'https://unacademy.com/cat-mock-tests',
        type: 'practice',
        platform: 'Unacademy'
      }
    ],
    studyTips: [
      'Focus on speed and accuracy',
      'Practice mental calculations',
      'Maintain error log',
      'Take regular mock tests',
      'Join study groups'
    ],
    studyPlan: [
      { day: 'Day 1', subject: 'Quantitative Ability', lesson: 'Arithmetic (High)', dpp: [
        'Problems on percentages.',
        'Ratio and proportion MCQs.',
        'Time and work numericals.'
      ], pyq: 'CAT 2022: Solve a time and work problem.' },
      { day: 'Day 2', subject: 'Logical Reasoning', lesson: 'Arrangements (High)', dpp: [
        'Linear arrangement problems.',
        'Circular arrangement MCQs.',
        'Short notes on puzzles.'
      ], pyq: 'CAT 2021: Solve a circular arrangement question.' },
      { day: 'Day 3', subject: 'Verbal Ability', lesson: 'Reading Comprehension (Medium)', dpp: [
        'Practice RC passages.',
        'MCQs on inference and tone.',
        'Short notes on main idea.'
      ], pyq: 'CAT 2020: Answer questions based on a given RC passage.' },
      { day: 'Day 4', subject: 'Quantitative Ability', lesson: 'Algebra (Medium)', dpp: [
        'Quadratic equations problems.',
        'Inequalities MCQs.',
        'Functions and graphs.'
      ], pyq: 'CAT 2019: Solve a quadratic equation.' },
      { day: 'Day 5', subject: 'Logical Reasoning', lesson: 'Data Interpretation (Medium)', dpp: [
        'Practice DI sets.',
        'MCQs on tables and charts.',
        'Short notes on data analysis.'
      ], pyq: 'CAT 2018: Interpret a data table and answer questions.' },
      { day: 'Day 6', subject: 'Verbal Ability', lesson: 'Para Jumbles (Low)', dpp: [
        'Practice para jumble questions.',
        'MCQs on sentence order.',
        'Short notes on connectors.'
      ], pyq: 'CAT 2017: Arrange sentences to form a coherent paragraph.' },
      { day: 'Day 7', subject: 'Quantitative Ability', lesson: 'Geometry (Low)', dpp: [
        'Problems on triangles.',
        'Circle MCQs.',
        'Short notes on polygons.'
      ], pyq: 'CAT 2016: Find the area of a triangle given its sides.' },
      { day: 'Day 8', subject: 'Revision', lesson: 'Mixed (All Sections)', dpp: [
        'Revise all formulas and shortcuts.',
        'Solve 2 problems from each section.',
        'Attempt a mini mock test (QA, LR, VA).'
      ], pyq: 'CAT 2015: Mixed section mock question.' }
    ]
  }
];

const CompetitiveExams: React.FC = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState<CompetitiveExam | null>(null);
  const [studentStatus, setStudentStatus] = useState<StudentStatus | null>(null);
  const [daysUntilExam, setDaysUntilExam] = useState<number>(0);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedExam && studentStatus) {
      try {
        setIsLoading(true);
        setError(null);
        
        // Safer date parsing logic
        let examDate = new Date();
        const examDateStr = selectedExam.examDate;
        
        // Handle different date formats
        if (examDateStr.includes(',')) {
          // Multiple dates format (e.g., "Prelims: June, Mains: September")
          const firstDate = examDateStr.split(',')[0];
          if (firstDate.includes(':')) {
            const dateValue = firstDate.split(':')[1].trim();
            examDate = new Date(dateValue + ', ' + new Date().getFullYear());
          } else {
            examDate = new Date(firstDate + ', ' + new Date().getFullYear());
          }
        } else if (examDateStr.includes(':')) {
          // Single date with prefix (e.g., "Date: June")
          const dateValue = examDateStr.split(':')[1].trim();
          examDate = new Date(dateValue + ', ' + new Date().getFullYear());
        } else {
          // Simple date format
          examDate = new Date(examDateStr + ', ' + new Date().getFullYear());
        }

        // Validate the parsed date
        if (isNaN(examDate.getTime())) {
          throw new Error('Could not determine exam date. Please check the date format.');
        }

        // If the calculated date is in the past, add a year
        if (examDate < new Date()) {
          examDate.setFullYear(examDate.getFullYear() + 1);
        }

        const today = new Date();
        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
        setDaysUntilExam(diffDays);

        // Calculate current phase based on days until exam and available phases
        if (selectedExam.phases && selectedExam.phases.length > 0) {
          const totalPhases = selectedExam.phases.length;
          if (diffDays > 180) {
            setCurrentPhase(0); // First phase
          } else if (diffDays > 90) {
            setCurrentPhase(Math.min(1, totalPhases - 1)); // Second phase or last if only two phases
          } else {
            setCurrentPhase(Math.min(2, totalPhases - 1)); // Third phase or last if less than three phases
          }
        } else {
          setCurrentPhase(0);
        }
      } catch (err) {
        console.error('Error parsing exam date:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while loading exam details');
        setCurrentPhase(0); // Set to first phase as fallback
      } finally {
        setIsLoading(false);
      }
    }
  }, [selectedExam, studentStatus]);

  const ResourceIcon = ({ type }: { type: Resource['type'] }) => {
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

  const calculateDailyStudyHours = (exam: CompetitiveExam) => {
    const totalTopics = exam.phases.reduce((acc, phase) => 
      acc + phase.subjects.reduce((subAcc, subject) => 
        subAcc + subject.topics.length, 0), 0);
    
    const avgTopicHours = 8; // Average hours per topic
    const totalHours = totalTopics * avgTopicHours;
    
    return Math.ceil(totalHours / daysUntilExam);
  };

  const handleExamClick = (examId: string) => {
    if (studentStatus) {
      const exam = competitiveExams.find(exam => exam.id === examId);
      if (exam) {
        // Create a serializable version of the exam without the icon
        const examDetails = {
          ...exam,
          icon: undefined // Remove the icon from navigation state
        };
        // Store in localStorage for persistence
        localStorage.setItem('edutians_examDetails', JSON.stringify(examDetails));
        localStorage.setItem('edutians_studentStatus', JSON.stringify(studentStatus));
        navigate(`/competitive-exams/${examId}`, { 
          state: { 
            studentStatus,
            examDetails
          } 
        });
      }
    }
  };

  // Add error display component
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-red-800 dark:text-red-200">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
          <button 
            onClick={() => {
              setError(null);
              setSelectedExam(null);
              setStudentStatus(null);
            }}
            className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-900 rounded-lg hover:bg-red-200 dark:hover:bg-red-800"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  // Add loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ArrowPathIcon className="h-8 w-8 animate-spin mx-auto mb-4 text-primary dark:text-accent" />
          <p className="text-gray-600 dark:text-gray-400">Loading exam details...</p>
        </div>
      </div>
    );
  }

  // Add a safety check at the component level
  if (!studentStatus) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Competitive Exams</h1>
            <p className="text-gray-200 mt-2 text-lg">Prepare for top exams with expert resources and study plans</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#232c43]/80 rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Select Your Current Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['11', '12', 'dropper'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStudentStatus({ class: status as StudentStatus['class'], startDate: new Date().toISOString() })}
                  className="p-6 rounded-lg bg-[#232c43]/80 hover:bg-[#28304a]/80 border border-[#232c43]/80 hover:border-blue-500 transition-all duration-300"
                >
                  <UserIcon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                  <p className="font-semibold text-lg text-white">
                    {status === 'dropper' ? 'Dropper' : `Class ${status}`}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Competitive Exams</h1>
          <p className="text-gray-200 mt-2 text-lg">Prepare for top exams with expert resources and study plans</p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <UserIcon className="h-5 w-5 text-primary dark:text-accent" />
            <span className="text-lg text-gray-600 dark:text-gray-300">
              Current Status: {studentStatus.class === 'dropper' ? 'Dropper' : `Class ${studentStatus.class}`}
            </span>
            <button
              onClick={() => setStudentStatus(null)}
              className="ml-4 text-sm text-primary dark:text-accent hover:underline"
            >
              Change
            </button>
          </div>
        </motion.div>
        {/* Only show the plan and download button if an exam is selected and has a studyPlan */}
        {selectedExam?.studyPlan ? (
          <div className="mb-16">
            <div className="flex justify-end mb-4">
              <button
                className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition-colors"
                onClick={() => {
                  // Download as CSV
                  const csvRows = [
                    ['Day', 'Subject', 'Lesson/Chapter', 'DPPs', 'PYQ'],
                    ...((selectedExam.studyPlan ? selectedExam.studyPlan.map(day => [
                      day.day,
                      day.subject,
                      day.lesson,
                      day.dpp.join(' | '),
                      day.pyq
                    ]) : []) as string[][])
                  ];
                  const csvContent = csvRows.map((r: string[]) => r.map((x: string) => '"' + x.replace(/"/g, '""') + '"').join(',')).join('\n');
                  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                  saveAs(blob, `${selectedExam.title.replace(/\s+/g, '_')}_Schedule.csv`);
                }}
              >
                Download Schedule
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Weekly Study Plan</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Day</th>
                    <th className="px-4 py-2 text-left">Subject</th>
                    <th className="px-4 py-2 text-left">Lesson/Chapter</th>
                    <th className="px-4 py-2 text-left">DPPs</th>
                    <th className="px-4 py-2 text-left">Previous Year Question</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedExam.studyPlan.map((day, idx) => {
                    // Subject color mapping
                    const subjectColors: Record<string, string> = {
                      Physics: 'bg-blue-500',
                      Chemistry: 'bg-green-500',
                      Mathematics: 'bg-purple-500',
                      Biology: 'bg-pink-500',
                      'Engineering Mathematics': 'bg-orange-500',
                      'Core Subject': 'bg-cyan-500',
                      'General Studies': 'bg-indigo-500',
                      CSAT: 'bg-teal-500',
                      'Quantitative Ability': 'bg-purple-500',
                      'Logical Reasoning': 'bg-blue-500',
                      'Verbal Ability': 'bg-green-500',
                      Revision: 'bg-yellow-500',
                    };
                    const badgeColor = subjectColors[day.subject] || 'bg-gray-500';
                    return (
                      <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-2 font-semibold">{day.day}</td>
                        <td className="px-4 py-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold ${badgeColor}`}>{day.subject}</span>
                        </td>
                        <td className="px-4 py-2">{day.lesson}</td>
                        <td className="px-4 py-2">
                          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
                            <span className="block text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">DPPs ({day.dpp.length})</span>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                              {day.dpp.map((q, i) => (
                                <li key={i}>{q}</li>
                              ))}
                            </ul>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-2">
                            <span className="block text-xs font-semibold text-yellow-700 dark:text-yellow-300 mb-1">PYQ</span>
                            <span className="text-sm">{day.pyq}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* Summary row */}
                  <tr className="bg-primary/10 dark:bg-primary/20 font-bold">
                    <td className="px-4 py-2" colSpan={3}>Total This Week</td>
                    <td className="px-4 py-2">
                      {selectedExam.studyPlan.reduce((acc, day) => acc + day.dpp.length, 0)} DPPs
                    </td>
                    <td className="px-4 py-2">
                      {Array.from(new Set(selectedExam.studyPlan.map(day => day.subject))).join(', ')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Weekly Study Plan</h2>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
              No study plan available for this exam yet. Please check back later or select another exam.
            </div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Competitive Exams</h1>
          <p className="text-gray-200 mt-2 text-lg">Prepare for top exams with expert resources and study plans</p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <UserIcon className="h-5 w-5 text-primary dark:text-accent" />
            <span className="text-lg text-gray-600 dark:text-gray-300">
              Current Status: {studentStatus.class === 'dropper' ? 'Dropper' : `Class ${studentStatus.class}`}
            </span>
            <button
              onClick={() => setStudentStatus(null)}
              className="ml-4 text-sm text-primary dark:text-accent hover:underline"
            >
              Change
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitiveExams.map((exam) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleExamClick(exam.id)}
              className="bg-[#232c43]/80 rounded-2xl shadow-2xl p-8 cursor-pointer
                transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:border-2 hover:border-cyan-400 border border-[#232c43]/80"
            >
              <div className="text-cyan-400 mb-4">
                {exam.icon}
              </div>
              <h2 className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">{exam.title}</h2>
              <p className="text-gray-100 mb-4">{exam.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-700/30 text-cyan-200 text-xs font-semibold">
                  <ClockIcon className="h-4 w-4 mr-1" /> {exam.preparationTime}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-700/30 text-blue-200 text-xs font-semibold">
                  <CalendarIcon className="h-4 w-4 mr-1" /> {exam.examDate}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-700/30 text-green-200 text-xs font-semibold">
                  <CheckCircleIcon className="h-4 w-4 mr-1" /> {exam.eligibility}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveExams; 