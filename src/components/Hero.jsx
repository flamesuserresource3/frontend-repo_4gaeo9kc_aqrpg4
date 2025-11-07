import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] rounded-3xl overflow-hidden mb-16 shadow-xl shadow-black/5 bg-[#E3F2FD]">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#E3F2FD]/70 via-transparent to-[#E3F2FD]/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-10 lg:px-16 max-w-5xl">
          <span className="inline-block text-sm md:text-base tracking-wide uppercase bg-white/70 backdrop-blur-sm text-[#111827] px-3 py-1 rounded-full shadow-sm">
            Portfolio
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>
            Hi, I’m Hanif. I design & build digital experiences.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-[#111827]/80 max-w-2xl">
            Blending thoughtful design with reliable code to craft interfaces that feel effortless.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#111827] text-[#E3F2FD] shadow-lg shadow-black/10 hover:shadow-black/20 transition-all duration-300">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur text-[#111827] border border-black/5 hover:bg-white shadow-sm transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
