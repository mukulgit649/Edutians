import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  // Testimonials data
  const testimonials = [
    {
      name: 'Alex Kim',
      country: 'South Korea',
      flag: '🇰🇷',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      color: 'primary',
      message: '“The AI-powered features are mind-blowing! Edutians helped me personalize my learning and build real AI projects.”',
      tag: 'AI & Generative AI Learner',
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      flag: '🇮🇳',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: 'accent',
      message: '“The motivation and community support on Edutians kept me going. I love the daily inspiration and peer connections!”',
      tag: 'Motivation & Community',
    },
    {
      name: 'James Smith',
      country: 'United Kingdom',
      flag: '🇬🇧',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      color: 'primary',
      message: '“The competitive exam modules are top-notch. The study plans and practice questions made all the difference for my prep.”',
      tag: 'Competitive Exams',
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      flag: '🇪🇸',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      color: 'accent',
      message: "“Edutians' courses are so well-structured and easy to follow. I gained real skills and confidence for my career.”",
      tag: 'Courses & Skills',
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      flag: '🇪🇬',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      color: 'primary',
      message: '“The career guidance and expert advice helped me land my dream job. Thank you, Edutians!”',
      tag: 'Career Guidance',
    },
    {
      name: 'Sophia Lee',
      country: 'USA',
      flag: '🇺🇸',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      color: 'accent',
      message: '“I love the hands-on projects and interactive content. Edutians makes learning fun and effective!”',
      tag: 'Interactive Learning',
    },
    // Add more testimonials for a richer carousel
    {
      name: 'Lucas Müller',
      country: 'Germany',
      flag: '🇩🇪',
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
      color: 'primary',
      message: '“Edutians made learning data science accessible and enjoyable. The AI tools are a game changer!”',
      tag: 'Data Science',
    },
    {
      name: 'Ava Dubois',
      country: 'France',
      flag: '🇫🇷',
      avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
      color: 'accent',
      message: '“The UI/UX design course was fantastic. I landed my first freelance project thanks to Edutians!”',
      tag: 'UI/UX Design',
    },
    {
      name: 'Mateo Rossi',
      country: 'Italy',
      flag: '🇮🇹',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      color: 'primary',
      message: '“The mobile development track is super practical. I published my first app!”',
      tag: 'Mobile Development',
    },
  ];

  // Carousel state
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const maxIndex = testimonials.length - visibleCount;
  const goLeft = () => setTestimonialIndex((i) => Math.max(i - 1, 0));
  const goRight = () => setTestimonialIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animated-background"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 to-background-dark"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 flex flex-col justify-center items-center w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-poppins font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-6" style={{textShadow: '0 4px 24px rgba(0,0,0,0.18)'}}>
            WELCOME TO EDUTIANS
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-10">Your AI-Powered Learning Journey Starts Here</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-2">
            <Link
              to="/courses"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg transition-all duration-200 text-lg text-white text-center mb-4 sm:mb-0"
            >
              Explore Courses
            </Link>
            <Link
              to="/competitive-exams"
              className="px-10 py-4 bg-cyan-500 hover:bg-green-400 rounded-xl font-bold shadow-lg transition-all duration-200 text-lg text-white text-center"
            >
              Competitive Exams
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Edutians?</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering your educational journey with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "Expert-Led Courses",
              description: "Learn from industry experts and experienced educators",
              to: "/courses"
            },
            {
              icon: <LightBulbIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "AI-Powered Learning",
              description: "Personalized learning paths adapted to your needs",
              to: "/features/personalized-learning-paths"
            },
            {
              icon: <ChartBarIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "Progress Tracking",
              description: "Monitor your growth with detailed analytics",
              to: "/features/progress-tracking"
            },
            {
              icon: <BookOpenIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "Comprehensive Resources",
              description: "Access a vast library of study materials",
              to: "/resources"
            },
            {
              icon: <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "Community Support",
              description: "Connect with peers and mentors",
              to: "/community"
            },
            {
              icon: <RocketLaunchIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
              title: "Career Guidance",
              description: "Get expert advice for your future",
              to: "/career-guidance"
            }
          ].map((feature, index) => (
            <Link
              key={index}
              to={feature.to}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-gray-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 block"
              tabIndex={0}
              aria-label={`Go to ${feature.title}`}
            >
              <div className="text-primary mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">What Learners Say</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from our global community
          </p>
        </motion.div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="p-2 rounded-full bg-gray-800/70 hover:bg-primary/80 transition-colors text-white"
            onClick={goLeft}
            disabled={testimonialIndex === 0}
            aria-label="Previous testimonials"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(testimonialIndex, testimonialIndex + visibleCount).map((t, idx) => (
              <div key={t.name + t.country} className="rounded-2xl bg-[#232c43] shadow-lg p-8 flex flex-col items-center text-center">
                <img src={t.avatar} alt={t.name} className={`w-16 h-16 rounded-full mb-4 border-2 ${t.color === 'primary' ? 'border-primary' : 'border-accent'}`} />
                <h3 className="font-bold text-lg text-white mb-1">{t.name} <span className="text-base">{t.flag}</span></h3>
                <p className={t.color === 'primary' ? 'text-primary text-xs mb-2' : 'text-accent text-xs mb-2'}>{t.country}</p>
                <p className="text-gray-300 mb-2">{t.message}</p>
                <span className="text-xs text-gray-400">{t.tag}</span>
              </div>
            ))}
          </div>
          <button
            className="p-2 rounded-full bg-gray-800/70 hover:bg-primary/80 transition-colors text-white"
            onClick={goRight}
            disabled={testimonialIndex >= maxIndex}
            aria-label="Next testimonials"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-background-dark/80 mt-16 sm:mt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Begin?</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of successful learners on Edutians
            </p>
            <Link
              to="/courses"
              className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-center"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 