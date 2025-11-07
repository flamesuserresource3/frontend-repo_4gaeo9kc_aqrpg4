import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#E3F2FD] text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg">Hanif</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:opacity-80 transition-opacity">Work</a>
            <a href="#skills" className="hover:opacity-80 transition-opacity">Skills</a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg bg-[#111827] text-[#E3F2FD] shadow-sm hover:shadow-md transition-all">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pb-20">
        <div className="px-0 md:px-6">
          <Hero />
        </div>
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="px-6 md:px-10 lg:px-16 py-10 text-sm text-[#111827]/60">
        <div className="flex items-center justify-between">
          <span>© {new Date().getFullYear()} Hanif — Crafted with care.</span>
          <a href="#home" className="hover:text-[#111827] transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
