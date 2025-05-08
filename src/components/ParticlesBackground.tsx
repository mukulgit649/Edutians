import React from 'react';
import { loadFull } from 'tsparticles';
import { Engine, Container } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: '#38bdf8' },
          links: {
            enable: true,
            color: '#38bdf8',
            distance: 130,
            opacity: 0.3,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'out' },
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground; 