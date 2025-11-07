import React from 'react';
import { Code, Palette, Camera, Cpu } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Front-end' },
  { icon: Palette, label: 'UI/UX' },
  { icon: Camera, label: 'Visual' },
  { icon: Cpu, label: 'Systems' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#E3F2FD] rounded-3xl mx-6 md:mx-10 lg:mx-16">
      <div className="px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-8" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 py-8 rounded-2xl bg-white shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <s.icon className="w-7 h-7 text-[#111827]" />
              <span className="text-sm font-medium text-[#111827]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
