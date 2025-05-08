import React from 'react';
import { motion } from 'framer-motion';

const ParticleAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            scale: [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 0.5
            ],
            opacity: [
              Math.random() * 0.5 + 0.2,
              Math.random() * 0.5 + 0.2,
              Math.random() * 0.5 + 0.2
            ]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleAnimation; 