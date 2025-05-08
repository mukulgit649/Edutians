import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const Motivation: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Fuel Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover inspiration from great minds and find the motivation to achieve your educational goals
          </p>
        </motion.div>
      </section>

      {/* Famous Quotes Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-200">
          Wisdom from Great Minds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Education is the most powerful weapon which you can use to change the world.",
              author: "Nelson Mandela",
              icon: <AcademicCapIcon className="h-8 w-8" />
            },
            {
              quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
              author: "Dr. Seuss",
              icon: <BookOpenIcon className="h-8 w-8" />
            },
            {
              quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
              author: "Winston Churchill",
              icon: <TrophyIcon className="h-8 w-8" />
            },
            {
              quote: "The only way to do great work is to love what you do.",
              author: "Steve Jobs",
              icon: <LightBulbIcon className="h-8 w-8" />
            },
            {
              quote: "Education is not the learning of facts, but the training of the mind to think.",
              author: "Albert Einstein",
              icon: <SparklesIcon className="h-8 w-8" />
            },
            {
              quote: "The expert in anything was once a beginner.",
              author: "Helen Hayes",
              icon: <RocketLaunchIcon className="h-8 w-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary dark:text-accent mb-4">
                {item.icon}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                "{item.quote}"
              </p>
              <p className="text-gray-500 dark:text-gray-400 font-semibold">
                - {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-200">
          Inspiring Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "From Dropout to Tech Titan",
              person: "Bill Gates",
              story: "Despite dropping out of Harvard, Bill Gates pursued his passion for technology and co-founded Microsoft, becoming one of the most successful entrepreneurs in history.",
              lesson: "Follow your passion and never stop learning, even outside traditional education."
            },
            {
              title: "The Power of Persistence",
              person: "J.K. Rowling",
              story: "Before becoming one of the world's most successful authors, J.K. Rowling faced numerous rejections and personal challenges while writing the Harry Potter series.",
              lesson: "Persistence and belief in your vision can overcome any obstacle."
            },
            {
              title: "Breaking Barriers in Science",
              person: "Marie Curie",
              story: "As the first woman to win a Nobel Prize and the only person to win in two different scientific fields, Marie Curie's dedication to science changed the world.",
              lesson: "Passion and dedication can break through any barrier."
            },
            {
              title: "Innovation Through Adversity",
              person: "Elon Musk",
              story: "From facing bankruptcy to revolutionizing multiple industries, Elon Musk's journey shows how perseverance and continuous learning can lead to extraordinary achievements.",
              lesson: "Embrace challenges as opportunities for growth and innovation."
            }
          ].map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">{story.title}</h3>
              <p className="text-primary dark:text-accent font-semibold mb-4">{story.person}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{story.story}</p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 font-semibold">Key Lesson:</p>
                <p className="text-gray-600 dark:text-gray-300">{story.lesson}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Resources Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-200">
          Inspirational Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "The Power of Believing You Can Improve",
              speaker: "Carol Dweck",
              link: "https://www.youtube.com/watch?v=_X0mgOOSpLU",
              description: "Learn about the growth mindset and how it can transform your learning journey."
            },
            {
              title: "Grit: The Power of Passion and Perseverance",
              speaker: "Angela Lee Duckworth",
              link: "https://www.youtube.com/watch?v=H14bBuluwB8",
              description: "Discover why grit might be the most important factor in achieving your goals."
            },
            {
              title: "The First 20 Hours - How to Learn Anything",
              speaker: "Josh Kaufman",
              link: "https://www.youtube.com/watch?v=5MgBikgcWnY",
              description: "Learn the science of rapid skill acquisition and how to master any skill."
            },
            {
              title: "The Puzzle of Motivation",
              speaker: "Dan Pink",
              link: "https://www.youtube.com/watch?v=rrkrvAUbU9Y",
              description: "Understand what truly motivates us and how to harness it for success."
            }
          ].map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <VideoCameraIcon className="h-6 w-6 text-primary dark:text-accent mr-2" />
                <h3 className="text-xl font-bold dark:text-gray-200">{video.title}</h3>
              </div>
              <p className="text-primary dark:text-accent font-semibold mb-2">{video.speaker}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description}</p>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-accent hover:underline flex items-center"
              >
                Watch Video →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Motivation Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-200">
          Daily Motivation
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-8 rounded-xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <StarIcon className="h-12 w-12 text-primary dark:text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-200">
              Today's Motivation
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              "Success is not about being the best. It's about always getting better."
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Take a small step today towards your learning goals. Every effort counts!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of motivated learners who are transforming their lives through education
          </p>
          <a
            href="/courses"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Explore Courses
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Motivation; 