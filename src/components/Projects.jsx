import React from 'react';

const projects = [
  {
    title: 'Lensfolio — Photography Portfolio',
    desc: 'A minimalist gallery with soft interactions and custom album layouts.',
    image: 'https://images.unsplash.com/photo-1661283221476-d289ccf85e96?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZW5zZm9saW8lMjAlRTIlODAlOTQlMjBQaG90b2dyYXBoeSUyMFBvcnRmb2xpb3xlbnwwfDB8fHwxNzYyNDc5MDA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Motion Studio — Creative Agency',
    desc: 'Landing page focused on bold typography and fluid motion.',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pixelboard — Design System',
    desc: 'A reusable set of UI components with consistent spacing and scale.',
    image: 'https://images.unsplash.com/photo-1717501217778-367e9cdb0e03?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaXhlbGJvYXJkJTIwJUUyJTgwJTk0JTIwRGVzaWduJTIwU3lzdGVtfGVufDB8MHx8fDE3NjI0NzkwMDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>
              Selected Work
            </h2>
            <p className="text-[#111827]/70 mt-2">A few projects that reflect my approach: clear, refined, and crafted.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm px-4 py-2 rounded-lg bg-white text-[#111827] border border-black/5 shadow-sm hover:bg-[#E3F2FD]/60 transition-colors">Start a Project</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-lg shadow-black/5 hover:shadow-black/10 transition-all">
              <div className="aspect-video bg-[#E3F2FD] relative overflow-hidden">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 ease-out" />

                {/* Simple device mock edge */}
                <div className="absolute inset-3 rounded-xl ring-1 ring-black/10 pointer-events-none" />
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>{p.title}</h3>
                <p className="mt-2 text-[#111827]/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
