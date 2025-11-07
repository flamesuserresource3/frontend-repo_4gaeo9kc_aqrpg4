import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
            alt="Hanif portrait"
            className="rounded-3xl w-full h-[420px] object-cover shadow-xl shadow-black/10 border border-black/5"
          />
          <div className="pointer-events-none absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl bg-[#E3F2FD] blur-2xl opacity-80" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>About Me</h2>
          <p className="mt-4 text-[#111827]/80 leading-relaxed">
            I’m Hanif — a designer and developer who enjoys transforming ideas into calm, tactile experiences. I focus on clarity, spacing, and type to shape interfaces that communicate with confidence.
          </p>
          <p className="mt-4 text-[#111827]/80 leading-relaxed">
            When I’m not sketching layouts or polishing micro-interactions, you’ll find me experimenting with photography and playing with new tools that make the web feel more human.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
