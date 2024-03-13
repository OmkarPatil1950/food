import React, { useEffect, useRef } from 'react';

const SmokeEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const addParticle = (x, y) => {
      const particle = {
        x,
        y,
        radius: Math.random() * 20 + 10,
        opacity: 1,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5,
      };
      particles.push(particle);
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.01;

        if (particle.opacity <= 0) {
          particles.splice(index, 1);
        } else {
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = "orange";
          ctx.fill();
        }
      });

      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top } = canvas.getBoundingClientRect();
      const offsetX = clientX - left;
      const offsetY = clientY - top;
      addParticle(offsetX, offsetY);
    };

    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      animateParticles();
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="smoke_canvas"/>;
};

export default SmokeEffect;
