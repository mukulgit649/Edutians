import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#0f172a',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#38bdf8',
          },
          links: {
            color: '#38bdf8',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        fullScreen: { enable: true, zIndex: 1 },
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}
    />
  );
};

export default ParticleBackground; 